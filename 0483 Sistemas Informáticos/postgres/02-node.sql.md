
```bash
npm install pg
```


```js

import pkg from 'pg';
const { Client } = pkg;

async function getUsers() {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'erp',
        password: 'XXXX', // insertar tu contraseña aqui
        port: 5432,
    });

    try {
        // Connect to the PostgreSQL server
        await client.connect();

        // Define the DO block that calls the stored procedure
        const result = await client.query("SELECT * FROM users WHERE active=true");

        console.log(result);
        const users = result.rows;

        return users;
    } catch (err) {
        console.log('Error:', err.message);
    } finally {
        // Close the connection
        await client.end();
    }
}

// Call the function to insert a user
const users = await getUsers();
console.log(users);


```



First, create some sql
```sql
DO $$
	DECLARE _userid integer := 1;
	DECLARE user_record public.users%ROWTYPE;
BEGIN

	SELECT * INTO user_record
	FROM public.users
	WHERE userid = _userid;

	IF FOUND THEN
		RAISE NOTICE 'Values % % ', user_record.userid, user_record.firstname;
	ELSE
		RAISE NOTICE 'No values found with %', _userid;
	END IF;

END $$;


```

## Get un usuario con una funcion
Definir una funcion para devolver un users (No un SET) y con un parámetro de entrada (_userid):

```sql
CREATE OR REPLACE FUNCTION public.get_user(
	_userid integer)
    RETURNS users
    LANGUAGE 'sql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
	SELECT *
	FROM public.users
	WHERE userid = _userid
	LIMIT 1;

	
$BODY$;

ALTER FUNCTION public.get_user(integer)
    OWNER TO postgres;

```

Ejecutar la funcion en Node:
```js
import pkg from 'pg';
const { Client } = pkg;

async function getUser(userId) {

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'erp',
        password: 'postgres',
        port: 5432,
    });

    try {
        // Connect to the PostgreSQL server
        await client.connect();

        // Define the query
        const result = await client.query("SELECT * FROM get_user($1)", [userId]);

        console.log(result);
        if (result.rows.length === 0 || Object.values(result.rows[0]).every(value => value === null)) {
            console.log("No user with that id");
            return null;
        }
        else {
            const user = result.rows[0];
            return user;
        }
        
        
    } catch (err) {
        console.log('Error:', err.message);
    } finally {
        // Close the connection
        await client.end();
    }
}

// Call the function to insert a user
const user = await getUser(2);
console.log(user);
```
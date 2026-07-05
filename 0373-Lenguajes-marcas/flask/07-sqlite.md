# Ejemplo de base de datos
Realmente, aprovechariamos un framework como SQL Alchemy (https://www.sqlalchemy.org/) para trabajar con los datos con Object Relational Mapping (ORM). Sin embargo, una forma más autentica es usar SQLite o otra base de datos sin un framework.

Herramientas que vamos a usar
- db_helper.py
- g es un objeto especial de Flask que sirve para guardar datos durante una petición (request). Es global por request, no global del programa
- row_factory, ya que SQLite usar tuples y queremos trabajar con los nombres de columnas. Por ejemplo, en lugar de user[0] o user[1], accedemos con el nombre de la columna, como user["nombre"] o user["edad"]
- @app.teardown_appcontext => Es un decorador de Flask que define una función que se ejecuta cuando termina una request. En nuestro caso, para cerrar la conexion a la base de datos.

g de Flask es un objeto global:

```python
from flask import g

g.user = "Carlos"
g.db = conexion_db
```

## Como se hace
En el servidor web, incluimos la referencia del módulo de db_helper, y iniciamos una vez la funcion de init_db().

```python
import db_helper 

app = Flask(__name__)

db_helper.init_db(app)

@app.route("/users")
def users():
    db = db_helper.get_db()

    curs = db.execute("SELECT * FROM users;")
    list_users = curs.fetchall()

    return render_template("users.html", users = list_users)




@app.route("/user_form", methods=["GET", "POST"])
def user_form():
    if request.method == "POST":
        nombre = request.form.get("nombre")
        edad = request.form.get("edad")

        db = db_helper.get_db()
        db.execute(
            "INSERT INTO users (nombre, edad) VALUES (?, ?)",
            (nombre, edad)
        )
        db.commit()


        return render_template("user_form.html", nombre=nombre)

    return render_template("user_form.html")


```

En la página web, podemos acceder a los datos del recordset, no con una tupla (tuple) sino directamente con los nombres de las columnas, ya que en el db_helper, hemos configurado:

```python
g.db.row_factory = sqlite3.Row  # allows access by column name
```

Jinja ejemplo:

```html

 <h1>All Users</h1>
<ul>
{% for user in users %}
    <li>{{ user["nombre"] }} - Edad: {{ user["edad"] }}</li>
{% endfor %}
</ul>

```

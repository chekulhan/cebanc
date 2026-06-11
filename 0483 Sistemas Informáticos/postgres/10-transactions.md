# Transacciones


🧾 ¿Qué es ACID?
ACID es un acrónimo que representa cuatro propiedades fundamentales de las transacciones de bases de datos:

| Letra | Nombre       | Propósito básico                                           |
|-------|--------------|------------------------------------------------------------|
| A     | Atomicidad   | Todo o nada: la transacción completa o se revierte.        |
| C     | Consistencia | La base de datos permanece en un estado válido.            |
| I     | Aislamiento  | Las transacciones no interfieren entre sí.                 |
| D     | Durabilidad  | Una vez confirmada, la transacción no se pierde.           |


**A — Atomicidad**
Ejemplo útil: Transferencia de fondos

```sql
BEGIN;

-- Quitar dinero de la cuenta A
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;

-- Agregar dinero a la cuenta B
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;
```
🔁 Si algo falla entre esas dos líneas (por ejemplo, la segunda cuenta no existe), la transacción se revierte completamente con ROLLBACK.

✅ Resultado: O se hacen ambas operaciones o ninguna.

**C — Consistencia**
Ejemplo útil: No permitir que una cuenta quede con saldo negativo

Supón que tienes una restricción CHECK:

```sql
ALTER TABLE accounts
ADD CONSTRAINT positive_balance CHECK (balance >= 0);
Si alguien intenta transferir más dinero del que hay:
```

```sql

BEGIN;
UPDATE accounts SET balance = balance - 5000 WHERE account_id = 3;  -- solo hay 1000
UPDATE accounts SET balance = balance + 5000 WHERE account_id = 4;
COMMIT;
```
💥 Falla en la primera línea por la restricción del saldo.

✅ Resultado: La base de datos nunca entra en un estado inválido.

**I — Aislamiento**
Ejemplo útil: Dos personas transfieren dinero al mismo tiempo desde la misma cuenta

Usuario A y Usuario B hacen esto simultáneamente:

```sql

-- Usuario A
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 5;
-- Espera...
COMMIT;

-- Usuario B
BEGIN;
UPDATE accounts SET balance = balance - 200 WHERE account_id = 5;
-- Espera...
COMMIT;
```
Con aislamiento adecuado (por ejemplo, SERIALIZABLE), PostgreSQL asegura que las transacciones se ejecuten como si fueran una tras otra, no mezcladas. Si hay conflicto, una se bloquea o falla.

✅ Resultado: Se evitan errores como saldo negativo por concurrencia.

**D — Durabilidad**
Ejemplo útil: Después de confirmar una transferencia, el sistema se apaga inesperadamente

```sql
BEGIN;
UPDATE accounts SET balance = balance - 200 WHERE account_id = 6;
UPDATE accounts SET balance = balance + 200 WHERE account_id = 7;
COMMIT;
```
🔌 Incluso si se va la luz justo después del COMMIT, PostgreSQL garantiza que los cambios se guardaron en disco.

✅ Resultado: Lo que se confirma, se conserva. Siempre.

```sql

CREATE SCHEMA IF NOT EXISTS banco;

CREATE TABLE banco.cuentas (
    id_cuenta SERIAL PRIMARY KEY,
    titular VARCHAR(100) NOT NULL,
    saldo NUMERIC(12,2) NOT NULL DEFAULT 0
);

INSERT INTO banco.cuentas (titular, saldo) VALUES
('Juan Pérez', 1000.00),
('María López', 500.00);

```

Ejecutamos la transacción poco a poco
```sql
BEGIN;

-- Leer saldo actual de la cuenta origen
SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;

UPDATE banco.cuentas
SET saldo = saldo - 200
WHERE id_cuenta = 1;


UPDATE banco.cuentas
SET saldo = saldo + 200
WHERE id_cuenta = 2;


ROLLBACK;
COMMIT;

```

¿Qué ocurre si vemos el registro de desde otra consulta?
```sql
SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;
```

En PostgreSQL, el nivel de aislamiento de transacción por defecto es 'Read Committed', lo que significa que cada consulta solo ve datos ya confirmados (committed).

**MVCC**
MVCC significa Control de concurrencia con múltiples versiones. Es una técnica que utilizan sistemas de bases de datos como PostgreSQL para manejar múltiples transacciones concurrentes sin bloquear las lecturas.

Permite que varias transacciones accedan y modifiquen la base de datos al mismo tiempo, sin que se bloqueen entre ellas y sin que unas vean datos “sucios” (no confirmados) de otras.





## Ejemplo de Rollback
```sql

BEGIN;

-- Intentar debitar cuenta con saldo insuficiente
UPDATE banco.cuentas
SET saldo = saldo - 2000
WHERE id_cuenta = 1 AND saldo >= 2000;

-- Verificar si se actualizó fila
-- En caso contrario, hacer rollback
DO $$
BEGIN
  IF NOT FOUND THEN
    RAISE NOTICE 'Saldo insuficiente, cancelando transacción';
    ROLLBACK;
  END IF;
END;
$$;

-- Si se llega aquí, se confirma la transferencia (ejemplo simplificado)
COMMIT;
```

## Actividad
Vamos a ejecutar código para crear un nuevo departamento, y a la vez, un nuevo empleado que pertenece a este departamento. Llevarlo a cabo usando transacciones. Por ejemplo:


```sql
INSERT INTO scott.dept (deptno, dname, loc)
VALUES (60, 'I+D', 'BARCELONA');

INSERT INTO scott.emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
VALUES (8888, 'ANALISTA2', 'ANALISTA', 7839, CURRENT_DATE, 3500, NULL, 60);


```


EJejmplo de niveles de aislamiento
```sql
BEGIN ISOLATION LEVEL READ COMMITTED;

-- Leer saldo actual de la cuenta origen
SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;

UPDATE banco.cuentas
SET saldo = saldo - 200
WHERE id_cuenta = 1;


UPDATE banco.cuentas
SET saldo = saldo + 200
WHERE id_cuenta = 2;


ROLLBACK;
COMMIT;

```


en otra sesion, aunque la primera transaccion ha terminado, ¿que vemos?:
```sql
BEGIN ISOLATION LEVEL READ COMMITTED;
BEGIN ISOLATION LEVEL REPEATABLE READ;
BEGIN ISOLATION LEVEL SERIALIZABLE;

SELECT saldo FROM banco.cuentas WHERE id_cuenta = 1;

--UPDATE banco.cuentas SET saldo = saldo - 500 WHERE id_cuenta = 1;

ROLLBACK;

```

Ejecutar un insert en la primera transaccion
```sql
INSERT INTO banco.cuentas (titular, saldo) VALUES
('Repeatable read', 1000.00)
```

---

En PostgreSQL cuando usas procedimientos almacenados (procedures), cada llamada a un procedimiento se ejecuta dentro de una transacción implícita:

```sql
DO $$
BEGIN
    BEGIN
        CALL biblioteca.registrar_prestamo(5, 101);
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE NOTICE 'Error caught: %', SQLERRM;
            -- You could re-raise the error if you want the caller to handle it
            -- RAISE;
    END;
END
$$;



CREATE OR REPLACE PROCEDURE biblioteca.registrar_prestamo(_id_socio INT, _id_libro INT)
LANGUAGE plpgsql
AS $$
BEGIN
    BEGIN
        -- lógica del préstamo
        INSERT INTO prestamos(...) VALUES(...);

        COMMIT;  -- válido dentro de PROCEDURE
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
END;
$$;
```

#  Respuestas
```sql
DO $$
BEGIN
    BEGIN
        INSERT INTO scott.dept (deptno, dname, loc)
        VALUES (60, 'I+D', 'BARCELONA');

        INSERT INTO scott.emp (empno, ename, job, mgr, hiredate, sal, comm, deptno)
        VALUES (8888, 'ANALISTA2', 'ANALISTA', 7839, CURRENT_DATE, 3500, NULL, 60);

        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE NOTICE 'Ocurrió un error, se revierte la transacción: %', SQLERRM;
    END;
END
$$;
```


## Proyecto bancaria

Vamos a poner todo junto en un mini proyecto bancaria. Te han contratado para llevar a cabo un proyecto usando Python como interfaz. 

- Diseñar un modelo E/R para los clientes del banco. Los clientes pueden contratar cuentas de transacciones y de ahorros. No es necesario gestionar las transacciones, pero seria útil mantener el saldo en cada unos de los productos bancarias que tienen los clientes. Tomar en cuenta  como vas a gestionar el cierre de una cuenta, los tipos de cuentas, el saldo, ...

- Implantar las tablas y sus relaciones en Postgres:
1. ¿Qué restricciones podrias implantar a traves de UNIQUE, CHECK, PRIMARY KEY, tipos de datos, ...


- Vistas: Diseñar unas vistas para el uso típico de la aplicación. Los usuarios (administración) ha comentado que seria útil:
1. Mostrar los cliente VIP, con saldo más de 10,000 euros. 
2. Los clientes que no tengan nada en el saldo
Por seguridad, el numero de la cuenta deberia mostrar siempre con masked, por ejemplo: 12131*****12171

- Funciones: Diseñar unas funciones para mostrar:
1. Cuántas cuentas tiene un cliente
2. Qué saldo en total tiene un cliente. Por ejemplo, si tienen dos cuentas.


- Stored Procedures
Crear un SP para transferir fondos. Agregar los siguientes restricciones:
1. No puedes transferir desde => a tu propio cuenta
2. La cantidad tiene que ser 1 euro o más. Dada la ley bacaria, el máximo es 10,000 euros.

```sql
CREATE OR REPLACE PROCEDURE transferir_fondos(
    IN sender_account_id INTEGER,
    IN receiver_account_id INTEGER,
    IN amount NUMERIC(12,2)
)

-- Ejemplo de uso
CALL transferir_fondos(101, 202, 500.00);  -- de cliente 101 a cliente 202
...

```
- Triggers
Cada vez que se ejecuta una transacción en la tabla 'cuentas', hay que registrar la transferencia en una tabla de audit. (AFTER)

- Usuarios
Crear un usuario para acceder a la base de datos desde Python. Darle acceso a la vista y algunos objectos necesarios

- Crear una interfaz de Python, con opciones para:
1. Mostrar informes: usuarios VIP, clientes sin saldo, ...
2. Dar de alta a un cliente
3. Ejecutar una transferencia





# Actividades
Usando la herramienta de PGAdmin, crear las tablas SIN usar el código. Usar la herramienta gráfica. Usar el código para ayudarte en definir las tablas.

Recordar que hay que arancar pgadmin y postgres contenedores, asi que puedes usar el mismo docker-compose de odoo.



```sql
CREATE SCHEMA IF NOT EXISTS biblioteca;


CREATE TABLE biblioteca.socios (
    id_socio SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    correo TEXT UNIQUE NOT NULL
);

CREATE TABLE biblioteca.libros (
    id_libro SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    autor TEXT NOT NULL
);

CREATE TABLE biblioteca.prestamos (
    id_prestamo SERIAL PRIMARY KEY,
    id_socio INT REFERENCES biblioteca.socios(id_socio),
    id_libro INT REFERENCES biblioteca.libros(id_libro),
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE
);

-- Socios
INSERT INTO biblioteca.socios (nombre, correo) VALUES
('Ana López', 'ana@correo.com'),         -- Ha hecho préstamos
('Carlos Pérez', 'carlos@correo.com'),   -- Ha hecho préstamos
('Lucía Gómez', 'lucia@correo.com'),     -- Ha hecho préstamos
('Mario Díaz', 'mario@correo.com');      -- NO ha hecho ningún préstamo

-- Libros
INSERT INTO biblioteca.libros (titulo, autor) VALUES
('Cien años de soledad', 'Gabriel García Márquez'),  -- Prestado
('El túnel', 'Ernesto Sabato'),                      -- Prestado
('Don Quijote de la Mancha', 'Miguel de Cervantes'), -- Prestado
('Rayuela', 'Julio Cortázar');                       -- NO ha sido prestado

-- Préstamos
INSERT INTO biblioteca.prestamos (id_socio, id_libro, fecha_prestamo, fecha_devolucion) VALUES
(1, 1, '2024-05-01', '2024-05-10'), -- Ana -> Cien años
(1, 2, '2024-05-11', NULL),         -- Ana -> El túnel
(2, 1, '2024-05-03', '2024-05-12'), -- Carlos -> Cien años
(3, 3, '2024-05-05', NULL);         -- Lucía -> Don Quijote


```

![Funcion](../../x-assets/0491/erd.png)

---
## PARTE 1

Llevar a cabo lo siguiente:


1. Queremos saber si hay socios que aún no han realizado préstamos. Mostrar solo el socio que no ha realizado un préstamo.

2. Muestra una lista de todos los préstamos, incluyendo el nombre del socio, el título del libro y la fecha del préstamo.

3. Queremos saber qué libros han sido prestados y cuáles no.

4. Queremos saber qué libros estan actualmente prestados y a qué socio están prestados. 
    **Avanzado**: Crear una vista llamada "vw_libros_prestados" para esta consulta, dandole permisos de lectura a la aplicacion de Python para sacar los informes.

5. Añadir unos nuevos libros a la tabla libros. Escribir el código SQL.
   'Ana Lopez' ha prestado dos libros más. Escribir el código SQL para insertar su prestámo.
   Hoy, "Lucía Gómez" ha devuelto su libro	"Don Quijote de la Mancha". Escribir el código SQL.
   Confirmar que puedes llevar a cabo los comandos de DML (SELECT, INSERT, UPDATE y DELETE) sin pensar!

6.  Queremos saber cuántos libros prestados tiene cada socio actualmente. Si el valor es mayor a 3, mostrar los resultados. Si es menos de 3, no hay ningun problema, asi que no les mostramos.
    De nuevo, Crear una vista llamada "vw_libros_prestados_importantes" para esta consulta, dandole permisos de lectura a la aplicacion de Python para sacar los informes.


## PARTE 2 
**Echar un vistazo al 06-db.functions.md para ayudarte.**

1. Aprovechando una funcion, crear una consulta para mostrar el siguiente resultado. La última columna mostrará el total de libros que tiene prestado cada socio. 


![Funcion](../../x-assets/0491/librosprestados.png)

2. 
Crear este función para sacar el nombre del autor, y pasando un identidad como parametro de entrada (IN): biblioteca.get_autor_by_id(_id_libro integer). Usarlo como se ve en la imagen:

![Funcion](../../x-assets/0491/functionautores.png)

¿Podrias incluir tambien el titulo del libro?
¿Podrias crear una vista con este consulta?

3. Socio 'Ana Lopez' ha vuelto a pedir prestado 'Cien años de soledad'. Insertar este prestamo.
Ahora, queremos saber un historial de todos los libros que ha prestado a lo largo de su vida. Mostrar la lista de libros solamente, creando una funcion para ello. Pista: Usar DISTINCT para evitar duplicados.

USAR 'TABLE (id_libro INT, titulo TEXT, autor TEXT)' como return type custom.

![Funcion](../../x-assets/0491/function.returntype.png)



3. Avanzado

![Funcion](../../x-assets/0491/librosatraso.png)

## PARTE 3 Indices

Nos dice que el correo electronico de los socios tiene que ser único, ya que muchos socios estan registrando con el correo de sus amigos y familiares. Aplicar una restriccion único.

¿Lo ves?
```sql
SELECT indexname, indexdef
FROM pg_indexes
```


En la aplicacion de Python, se suele llevar a cabo los siguientes consultas. ¿Cómo mejorarías estas consultas con indices?

```sql
SELECT * FROM biblioteca.libros WHERE titulo ILIKE '%cien%';
SELECT * FROM biblioteca.libros WHERE autor = 'Gabriel García Márquez';
```

## PARTE 4 Stored Procedures


1. Validación de correo electrónico
Crear un procedimiento almacenado que inserte un nuevo socio en la tabla socios. Agregar lógica de negocio para excluir cualquier correo electrónico que no contenga el dominio @nazaret.eus. Si el correo electrónico no es válido, el procedimiento debe lanzar una excepción (o mensaje) y no insertar el nuevo socio.

PISTA:
```
IF _correo NOT ILIKE '%@nazaret.eus' THEN
```

```sql
CALL biblioteca.insert_socio_if_valid_email('Laura Martín', 'laura@nazaret.eus'); -- insertado
CALL biblioteca.insert_socio_if_valid_email('Jon Ibarra', 'jon@gmail.com'); -- no insertado
```

3. Crear un procedimiento almacenado para eliminar un libro solo si no esta protegido. El libro 'Don Quijote de la Mancha' si esta protegido. ¿Habrá varias formas de llevar este a cabo, no? Piensa en la mejora opcion a largo plazo.

4. Lógica de negocio para préstamos 

Vamos a crear un procedimiento almacenado que:

- Inserta un nuevo préstamo (prestamo) en la tabla biblioteca.prestamos.

- Pero solo si el socio NO tiene más de 1 préstamo activo (es decir, con fecha_devolucion IS NULL y la cuenta es menos de 2). Piensa como vas a contar los préstamos activos. Habrá que usar una variable (SELECT ... INTO) para contar los préstamos activos y luego decidir si se permite el nuevo préstamo o no.



**AVANZADO**

Ejecutar este codigo, poco a poco, y ver lo que esta haciendo
```sql
CREATE TYPE biblioteca.socio_input AS (
    nombre TEXT,
    correo TEXT
);


CREATE OR REPLACE PROCEDURE biblioteca.insert_multiple_socios(
    socios VARIADIC biblioteca.socio_input[]
)
LANGUAGE plpgsql
AS $$
DECLARE
    socio_record biblioteca.socio_input;
BEGIN
    FOREACH socio_record IN ARRAY socios LOOP
        BEGIN
            INSERT INTO biblioteca.socios (nombre, correo)
            VALUES (socio_record.nombre, socio_record.correo);
            RAISE NOTICE 'Insertado: % (%).', socio_record.nombre, socio_record.correo;
        EXCEPTION
            WHEN unique_violation THEN
                RAISE NOTICE 'Correo ya registrado: %', socio_record.correo;
        END;
    END LOOP;
END;
$$;


CALL biblioteca.insert_multiple_socios(
    ROW('Ane Etxeberria', 'ane@nazaret.eus'),
    ROW('Jon Olaizola', 'jon@gmail.com'),
    ROW('Irati Garmendia', 'irati@hotmail.com')
);


```

¿Podrias aplicar la misma logica para insertar multiples prestamos para un socio?


## Respuestas

```sql
-- Parte 1
-- 1.
SELECT * 
FROM biblioteca.socios s
	LEFT JOIN biblioteca.prestamos p ON p.id_socio = s.id_socio
	WHERE id_prestamo IS NULL
--2. 

SELECT s.nombre, l.titulo, p.fecha_prestamo
FROM biblioteca.prestamos p
INNER JOIN biblioteca.socios s ON p.id_socio = s.id_socio
INNER JOIN biblioteca.libros l ON p.id_libro = l.id_libro;

--3.
SELECT * 
FROM biblioteca.libros l
	LEFT JOIN biblioteca.prestamos p ON p.id_libro = l.id_libro
	WHERE id_prestamo IS NULL


--4.
SELECT p.id_prestamo, s.nombre, l.titulo, p.fecha_prestamo, p.fecha_devolucion
FROM biblioteca.prestamos p
JOIN biblioteca.socios s ON p.id_socio = s.id_socio
JOIN biblioteca.libros l ON p.id_libro = l.id_libro
WHERE p.fecha_devolucion IS NULL;

--5.
SELECT p.id_socio, COUNT (p.id_libro) AS libros_prestados
FROM biblioteca.prestamos p
WHERE fecha_devolucion IS NOT NULL
GROUP BY p.id_socio, fecha_devolucion
HAVING COUNT(p.id_libro) >= 1 



-- Part 2:

SELECT *
    FROM biblioteca.prestamos
    WHERE id_socio = 2
      AND fecha_devolucion IS NULL;

SELECT *, biblioteca.get_num_prestado(id_socio) AS libros_prestados 
FROM biblioteca.socios 


-- avanzado
SELECT l.titulo,
        p.fecha_prestamo,
        (CURRENT_DATE - p.fecha_prestamo - 7) AS dias_atraso
    FROM biblioteca.prestamos p
    JOIN biblioteca.libros l ON p.id_libro = l.id_libro
    WHERE 
       p.fecha_devolucion IS NULL
      AND CURRENT_DATE - p.fecha_prestamo > 7;




CREATE OR REPLACE PROCEDURE biblioteca.insertar_prestamo_si_permitido(
    p_id_socio INTEGER,
    p_id_libro INTEGER,
    p_fecha_prestamo DATE
)
LANGUAGE plpgsql
AS $$
DECLARE
    prestamos_activos INTEGER;
BEGIN
    -- Contar préstamos activos del socio (sin devolución)
    SELECT COUNT(*) INTO prestamos_activos
    FROM biblioteca.prestamos
    WHERE id_socio = p_id_socio AND fecha_devolucion IS NULL;

    -- Si ya tiene más de 1 préstamo activo, bloquear
    IF prestamos_activos >= 2 THEN
        RAISE EXCEPTION 'El socio % ya tiene más de un libro sin devolver.', p_id_socio;
    END IF;

    -- Insertar nuevo préstamo
    INSERT INTO biblioteca.prestamos (id_socio, id_libro, fecha_prestamo)
    VALUES (p_id_socio, p_id_libro, p_fecha_prestamo);

    RAISE NOTICE 'Préstamo registrado correctamente para el socio %', p_id_socio;
END;
$$;





CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX idx_libros_titulo_trgm ON biblioteca.libros
USING GIN (titulo gin_trgm_ops);





DO $$
DECLARE 
	_id_libro integer := 3;
	_titulo text;

BEGIN

	SELECT titulo INTO _titulo
	FROM biblioteca.libros
	WHERE id_libro = _id_libro;

	IF _titulo = 'Don Quijote de la Mancha' THEN
		RAISE EXCEPTION 'El libro % esta protegido', _id_libro;
	ELSE
		RAISE NOTICE 'Si puede borrar el libro';
	END IF;
	
	

END;
$$ LANGUAGE plpgsql;
```

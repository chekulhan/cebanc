# Escalabilidad Vertical y Horizontal

Vamos a simular un escenario donde el volumen de datos crece y comparar dos estrategias para procesarlos.

## Paso 1. Generar un conjunto de datos
Creamos un archivo con muchas líneas.

```bash
seq 1000 > numbers.txt
```

## Paso 2. Un único ordenador (sin escalabilidad)
Contamos el número de líneas del archivo.

```bash
wc -l numbers.txt
```

**Todo el trabajo lo realiza un único ordenador.**

### Escalabilidad vertical (Scale Up)
Escalabilidad vertical (Scale Up)

¿Qué ocurre si mañana el archivo es mucho más grande?

Una opción es hacer el mismo ordenador más potente:
- Más CPU.
- Más memoria RAM.
- Discos más rápidos.

El comando sigue siendo exactamente el mismo:
```bash
wc -l numbers.txt
```
La diferencia es que ahora se ejecuta en un ordenador más potente.

## Paso 3. Escalabilidad horizontal (Scale Out)
Otra opción consiste en dividir el trabajo entre varios ordenadores.

Primero dividimos el archivo en cuatro partes:

```bash
 split -n l/4 numbers.txt part_
```
*Fíjate que es un l, no un 1.*

OJO! Si usamos la imagen de Docker de BusyBox, tenemos que hacerlo manualmente, calculando las lineas.

```bash
split -l 25 numbers.txt part_
```


Imaginemos que cada archivo está almacenado en un ordenador diferente del clúster.

## Paso 4. Procesamiento distribuido
Cada nodo procesa únicamente su parte de los datos.

Ahora, cada comando de **wc** cuenta los archivos (map) y los sumamos al final (reduce)

```bash
wc -l part_aa
wc -l part_ab
...
```
Cada nodo obtiene un resultado parcial (Map).

Finalmente, sumamos los resultados (Reduce):

```bash
wc -l part_* | head -4 | awk '{sum += $1} END {print sum}'
```


## Reflexión
Si el archivo sigue creciendo, ¿qué ocurre con la escalabilidad vertical?
- Podemos seguir aumentando la CPU y la memoria, pero llega un momento en que resulta muy caro o simplemente no es posible.
¿Y con la escalabilidad horizontal?
- Podemos añadir más ordenadores al clúster y repartir el trabajo entre ellos.

# Actividad

Simular un sistema de procesamiento distribuido de datos utilizando comandos Linux.

Trabajarás con un archivo de logs que contiene peticiones realizadas a diferentes APIs de una aplicación.

Ejemplo:

```
2026-09-10 17:40:14 GET /products 200
2026-09-10 17:40:14 GET /users 200
2026-09-10 17:40:14 GET /products 404
2026-09-10 17:40:15 GET /orders 200
2026-09-10 17:40:15 GET /users 200
```

**Objetivo**: Crea un archivo independiente para cada API. Lo podrias colocar en la carpeta "plata o silver":
- products.log
- users.log
- orders.log

Una vez separados, contar las peticiones (MAP) y mostrar el resultado total de cada API y posteriormente de todos los datos (REDUCE).

Y contestar las preguntas que tiene tu equipo sobre datos distribuidos (usa la IA para comprobar):
- ¿Por qué puede ser útil dividir un archivo grande en diferentes partes?
- ¿Qué ocurriría si tuviéramos millones de registros?
- ¿Qué ventajas tendría procesar los datos en varios ordenadores?
- ¿Qué problema podría aparecer si un nodo tarda mucho más que los demás?



**SUGERENCIA: Usar Linux Alpine imagen**

```bash
docker run -it --name alpine-lab alpine:latest sh
```

AYUDA para la generacion de datos de logs
```
$  cat > generar_logs.sh << 'EOF'
```

Para generar datos de logs, usar este script de bash, con el nombre de archivo generar_logs.sh

```bash
#!/bin/sh

for i in $(seq 1 10000); do

    PAGE=$(shuf -n 1 -e /products /login /contact /about)
    STATUS=$(shuf -n 1 -e 200 200 200 200 404)

    echo "$(date '+%Y-%m-%d %H:%M:%S') GET $PAGE $STATUS"

done > access.log
```

EOF


## Pistas

chmod +x generar_logs.sh
./generar_logs.sh
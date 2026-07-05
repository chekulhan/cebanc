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
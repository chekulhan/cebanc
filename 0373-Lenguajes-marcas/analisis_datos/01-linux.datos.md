# Comandos útiles de Linux para desarrolladores 

## Manejo de carpetas
```bash
ls
ls -l
cd
cd ..
cd /
```

## Archivos
```bash
touch abc.txt
cat abc.txt
echo "Hello" > abc.txt
echo "Hello" >> abc.txt
cat > xyz.txt

cp abc.txt xyz.txt
cp abc.txt /tmp/

mv old_name.txt new_name.txt  # renombrar
rm file_to_delete.txt
```



## Buscadores

Encuentra archivos por nombre o propiedad:

```bash
find . -name "a*.txt"
find . -iname a*.txt     # case insensitive

find . -type f -name "abc.txt"     # archivo
find . -type d -name "content"     # carpeta
```


Dentro de un archivo:
```bash
grep "hello" xyz.txt
grep -i  "Hello" xyz.txt
grep -rin "hello"     # recursivo y case insensitive y numero de linea
```

## Disk Free
```bash
df
df -h
```

## Process Status
```bash
ps aux
```

a = show processes for all users
u = show user-oriented format (more details)
x = include processes without a terminal

Crear un proceso y luego matarlo:

```bash
sleep 300 &   # corriendo en el fondo
ps aux
kill pid
```

## Combinando los comandos
```bash
ps aux | grep sleep
```



# Comandos útiles de Linux para trabajar con datos

## 1️⃣ Core Unix tools (work everywhere)

🔹 head / tail — peek at data
head data.csv
tail -n 20 data.csv

🔹 wc — count rows
wc -l data.csv
(Subtract 1 if there’s a header.)

🔹 cut — extract columns (simple CSVs)
cut -d, -f1,3 data.csv
⚠️ Breaks if fields contain commas inside quotes.

ejemplo de archivo de css:
```csv
order_id,customer,product,category,quantity,total_price
1001,Ana López,Wireless Mouse,Electronics,2,39.98
1002,John Smith,USB-C Cable,Electronics,3,29.97
1003,María García,Notebook,Stationery,5,12.50
1004,Liam Brown,Water Bottle,Home,1,15.00
1005,Sofía Pérez,Desk Lamp,Home,2,48.00
1006,Noah Wilson,Backpack,Accessories,1,65.00
1007,Carlos Ruiz,Pen Set,Stationery,4,18.00
1008,Emma Johnson,Bluetooth Speaker,Electronics,1,89.99
1009,Lucas Martín,Office Chair,Furniture,1,149.00
1010,Olivia Davis,Monitor Stand,Electronics,2,74.00
```

```bash
cut -d, -f2,3 datos.csv
```

-d use a delimiter
-f1,2  - use fields


🔹 sort — sort rows
sort -t, -k3,3 data.csv
    -t,  = delimiter con ,. Sin -t el delimiter es espacio.
     -k3,3 = comenzar y terminar de sort con fields 3

🔹 uniq — find unique values
cut -d, -f2 data.csv | sort | uniq
🔹 grep — filter rows
grep "ERROR" data.csv

## 2️⃣ awk — the Swiss army knife
Print selected columns
awk -F, '{ print $1, $3 }' data.csv
Filter rows
awk -F, '$4 > 100' data.csv
Skip header
awk -F, 'NR > 1 { print }' data.csv
⚠️ Like cut, basic awk struggles with quoted commas.


| Comando | Opción delimitador | Opción campo/clave | Qué hace                                               | Ejemplo                                                                |
| ------- | ------------------ | ------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| `cut`   | `-d`               | `-f`               | Extrae campos específicos                              | `cut -d, -f2,4 datos.csv`                     |
| `sort`  | `-t`               | `-k`               | Ordena por campo o rango de campos                     | `sort -t, -k2,2 datos.csv` |
| `awk`   | Internal (FS)      | `$1`, `$2`, …      | Lenguaje completo para procesar columnas y condiciones | `awk -F, '{print $2,$4}' datos.csv` →           |



## 3️⃣ sed — quick text edits
Replace values
sed 's/old_value/new_value/g' data.csv
Delete rows
sed '/inactive/d' data.csv
Best for simple, predictable edits.

## 4️⃣ CSV-aware tools (recommended)
⭐ csvkit (Python-based, very popular)
Handles quotes, headers, encodings correctly.

Install:

pip install csvkit
Inspect columns
csvcut -n data.csv
Select columns by name
csvcut -c name,price data.csv
Filter rows
csvgrep -c status -m active data.csv
Convert to JSON
csvjson data.csv
⭐ xsv (Rust-based, extremely fast)
Install:

sudo apt install xsv
Inspect schema
xsv headers data.csv
xsv stats data.csv
Filter
xsv search ERROR data.csv
Select columns
xsv select name,price data.csv

## 5️⃣ SQL on CSV (DuckDB CLI)
duckdb
SELECT category, SUM(amount)
FROM 'data.csv'
GROUP BY category;
✔ No import
✔ Handles large files
✔ Very fast

## 6️⃣ Pipelining tools (real Linux power)
csvcut -c country,amount data.csv \
| csvgrep -c country -m US \
| xsv stats



# Actividades
## Actividad 1: Gestión de datos en una academia

Estas trabajando en una academia, y te han dado lo siguiente archivo de CSV con datos de los alumnos. No tienes acceso a Python, solo los comandos de Linux.

students_results.csv:
```csv
id,name,age,score
1,Alice,23,88.5
2,Bob,30,92.0
3,Charlie,27,79.5
4,Diana,25,85.0
5,Evan,31,90.2
6,Fiona,22,76.8
7,George,28,81.4
8,Hannah,26,89.9
9,Ian,34,73.6
10,Jenna,24,91.1
11,Kevin,29,84.3
12,Laura,27,87.0
13,Michael,35,78.9
14,Nina,21,93.5
15,Oscar,32,80.0
16,Paula,28,86.7
17,Quinn,26,82.1
18,Rachel,33,88.0
19,Sam,24,75.4
20,Tina,29,90.8
21,Umar,31,83.6
22,Vera,27,89.2
23,Will,34,77.9
```

Echar un vistazo a los datos:
- Muestra las primeras 5 líneas del archivo
- Muestra los últimos 5 registros

El equipo académico dice:
“Creemos que hay unos 25 estudiantes…”. Comprobar usando un comando de Linux.

Extraer datos para un informe rápido llamado "informe.csv". El responsable académico solo quiere ver: Nombre, Nota


El departamento de RRHH quiere saber: “¿Qué edades se repiten entre los estudiantes?”
Extrae la columna de edad => Ordénala = >Muestra solo los valores únicos
Comandos esperados: cut | sort | uniq



---

cut -d, -f2,4 s.csv > informe.txt
cut -d, -f2,4 s.csv | sort -t, -k2,2
cut -d, -f2,4 s.csv | sort -t, -k2,2 | tail -n 5
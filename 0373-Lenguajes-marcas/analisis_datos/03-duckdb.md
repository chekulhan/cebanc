
# DuckDB
Sugerencia: Tener experiencia con pandas dataframes antes de hacer DuckDB

https://github.com/andkret/MotherDuck-DuckDB-Course/blob/main/SQL_scripts%2F2_1_reading_a_csv.md

```python

url = "https://raw.githubusercontent.com/andkret/MotherDuck-DuckDB-Course/refs/heads/main/311_Elevator_Service_Requests_.csv"

con = duckdb.connect()

df = con.execute(f"""
    DESCRIBE
    SELECT * FROM read_csv_auto('{url}')
    
""").df()

print(df)

```

y luego, ingerir las primeras 10 filas con :

```sql

SELECT * FROM read_csv_auto('{url}')
LIMIT 10

```

OJO: ahora estas usando un pandas dataframe!



Formato típico: CSV => DuckDB (view, tabla) => filtrar => pandas dataframe

```python
url = "https://raw.githubusercontent.com/andkret/MotherDuck-DuckDB-Course/refs/heads/main/311_Elevator_Service_Requests_.csv"


con = duckdb.connect()

# Step 1: create a DuckDB view (lazy, doesn’t use memory yet)
con.execute(f"""
    CREATE VIEW mis_datos AS
    SELECT *
    FROM read_csv_auto('{url}')
""")

# Step 2: Use SQL to filter / group / aggregate
con.execute("""
    CREATE VIEW closed_recent AS
    SELECT *
    FROM mis_datos
    WHERE "Complaint Type" IS NOT NULL
    AND "Closed Date" IS NOT NULL
    AND EXTRACT(YEAR FROM "Closed Date") = 2024
""")

# Step 3: Only now bring a small, usable subset into pandas
df = con.execute("""
    SELECT "Complaint Type", "Created Date", "Closed Date", "Agency"
    FROM closed_recent
    LIMIT 500
""").df()

df.head()

```
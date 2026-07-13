# Docker NGINX logs

```bash
docker build -t sre-nginx .
docker run -d --name sre-nginx-container -p 8080:80 sre-nginx

docker exec -it 7c37aeb33ac0 sh
```

Por defecto, NGINX manda los resultados de logs a docker logs para su gestion:

(symlinks = simbolic links = shortcuts)

/var/log/nginx # ls -l /var/log/nginx
total 0
lrwxrwxrwx    1 nginx    nginx           11 Jun 24 21:25 access.log -> /dev/stdout
lrwxrwxrwx    1 nginx    nginx           11 Jun 24 21:25 error.log -> /dev/stderr
/var/log/nginx # 

```bash
curl http://localhost:8080
curl http://localhost:8080/hola
curl http://localhost:8080/adios
```

Copiar el archivo desde el contenedor al local:
```bash
docker cp sre-nginx-container:/var/log/nginx/access.log ./access.log
```



Crear un entorno virtual y:

```bash
python -m venv .venv
```

# Activiadad 1: SMOKE TEST

pip install requests

# Actividad 2:

pip install apache-log-parser



# Actividad 3:
Hacemos esto en Google Colab?

colab.new

```python
df['status'].dtype
df['status'] = pd.to_numeric(df['status'])
df[df["status"].isin([500])]


today = pd.Timestamp.today().date()
past_dates = df[df['time_received_datetimeobj'].dt.date <= today]


import pandas as pd

data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva'],
    'age': [25, 30, 35, 28, 22],
    'city': ['London', 'Paris', 'London', 'Berlin', 'Paris'],
    'score': [85, 92, 78, 88, 95]
}

df = pd.DataFrame(data)

df[df["age"]> 30]
df[(df["city"] == "London") & (df["age"]> 30)]
df[(df["city"] == "London") | (df["age"]> 20)]
df[df["city"].isin(["London", "Paris"])]

df.iloc[2:4, [0, 1, 3 ]]

df.loc[df["age"]>25]
df.loc[df["age"]>25, ["age", "score"]]
```



# Otras actividades de SRE
- escribir un script de Python para verificar que el archivo 'backup.sql' existe en el directorio.
    PISTA: usar module os (import os) 
    
    Podrias comprobar la fecha del archivo también

- monitorizar el disco duro
- comprobar los contenedores de Docker


# Otras actividades de Pandas

https://www.ibm.com/docs/es/scis?topic=samples-sample-csv-files

https://github.com/lawlesst/vivo-sample-data/blob/master/data/csv/people.csv



Localhost no esta expuesto en Google Colab, asi que investiga 'ngrok' para conseguir un túnel de en tiempo real de un URL público al localhost.

```js


const users = [{id:1, name:'Jon', email:'jon@email.com'},
  {id:2, name:'Maria', email:'maria@email.com'} ];

// Define a route for the root path
app.get('/api/v1/users/', (req, res) => {

  let header = "id,name,email\n";
  let data = "";
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    data += `${element.id},${element.name},${element.email}\n`;
  }

  res.set('Content-Type', 'text/plain');
  res.send(header + data);
  //res.send('Hello, World!');
});

```
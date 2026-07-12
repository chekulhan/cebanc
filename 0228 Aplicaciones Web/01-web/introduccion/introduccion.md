Vamos a usar Docker para las actividades de DNS

```
docker run
    |
    |-- 1. Docker busca la imagen en el equipo local
    |
    |-- 2. ¿Está disponible "ubuntu:latest"?
    |        |
    |        No
    |
    |-- 3. Docker descarga la imagen desde Docker Hub
    |
    |-- 4. Docker crea un nuevo contenedor usando esa imagen
    |
    |-- 5. Docker arranca el contenedor
    |
    |-- 6. Tu terminal queda conectada al shell del contenedor (bash)
```
    

docker run -it ubuntu bash
exit
docker ps -a
docker start -ai [nombre o id]



```
nslookup google.com
```


cat /etc/resolv.conf


# Domain Information Groper (y ping)

apt update
apt install dnsutils -y
apt install iputils-ping -y


dig google.com
host google.com


Primero, en Linux mirar en hosts, y luego usa un name resolver:

cat /etc/hosts
host localhost






| Status   | Meaning                      |
| -------- | ---------------------------- |
| NOERROR  | Domain resolved successfully |
| NXDOMAIN | Domain does not exist        |
| SERVFAIL | DNS server failed            |
| REFUSED  | DNS server refused the query |



¿Por qué recibo 'status: NXDOMAIN' al ejecutar estos comandos, pero el ping funciona?

```
cat /etc/hosts
```

![DNS](../images/dns1.png)

```
ping de52dec7f902
dig de52dec7f902
```

## Actividad 1
Vas a modificar el hosts archivo para que lo suiguente ocurre
ping app.local # resultado exito
dig app.local   # resultado fail



# Trace route y trace path
apt install iputils-tracepath -y
apt install traceroute -y


Más sencillo tracepath
tracepath google.com



# Vínculos importantes

| Recurso | Descripción | URL |
|----------|-------------|-----|
| Introducción a HTML (Universidad de Valencia) | Manual en formato PDF que explica los fundamentos de HTML, la estructura de una página web y las principales etiquetas del lenguaje. | https://www.uv.es/fragar/html/pdf/html01.pdf |
| DNS | Manual en formato PDF que explica los fundamentos de DNS. | https://josejuansanchez.org/daw/introduccion_dns/index.pdf |


## Respuestas
echo "172.17.0.2 app.local" >> /etc/hosts
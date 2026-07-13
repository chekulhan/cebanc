# SRE (Site Reliability Engineering)

https://sre.google/

Site Reliability Engineering (Ingeniería de Fiabilidad del Sitio) es una disciplina que aplica principios de ingeniería de software a las operaciones de infraestructura y sistemas. Su objetivo principal es crear sistemas escalables y altamente fiables.

SRE fue desarrollado por Google en 2003. En lugar de tener un equipo tradicional de operaciones de sistemas, Google contrató ingenieros de software para gestionar la infraestructura. Estos ingenieros no solo mantenían los sistemas funcionando, sino que también los mejoraban mediante automatización, métricas y buenas prácticas de desarrollo.

El concepto fue popularizado por el libro "Site Reliability Engineering" publicado por Google en 2016, que se ha convertido en una referencia clave para empresas tecnológicas en todo el mundo.

# Beneficios de SRE

Mayor fiabilidad del sistema

Mayor eficiencia operativa gracias a la automatización

Mejora continua basada en datos e incidentes reales

Cultura de colaboración entre desarrollo y operaciones (similar a DevOps)

## 📚 Términos Clave de Site Reliability Engineering (SRE)

- **SLI (Service Level Indicator)**  
  Métrica específica que mide el rendimiento o la disponibilidad de un sistema.  
  *Ejemplo: latencia, tasa de errores, disponibilidad.*

- **SLO (Service Level Objective)**  
  Objetivo cuantificable sobre un SLI.  
  *Ejemplo: “99.9% de las solicitudes deben completarse en menos de 200 ms.”*

- **SLA (Service Level Agreement)**  
  Acuerdo formal entre proveedor y cliente que define niveles mínimos de servicio.  
  *Ejemplo: Si no se cumple el SLA, el cliente recibe compensaciones.*

- **Error Budget**  
  Margen aceptable de fallos definido por el SLO.  
  *Ejemplo: Si el SLO es 99.9%, el error budget permite 0.1% de errores por mes.*

- **Toil**  
  Trabajo manual, repetitivo y sin valor duradero.  
  *Ejemplo: reiniciar servicios a mano, monitorear manualmente logs.*  
  El objetivo del SRE es automatizarlo siempre que sea posible.

- **Incident Management**  
  Proceso para detectar, responder, documentar y aprender de incidentes.  
  *Incluye monitoreo, alertas y respuesta coordinada.*

- **Blameless Postmortem**  
  Análisis posterior a un incidente enfocado en el aprendizaje, sin buscar culpables.  
  *Se documenta lo ocurrido, sus causas y cómo evitarlo en el futuro.*

## 💡 Ejemplo Práctico
Escenario:
Una empresa de streaming tiene un servicio web que debe estar disponible el 99.9% del tiempo (SLO). Esto equivale a un máximo de ~43 minutos de inactividad por mes.

SLI: Tiempo de respuesta del servidor y porcentaje de disponibilidad.

SLO: 99.9% de disponibilidad mensual.

SLA: Si el servicio baja del 99.9%, la empresa debe compensar al cliente (por ejemplo, con descuentos).

Error Budget: Si el sistema ya ha estado inactivo 30 minutos en el mes, solo quedan 13 minutos para tolerar fallos. Si se consume, se detiene el despliegue de nuevas funciones hasta mejorar la estabilidad.

Toil: Reiniciar servidores manualmente cada vez que fallan → SRE automatiza esto con scripts o herramientas de orquestación.

Postmortem: Después de una caída, se documenta qué pasó, por qué ocurrió y cómo evitarlo — sin buscar culpables.

## Otro ejemplo real: Monitor de salud con requests + SLI/SLO
Este script hace solicitudes periódicas a una URL y calcula la disponibilidad (SLI) en base a las respuestas recibidas. Si se cumple el SLO, lo indica.

```python
import requests
import time

# Configuración
url = "https://example.com"        # Cambia esto por el servicio real
check_interval = 5                 # Segundos entre chequeos
total_checks = 100                 # Número de chequeos totales
slo_target = 99.9                  # SLO de disponibilidad

# Contadores
successes = 0
failures = 0

print(f"Comenzando monitoreo de salud de {url} ({total_checks} chequeos cada {check_interval}s)...")

for i in range(total_checks):
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            successes += 1
            print(f"[{i+1}] ✅ Disponible (200 OK)")
        else:
            failures += 1
            print(f"[{i+1}] ❌ Error HTTP: {response.status_code}")
    except requests.RequestException as e:
        failures += 1
        print(f"[{i+1}] ❌ No disponible: {e}")
    
    time.sleep(check_interval)

# Resultados finales
total = successes + failures
sli = (successes / total) * 100

print("\n--- Resultado del monitoreo ---")
print(f"Total de chequeos: {total}")
print(f"Disponibles (200 OK): {successes}")
print(f"Fallidos: {failures}")
print(f"SLI (disponibilidad): {sli:.2f}%")

if sli >= slo_target:
    print("✅ SLO cumplido.")
else:
    print("❌ SLO no cumplido. Revisar estabilidad del sistema.")
```


## Actividad Práctica de SRE

```pip
pip install pymysql
pip install cryptography
```

```python
import pymysql

# Define your DB connection settings
config = {
    'host':'mysql',       # or 'localhost    # or your MySQL container hostname / IP
    'user': 'user',
    'password': 'userpass',
    'database': 'myapp',
    'port': 3306              # Default MySQL port
}

try:
    connection = pymysql.connect(**config)
    print("Connection successful!")

    # Example query
    with connection.cursor() as cursor:
        cursor.execute("SELECT VERSION()")
        version = cursor.fetchone()
        print("MySQL version:", version[0])

except pymysql.MySQLError as e:
    print("Connection failed:", e)

finally:
    if 'connection' in locals() and connection.open:
        connection.close()
        print("Connection closed.")
```


```sh
#!/bin/sh

trap "echo 'Stopping script'; exit 0" TERM INT


while true; do
    python sre.py
    sleep 30 # 300 seconds = 5 minutes
done

```

```bash
$  sh sre.sh
```

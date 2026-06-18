# Proyecto de Real Sociedad
Contexto

Acabas de incorporarte al departamento de análisis deportivo de la Real Sociedad.

El cuerpo técnico quiere utilizar los datos para tomar mejores decisiones antes de preparar la próxima temporada.

Te han proporcionado varios archivos con información sobre jugadores, partidos y rendimiento.

Tu trabajo es analizar los datos y responder:

¿Qué información útil puedes extraer para ayudar al equipo técnico?

No se te indican las preguntas exactas. Debes explorar los datos, decidir qué métricas son interesantes y justificar tus conclusiones.


Información básica de los jugadores.
```csv
player_id,name,position,age,nationality
1,Aritz,DEF,29,Spain
2,Martin,MED,25,Spain
3,Take,FWD,24,Japan
4,Brais,MED,28,Spain
5,Robin,DEF,27,France
6,Mikel,FWD,23,Spain
```

Datos de partidos.
```
match_id,date,opponent,competition,result
1,2025-08-20,Valencia,League,W
2,2025-08-27,Barcelona,League,D
3,2025-09-03,Sevilla,League,W
4,2025-09-17,Betis,Cup,L
5,2025-10-01,Villarreal,League,D
```

Estadísticas individuales por partido.
```csv
match_id,player_id,minutes,goals,assists,shots,passes,key_passes,yellow_cards
1,3,90,1,0,4,25,2,0
1,2,90,0,1,1,65,4,1
1,5,90,0,0,0,55,0,0
2,3,85,0,1,3,20,3,0
2,6,30,1,0,2,8,1,0
3,4,90,1,1,2,70,5,0
```


Tu misión

El entrenador necesita un análisis.

Puedes investigar preguntas como:

Rendimiento de jugadores
¿Quiénes son los jugadores más decisivos?
¿Quién aporta más goles y asistencias?
¿Hay jugadores que parecen infravalorados?
Comparación de posiciones
¿Qué posición genera más impacto ofensivo?
¿Los centrocampistas participan más en la creación de juego?
Análisis del equipo
¿En qué partidos tuvo mejores resultados?
¿Existe relación entre ciertas estadísticas y las victorias?
Preparación de temporada

El club quiere decidir:

qué jugadores renovar,
qué posiciones reforzar,
qué jugadores necesitan más minutos.

¿Qué recomendarías?

# Paso 1: Datos
```python
posts = [
    {"day": "Mon", "likes": 120, "comments": 10},
    {"day": "Tue", "likes": 150, "comments": 12},
    {"day": "Wed", "likes": 130, "comments": 9},
    {"day": "Thu", "likes": 300, "comments": 25},
    {"day": "Fri", "likes": 350, "comments": 30},
    {"day": "Sat", "likes": 600, "comments": 55},
    {"day": "Sun", "likes": 580, "comments": 50},
]
```

# Paso 2: Informacion
Encontrar:
- total_likes
- avg_likes
- max dia de likes


# Paso 3: CONOCIMIENTO (patrones + comprensión)
## Observaciones (Verdadero / Falso):
Los “likes” aumentan fuertemente hacia el fin de semana. → ________
El martes es el día con mayor engagement de toda la semana. → ________
Los fines de semana tienen aproximadamente el doble de interacción que los días laborables. → ________
Los comentarios disminuyen durante el fin de semana en comparación con los días laborables. → ________

## Interpretación (Verdadero / Falso):
Los usuarios están más activos durante los fines de semana. → ________
Las personas tienen más tiempo libre para interactuar con el contenido. → ________
El día de publicación no tiene ningún impacto en la visibilidad del contenido. → ________
El engagement depende únicamente del número de seguidores, no del día. → ________

# Paso 4: WISDOM (decision-making)

Usar el conocimiento para hacer / tomar decisiones :

Posibles acciones: ???


# Respuestas
```python
total_likes = sum(p["likes"] for p in posts)
avg_likes = total_likes / len(posts)

best_day = max(posts, key=lambda x: x["likes"])
```



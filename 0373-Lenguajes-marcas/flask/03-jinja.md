
Incluimos render_template

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/welcome1")
def welcome1():
    nombre = "Jon"
    return render_template("welcome.html", nombre=nombre)

@app.route("/welcome2")
def welcome2():

    user_info = {
        "nombre": "Alice",
        "edad": 30,
    }
    return render_template("welcome.html", user=user_info)

if __name__ == "__main__":
    app.run(debug=True)

```

```html
<body>
    <h1>Hello {{nombre}}</h1>
    <h2>Hello {{user.nombre}}</h2>
    <h2>Hello {{user.edad}}</h2>
</body>

```

```python

def users():
    users = [
        {"nombre": "alice", "edad": 30},
        {"nombre": "bob", "edad": 25}
    ]
    return render_template("users.html", users = users)
```

```html
<h1>All Users</h1>
<ul>
{% for user in users %}
    <li>{{ user.nombre }} - Edad: {{ user.edad }}</li>
{% endfor %}
</ul>

```


## Actividad

Trabajas en un centro de salud, donde hay que mostrar datos sobre las calorias, azúcares y cantidad de agua bebida (mostrar estos datos al priipio de la pagina web). 
Despues, en la misma página:
- mostrar una lista de comida basura: junk_foods = ["Chocolate Bar", "Potato Chips", "Soda", "Ice Cream", "Candy"], usando un  `<ul><li>`
- mostrar los mismos datos en un `<select>` de html

Ojo, se puede pasar más de un dato desde el servidor web a la página, como ves con las variables de a y b:

```python
return render_template('index.html', a=a,b=b)
```

Vamos a mejorar el `select` drop-down. Cada vez que el usuario cambia la opcion, vamos a pasar el valor del `<select>`, a través de querystring, para luego mostrar su valor en castellano. Por ejemplo, si el usuario selecciona 'Ice Cream', enviaremos los datos al servidor y el servidor hará la truducción.


Antes de empezar, fíjate en como nos da funcionalidad la funcion `encodeURIComponent()`. Usar Herramientas de Desarrollo para practicar:

```javascript
const x = "Hola Mundo";
encodeURIComponent(x);
```


```javascript
// Seleccionamos el <select>
const foodSelect = document.getElementById('food-select');

// Agregamos un listener de cambio
foodSelect.addEventListener('change', function() {
    // Llamamos a la función para actualizar la página
    updateFood(this.value);
});

// Función que actualiza la URL con GET
function updateFood(food) {
    if (food) {
        // Cambiamos la ubicación de la página con el query string
        window.location.href = '/?food=' + encodeURIComponent(food);
    }
}

// encodeURIComponent(food) → asegura que espacios y caracteres especiales no rompan la URL.
```

Te toca mostrar el valor traducido en la pantalla. Por ejemplo, 'Ice Cream' será 'Helado'


# Jina Avanzado

Jinja tiene varios funciones globales y variables.

url_for - generar url routes
```jinja
<a href="{{ url_for('index') }}">Home</a>
<img src="{{ url_for('static', filename='logo.png') }}">
```

config - acceso a Flask configuracion
```
<p>Debug mode: {{ config['DEBUG'] }}</p>
```

get_flashed_messages()
Devuleve mensajes de Python si has usado flash()
```jinja
{% for msg in get_flashed_messages() %}
    <div class="alert">{{ msg }}</div>
{% endfor %}
```

Session
```jinja
<p>Current path: {{ request.path }}</p>
<p>Logged in user: {{ session.get('username') }}</p>
```


| Category               | Examples                           | Notes                       |
| ---------------------- | ---------------------------------- | --------------------------- |
| Routing/URLs           | `url_for()`                        | For links and static files  |
| Messages               | `get_flashed_messages()`           | Show flash messages         |
| Context                | `request`, `session`, `g`          | Access request/session data |
| Config                 | `config`                           | Read app configuration      |
| Template inheritance   | `super()`                          | Call parent blocks          |
| Built-in filters/tests | `length`, `upper`, `defined`, etc. | Transform data in templates |

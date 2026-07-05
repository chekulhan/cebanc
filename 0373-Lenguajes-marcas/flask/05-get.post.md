`@app.route("/submit", methods=["GET", "POST"])` significa que la misma URL puede ser llamada tanto con GET como con POST.

**GET** → Se usa normalmente para pedir datos al servidor.
- Los parámetros se envían por la URL (?nombre=Juan&edad=20).
- Ideal para mostrar información o filtrar datos.
**POST** → Se usa para enviar datos al servidor (formularios).
- Los datos se envían dentro del cuerpo de la petición, no en la URL.
- Ideal para crear, modificar o procesar información de forma segura (contraseñas, pedidos, etc.).

Flask pone a disposición `request.method` para saber qué tipo de petición hizo el navegador.


**request.form vs request.args**
- request.form → contiene los datos enviados por POST (desde formularios).
- request.args → contiene los datos enviados por GET (query string en la URL).

**Peticiones comunes de HTTP**

| Método  | Uso principal                | Envía datos  | Idempotente |
| ------- | ---------------------------- | ------------ | ----------- |
| GET     | Leer datos                   | URL          | Sí          |
| POST    | Crear datos                  | Cuerpo       | No          |
| PUT     | Actualizar datos             | Cuerpo       | Sí          |
| PATCH   | Actualizar parcialmente      | Cuerpo       | Sí          |
| DELETE  | Eliminar datos               | URL o cuerpo | Sí          |
| HEAD    | Solo headers                 | URL          | Sí          |
| OPTIONS | Consultar métodos soportados | URL          | Sí          |

En informática y HTTP, un método es *idempotente* si hacer la misma petición varias veces produce el mismo resultado en el servidor. Por ejemplo: Pedir los datos de un usuario. Si lo haces 1 o 10 veces, solo obtienes la información; no cambia nada. En cambio, un POST no lo es, ya que crear un registro. Si lo haces varias veces, creas varias entradas.


```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/submit", methods=["GET", "POST"])
def index():
    if request.method == "POST": # handle FORM submission
        nombre = request.form.get("nombre")
        edad = request.form.get("edad")

        # Pass variables to Jinja template
        return render_template("result.html", nombre=nombre, edad=edad)

    return render_template("form.html") # handle GET 

```


```html
<!DOCTYPE html>
<html>
<body>
  <h2>Introducir tus datos</h2>


  <form action="{{ url_for('submit') }}" method="POST">
  <!--<form method="POST" action="/submit"> Es mejor usar url_for para general el URL -->
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="number" name="edad" placeholder="Edad">
    <button type="submit">Submit</button>
  </form>

</body>
</html>
```


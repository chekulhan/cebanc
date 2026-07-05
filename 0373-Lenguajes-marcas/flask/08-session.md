
# Sesion

Incluir  session, redirect, url_for from flask

Definimos un secret_key
```python
from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)

app.secret_key = "ABCD" 
```

Ahora, vamos a definir el proceso de login, dashboard y logout. Solo el dashboard estará disponible si el usuario 'bob' ha hecho el login.

```python
@app.route("/login")
def login():
    session["username"] = "bob"
    return f"Logged In {session.get('username')}"

@app.route("/dashboard")
def dashboard():
    print(session)
    username = session.get("username")
    if username:
        return f"Dashboard for user {username}"
    else:
        return redirect(url_for("login")) # protect route
        
@app.route("/logout")
def logout():
    session.pop("username", None)
    return "Logged Out"
```

## Actividad
Modificar la ruta de adivinanza. Usar cualquier número como 5 o 6. 
Posteriormente: 
- incluir este numero 'guess' de forma aleatoria.
- limitar los numeros entre 1 y 10.
- incluir una página de HTML en templates carpeta

```python
@app.route("/guess", methods=["GET", "POST"])
def guess():
    if "attempts" not in session:
        session["attempts"] = 0

    message = ""

    if request.method == "POST":
        # conseguir el valor del input guess del formulario
        # incrementar el numero de attempts (intentos)

        # si el numero es X, mostrar un mensaje indicando es correcto
        # si no, mostrar un mensaje indicando que es incorrecto
        

    return f"""
        <h2>Guess the number (1-10)</h2>
        <p>Attempts: {session["attempts"]}</p>

        <form method="POST" action="/guess">
            <input name="guess" type="number" required>
            <button>Guess</button>
        </form>

        <p>{message}</p>
    """
```
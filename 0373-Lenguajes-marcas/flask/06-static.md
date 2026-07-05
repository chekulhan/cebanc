# Static folder

Para servirHTML archivos sin JINJA, la página page.html deberia estar en la carpeta static.

```python
@app.route("/static_file")
def static_file():
    return app.send_static_file("page.html")
```

Dentro de un archivo de templates.

Use url_for('static', filename='...') to generate URLs.

```html
<!-- CSS -->
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">

<!-- JS -->
<script src="{{ url_for('static', filename='script.js') }}"></script>

<!-- Image -->
<img src="{{ url_for('static', filename='images/logo.png') }}" alt="Logo">
```


## Changing the Static Folder Name or URL

If you want to rename the folder or change the URL, you can configure it in Flask:
```python
app = Flask(__name__, static_folder='assets', static_url_path='/assets')
```
Now files in assets/ are served at /assets/....



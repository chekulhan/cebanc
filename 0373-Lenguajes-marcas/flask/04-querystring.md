

```python
from flask import Flask, render_template, request

# http://127.0.0.1:5000/querystring?nombre=Maria&x=1&y=2
# param = request.args.get('param_name', default_value)
# params = request.args.to_dict()  - conseguir todos a la vez
@app.route("/querystring")
def querystring():
    nombre = request.args.get("nombre")

```



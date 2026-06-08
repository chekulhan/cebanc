Paso 1: (celda uno)

```bash
!pip install pyftpdlib
```

Paso 2: Crear carpeta
```python
import os

storage_dir = "/content/ftp_storage"
os.makedirs(storage_dir, exist_ok=True)
```


Paso 3: Ejecutar servidor

```python
from pyftpdlib.servers import FTPServer
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.authorizers import DummyAuthorizer
import threading

# Create authorizer
authorizer = DummyAuthorizer()
authorizer.add_user("user", "12345", storage_dir, perm="elradfmw") 

# Create handler
handler = FTPHandler
handler.authorizer = authorizer

# Start server in background
def start_ftp():
    server = FTPServer(("0.0.0.0", 2121), handler)
    server.serve_forever()

threading.Thread(target=start_ftp, daemon=True).start()
print(f"FTP server running on port 2121, storing files in {storage_dir}")

```

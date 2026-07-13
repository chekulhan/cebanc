
#




.gitignore

```
__pycache__/
*.py[cod]
*.pyo
*.pyd
.env
venv/
env/
dist/
build/
```



```bash
git init
git add .
git commit -m "Initial commit"
```

```bash
git status
git log
git log --oneline
git branch
git remote -v
git diff
```

## CREAR repo en Github - manualmente

> git branch

Recently (since around 2020), Git and GitHub have changed the default initial branch name to main to be more *inclusive*.


```
git remote add origin https://github.com/XXXXXX/python-ci.git
git branch -M main
git push -u origin main
```


```
git add README.md  # un archivo
git add .   # todos los archivos cambiados
git commit -m "Agregar un readme"

git push # de local a remote   
git pull  # de remote a local


git restore --staged README.md

```


## CI Integracion Continuo


Agregar un archivo de requirements.txt al proyecto

```
# requirements.txt
pytest
```

Crear una carpeta y archivo en el repositorio que define las acciones o workflow:

```
python-ci/
├── add.py
├── test_add.py
├── requirements.txt
└── .github/
    └── workflows/
        └── python-ci.yml
```

```yml

name: Python CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt

    - name: Run tests
      run: |
        pytest


```


Usando Docker contenedores
```
jobs:
  test:
    runs-on: ubuntu-latest
    container:
      image: python:3.11
```


# ¿Qué ocurre con los errores?

```python
def add(a, b):
    return a + b -1
```


## Infraestructura como código (IaC) 
- https://cloud.google.com/docs/terraform/iac-overview?hl=es-419

```teraform
# Create a single Compute Engine instance
resource "google_compute_instance" "default" {
  name         = "flask-vm"
  machine_type = "f1-micro"
  zone         = "us-west1-a"
  tags         = ["ssh"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  # Install Flask
  metadata_startup_script = "sudo apt-get update; sudo apt-get install -yq build-essential python3-pip rsync; pip install flask"

  network_interface {
    subnetwork = google_compute_subnetwork.default.id

    access_config {
      # Include this section to give the VM an external IP address
    }
  }
}
```


AWS

```tf
provider "aws" {
  region = "us-east-1"
}

# Create key pair using your existing public key
resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = file("~/.ssh/id_rsa.pub")  # replace with your actual public key path
}

# Allow SSH and HTTP (port 3000)
resource "aws_security_group" "node_sg" {
  name        = "node-sg"
  description = "Allow SSH and HTTP"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 instance with Node.js and GitHub-deployed app
resource "aws_instance" "node_app" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.node_sg.id]

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              curl -sL https://rpm.nodesource.com/setup_16.x | bash -
              yum install -y nodejs git

              # Clone app from GitHub
              cd /home/ec2-user
              git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git nodeapp
              cd nodeapp
              npm install

              # Start the app (assumes app listens on port 3000)
              nohup node index.js > output.log 2>&1 &
              EOF

  tags = {
    Name = "NodeAppEC2"
  }
}


```



# Despliege
Vamos a crear una aplicacion de NODE disponible en formato EXE.

```js
console.log("Hola");
```

2 opciones para instalar pkg:

```bash
npm install --save-dev pkg
npm install -g pkg
```

Recordando que npx nos deja la posibilidad de ejecutar un paquete sin instalacion global.

```bash
pkg main.js --targets node18-win-x64
npx pkg main.js --targets node18-macos-x64 --output my-app
```

NOTA: Archivos dinamicos no se incluye


Fijate en "pkg"."assets" para cambiar el nombre y incluir archivos adicionales

```bash
npx pkg .
```


```json
{
  "name": "package",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "pkg": "^5.8.1"
  },
  "pkg": {
   "output": "my-app",
    "assets": [
      "images/**/*"
    ],
    "targets": [
      "node18-macos-x64",
      "node18-win-x64",
      "node18-linux-x64"
    ]
  }
}
```
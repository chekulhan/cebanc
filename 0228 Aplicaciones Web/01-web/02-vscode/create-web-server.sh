```bash
#!/bin/bash

echo "=========================================="
echo "      WEB SERVER PROJECT CREATOR"
echo "=========================================="
echo

read -p "Enter project folder name: " PROJECT

if [ -z "$PROJECT" ]; then
    echo
    echo "ERROR: You must enter a project name."
    exit 1
fi

echo
echo "Creating project: $PROJECT"
echo

# ==========================================
# Create directories
# ==========================================

mkdir -p "$PROJECT/config"
mkdir -p "$PROJECT/public"
mkdir -p "$PROJECT/logs"
mkdir -p "$PROJECT/backup"

# ==========================================
# server.conf
# ==========================================

cat > "$PROJECT/config/server.conf" <<'EOF'
# Web server configuration

server_name=web-server-01
environment=development
port=8080
protocol=http

document_root=public
log_directory=logs

max_connections=100
timeout=30

administrator=admin@empresa.local
EOF

# ==========================================
# database.conf
# ==========================================

cat > "$PROJECT/config/database.conf" <<'EOF'
# Database configuration

database_name=empresa_db
database_host=localhost
database_port=3306
database_user=webadmin

environment=development
backup_enabled=true
backup_directory=backup

connection_timeout=30
EOF

# ==========================================
# application.conf
# ==========================================

cat > "$PROJECT/config/application.conf" <<'EOF'
# Application configuration

application_name=Empresa Web
environment=development
language=es
timezone=Europe/Madrid

maintenance_mode=false
debug=true

administrator=admin@empresa.local
company=Empresa Demo
EOF

# ==========================================
# index.html
# ==========================================

cat > "$PROJECT/public/index.html" <<'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Empresa Demo</title>
</head>
<body>

<h1>Empresa Demo</h1>

<p>Bienvenido al servidor web.</p>

<p>Entorno: development</p>

<a href="about.html">Sobre nosotros</a>
<a href="contact.html">Contacto</a>

</body>
</html>
EOF

# ==========================================
# about.html
# ==========================================

cat > "$PROJECT/public/about.html" <<'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Sobre nosotros - Empresa Demo</title>
</head>
<body>

<h1>Sobre nosotros</h1>

<p>Esta es la página corporativa de Empresa Demo.</p>

<a href="index.html">Inicio</a>

</body>
</html>
EOF

# ==========================================
# contact.html
# ==========================================

cat > "$PROJECT/public/contact.html" <<'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Contacto - Empresa Demo</title>
</head>
<body>

<h1>Contacto</h1>

<p>Email: admin@empresa.local</p>
<p>Servidor: web-server-01</p>

<a href="index.html">Inicio</a>

</body>
</html>
EOF

# ==========================================
# access.log
# ==========================================

cat > "$PROJECT/logs/access.log" <<'EOF'
2026-09-11 08:01:22 INFO GET /
2026-09-11 08:01:25 INFO GET /about.html
2026-09-11 08:02:01 INFO GET /contact.html
2026-09-11 08:03:12 INFO GET /
2026-09-11 08:04:45 INFO GET /about.html
2026-09-11 08:05:32 INFO GET /contact.html
EOF

# ==========================================
# error.log
# ==========================================

cat > "$PROJECT/logs/error.log" <<'EOF'
2026-09-11 08:10:22 ERROR Connection timeout
2026-09-11 08:11:03 WARNING Configuration file modified
2026-09-11 08:12:45 ERROR Database connection failed
2026-09-11 08:13:22 INFO Service restarted
EOF

# ==========================================
# README.md
# ==========================================

cat > "$PROJECT/README.md" <<'EOF'
# Web Server

## Server

Name: web-server-01
Environment: development
Port: 8080

## Application

Name: Empresa Web
Language: Spanish

## Database

Database: empresa_db
Host: localhost
Port: 3306

## Administrator

admin@empresa.local
EOF

# ==========================================
# Show project
# ==========================================

echo
echo "=========================================="
echo "Project created successfully!"
echo "=========================================="
echo

echo "Project: $PROJECT"
echo

if command -v tree >/dev/null 2>&1; then
    tree "$PROJECT"
else
    find "$PROJECT" -print
fi

echo
echo "Opening project in VS Code..."
echo

code "$PROJECT"
```
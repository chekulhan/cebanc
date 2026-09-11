```bat
@echo off
setlocal

echo ==========================================
echo       WEB SERVER PROJECT CREATOR
echo ==========================================
echo.

set /p PROJECT=Enter project folder name: 

if "%PROJECT%"=="" (
    echo.
    echo ERROR: You must enter a project name.
    pause
    exit /b
)

echo.
echo Creating project: %PROJECT%
echo.

mkdir "%PROJECT%"
mkdir "%PROJECT%\config"
mkdir "%PROJECT%\public"
mkdir "%PROJECT%\logs"
mkdir "%PROJECT%\backup"

REM ==========================================
REM server.conf
REM ==========================================

(
echo # Web server configuration
echo.
echo server_name=web-server-01
echo environment=development
echo port=8080
echo protocol=http
echo.
echo document_root=public
echo log_directory=logs
echo.
echo max_connections=100
echo timeout=30
echo.
echo administrator=admin@empresa.local
) > "%PROJECT%\config\server.conf"


REM ==========================================
REM database.conf
REM ==========================================

(
echo # Database configuration
echo.
echo database_name=empresa_db
echo database_host=localhost
echo database_port=3306
echo database_user=webadmin
echo.
echo environment=development
echo backup_enabled=true
echo backup_directory=backup
echo.
echo connection_timeout=30
) > "%PROJECT%\config\database.conf"


REM ==========================================
REM application.conf
REM ==========================================

(
echo # Application configuration
echo.
echo application_name=Empresa Web
echo environment=development
echo language=es
echo timezone=Europe/Madrid
echo.
echo maintenance_mode=false
echo debug=true
echo.
echo administrator=admin@empresa.local
echo company=Empresa Demo
) > "%PROJECT%\config\application.conf"


REM ==========================================
REM index.html
REM ==========================================

(
echo ^<!DOCTYPE html^>
echo ^<html^>
echo ^<head^>
echo     ^<title^>Empresa Demo^</title^>
echo ^</head^>
echo ^<body^>
echo.
echo ^<h1^>Empresa Demo^</h1^>
echo.
echo ^<p^>Bienvenido al servidor web.^</p^>
echo.
echo ^<p^>Entorno: development^</p^>
echo.
echo ^<a href="about.html"^>Sobre nosotros^</a^>
echo ^<a href="contact.html"^>Contacto^</a^>
echo.
echo ^</body^>
echo ^</html^>
) > "%PROJECT%\public\index.html"


REM ==========================================
REM about.html
REM ==========================================

(
echo ^<!DOCTYPE html^>
echo ^<html^>
echo ^<head^>
echo     ^<title^>Sobre nosotros - Empresa Demo^</title^>
echo ^</head^>
echo ^<body^>
echo.
echo ^<h1^>Sobre nosotros^</h1^>
echo.
echo ^<p^>Esta es la página corporativa de Empresa Demo.^</p^>
echo.
echo ^<a href="index.html"^>Inicio^</a^>
echo.
echo ^</body^>
echo ^</html^>
) > "%PROJECT%\public\about.html"


REM ==========================================
REM contact.html
REM ==========================================

(
echo ^<!DOCTYPE html^>
echo ^<html^>
echo ^<head^>
echo     ^<title^>Contacto - Empresa Demo^</title^>
echo ^</head^>
echo ^<body^>
echo.
echo ^<h1^>Contacto^</h1^>
echo.
echo ^<p^>Email: admin@empresa.local^</p^>
echo ^<p^>Servidor: web-server-01^</p^>
echo.
echo ^<a href="index.html"^>Inicio^</a^>
echo.
echo ^</body^>
echo ^</html^>
) > "%PROJECT%\public\contact.html"


REM ==========================================
REM access.log
REM ==========================================

(
echo 2026-09-11 08:01:22 INFO GET /
echo 2026-09-11 08:01:25 INFO GET /about.html
echo 2026-09-11 08:02:01 INFO GET /contact.html
echo 2026-09-11 08:03:12 INFO GET /
echo 2026-09-11 08:04:45 INFO GET /about.html
echo 2026-09-11 08:05:32 INFO GET /contact.html
) > "%PROJECT%\logs\access.log"


REM ==========================================
REM error.log
REM ==========================================

(
echo 2026-09-11 08:10:22 ERROR Connection timeout
echo 2026-09-11 08:11:03 WARNING Configuration file modified
echo 2026-09-11 08:12:45 ERROR Database connection failed
echo 2026-09-11 08:13:22 INFO Service restarted
) > "%PROJECT%\logs\error.log"


REM ==========================================
REM README.md
REM ==========================================

(
echo # Web Server
echo.
echo ## Server
echo.
echo Name: web-server-01
echo Environment: development
echo Port: 8080
echo.
echo ## Application
echo.
echo Name: Empresa Web
echo Language: Spanish
echo.
echo ## Database
echo.
echo Database: empresa_db
echo Host: localhost
echo Port: 3306
echo.
echo ## Administrator
echo.
echo admin@empresa.local
) > "%PROJECT%\README.md"


echo.
echo ==========================================
echo Project created successfully!
echo ==========================================
echo.
echo Project: %PROJECT%
echo.
tree "%PROJECT%" /f
echo.
echo Opening project in VS Code...
echo.

code "%PROJECT%"

pause
```

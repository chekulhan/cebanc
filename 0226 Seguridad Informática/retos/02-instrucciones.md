# Reto - Seguridad Informática
Eres el analista de seguridad contratado por un cliente que reportó actividad sospechosa en su servidor web. Tu misión es revisar el fichero access.log proporcionado, identificar y documentar cualquier indicio de ataque o mala configuración.

grep es un comando de Linux/Unix cuyo nombre viene de “Global Regular Expression Print”.
En otras palabras, grep busca texto que coincida con un patrón dentro de archivos o entradas y muestra las líneas donde aparece.

- Global → busca en todo el archivo o entrada.
- Regular Expression → el patrón que defines puede ser una expresión regular (aunque también puede ser texto literal con -F). OJO - en esta actividad, no estamos usando expresiones regulares.
- Print → imprime las líneas que coinciden con el patrón.

Usando comandos de grep:
```bash
grep -i  --line-number "Hello" /var/log/app.log
grep -i -n  hello /var/log/app.log
grep -e "error" -e "warning" app.log
grep -F -e "hello" -e "goodbye" access.log
```

-i => ignorar mayúsculas y minúsculas
-n   o  --line-number  => mostrar numero de lineas 
-e => buscar múltiples palabras (or)
-F => evitar usar expresiones regulares


# Instrucciones
Usar wget para descargar el archivo y empezar a analizar. IMPORTANTE! Confirmar que has seleccionado RAW en github para descargar el archivo.

# Ataques o posibles 
1. Ha habida múltiples POSTS al mismo endpoint - un ataque 'brute force'
2. Alguien intentó acceder a un archivo importante en el sistema
3. Hubo un intento a leer un archivo de confirguración donde se suele guardar la información de variables del entorno
4. Hubo un ataque de inyeccion de SQL

## Respuestas
grep -i -n "POST /wp-login.php" access.log
grep -i -n etc/passwd access.log
grep -i -n ".env" access.log
grep -i -n -e "delete" -e "1=1" access.log
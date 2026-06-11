# Sistema de Backups en Desarrollo: Recomendaciones Generales
**Frecuencia de Backups**

En desarrollo, lo ideal es hacer backups frecuentes (diarios o incluso varias veces al día) si los datos cambian rápido o son valiosos.

También pueden ser automáticos para no depender de la memoria del equipo.

**Tipo de Backup**

Para bases pequeñas y medianas, un backup completo (full) puede estar bien.

Para bases grandes, se puede hacer un backup completo periódico y backups incrementales o diferenciales entre medio.

*Backup Incremental:*
Solo copia los cambios realizados desde el último backup (ya sea completo o incremental). Es decir, guarda solo lo que ha cambiado o añadido.

Ventajas:
- Ocupa menos espacio.
- Más rápido de realizar que un backup completo.

Desventajas:
- Para restaurar, necesitas el último backup completo y todos los incrementales posteriores.
- Si alguno de esos archivos incrementales está dañado o falta, la restauración puede fallar.

Ejemplo:
Haces un backup completo el domingo, y backups incrementales de lunes a sábado.



**Versionado**

Guardar backups con fechas y versiones (por ejemplo: backup_2025-05-16.sql) para poder restaurar estados específicos.

Esto ayuda a comparar estados y a recuperar datos ante errores introducidos por cambios.

**Almacenamiento**

Guardar backups en un lugar seguro, preferiblemente fuera del servidor de desarrollo.

Usar servicios de almacenamiento en la nube (S3, Google Drive) o discos externos para evitar pérdidas por fallos físicos.

**Automatización**

Usar scripts o herramientas que automaticen el proceso (cron jobs en Linux, tareas programadas en Windows).

Ejemplo: un script que haga un pg_dump diario y guarde el archivo con la fecha.

P**ruebas de Restauración**

Periódicamente probar que los backups se pueden restaurar correctamente, para asegurarse que no estén corruptos.

**Separación de Datos y Estructura**

A veces es útil hacer backups separados para la estructura (DDL) y para los datos (DML), especialmente si se hacen cambios frecuentes en el esquema.

**Backups en Producción vs Desarrollo**

En desarrollo, los backups son importantes, pero el ritmo puede ser más flexible.

En producción, los backups deben ser más rigurosos, con planes de recuperación definidos.

# pg_dump
```bash
pg_dump -U postgres -F p -f my_backup.backup demo
```



| Parameter       | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `-U <username>` | Specifies the PostgreSQL username to connect with.                          |
| `-F <format>`   | Sets the format of the output file.                                         |
|                 | - `p`: plain SQL                                                            |
|                 | - `c`: custom format (for `pg_restore`)                                     |
|                 | - `t`: tar archive                                                          |
| `-f <filename>` | Specifies the output file to write the backup to.                          |
| `<dbname>`      | The name of the database you want to back up.                              |
| `-h <host>`     | Specifies the server host (default is localhost).                          |
| `-p <port>`     | Specifies the server port (default is 5432).                               |
| `-v`            | Enables verbose mode (more detailed output).                               |
| `-j <jobs>`     | Number of parallel jobs (only works with `-F d`, directory format).         |
| `--schema=<schema>` | Dump only the specified schema.                                        |
| `--table=<table>`   | Dump only the specified table.                                         |
| `--no-owner`    | Do not output commands to set ownership of objects to match the original.  |



# pg_restore
```bash
pg_dump -U postgres -F p -f my_backup.backup demo

pg_restore -U postgres -d demo -F c -v backup_file.backup
```


| Parameter         | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| `-U <username>`   | Connect as this PostgreSQL user.                                          |
| `-d <dbname>`     | Restore into this database.                                               |
| `-F <format>`     | Specify the format of the backup file (usually `c` for custom).          |
| `-f <filename>`   | Output file name (used if extracting SQL scripts instead of restoring).  |
| `-v`              | Verbose mode – show detailed progress.                                  |
| `-j <jobs>`       | Number of parallel jobs for faster restore (only for directory format).  |
| `--clean`         | Drop database objects before recreating them.                            |
| `--if-exists`     | Use `DROP ... IF EXISTS` commands when cleaning objects.                 |
| `--no-owner`      | Do not restore ownership of objects (useful if restoring to a different user). |
| `--schema=<name>` | Restore only objects in the specified schema.                            |
| `--table=<name>`  | Restore only specified table.                                            |

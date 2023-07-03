+++
author = "Andrés García"
title = "Corrección Error 15517 MS SQL SERVER"
date = "2017-11-19"
description = "Corrección Error 15517 MS SQL SERVER"
slug = "FIX ERROR MS SQL SERVER"
tags = [
  "SQL",
  "SQL SERVER",
  "MS SQL SERVER",
]
categories = [
  "SQL",
]
series = [
  "SQL"
]
aliases = [
  "FIX ERROR MS SQL SERVER"
]
+++
Corrección Error 15517 MS SQL SERVER

[Original link](https://gist.github.com/andgar2010/1bc6958ea6565c009f4513fe12e1d32b)

No se puede ejecutar como la entidad de seguridad de base de datos porque la entidad 'dbo' no existe, este tipo de entidad de seguridad no se puede suplantar o el usuario no tiene permiso.

Este fragmento de código que se usa para cambiar el propietario de una base de datos en Microsoft SQL Server en particular está utilizando un procedimiento almacenado del sistema llamado `sp_changedbowner` para realizar la acción.

```sql
USE [DB Name]
GO
EXEC dbo.sp_changedbowner @loginame = N'sa', @map = false
GO
```

Aquí está el desglose de lo que hace cada línea:

1. `USE [DB Name]`: Este comando cambia la base de datos actual a la base de datos especificada. Reemplaza `[DB Name]` con el nombre de tu base de datos.

2. `GO`: En SQL Server, `GO` es un comando de lote que se utiliza para marcar el final de un lote de comandos SQL. No es realmente un comando SQL estándar, sino una instrucción para el cliente de SQL Server que indica que el cliente debería enviar el lote de instrucciones al servidor.

3. `EXEC dbo.sp_changedbowner @loginame = N'sa', @map = false`: Este comando ejecuta el procedimiento almacenado `sp_changedbowner` que cambia el propietario de la base de datos.

   - `@loginame = N'sa'`: Este parámetro especifica el inicio de sesión que se convertirá en el nuevo propietario de la base de datos. En este caso, es 'sa', que es el superusuario o administrador del sistema en SQL Server.

   - `@map = false`: Este parámetro determina si los objetos que aún son propiedad del antiguo propietario de la base de datos deben ser remapeados al nuevo propietario. Si se establece en `false`, no se realizará ningún remapeo.

4. `GO`: Otra vez, este es el comando de finalización del lote.

Entonces, en resumen, este código está cambiando el propietario de la base de datos especificada a 'sa' y no está remapeando los objetos que aún pertenecen al antiguo propietario.

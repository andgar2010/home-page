+++
author = "Andrés García"
title = "La cobertura de pruebas (Test Coverage) en Flutter"
date = "2021-09-30"
description = "Cobertura de pruebas de Flutter - Cómo instalar Linux, Mac OS, Windows y cómo usar con comandos"
slug = "La cobertura de pruebas (Test Coverage) en Flutter"
tags = [
  "Flutter",
  "LCOV",
  "Test Coverage",
  "prueba de cobertura",
]
categories = [
  "Flutter",
]
series = [
  "Flutter Test Coverage"
]
aliases = [
  "Flutter Test Coverage"
]
+++

LCOV es una herramienta gráfica para las pruebas de cobertura de GCC con gcov. Crea páginas HTML que contienen el código fuente anotado con información de cobertura mediante la recopilación de datos gcov de múltiples archivos fuente. LCOV soporta la medición de "Cobertura de líneas" y "Cobertura de funciones".

El informe de LCOV tiene el siguiente aspecto:

![image.png](https://user-images.githubusercontent.com/9597207/79640726-1ad1f680-8161-11ea-9241-d7d6fe70f630.png)

## Instalación

### Instalar en Ubuntu

```shell
sudo apt-get update -qq -y
sudo apt-get install lcov -y
```

### Instalar en Mac

```shell
brew install lcov
```

### Instalar en Windows

Se requiere:

* Chocolatey
* Perl
* LCOV

#### 1. CHOCOLATEY

1. Instalar chocolatey

    Ejecuta ``Get-ExecutionPolicy``.
    Si devuelve **Restricted**, ejecuta ```Set-ExecutionPolicy AllSigned``` o ```Set-ExecutionPolicy Bypass -Scope Process```

   * CMD (con Administrador)

    ```shell
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```

   * PowerShell (con Administrador)

    ```shell
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```

#### 2. PERL

1. Instalar Perl

    ```shell
    choco install strawberryperl
    ```

2. Comprobar el Perl instalado

    ```shell
    where perl
    ```

    Si devuelve correcta es y siguiente paso 3. LCOV:

    ```shell
    # C:\Strawberry\perl\bin\perl.exe
    ```

    Si no existe, añadir la ruta perl en las variables de entorno del sistema

    Nota: Un comando que cambia las variables de entorno de cmd sólo para la sesión actual de cmd

    ```shell
    set PATH=$PATH:C:\Strawberry\perl\bin

    echo %path%
    ```

    Si lo desea, puede añadir permanentemente una ruta a PATH con el comando setx:

    **Advertencia:**
    1. **Haga una copia de seguridad de su PATH** - SETX truncará su información de más de 1024 caracteres
    2. No llame a SETX %PATH%;xxx - *añade la ruta del sistema en la path* del usuario (SETX por defecto actualizará su ruta de usuario).
    3. No llame a SETX %PATH%;xxx /M - *añade la ruta del usuario a la ruta del sistema* (SETX ... /M actualizará su ruta del sistema.)

    ```shell
    setx /M path "%path%;C:\Strawberry\perl\bin\"

    echo %path%
    ```

#### 3. LCOV

```shell
choco install lcov
```

## Funcionamiento LCOV

### 1. Ejecutar la cobertura de las pruebas del proyecto Flutter para generar archivo de LCOV

   ```shell
   flutter test --coverage
   ```

### 2. Generar archivos de cobertura y convertirlos en HTML

#### Linux/Mac

```shell
genhtml coverage/lcov.info -o coverage/html

open coverage/html/index.html
```

#### Windows

##### **CMD or PowerShell**

```shell
perl C:\ProgramData\chocolatey\lib\lcov\tools\bin\genhtml coverage/lcov.info -o coverage/html

coverage/html/index.html # Abrir reporte cobertura de prueba HTML
```

##### **Git bash**

```bash
perl /c/ProgramData/chocolatey/lib/lcov/tools/bin/genhtml coverage/lcov.info -o coverage/html

coverage/html/index.html # Abrir reporte cobertura de prueba HTML
```

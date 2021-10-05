+++
author = "Andrés García"
title = "Flutter Test Coverage"
date = "2021-09-30"
description = "Flutter Test Coverage - How install Linux, Mac OS, Windows and How Use with Commands"
slug = "Flutter Test Coverage"
tags = [
  "Flutter",
  "LCOV",
  "Test Coverage",
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

LCOV is a graphical tool for GCC coverage testing with gcov. It creates HTML pages containing source code annotated with coverage information by collecting gcov data from multiple source files. LCOV supports "Line Coverage" and "Function Coverage" measurement.

The LCOV report looks as follows:

![image.png](https://user-images.githubusercontent.com/9597207/79640726-1ad1f680-8161-11ea-9241-d7d6fe70f630.png)

## Installation

### Install on Ubuntu

```shell
sudo apt-get update -qq -y
sudo apt-get install lcov -y
```

### Install on Mac

```shell
brew install lcov
```

### Install on Windows

Required:

* Chocolatey
* Perl
* LCOV

#### 1. CHOCOLATEY

1. Install chocolatey

    Ejecuta ``Get-ExecutionPolicy``.
    Si devuelve **Restricted**, ejecuta ```Set-ExecutionPolicy AllSigned``` o ```Set-ExecutionPolicy Bypass -Scope Process```

   * CMD (with Admin)

    ```shell
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```

   * PowerShell (with Admin)

    ```shell
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```

#### 2. PERL

1. Install Perl

    ```shell
    choco install strawberryperl
    ```

2. Check Installed Perl

    ```shell
    where perl
    ```

    If it returns correct it is and next step 3. LCOV:

    ```shell
    # C:\Strawberry\perl\bin\perl.exe
    ```

    If it does not exist, add the perl path in the system environment variables

    Note: A command that changes the cmd environment variables for the current cmd session only

    ```shell
    set PATH=$PATH:C:\Strawberry\perl\bin

    echo %path%
    ```

    If desired, you can permanently add a path to PATH with the setx command:

    **Warning:**
    1. **Back up your PATH** - SETX will truncate your information longer than 1024 characters.
    2. Do not call SETX %PATH%;xxx - *adds the system path to the user path* (SETX will default to updating your user path).
    3. Do not call SETX %PATH%;xxx /M - *adds the user path to the system path* (SETX ... /M will update your system path.).

    ```shell
    setx /M path "%path%;C:\Strawberry\perl\bin\"

    echo %path%
    ```

#### 3. LCOV

```shell
choco install lcov
```

## LCOV operation

### 1. Execute Flutter project test coverage to generate LCOV file

```shell
flutter test --coverage
```

### 2. Generate coverage files and convert them to HTML

#### Linux/Mac

```shell
genhtml coverage/lcov.info -o coverage/html

open coverage/html/index.html
```

#### Windows

##### **CMD or PowerShell**

```shell
perl C:\ProgramData\chocolatey\lib\lcov\tools\bin\genhtml coverage/lcov.info -o coverage/html

coverage/html/index.html # Open report coverage test HTML
```

##### **Git bash**

```bash
perl /c/ProgramData/chocolatey/lib/lcov/tools/bin/genhtml coverage/lcov.info -o coverage/html

coverage/html/index.html # Open report coverage test HTML
```

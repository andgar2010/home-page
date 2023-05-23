+++
author = "Andrés García"
title = "Fix Error 15517 MS SQL SERVER"
date = "2017-11-19"
description = "Fix Error 15517 MS SQL SERVER"
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
Fix Error 15517 MS SQL SERVER

[Original link](https://gist.github.com/andgar2010/1bc6958ea6565c009f4513fe12e1d32b)

This particular snippet of code that is used to change the owner of a database in Microsoft SQL Server, is using a system stored procedure called `sp_changedbowner` to perform the action.

```sql
USE [DB Name]
GO
EXEC dbo.sp_changedbowner @loginame = N'sa', @map = false
GO
```

Here's the breakdown of what each line does:

1. `USE [DB Name]`: This command switches the current database to the specified database. Replace `[DB Name]` with the name of your database.

2. `GO`: In SQL Server, `GO` is a batch command that is used to signal the end of a batch of SQL commands. It's not really a standard SQL command, but rather an instruction to the SQL Server client that the client should send the batch of commands to the server.

3. `EXEC dbo.sp_changedbowner @loginame = N'sa', @map = false`: This command executes the stored procedure `sp_changedbowner` which changes the owner of the database.

   - `@loginame = N'sa'`: This parameter specifies the login that will become the new owner of the database. In this case, it's 'sa', which is the system administrator or superuser in SQL Server.

   - `@map = false`: This parameter determines whether objects that are still owned by the old database owner should be remapped to the new owner. If it's set to `false`, no remapping will be done.

4. `GO`: Again, this is the batch termination command.

So in summary, this code is changing the owner of the specified database to 'sa' and is not remapping objects still owned by the old owner.

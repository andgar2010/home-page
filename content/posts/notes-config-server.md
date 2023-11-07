+++
author = "Andrés García"
title = "Cofiguration server"
date = "2020-02-20"
description = "Notes basic commands of nginx on Server Ubuntu"
slug = "notes-config-server"
tags = [
  "Server",
  "Backend",
  "ngnix",
  "PM2",
]
categories = [
  "Backend",
]
series = [
  ""
]
aliases = [
  ""
]
+++

## View logs ngnix

```bash
$ cat /var/log/nginx/error.log
# OR
$ sudo tail -n 20 /var/log/nginx/error.log
```

## Check configuration nginx

```bash
$ nginx -c /etc/nginx/nginx.conf -t
```

## Reset service nginx on Ubuntu

```bash
$ sudo systemctl restart nginx
```

## Reload configuration of service nginx on Ubuntu

```bash
$ sudo systemctl reload nginx
```

## Assign permissitions for user of nginx on Ubuntu

```bash
$ chown -R www-data:www-data /var/www/domain.com/subdomain/*
```

## Copy project to folder WWW public Nginx

```bash
$ cp -rL /root/projects/project1/dist/public /var/www/domain.me/subdomain/project
```

## Fix permissions for user of nginx on Ubuntu

```bash
$ chmod -R 755 */   # or 751 Fix Permissions Folder
$ chmod -R 644 */*  # Fix Permissions Files
```

## Copy project to folder WWW public Nginx and Fix permissions

```bash
$ cp -rL /root/projects/Personal/demo_project_backend/app/dist/pwa /var/www/tech-andgar.me/subdomain/pwa && chmod -R 755 */ && chmod -R 644 */*
```

## Link symbolic

```bash
$ ln -s /root/projects/Personal/demo_project_backend/app/dist/pwa/* /var/www/tech-andgar.me/subdomain/demo_cobrando

$ ln -sv /root/projects/Personal/demo_project_backend/app/dist/pwa /var/www/tech-andgar.me/subdomain
```

## PM2 Freeze list process for startup

```bash
# [PM2] Freeze a process list on reboot via:
$ pm2 save
```

## PM2 remove startup

```bash
# [PM2] Remove init script via:
$ pm2 unstartup systemd
```

## Git push

```bash
$ git push -u origin master
```

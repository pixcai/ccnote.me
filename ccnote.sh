#!/bin/bash
# -*- coding: utf-8 -*-

if [ $# -gt 0 ] && [ $1 == stop ]; then
	docker stop php7.1-fpm nginx >> /dev/null
	docker rm php7.1-fpm nginx
else
	docker run --name php7.1-fpm -d -v $(pwd):/var/www/html hub.c.163.com/library/php:7.1-fpm
	docker run --name nginx -d -p 8080:8080 --link php7.1-fpm -v $(pwd):/var/www/html -v $(pwd)/ccnote.conf:/etc/nginx/conf.d/ccnote.conf:ro --volumes-from php7.1-fpm hub.c.163.com/library/nginx:latest
fi

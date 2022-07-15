# Laboratorio de Cloud

Este ejercio está divido en varias ramas:

- [master](#master)
- [gh-pages](#gh-pages)
- [deploy](#deploy)

## master

En la rama master está el código del repository así como la configuración para el despliegue continuo y manual de las 
Github pages. 

La integración continua está configurada para que las github actions se disparen con cada push a master y el volcado de 
los archivos se hacen a la rama deploy sobreescribiendo la que da por defecto de gh-pages.

## gh-pages

Esta rama contiene los archivos estáticos resultado del despliegue manual de la aplicación.

## deploy

Esta rama contiene los archivos estáticos del depliegue automático de la aplicación.

## Implementación

- Uso de la librería de gh-pages.
- Uso de Github actions para el despliegue automatico de la aplicación.

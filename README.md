# Rick and Morty Characters API

API REST construida con Node.js y Express que consume la API pública de Rick and Morty y devuelve personajes filtrados

## Características
- Documento Index (Consulta e impresión por consola)
--------
API
- Arquitectura en capas (server, app, routes, controllers, service)
- Filtrado por status
- Transformación de nombres (espacios → guiones bajos)
- Pruebas

---

## Instalación

1. Clonar el repositorio:
git clone https://github.com/MarioAlJim/Prueba-tecnica--Rick-and-Morty.git

3. instalar dependencias

2. Ejecutar 
npm run dev  
Alternativa 
node src/server.js

## Ejecución de pruebas de index,js base
1. node mainTest.js

# Ejeución de pruebas de service del API
1. node src/tests/serviceTest.js

## Prueba de la API
1. Se incluye un archivo de postman para ejecutar solicitudes a la API
2. Se incluye un archivo de request.http que requiere "REST Client" Extension de VS Code

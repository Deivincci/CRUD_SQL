Aplicación CRUD con API REST (Node.js + PostgreSQL)
Descripción
API REST que gestiona usuarios en una base de datos PostgreSQL. Este proyecto simula una aplicación de gestión de usuarios para una empresa, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los registros de los empleados.

Características
CRUD Completo: Permite crear, listar, obtener por ID, actualizar y eliminar usuarios.
Base de Datos PostgreSQL: Los datos de los usuarios se almacenan de manera persistente en una base de datos PostgreSQL.
Rutas Protegidas: Implementación de autenticación y validación para proteger ciertas rutas.
Consultas Optimizadas: Uso eficiente de SQL para interactuar con la base de datos.
Dependencias
Este proyecto requiere las siguientes dependencias, que se instalan automáticamente cuando ejecutas el comando npm install:

express: Framework para crear el servidor y manejar las rutas.
pg: Librería para conectarse a la base de datos PostgreSQL.
dotenv: Permite gestionar variables de entorno, como las credenciales de la base de datos.
Estructura del Proyecto
node_modules: Contiene todas las dependencias instaladas automáticamente mediante npm install. No es necesario subir esta carpeta a GitHub, ya que se puede regenerar con el comando npm install.
package.json: Archivo de configuración que lista las dependencias del proyecto.
server.js: Archivo principal que configura las rutas y el servidor Express.
.env: Archivo de configuración para las variables de entorno (como las credenciales de la base de datos).
Endpoints Principales
Crear usuario

Método: POST
Ruta: /usuarios
Body: Datos del nuevo usuario (por ejemplo, nombre, email, etc.).
Listar usuarios

Método: GET
Ruta: /usuarios
Respuesta: Lista de todos los usuarios.
Ver usuario por ID

Método: GET
Ruta: /usuarios/{id}
Respuesta: Detalles del usuario con el ID especificado.
Actualizar usuario por ID

Método: PUT
Ruta: /usuarios/{id}
Body: Datos actualizados del usuario.
Eliminar usuario por ID

Método: DELETE
Ruta: /usuarios/{id}
Respuesta: Confirmación de eliminación.
Tecnologías
Node.js: Entorno de ejecución para JavaScript.
Express: Framework de Node.js para manejar rutas y solicitudes HTTP.
PostgreSQL: Sistema de gestión de bases de datos.
dotenv: Para almacenar y gestionar configuraciones sensibles como contraseñas y credenciales.
Cómo Ejecutar el Proyecto
Clona el repositorio en tu máquina local:


git clone https://github.com/Deivincci/crud-sql.git
cd mi-proyecto-crud
Instala las dependencias necesarias:


npm install (esto generara la carpeta node_modules faltante)

Crea un archivo .env en la raíz del proyecto con los siguientes valores (configuración de PostgreSQL):


DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=usuarios_db
Inicia el servidor:


node server.js

Prueba los endpoints utilizando Postman o cualquier cliente REST.




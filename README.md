
# Proyecto Integrador - RecruitingRH 🧑‍💼💻

## Introducción

Este proyecto es parte del Trabajo Integrador del Sprint de Práctica Profesional de DH. El objetivo principal es desarrollar una aplicación web que permita a los usuarios ver un catálogo de aspirantes para puestos de trabajo. La aplicación incluye un frontend desarrollado con React y un backend basado en Node.js y Express, con una base de datos MySQL.

## Tabla de contenidos 📑

1. [Tecnologías Utilizadas.](#tecnologías-utilizadas)
2. [Instalación y Configuración.](#instalación-y-configuración)
3. [Documentación vía Postman.](#documentación-vía-postman)
4. [API REST.](#api-rest)
5. [Contribución.](#contribución)
6. [Licencia.](#licencia)

## Tecnologías utilizadas 🛠️

**Backend:**
- Cors
- Dotenv
- Express Validator
- Express.js
- MySQL
- Mysql2
- Node.js
- Sequelize (ORM)
- Sequelize Cli

**Frontend:**
  - Axios
  - Bootstrap
  - Bootstrap icons
  - React
  - React DOM
  - React Form Hook
  - React Router DOM
  - SweetAlert2
  - Vite

**Herramientas Adicionales:**
  - GitHub
  - Github Issues
  - Github Projects
  - Postman
  
## Instalación y configuración 🖥️

### Prerrequisitos 📋

Asegúrate de tener instalados los siguientes programas:
- Node.js (v14+).
- MySQL.
- Git.

### Clonar el Repositorio 🔄

```bash
git clone https://github.com/nachopad/challenge_dh.git
cd challenge_dh
```

### Configuración del Backend ⚙️

1. #### Instalar dependencias

```bash
cd backend
npm install
```

2. #### Configuración de la Base de Datos
- Asegúrate de que MySQL esté en funcionamiento y que puedas acceder a la línea de comandos de MySQL o herramientas como MySQL Workbench.
- Ejecuta el script para crear la estructura de la base de datos llamado `recruitingRH.sql` que se encuentra en el repositorio del proyecto.
- Ejecuta el script para poblarla con datos de ejemplo llamado `data.sql` que se encuentra en el repositorio del proyecto.

3. #### Configuración de Variables de Entorno

Revisa el archivo `.env` en la carpeta `backend` con la siguiente estructura:
```bash
DB_PASSWORD = 'contraseña'
DB_USER = 'usuario'
DB_NAME = 'recruitingrh_db'
```
Asegúrate de reemplazar `usuario`, `contraseña` y `recruitingrh_db` con los valores que corresponden a tu configuración de base de datos.

Asegúrate de instalar la librería `dotenv` para que las variables de entorno sean reconocidas por tu aplicación (ya debería estar en el `package.json`):
```bash
npm install dotenv
```

Luego, en el archivo `app.js` de tu servidor (backend), agrega la siguiente línea al inicio del archivo:
```bash
require('dotenv').config();
```

Esto permite que las variables de entorno definidas en el archivo .env estén disponibles en todo el proyecto. Es importante destacar que esta configuración solo se debe hacer en el backend, donde se manejan contraseñas y configuraciones de la base de datos, o URLs que no queremos exponer.

Para acceder a las variables de entorno en tu código, utiliza la siguiente sintaxis:

```bash
process.env.NOMBRE_DE_LA_VARIABLE
```

Por último, solo queda acceder a estas variables de entorno en el archivo `config.js` de nuestra base de datos dentro del proyecto:

```bash
"development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

Para evitar que las configuraciones sensibles aparezcan en el repositorio, asegúrate de que el archivo `.env` esté incluido en el archivo `.gitignore`.

4. #### Iniciar el servidor
```bash
npm run dev
```

### Configuración del Frontend ⚛️

1. #### Instalar dependencias
```bash
cd frontend
npm install
```

2. #### Iniciar la aplicación
```bash
npm run dev
```

El frontend está construido como una SPA (Single Page Application) usando React. La navegación entre componentes se maneja usando React Router DOM.

## Documentación vía Postman 📬

Puedes importar la colección de Postman desde el archivo `postman_collection.json` que se encuentra en el repositorio en la carpeta `backend/docs`.

### Pasos para importar la colección en Postman

1. Abre Postman.
2. Haz clic en "`Import`" en la esquina superior izquierda.
3. Selecciona el archivo `postman_collection.json` de la carpeta `backend/docs` del repositorio.
4. Importa y explora los endpoints disponibles.

## API REST 🌐

La API REST está diseñada para proporcionar acceso a los datos de aspirantes y profesiones. Los endpoints permiten realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

### Endpoints principales

#### Aspirantes
- GET `/api/applicants/` - Obtener la lista completa de aspirantes.
- GET `/api/applicants/:id` - Obtener un aspirante por ID.
- POST `/api/applicants/register` - Crear un nuevo aspirante.
- DELETE `/api/applicants/:id` - Eliminar un aspirante.

#### profesiones
- GET `/api/professions/` - Obtener la lista completa de profesiones.

## Contribución 🤝

¡Contribuciones son bienvenidas! Sigue estos pasos para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz un commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
5. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un Pull Request.

## Licencia 📄

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE].
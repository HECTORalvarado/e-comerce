# Ecomerce
Frontend para un ecomerce de pproductos tecnologicos 
Este proyecto esta hecho con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Instalacion
`npm intall` para instalar las depencias del proyecto

## Servidor de desarrollo

Ejecuta `ng serve` para obtener un servidor de desarrollo. Navega a`http://localhost:4200/`para ver la aplicacion, esta se recargara automaticamente si haces cambios en los archivos.

## Code scaffolding

Ejecuta `ng generate component component-name` para crear un nuevo componente. Tambien puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Pruebas unitarias

Corre `ng test` para hacer pruebas unitarias via [Karma](https://karma-runner.github.io).

## Estructura del proyecto
A continuacion se presentara un arbol con la estructura del proyecto en el que se muestran los archivos y carpetas más importantes del mismo
````
├── index.html
├── app
│   ├── components
│	├── models
│	├── service
│	├── shared
│	├── app.routing.module.ts
│	├── app.component.html
│	├── app.component.scss
│	├── app.component.ts
│   └── app.module.ts
├── assets
│   └── img
├── enviroments
│   ├── enviroments.ts
└── styles.scss
````

## Conexion con la base de datos
`src/app/enviroments/enviroment.ts`,
 aquí es donde se determina la direccion de la api que se usará `HOST: 'http://localhost:8000/api'`

En la carpeta components se encuentran los componentes que renderizan las diferentes pantallas que se mostran al usuario

## Servicios

La aplicacion maneja las conexiones con el backend y entre componentes a traves de los services que se encuentran en la carpeta `service`

`products.service` es el servicio que administra los productos cuenta con dos funciones principales `findAll()` la cual permite obtener los productos y `addProduct()` que permite agregar productos.

`cartDeatail.service` Servicio que administra el carrito de compras y permite la comunicacion entre los componentes de product y cartDeail.

`user.service` Servicio que maneja los usuarios tiene y permite pedir usuarios, registrarse e iniciar session

# Models

En esta carpeta estan los modelos con el formato correspondiente con los datos que recibe la api

# Guards

Estos archivos permiten proteger las rutas, con estos se pueden hacer distincion entre los usuarios que no han inicado sesion, los administradores y los usuarios comunes y basandose en ellos el app-routing.module puede decidir a que rutas los usuarios pueden acceder en base a sus permisos
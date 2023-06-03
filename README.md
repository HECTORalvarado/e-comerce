# Ecomerce
Frontend para un ecomerce de pproductos tecnologicos 
Este proyecto esta hecho con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

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

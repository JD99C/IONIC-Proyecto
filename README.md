# Proyecto - Convocatoria 1

Este proyecto es una pequeña aplicación de un concesionario para la convocatoria 1 de la asignatura PGL. En este proyecto realiza un Get, Post, Delete, Update con 
imagenes incluidas.

## Comenzando 🏎

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

## Pre-requisitos 💻

Programas necesarios para usar el proyecto:

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman
* Android Studio

Básicamente todas estas aplicaciones te las descargas de sus respectivas paginas oficiales y las instalas normal. 

## Instalación 🔧

Para poder usar el proyecto y ver como se ejecuta antes tenemos que seguir unos pasos que lo dividire en 2 partes:

### PARTE 1 - Creación de base de datos en MySQL Workbench

Una vez te hayas instalado MySQL Server y MySQL Workbench, abre MySQL Workbench y aquí tienes tres opciones: 

Opción 1: Modifica tu conexión Local y pones estos datos:  

* Hostname: localhost
* Port: 3306
* Username: root
* Password: 1234

Opción 2: Crea una nueva conexión con los mismo datos de arriba.

Opción 3: Vas al proyecto y en la carpeta backend dentro de la carpeta config hay un fichero llamado db.config.js hay le puedes cambiar los datos para que se conecte a tu conexión y a tu base de datos correspondiente.

Una vez hecho eso dentro de la conexión nos creamos nuestra base de datos llamada "db_coches" y dentro de la base de datos creamos una tabla llamada "coches" con los datos:

* id: INT PK NN AI
* marca: VARCHAR(255)
* modelo: VARCHAR(255)
* precio: DOUBLE
+ filename: VARCHAR(255)

Al crear la tabla también se nos añadirá dos datos mas llamados: "createdAt" y "updatedAt" esos los dejamos como están. Con esto ya tendríamos nuestra base de datos.

Ahora pasamos al proyecto para poder ejecutar nuestra aplicación.

### PARTE 2 - Ejecucion de la aplicación

1º Una vez te hayas descargado el proyecto, abre la carpeta “Proyecto” con Visual Studio Code. 

2º Una vez abierto el proyecto con el Visual Studio Code, abre 2 terminales (Para abrirlo en Visual Studio Code con "CTRL+ñ" se te abre uno, para añadir el otro es pulsando en el + )

3º Ahora en uno de los dos terminales nos dirigimos a la carpeta del backend usando este código:

* cd backend/

después de entrar en la carpeta ponemos este otro código:

* npm install

y por ultimo escribimos este ultimo codigo:

* node index.js

Con esto estaremos ejecutando nuestra API

4º Ahora nos dirigimos al otro terminal y nos dirigimos a la carpeta frontend usando este código:

* cd frontend/

Y una vez dentro de la carpeta frontend usamos este otro código para poder instalarle las librerías necesarias para que nuestro programa funcione correctamente:

* npm install

Una vez termine de instalar las librerías usamos este ultimo código para ejecutar el proyecto:

* ionic serve

Con esto ya nos abriría el proyecto en nuestro navegador y podremos probarlo

FALTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA EXPLICAR COMO USARLO EN ANDROID STUDIO


## Ejecutando las pruebas ⚙️

Una vez que nuestra base de datos este lista y el proyecto abierto en nuestro navegador, ya podemos usarlo para ver como funciona:

Lo primero que ponemos ver es la ventana principal y si nos fijamos en la parte superior veremos un boton de menu. 

Primero pincharemos 

FALTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

## Enlace a POSTMAN con los accesos a los end-points 🔌

FALTAAAAAAAAAAAAAAAAAAAAAAAAAA

Aqui denjo el enlace a postman donde continene todos los accesos para poder hacer los end-point de la aplicacion sin tener que entrar en ella.

## Construido con 🛠️

_Herramientas usadas en el proyecto:_

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman
* Android Studio
 
## Autores ✒️

_Mención a todos aquellos que ayudaron a levantar el proyecto:_

* **Yo - Juan de Dios** - *Todo el proyecto* 
* **Profesor - Tiburcio** - *Documentación en PDf para poder hacer el proyecto*

## Licencia 📄

Libre de toda Licencia

## Expresiones de Gratitud 🎁

* Gracias al profesor Tiburcio por dar los PDF y ayudar en las clases de Tutoria para poder terminar el proyecto.


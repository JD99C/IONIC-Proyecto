# Proyecto - Convocatoria 1

Este proyecto es una peque帽a aplicaci贸n de un concesionario para la convocatoria 1 de la asignatura PGL. En este proyecto realiza un Get, Post, Delete, Update, con imagenes incluidas.

## Comenzando 馃弾

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

## Pre-requisitos 馃捇

Programas necesarios para usar el proyecto:

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman
* Android Studio (Por si quieres usarla en un dispositivo f铆sico)

B谩sicamente todas estas aplicaciones te las descargas de sus respectivas paginas oficiales y las instalas normal. 

## Instalaci贸n 馃敡

Para poder usar el proyecto y ver como se ejecuta antes tenemos que seguir unos pasos que lo dividire en 2 partes:

### PARTE 1 - Creaci贸n de base de datos en MySQL Workbench

Una vez te hayas instalado MySQL Server y MySQL Workbench, abre MySQL Workbench y aqu铆 tienes tres opciones: 

Opci贸n 1: Modifica tu conexi贸n Local y pones estos datos:  

* Hostname: localhost
* Port: 3306
* Username: root
* Password: 1234

Opci贸n 2: Crea una nueva conexi贸n con los mismo datos de arriba.

Opci贸n 3: Vas al proyecto y en la carpeta backend dentro de la carpeta config hay un fichero llamado db.config.js hay le puedes cambiar los datos para que se conecte a tu conexi贸n y a tu base de datos correspondiente.

Una vez hecho eso dentro de la conexi贸n nos creamos nuestra base de datos llamada "db_coches" y dentro de la base de datos creamos una tabla llamada "coches" con los datos:

* id: INT PK NN AI
* marca: VARCHAR(255)
* modelo: VARCHAR(255)
* precio: DOUBLE
+ filename: VARCHAR(255)

Al crear la tabla tambi茅n se nos a帽adir谩 dos datos mas llamados: "createdAt" y "updatedAt" esos los dejamos como est谩n. Con esto ya tendr铆amos nuestra base de datos.

Ahora pasamos al proyecto para poder ejecutar nuestra aplicaci贸n.

### PARTE 2 - Ejecucion de la aplicaci贸n

1潞 Una vez te hayas descargado el proyecto, abre la carpeta 鈥淚ONIC-Proyecto-main鈥? con Visual Studio Code. 

2潞 Una vez abierto el proyecto con el Visual Studio Code, abre 2 terminales (Para abrirlo en Visual Studio Code con "CTRL+帽" se te abre uno, para a帽adir el otro es pulsando en el + )

3潞 Ahora en uno de los dos terminales nos dirigimos a la carpeta del backend usando este c贸digo:

* cd backend/

despu茅s de entrar en la carpeta ponemos estos 2 c贸digo (tardara un poco):

* npm install
* npm install multer

y por ultimo escribimos este ultimo codigo:

* node index.js

Con esto estaremos ejecutando nuestra API

4潞 Ahora nos dirigimos al otro terminal y nos dirigimos a la carpeta frontend usando este c贸digo:

* cd frontend/

Y una vez dentro de la carpeta frontend usamos este otro c贸digo para poder instalarle las librer铆as necesarias para que nuestro programa funcione correctamente:

* npm install

Una vez termine de instalar las librer铆as usamos este ultimo c贸digo para ejecutar el proyecto:

* ionic serve

Con esto ya nos abrir铆a el proyecto en nuestro navegador y podremos probarlo


## Ejecutando las pruebas 鈿欙笍

Una vez que nuestra base de datos este lista y el proyecto abierto en nuestro navegador, ya podemos usarlo para ver como funciona:

Lo primero que podemos ver es la portada le daremos al bot贸n "Empezar" (se escuchar谩 un sonido si tenemos el volumen subido).

Ahora veremos la ventana de inicio y aqu铆 podemos ver una explicaci贸n de la aplicaci贸n y un peque帽o reproductor de una canci贸n por si quieres ponerla de fondo mientras usas la aplicaci贸n.

Si vamos al men煤 pinchando en el bot贸n "Comenzar" o en la parte superior izquierda podemos ver dintintos items para desplazarlos por la app.

En el men煤 si pinchamos en el 铆tem de "Informaci贸n del creador" nos aparecer谩 una alerta en donde pone un mensaje recordando el esfuerzo que ha hecho para que quede bien la aplicaci贸n y tambi茅n para poner una imagen en la alerta ya que es algo que quer铆a probar :D .

Ahora si pinchamos en "Insertar Nuevo Coche" se nos abrir谩 una pagina en donde podemos introducir los datos de un coche y incluso sacarle una foto y subirla a nuestra base de datos. Una vez introduzcas un coche nos llevara al listado de coches (Que tambi茅n se puede acceder desde el men煤 de inicio).

Una vez en el listado de coches nos debe de aparecer los coches que hallamos insertado ah铆 podemos hacer varias cosas:

* Buscar los coches que queramos mediante su marca mediante la barra de busqueda
* Editar el coche que queramos por si quieres ponerle un precio m谩s caro mediante el bot贸n del l谩piz en gris
* Eliminar un coche con el bot贸n de la papelera en rojo
* Insertar otro mediante el bot贸n flotante abajo a la derecha 

## Enlace a POSTMAN con los accesos a los end-points 馃攲

https://documenter.getpostman.com/view/23450722/2s8YY9w6zC

Aqui dejo el enlace a postman donde continene todos los accesos para poder hacer los end-point de la aplicacion sin tener que entrar en ella.

## Construido con 馃洜锔?

_Herramientas usadas en el proyecto:_

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman
* Android Studio
 
## Autores 鉁掞笍

_Menci贸n a todos aquellos que ayudaron a levantar el proyecto:_

* **Yo - Juan de Dios** - *Todo el proyecto* 
* **Profesor - Tiburcio** - *Documentaci贸n en PDf para poder hacer el proyecto*

## Licencia 馃搫

Libre de toda Licencia

## Expresiones de Gratitud 馃巵

* Gracias al profesor Tiburcio por dar los PDF y ayudar en las clases de Tutoria para poder terminar el proyecto.


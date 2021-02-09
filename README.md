# PruebaNodeJs
Prueba tecnica de nodeJs
_Api rest que se encarga de filtrar, mostrar y enviar reportes de datos sobre inmobiliarias añadidos con anterioridad.

## Instalación  🚀

_Para iniciar el servidor es necesario tener instalado NodeJs, lo puedes descargar a través de esta pagina:

```
https://nodejs.org/es/
```
_Luego de tener instalado node js, nos dirigimos a la carpeta madre del proyecto y ejecutamos el siguiente comando:

```
npm install
```
_Este comando instalará todas las dependencias necesarias para correr el proyecto


## Configurando nuestro entorno de desarrollo

_Para correr el servidor, es necesario tener configurado en un archivo .env las siguientes variables.

```
DB_CONNECTION= mongodb+srv://<database>:<password>@cluster0-pd5wm.mongodb.net/CoordenadasDB?retryWrites=true&w=majority
```
_databse, password son credenciales que debes tener configuradas en  https://account.mongodb.com/account

## Inicializando el servidor

_Para inicializar el servidor, despues de haber instalado todas las dependencias se debe ejecutar el siguiente comando:
```
npm run dev
```

## Ejecutar pruebas⚙️

_Para ejecutar los pruebas, se debe escribir el siguiente comando:
```
npm run test
```

## ENDPOINTS

* Para cargar la información desde el archivo csv a la base de datos, se usa el siguiente endPoint

```
    https://datafilterapp.herokuapp.com/data
```
_ el cual recibe como respuesta el siguiente json

```
    {"message":"data has been uploaded"}
```

* Para filtrar por precio minimo, precio máximo y número de habitaciones, se debe ingresar el siguiente endPoint

```
    https://datafilterapp.herokuapp.com/data/filter/:precioMin/:precioMax/:rooms
```

* Para encontrar el promedio de metro cuadrado según el area, se usa la siguiente ruta

```
    https://datafilterapp.herokuapp.com/data/zone/filter/:latitude/:length/:distance
```
_:distance es el rango en kilometros por el cual se desea filtrar

* Para descargar un reporte de una casa ubicada en una ubicación especifica se usa la siguiente ruta:

```
    https://datafilterapp.herokuapp.com/data/report/:latitude/:longitud/:typeFile
```
_:Type File, los parametros aceptados para este dato, son csv y pdf
_Tiene como respuesta un archivo que se descarga y se muestra automaticamente.

## Construido con 🛠️



* [Node Js](https://nodejs.org/es/docs/) 
* [npm](https://www.npmjs.com/) - Manejador de dependencias
* [express](https://expressjs.com/) - El framework web usado
* [super test](https://www.npmjs.com/package/supertest) - Libreria usada para realizar las pruebas
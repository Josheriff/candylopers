# Un poco de HTML

## Último disclaimer:

Es la última vez que hago un disclaimer, ya lo he hecho varias veces hasta aquí y me repito mucho.
El contenido que a continuación explico **no** **es** **exacto**, intenta ser cercano utilizando símiles.

No soy un experto en html ni pretendo ofender a quien lo sea, este poco de HTML se usará mas adelante para
poder poner los resultados de una forma mas visual y atractiva, estimulando en la medida de lo posible a quien
esté siguiendo este proyecto.

El HTML por si solo da para otro proyecto como este y como muchos mas si además lo combinas con CSS como es lo normal,
así que no debe tomarse esta brevísima introducción como una bíblia ni mucho menos, es una ínfima introducción que pretende
enseñar que no solo de estructuras de datos vive el desarrollador.

Dicho lo cual **SE** **ACEPTAN** **PRs**

## Al lío.

¿Recuerdas la última vez que hiciste un documento en word?

Podías poner títulos, subtítulos, cambiar el tamaño de la letra, el interlineado, poner imágenes, videos...

El HTML sirve para lo mismo pero HIPERVITAMINADO, se pueden hacer esas cosas y mejor, se puede hacer con código.
Se le puede añadir animaciones y vistosísimos efectos mediante CSS, y se le puede añadir interacción con Javascript.

En esta pequeña introducción te explico como hacer las cosas más básicas, pero muy muy básicas, lo suficiente para
que puedas mostrar los datos de una forma mas humana.

## Que vas a aprender

Vamos a aprender lo suficiente como para escribir un curriculum con foto en html.

Con sus títulos, subtítulos, foto, listado de capacidades, etc...

## Estructura base

```html
<!DOCTYPE html>
<html lang="en">
  <head>
   <meta charset="UTF-8">
   <title>Titulo que aparece en la barra de arriba</title>
  </head>

 <body>
 Contenido que luego explicaremos como enriquecer
 </body>

</html>

```

Esta es la estructura base de toda página html, puede sufrir algunas variaciones.

De hecho, si abres vscode, le dices que estas trabajando en un archivo html, o bien guardando el archivo vacío como `nombrearhivo.html`
, o abajo a la derecha seleccionando como formato html. podrás aprovechar los "snippets" o trozos de código que se repiten.

escribiendo `html:5` y dando a la tecla `ENTER` o `Tabulador`. Se escribirá automáticamente la estructura base.

Todo el contenido EN HTML, se encontrará dentro de la etiqueta `<body>`, es decir:

entre `<body>` y `</body>`

Ahora veremos en profundidad, la apertura y cierre de etiquetas.

## Etiquetas HTML

Hay mas de 100 etiquetas HTML, nosotros no vamos a aprenderlas todas, de hecho nosotros vamos a utilizar etiquetas semánticamente MAL.

La maquetación es compleja cuando se realiza de manera exhaustiva, no obstante nosotros la utilizaremos para apoyarnos a aprender a programar viendo resultados mas bonitos.

Las etiquetas son como cajas que encierran contenido, hay que decirle al navegador que es lo que encierra esa caja, por lo tanto.

Si queremos convertir en titulo una frase, como puede ser:

```
Mi Curriculum
```

Tendremos que decirle que ese texto está encerrado en una caja del tipo `h1`, se hace de la siguiente forma:

```html
<h1> Mi curriculum </h1>
```
Fijate para abrir ponemos simplemente el nombre de la etiqueta o tag entre los simbolos `< >` , y para cerrar, añadimos `/` detras del primer `<` . Es decir:

`<etiqueta>` ***contenido*** `</etiqueta>`

Las cajas a su vez las vamos a categorizar en dos tipos.

**Cajas bloque** -> Se "apilan" una debajo de otra, por ejemplo:

```html
<p>Hola</p> <p>Mundo</p>
```

Dará como resultado:

```
Hola
Mundo
```

**Cajas en Linea** -> Se suceden, en la misma linea:

```html
<p>
<span>Hola </span> <span>Mundo</span>
</p>
```

Dará como resultado:

```
Hola Mundo
```

Como puedes observar dentro de la etiqueta `p` he metido 2 etiquetas `span` al ser estas elementos en linea, se leerán las palabras una detras de otra.
Puede que ahora mismo no tenga mucho sentido hacer esto, pero te adelanto que haciendo esto podrías por ejemplo poner el contenido del primer `span` "Hola" de un color
y el contenido del segundo `span` "Mundo" de otro color.

## Etiquetas que no se cierran

Veremos algunas etiquetas que no necesitan apertura y cierre dado que son etiquetas de estilo.

Por ejemplo `<br>` (del ingle break line), simplemente hace un salto de linea, oséa, termina la linea y se va una mas abajo:

```html
<p>
Hola <br>
Candyloper
</p>
```

Saltará la linea detrás del hola, por lo que quedará:

```
Hola
Candyloper
```

La etiqueta `img` tampoco necesitará cerrarse pues sirve para mostrar imagenes.

## Propiedades de las etiquetas

Las etiquetas pueden tener propiedades y estilo.

Las propiedades especifican un comportamiento esperado. Por ejemplo.

La propiedad `src` especifica una ruta (la ruta de una imagen por ejemplo)

La propiedad `autoplay` especifica en las etiquetas de video si el video debe intentar autoreproducirse.

Las propiedades las iremos descubriendo según las vayamos necesitando al igual que con los estilos.

[TEMA ANTERIOR](./editor.md) || [SIGUIENTE TEMA](./etiquetas.md)

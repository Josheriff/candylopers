# Un poco de HTML

## Último disclaimer:

Es la última vez que hago un disclaimer, ya lo he hecho varias veces hasta aquí y me repito mucho.
El contenido que a continuación explico **no** **es** **exacto**, intenta ser cercano utilizando símiles.

No soy un experto en html ni pretendo ofender a quien lo sea, este poco de HTML se usará mas adelante para
poder poner los resultados de una forma mas visual y atractiva, estimulando en la medida de lo posible a quien
esté siguiendo este proyecto.

El HTML por si solo da para otro proyecto como este y como muchos mas si además lo convinas con CSS como es lo normal,
así que no debe tomarse esta brevísima introducción como una biblia ni mucho menos, es una ínfima introducción que pretende
enseñar que no solo de estructuras de datos vive el desarrollador.

Dicho lo cual **SE** **ACEPTAN** **PRs**

## Al lío.

¿Recuerdas la última vez que hiciste un documento en word?

Podías poner titulos, subtitulos, cambiar el tamaño de la letra, el interliniado, poner imagenes, videos...

El HTML sirve para lo mismo pero HIPERVITAMINADO, se pueden hacer esas cosas y mejor, se puede hacer con código.
Se le puede añadir animaciones y vistosisimos efectos mediante CSS, y se le puede añadir interacción con Javascript.

En esta pequeña introducción te explico como hacer las cosas más básicas, pero muy muy básicas, lo suficiente para
que puedas mostrar los datos de una forma mas humana.

## Que vas a aprender

Vamos a aprender lo suficiente como para escribir un curriculum con foto en html.

Con sus titulos, subtitulos, foto, listado de capacidades, etc...

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

escribiendo `html:5` y dando a la tecla `ENTER` o `Tabulador`. Se escribirá automaticamente la esturctura base.

Todo el contenido EN HTML, se encontrará dentro de la etiqueta `<body>`, es decir:

entre `<body>` y `</body>`

Ahora veremos en profundidad, la apertura y cierre de etiquetas.
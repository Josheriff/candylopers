 ## Rellenando el contenido
 
 Ya tenemos un título para nuestro curriculum, lo siguiente que se suele poner son los datos personales y la foto.
 
 Buscamos aprender simplemente a hacer el clásico CV donde la foto aparece a la derecha y los datos personales a la izquierda
 
 Despues iremos desarrollando la formación académica en un apartado enumerado y la experiencia profesional en el siguiente.
 
 ### Poniendo la Imagen
 
 Para poner la imagen utilizaremos la etiqueta `img` en cuyo interior en la propiedad `src` pondremos la dirección de la imagen.
 
 Por ejemplo:
 
 `<img src="direccion/donde/este/tu/imagen.jpg">`
 
 Observa que la etiqueta `img` no tiene etiqueta de cierre `</img>`, esto es porque el contenido que encierra se lo pasamos por el `src`
 
 ```html
<!DOCTYPE html>
<html lang="en">
  <head>
   <meta charset="UTF-8">
   <title>Titulo que aparece en la barra de arriba</title>
  </head>

 <body>
   <h1>Mi Portfolio</h1>
   <img src="direccion/donde/este/tu/imagen.jpg">
 </body>

</html>
```

### Agregando datos personales

A partir de ahora no escribiré el total del html hasta el final de la página para no repetirnos demasiado.

Debajo de la etiqueta `img` vamos a escribir texto, sirviendonos de la etiqueta `p` que como norma mnemotécnica es p de Parrafo.

```html
<p>Mi nombre y apellidos</p>
<p>Develper</p>
<p>midirecciondecorreo@candylab.com</p>
```

### Agregando educación

Anteriormente hemos usado la etiqueta `h1` que crea un título enorme,

existen hasta 6 dentro del html, cuanto mas cerca del 1 mas importante.

Usaremos `h3` para el titulo

html además nos da una manera de hacer listas, ordenadas por número o sin ordenar, simplemente mostrando un · grande al principio.

escribiremos debajo de los datos personales:

`<h3>Educación</h3>`

Y ahora haremos una lista desordenada para enumerar la formación recibida.

`li` de lista, será la etiqueta a usar, y dentro de ella especificaremos si es una lista ordenada o una lista desordenada.

Lista ordenada = `ol` (ordered list en inglés)
lista desordenada = `ul` (unordered list en inglés)

`li` cada uno de los elementos de la lista ya sea ordenada o desordenada.

Por lo tanto vamos a poner debajo del título Educación:

```html
<li>
    <ul>
        <li>Candylab Marzo 2018 a la actualidad</li>
        <li>Libros varios enriquecedores desde el 2016</li>
        <li>Master en cosas útiles con su TFM y todo desde 2014 a la actualidad</li>
    </ul>
</li>
<hr />

```

habrás visto que al final he usado una etiqueta `hr` y lo que hace es dibujar una linea horizontal para separar conceptos.

<hr />

[TEMA ANTERIOR](./primeraslineas.md) || [SIGUIENTE TEMA](./.md)
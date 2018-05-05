# Quien hace qué
El desarrollo es coger un problema grande y dividirlo en pequeños problemas más fáciles de solucionar. (Puede que defina desarrollo o programar de muchas maneras diferentes durante el proyecto, cada una cierta en su manera y ninguna única).

La distribución de tareas en el desarrollo no iba a ser menos, se divide la responsabilidad en distintas areas.

Antes de continuar me gustaría recordar la sección "disclamier" del principio y aclarar que esto son definiciones lo mas acercadas posible al mundo no técnico y como yo lo entiendo.

Podemos dividir el desarrollo web en 2 vertientes principales:

- Front-end
- Back-end

## Front-end
El front es lo que el usuario ve, es por decirlo de alguna forma el lienzo de nuestra web, pintado por las maestras manos de un desarrollador.

Además en el desarrollo front, el código queda irremediablemente expuesto, por lo que no contendrá algoritmos secretos de la super-evil corp en la que acabemos trabajando.

Por lo tanto el Front-end se encargará de mostrar los datos generados desde el servidor de una manera amigable para el usuario.

Dentro del desarrollo front-end encontramos también varias vertientes, aunque no hay consenso ni siquiera entre los propios "frontenders" o desarrolladores de front, yo los categorizo en:

- UX Designers
- Diseñadores
- Maquetadores
- Programador Front (frontend developer)

### UX Designers
Se encargan de que el programa sea facilmente usable, una máxima que me comentó un gran experto en UX es: 

> "No hacer pensar al usuario".

El diseño debe ser tan usable que el usario pueda utilizarlo instintivamente.

¿Sabes esos padres que proclaman lo inteligentes que son sus hijos porque saben poner el juego que les gusta en el Iphone?

Su hijo no es un genio, el UX Designer de Apple si.

### Diseñadores
Se encargan de llevar acabo las especificacinoes del UX Designer y además de que sea bonito.

Es decir, realizan como un boceto de como debe quedar todo, a que medidas y en diferentes tamaños de pantalla.

No es extraño que el UX Designer y el Diseñador sean la misma persona.

### Maquetadores
Se encargan de traspasar todo lo anterior a código estático.

Por código estático entendemos que no tiene ninguna lógica de programación.

Se vé mas claro con un ejemplo

El maquetador pondrá todo donde le ha dicho el diseñador y este le dice que arriba a la derecha debe aparecer el mensaje:

> Bienvenido de vuelta {{usuario}}

En la maquetación aparecerá exactamente eso.

La intención es que en la fase final, en vez de aparecer la palabra "usuario", apararecerá el nombre del usuario.

> Bienvenido de vuelta Josheriff

### Programador front
Se encarga de darle vida a la maqueta que le pasa el maquetador.

En ocasiones no tiene maqueta, por lo que necesitará tener conocimientos de todo lo anteriormente descrito.

Es bastante habitual que un programador de front acabe realizando todas las tareas, cada una de ellas con mejor o peor resultado.

Es también habitual intentar sustituir alguno de los puestos anteriores con librerías o frameworks que le dan a la página o programa un aspecto igual que a otras muchísimas que han usado la misma herramienta.

## Back-end

Es por contraposición a front-end el código que se ejecuta en el servidor, un código al que el usuario medio no tiene acceso de manera legal o fácil.

El back-end dejará abiertas "puertas" a las que el front-end podrá consultar datos, si el front-end cumple los requisitos, el backend realizará las tareas pertinentes y le devolverá los datos solicitados.

Es importante señalar, que en principio el Back-end solo recibe datos, trata estos datos y devuelve datos tratados, en ningún caso debe mostrar como está tratando esos datos.

Si el backend y el frontend trabajan en la misma empresa para un solo producto, esta sintonía debería ser perfecta y el frontend solo tendría que molestarse en mostrar los datos de una manera "bonita" como se le ha indicado en la maquetación del producto, dejando pues la lógica al backend.

Si el backend y el frontend no son de la misma empresa, o el backend está pensado para explotarse desde muchos y diferentes fronts, entonces, el backend es posible que devuelva mas datos de la cuenta, o que los devuelva en un formato no optimo para lo que se busca. En este caso, el frontend tendrá que tratar los datos antes de mostrarlos.

### Sysadmin / devops

No lo he metido dentro de backender aunque mucha gente si lo hace, como ya he dicho no hay una postura oficial al respecto.

Los sysadmin, o administradores de sistemas, son expertos en servidores y se encargan de que el código corra en las máquinas del servidor, de manera segura, estable y escalable.

Para ello son principalmente expertos en Unix, y además en herramientas diseñadas para ellos como pueda ser Docker, o ansible.

Es una tarea tan difícil de realizar como de definir Apropiadamente.
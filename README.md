# Comados Git

**Clonar un repositorio**
```
git clone {{url del repositorio git}}

```
**Instrucciones para un cambio**

Siempre que tengamos un repositorio ya clonado, lo primero antes de empezar a trabajar, es entrar en ese repositorio a traves de consola y escribir el siguiente comando:

```
git pull --rebase
```

- Una vez mofidicado los archivos que queramos tenemos que añadirlos "a la cola de sincronización"

```
git add {{ruta a archivo}}
```
Ejemplo:
```
git add README.md
git add img/imagen.jpg
```
- Motivo de la modificación:
```
git commit -m "MENSAJE QUE DIGA LO QUE HE HECHO"
```
- Una vez finalizado, mandamos los cambios "sincronizamos"
```
git push
```

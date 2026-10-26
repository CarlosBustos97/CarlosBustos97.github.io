# Portafolio de Carlos Bustos

Sitio estático con tres proyectos propios: FlowDesk, Auralis y Legajo. Auralis está en `auralis-frontend` y `auralis-backend`. Legajo está en `legajo`.

La página publicada queda en https://carlosbustos97.github.io/

## Desarrollo

```bash
npm --prefix site install
npm run dev
```

## Publicación

Cada cambio en `site` construye el sitio, lo publica en la rama `gh-pages` y deja esa misma versión construida en la raíz de `main`, que es la carpeta que GitHub Pages sirve hoy.

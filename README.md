# La Dana Relatos

Web solidaria creada tras la DANA de Valencia (noviembre de 2024) para que cualquier
persona pudiera compartir de forma anónima su historia: momentos difíciles, pérdidas,
ayuda recibida o dada. Un espacio para dar voz a quienes lo vivieron.

Proyecto sin ánimo de lucro, hecho en unos días con PHP, MySQL y JavaScript vanilla.

## Funcionalidades

- Muro de relatos con tipografía y estilo elegidos por cada autor.
- Publicación anónima (autor y localidad opcionales).
- Página individual por relato para compartir por enlace.
- SEO básico (`sitemap.xml`, `robots.txt`, canónicas y metadatos).

## Puesta en marcha

```bash
docker compose up -d
# http://localhost:8080
```

`docker-compose.yml` levanta PHP 8.1 con Apache y MySQL 5.7. La base de datos se
inicializa con `db/init.sql` (incluye entradas de ejemplo). Las credenciales de
desarrollo están en `app/php/config.php` y en el compose; cámbialas antes de
desplegar en producción.

## Estructura

```
app/
├── index.php        # muro de relatos
├── new.php          # formulario de publicación
├── info.php         # página informativa
├── php/             # endpoints JSON (listar, obtener, añadir)
├── js/              # controlador, catálogo de fuentes y estilos
└── styles/ assets/  # estilos y fondos
db/init.sql          # esquema y datos de ejemplo
```

## Licencia

Puedes usar y modificar este proyecto libremente para fines no comerciales.
Ver [LICENSE](LICENSE) (PolyForm Noncommercial 1.0.0).

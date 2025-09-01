# Sitio Web - Carmen María Martín, Psicóloga

Sitio web profesional para gabinete de psicología en Granada, construido con Jekyll y alojado en GitHub Pages.

## 🌐 Sitio en vivo

[psicologacarmenmaria.gituib.io](https://psicologacarmenmaria.github.io)

## 🛠 Tecnología

- **Jekyll** - Generador de sitios estáticos
- **GitHub Pages** - Hosting gratuito
- **Formspree** - Procesamiento de formularios
- **HTML/CSS** personalizado con diseño responsive

## 📁 Estructura del proyecto

```
/
├── _config.yml          # Configuración principal del sitio
├── _layouts/            # Plantillas HTML
│   ├── default.html    # Plantilla base
│   └── page.html       # Plantilla para páginas
├── _includes/          # Componentes reutilizables
│   ├── header.html     # Cabecera y navegación
│   └── footer.html     # Pie de página
├── assets/
│   ├── css/
│   │   └── style.css   # Estilos principales
│   └── img/            # Imágenes
├── index.md            # Página de inicio
├── sobre-mi.md         # Página "Sobre mí"
├── servicios.md        # Servicios y tarifas
├── emdr.md            # Información sobre EMDR
├── contacto.md        # Formulario de contacto
└── CNAME              # Dominio personalizado
```

## 🚀 Cómo hacer cambios

### Cambios de contenido rápidos

1. **Editar textos**: Los archivos `.md` en la raíz contienen el contenido de cada página
2. **Cambiar datos de contacto**: Editar `_config.yml`
3. **Actualizar tarifas**: Editar `servicios.md`

### Cambios de diseño

1. **Colores y tipografía**: Modificar las variables CSS en `assets/css/style.css`
2. **Estructura de páginas**: Editar los archivos en `_layouts/`
3. **Componentes comunes**: Modificar los archivos en `_includes/`

## 📝 Actualizar contenido

### Para cambiar texto en una página:

1. Abre el archivo `.md` correspondiente (ej: `sobre-mi.md`)
2. Edita el contenido manteniendo el formato Markdown/HTML
3. Haz commit y push a GitHub
4. Los cambios se verán en 2-5 minutos

### Para añadir una nueva página:

1. Crea un nuevo archivo `.md` en la raíz
2. Añade el front matter:
   ```yaml
   ---
   layout: page
   title: Título de la página
   ---
   ```
3. Añade el contenido
4. Actualiza la navegación en `_includes/header.html`

## 🖼 Gestión de imágenes

Las imágenes van en `/assets/img/`. Para optimizar la carga:

- Usa formato JPG para fotos (calidad 85%)
- Usa PNG para logos e iconos
- Tamaño recomendado para fotos: máximo 1200px de ancho
- Comprimir con herramientas como TinyPNG antes de subir

## 📧 Configuración del formulario

El formulario usa Formspree. Para configurarlo:

1. Crear cuenta en [Formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. Copiar el ID del formulario
4. Reemplazar `YOUR_FORM_ID` en `contacto.md`

## 🔧 Desarrollo local

Para probar cambios localmente antes de publicar:

```bash
# Instalar Jekyll (solo la primera vez)
gem install bundler jekyll

# Instalar dependencias
bundle install

# Ejecutar servidor local
bundle exec jekyll serve

# Ver el sitio en http://localhost:4000
```

## 📊 Mantenimiento

### Tareas mensuales recomendadas:

- [ ] Revisar y responder a mensajes del formulario
- [ ] Actualizar información de servicios si hay cambios
- [ ] Comprobar que todos los enlaces funcionan
- [ ] Revisar analytics (si se configura)

### Tareas anuales:

- [ ] Renovar dominio
- [ ] Actualizar políticas legales si hay cambios legislativos
- [ ] Revisar y actualizar fotos si es necesario

## ⚖️ Aspectos legales

El sitio incluye las páginas legales obligatorias:

- Aviso Legal (con número de colegiada)
- Política de Privacidad (RGPD/LOPD)
- Política de Cookies

**Importante**: Revisar estas políticas con un profesional legal especializado en sanidad.

## 🆘 Solución de problemas

### El sitio no se actualiza después de hacer cambios

- Esperar 5-10 minutos (GitHub Pages tiene caché)
- Verificar que el commit se hizo correctamente
- Revisar el estado en Settings > Pages

### El formulario no envía emails

- Verificar configuración en Formspree
- Comprobar que no se ha superado el límite mensual gratuito
- Revisar la carpeta de spam

### Error 404 en algunas páginas

- Verificar que el archivo `.md` existe
- Comprobar que el nombre del archivo coincide con la URL
- Revisar que no hay errores en el front matter (YAML)

## 📞 Soporte

Para ayuda técnica con el sitio, contactar con carmen97mf@gmail.com.

---

*Última actualización: Enero 2025*

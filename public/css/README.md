# assets/scss :file_folder:

En este directorio se almacenan los archivos de `SCSS` para trabajar en modo desarrollo con `npm install sass node-sass -D` para preprocesar y compilar a archivos `CSS` finales.

La estructura que tengo en este proyecto, es la siguiente:

|- assets/ :file_folder:
|--- scss/ :file_folder:
|---- config/ :file_folder:
|------ [_functions.scss](./config/_functions.scss)
|------ [_variables.scss](./config/_variables.scss)
|------ [_mixins.scss](./config/_mixins.scss)
|---- themes/ :file_folder:
|------ [_layout.scss](./theme/_layout.scss)
|---- [_config.scss](./_config.scss)
|---- [_normalize.scss](./_normalize.scss)
|---- [README.md](./README.md)
|---- [styles.scss](./styles.scss) => Main styles files which compile to final `CSS`


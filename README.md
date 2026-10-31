# Estudio de Carmen (versión instalable)

Planificador de 2º de Arquitectura (UFV): calendario y horario de 2ºB, exámenes, tareas, entregas, prácticas sociales (con su propio calendario y registro de horas), correcciones, asignaturas con sus guías docentes, objetivos, autoescuela, notas, referencias y herramientas de estudio.

## Subirla gratis a GitHub Pages (unos 3 minutos)
1. Entra en github.com con tu cuenta y pulsa **New repository**. Ponle un nombre que no diga quién eres (por ejemplo `estudio`), márcalo **Public** y créalo.
2. Pulsa **uploading an existing file**, arrastra **todo el contenido** de esta carpeta (no la carpeta en sí) y pulsa **Commit changes**.
3. Ve a **Settings → Pages**, en *Branch* elige `main` y `/ (root)` y pulsa **Save**. En un minuto estará en `https://TU-USUARIO.github.io/estudio/`.
4. Ábrela en el móvil:
   - iPhone (Safari): Compartir → **Añadir a pantalla de inicio**.
   - Android (Chrome): menú ⋮ → **Instalar aplicación**.

## Tener lo mismo en el ordenador y en el móvil (sincronización)
Cada dispositivo guarda sus propios datos. Para que se pongan al día solos, la app los guarda **cifrados** en un repositorio **privado** de GitHub:

1. Crea un repositorio **privado** (por ejemplo `enlacecarmen-datos`) marcando **Add a README file**.
2. Crea un token en **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**:
   - *Repository access*: **Only select repositories** → el repositorio de datos.
   - *Permissions → Repository permissions → Contents*: **Read and write**.
   - *Expiration*: la más larga que te deje.
3. En la app del ordenador: **Ajustes → Sincronizar → Conectar con GitHub**, pega el token y elige una contraseña.
4. En el móvil: escanea el código QR que aparece en **Vincular otro dispositivo** y escribe la misma contraseña. En iPhone, si usas la app desde la pantalla de inicio, vincúlala desde dentro de ella (**Ajustes → Sincronizar → Escanear el código QR**), porque guarda sus datos aparte de Safari.

Cómo funciona: los datos se cifran en el propio dispositivo con AES-GCM de 256 bits y una clave sacada de tu contraseña (PBKDF2-SHA256, 600 000 vueltas). La contraseña no se guarda en ningún sitio y GitHub solo ve datos cifrados. Si cambias lo mismo en dos sitios, se queda el cambio más reciente; si no hay internet, los cambios se suben cuando vuelve.

## Privacidad
- Este repositorio (el de la web) es público, pero solo lleva el programa, el horario y los exámenes publicados por la UFV y el nombre de pila. No lleva apellidos.
- Lo que apuntes (tareas, notas, fotos, autoescuela…) se guarda en tu móvil u ordenador y, si activas la sincronización, cifrado en tu repositorio **privado** de datos. Nunca en este.
- La página pide a los buscadores que no la indexen.
- También puedes pasar los datos a mano: **Ajustes → Copia de seguridad → Descargar copia** y, en el otro, **Restaurar**.

## Actualizar
Sustituye `index.html` y `sw.js` (y el resto si cambian) por los nuevos. Tus datos no se tocan.

También puedes abrir `index.html` directamente con Chrome sin subir nada: funciona, aunque sin instalar ni avisos.

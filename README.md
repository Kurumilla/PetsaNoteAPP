# Colección de Notas

Este proyecto es una aplicación para gestionar y visualizar notas. Los usuarios pueden crear, editar y ordenar las notas de acuerdo con diferentes criterios. La aplicación también soporta un modo oscuro que se puede activar y desactivar.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

### Comando:

1. **Clonar el repositorio**:
   - `git clone` descarga el proyecto a tu máquina local.
   
2. **Instalar dependencias de Ruby**:
   - `bundle install` instala todas las gemas necesarias, como Rails y otras dependencias.

3. **Instalar dependencias de Node.js**:
   - `yarn install` instala las dependencias de frontend (por ejemplo, las dependencias de JavaScript si estás usando Webpacker).

4. **Configurar la base de datos**:
   - `rails db:create` crea la base de datos.
   - `rails db:migrate` ejecuta las migraciones para crear las tablas necesarias.
   - `rails db:seed` llena la base de datos con datos de prueba (en tu caso, 200 notas).

5. **Iniciar el servidor Rails**:
   - `rails server` inicia el servidor local para que puedas ver la aplicación en tu navegador.

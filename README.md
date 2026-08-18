# Práctica Diagnóstico

**Alumno:** Sanabria Leandro
**Materia:** Taller de Programación II

---

# Investigación: dotenv y variables de entorno

## ¿Qué es dotenv?

dotenv es un paquete de Node.js que carga variables de entorno desde un archivo `.env` hacia el objeto `process.env`. Su propósito es separar los datos de configuración (como las credenciales de la base de datos, el puerto o el host) del código fuente. De esta manera, la información sensible no queda escrita directamente en el código ("hardcodeada") ni se sube a repositorios, lo que mejora la seguridad y facilita cambiar la configuración sin modificar el programa.

## ¿Cómo se instala?

Se instala con npm desde la terminal, parado en la raíz del proyecto:
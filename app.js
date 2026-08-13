// Importaciones de dependencias
import express from 'express';
import morgan from 'morgan';

// Importaciones internas
import { conectarDB } from './src/config/database.js';
import userRoutes from './src/routes/user.routes.js';
import taskRoutes from './src/routes/task.routes.js';

// Conexión a la base de datos (y creación de tablas con sync)
conectarDB();

// Inicialización de la app
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());   // permite leer JSON del body de las peticiones
app.use(morgan('dev'));    // muestra cada petición en la consola

// Rutas (montadas bajo /api)
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

// Inicializar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
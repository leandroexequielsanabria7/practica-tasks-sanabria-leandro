import { Sequelize } from 'sequelize';
import { env } from './env.js';

// Ahora los valores vienen del .env a través de env.js (antes estaban hardcodeados)
export const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
    logging: false
});

export const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion a base de datos exitosa');

        await sequelize.sync();
        console.log('Tablas sincronizadas');
    } catch (error) {
        console.error('Fallo al conectar a la base de datos:', error);
    }
};
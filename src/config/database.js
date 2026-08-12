import { Sequelize } from 'sequelize';

// Instancia de Sequelize con los datos de conexión escritos directo (hardcodeados)
export const sequelize = new Sequelize('tasks_users_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

// Prueba la conexión y crea las tablas automáticamente
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

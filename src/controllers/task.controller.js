import Task from '../models/task.model.js';

// Crear una tarea nueva
export const createTask = async (req, res) => {
    try {
        const { title, description, isComplete } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'El título y la descripción son obligatorios' });
        }

        if (title.length > 100 || description.length > 100) {
            return res.status(400).json({ message: 'Los campos no pueden superar los 100 caracteres' });
        }

        if (isComplete !== undefined && typeof isComplete !== 'boolean') {
            return res.status(400).json({ message: 'isComplete debe ser un valor booleano' });
        }

        const tituloExistente = await Task.findOne({ where: { title } });
        if (tituloExistente) {
            return res.status(400).json({ message: 'Ya existe una tarea con ese título' });
        }

        const newTask = await Task.create({ title, description, isComplete });

        return res.status(201).json({
            message: 'Tarea creada exitosamente',
            task: newTask
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear la tarea', error: error.message });
    }
};

// Obtener todas las tareas
export const allTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();

        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No hay tareas registradas' });
        }

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener las tareas', error: error.message });
    }
};

// Obtener una tarea por ID
export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({ message: 'No se ha encontrado la tarea' });
        }

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener la tarea por ID', error: error.message });
    }
};

// Actualizar una tarea
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, isComplete } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'El título y la descripción son obligatorios' });
        }

        if (title.length > 100 || description.length > 100) {
            return res.status(400).json({ message: 'Los campos no pueden superar los 100 caracteres' });
        }

        if (isComplete !== undefined && typeof isComplete !== 'boolean') {
            return res.status(400).json({ message: 'isComplete debe ser un valor booleano' });
        }

        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'No se ha encontrado la tarea' });
        }

        if (title !== task.title) {
            const tituloExistente = await Task.findOne({ where: { title } });
            if (tituloExistente) {
                return res.status(400).json({ message: 'Ya existe una tarea con ese título' });
            }
        }

        await Task.update({ title, description, isComplete }, { where: { id } });

        return res.status(200).json({ message: 'Tarea actualizada exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar la tarea', error: error.message });
    }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'No se ha encontrado la tarea' });
        }

        await Task.destroy({ where: { id } });

        return res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar la tarea', error: error.message });
    }
};
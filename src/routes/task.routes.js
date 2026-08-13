import { Router } from 'express';
import {
    createTask,
    allTasks,
    getTaskById,
    updateTask,
    deleteTask
} from '../controllers/task.controller.js';

const router = Router();

router.post('/tasks', createTask);        // POST   /api/tasks
router.get('/tasks', allTasks);           // GET    /api/tasks
router.get('/tasks/:id', getTaskById);    // GET    /api/tasks/:id
router.put('/tasks/:id', updateTask);     // PUT    /api/tasks/:id
router.delete('/tasks/:id', deleteTask);  // DELETE /api/tasks/:id

export default router;
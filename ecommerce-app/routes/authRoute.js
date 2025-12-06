import express from 'express';
import { registerController } from '../controllers/registerController.js';

//router objects
const router = express.Router();

//routing
// REGISTER || METHOD POST
router.post("/register", registerController);

//export
export default router;
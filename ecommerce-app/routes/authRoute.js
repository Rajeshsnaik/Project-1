import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

//router objects
const router = express.Router();

//routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", loginController)

//export
export default router;
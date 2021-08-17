import { mostrarUsuarios,insterarUsuarios,actualizarUsuarios,eliminarUsuarios } from "../controllers/user";
import { Router } from "express"
const router = Router();

router.get('/usuarios',mostrarUsuarios);
router.get('/usuarios',insterarUsuarios);
router.get('/usuarios',actualizarUsuarios);
router.get('/usuarios',eliminarUsuarios);

module.exports = router;
import {
    editarTarea,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
} from "../controllers/user";
import { Router } from "express";
const router = Router();

router.get("/usuarios/",actualizarTarea);
router.post("/usuarios/",agregarTarea);
router.put("/usuarios/:id",editarTarea);
router.delete("/usuarios/:id",eliminarTarea);

module.exports = router;
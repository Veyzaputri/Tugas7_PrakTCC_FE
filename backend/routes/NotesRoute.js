import express from "express";
import {
    createNotes,
    deleteNotes,
    getNotes,
    getNotesById,
    updateNotes,

} from "../controller/NotesController.js";
import { refreshToken } from "../controller/RefreshToken.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

//endpoint akses token
router.get('/token', refreshToken);


router.get('/notes',verifyToken, getNotes);
router.get('/notes/:id',verifyToken, getNotesById);
router.post('/add-notes', createNotes);
router.patch('/edit-notes/:id', updateNotes);
router.delete('/notes/:id', deleteNotes);

export default router;
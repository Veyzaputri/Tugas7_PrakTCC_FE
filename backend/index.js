import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import NotesRoute from "./routes/NotesRoute.js"

const app = express();
app.use(cors());

import { getNotes } from "./controller/NotesController.js";

app.use(express.json());
app.use(UserRoute);
app.use(NotesRoute);
app.get("/", async (req, res) => {
    try {
        await getNotes(req, res); // Langsung panggil fungsi getUsers
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

app.listen(5000, "0.0.0.0", ()=> console.log('Server up and running...'));

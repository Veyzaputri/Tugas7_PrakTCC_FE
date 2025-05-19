import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import NotesRoute from "./routes/NotesRoute.js"
import sequelize from "./config/Database.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

app.use(UserRoute);
app.use(NotesRoute)

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    await sequelize.sync(); // sinkronisasi model
    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();

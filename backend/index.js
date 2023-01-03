import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(Router);

app.listen(5002, () => {
   console.log("Server is running ..");
});
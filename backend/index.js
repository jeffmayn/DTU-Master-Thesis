import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";

const PORT = process.env.PORT || 3030;


let origin = "";
if (process.env.MODE == "dev") {
   origin = "http://localhost:" + process.env.FRONTEND_PORT;
}
else {
   origin = "https://dtu-master-thesis-tir.herokuapp.com";
}

// to avoid crosssite-scripting etc on production build
var corsOption = {
   origin: origin,
   optionSuccessStatus: 200
};
 
const app = express();
app.use(express.json());
app.use(cors(corsOption));
app.use(Router);

app.get('/', (req, res) => res.send("Server is up and running!"));
app.listen(PORT, () => {
   console.log("Server is running ..");
});

/*
createTable();
*/


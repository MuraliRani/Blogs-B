import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('it is working')
})

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Connection(username, password);
Connection(process.env.DB_USERNAME, process.env.DB_PASSWORD);



app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${process.env.PORT}`)
);

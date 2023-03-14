import express from 'express';
import { join } from "path";
const app = express();


app.use(express.static("Code", { extensions: ['html'] }));
app.get("/auth_config.json", (req, res) => { res.sendFile(join(__dirname, "auth_config.json")) });
app.listen(8081, () => console.log("Server listening on port 8081"));
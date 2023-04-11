import path from 'path';
import express from 'express';

const app = express();
const port = 8080;
const __dirname = path.dirname(new URL(
    import.meta.url).pathname);

app.use(express.static("Code", { extensions: ['html'] }));
/*
app.use(express.static(path.join(__dirname, "public")));
app.get("/auth_config.json", (req, res) => { res.sendFile(path.join(__dirname, "auth_config.json")); });
app.get("/*", (_, res) => { res.sendFile(path.join(__dirname, "index.html")); });*/



async function addDiary(req, res) {
    const diaryID = req.params.ID;
    const diaryText = req.params.text;
    await db.addToDiary(diaryID, diaryText);
    res.sendStatus(200);
}


app.listen(port, () => console.log(`Server listening on port ${port}`));

/*
import express from 'express';
import { join } from "path";
const app = express();


app.use(express.static("Code", { extensions: ['html'] }));
app.use(express.static(join(__dirname, "public")));
app.get("/auth_config.json", (req, res) => { res.sendFile(join(__dirname, "auth_config.json")); });
app.get("/*", (_, res) => { res.sendFile(join(__dirname, "index.html")); });
app.listen(8081, () => console.log("Server listening on port 8081"));*/
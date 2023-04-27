import path from 'path';
import express from 'express';
import * as db from "./database.js"

const app = express();
const port = 8080;
const __dirname = path.dirname(new URL(
    import.meta.url).pathname);

app.use(express.static("Code", { extensions: ['html'] }));

app.use("/images", express.static("Code/Images", { extensions: ['html'] }));


function asyncWrap(func) {
   return (req, res, next) => {
       Promise.resolve(func(req, res, next))
           .catch((e) => next(e || new Error()));
   };
}

async function addDiary(req, res) {
    const diaryID = req.params.ID;
    const diaryText = req.params.text;
    await db.addToDiary(diaryID, diaryText);
    res.sendStatus(200);
}

async function findDiary(req, res){
   const diaryTitle = req.params.name;
   res.json(await db.findDiary(diaryTitle));
}

async function returnDiary(req, res){
   res.json(await db.returnDiary());
}

app.get("/find/:name", asyncWrap(findDiary));
app.get("/add/:ID/:text", asyncWrap(addDiary));
app.get("/allDiary", asyncWrap(returnDiary));

app.listen(port, () => console.log(`Server listening on port ${port}`));


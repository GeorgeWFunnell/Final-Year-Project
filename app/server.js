import path from 'path';
import express from 'express';
import * as db from "./database.js"

const app = express();
const port = 8080;

app.use(express.static("app", { extensions: ['html'] }));

app.use("/images", express.static("app/Images", { extensions: ['html'] }));


function asyncWrap(func) {
   return (req, res, next) => {
       Promise.resolve(func(req, res, next))
           .catch((e) => next(e || new Error()));
   };
}

async function addDiary(req, res) {
    const Title = req.params.text;
    const diaryText = req.params.text;
    await db.addToDiary(Title, diaryText);
    res.sendStatus(200);
}

async function findDiary(req, res){
   const diaryTitle = req.params.name;
   res.json(await db.findDiary(diaryTitle));
}

/*async function returnDiary(req, res){
   res.json(await db.returnDiary());
}*/

async function returnAllDiary(req, res){
   res.json(await db.returnAllDiary());
}

app.get("/find/:name", asyncWrap(findDiary));
app.get("/add/:ID/:text", asyncWrap(addDiary));
app.get("/allDiary", asyncWrap(returnAllDiary));

app.listen(port, () => console.log(`Server listening on port ${port}`));


import express from 'express';

const app = express();

app.use(express.static("app", { extensions: ['html'] }));

app.listen(8081);
console.log("Server listening on port 8081");
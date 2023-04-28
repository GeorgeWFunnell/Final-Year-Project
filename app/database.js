import { open } from 'sqlite';
import sqlite3 from 'sqlite3';



async function init() {

    const db = await open({
      filename: "./app/Diary_Database.sqlite",
      driver: sqlite3.Database,
      mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE});
    await db.migrate({ migrationsPath: "./app/Migrations" });
    return db;
}

const dbConn = init();

export async function addToDiary(Title, Diary){
   const db = await dbConn;
   const DATE = await db.get("SELECT datetime('now', 'localtime') as time");
   db.run('INSERT INTO DIARY (Date, Title, Diary) VALUES (?, ?, ?)', DATE.time, Title, Diary);
}

export async function returnDiary() {
   const db = await dbConn;
   return db.get('SELECT * FROM DIARY');
}

export async function returnAllDiary() {
   const db = await dbConn;
   return db.all('SELECT * FROM DIARY');
}
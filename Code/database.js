import { open } from 'sqlite';
import sqlite3 from 'sqlite3';


// A function that opens the database and makes sure its up to date
async function init() {
    const db = await open({ filename: "./app/Drinks_Database.sqlite", driver: sqlite3.Database });
    await db.migrate({ migrationsPath: "./app/Migrations" });
    return db;
}

const dbConn = init();

export async function addToDiary(Diary_ID, Diary){
   const db = await dbConn;
   const DATE = await db.get("SELECT getdate()");
   db.run('INSERT INTO DIARY (Date, Diary_ID, Diary) VALUES (?, ?, ?)', DATE.Date, Diary_ID, Diary);
}

export async function returnDiary() {
   const db = await dbConn;
   return db.get('SELECT * FROM DIARY');
}

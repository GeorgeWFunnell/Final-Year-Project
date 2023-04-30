import * as db from '../app/database.js';

test('Add Diary to database', async() =>{
   await db.addToDiary(111, 222);
   const diary = await db.returnAllDiary();
   const tests = diary[diary.length - 1];
   expect (tests.Title).toBe("111");
   expect (tests.Diary).toBe("222");
})

test('Remove diary from database', async() =>{
   const diary = await db.returnAllDiary();
   const preDatabase = diary[diary.length - 1];
   await db.removeDiaryFromDatabase(preDatabase.ID);
   const postDatabase = await db.returnAllDiary();
   const lastEntry = postDatabase[postDatabase.length - 1];
   expect(lastEntry).not.toEqual(preDatabase);
})

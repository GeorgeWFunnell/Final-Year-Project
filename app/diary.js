export async function addDiaryInfo() {
   // retrieves information
   const diaryTitle = document.querySelector('').value;
   const diaryContent = document.querySelector('#addTxt').value;
   let diaryName = await fetch("find/" + diaryTitle);
   diaryName = await diary.json();

   if (diaryName == undefined){
      console.log("ERROR, Diary undefined");
   }

   let diary = await fetch("add/" + diaryName.ID + "/" + diaryContent.text);
   diary = await diary.json();
}
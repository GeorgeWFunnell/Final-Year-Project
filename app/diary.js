export async function addDiaryInfo() {
   // retrieves information
   const diaryTitle = document.querySelector('#diaryTitle').value;
   const diaryContent = document.querySelector('#addTxt').value;
   /*let diaryName = await fetch(diaryTitle);
   diaryName = await diary.json();

   if (diaryName == undefined){
      console.log("ERROR, Diary undefined");
   }*/

   await fetch("/add/" + diaryTitle + "/" + diaryContent);

}
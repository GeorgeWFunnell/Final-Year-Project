export async function addDiaryInfo() {
   // retrieves information
   const diaryTitle = document.querySelector('#diaryTitle').value;
   const diaryContent = document.querySelector('#addTxt').value;
   await fetch("/add/" + diaryTitle + "/" + diaryContent);
}
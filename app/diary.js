export async function addDiaryInfo() {
   // retrieves information
   const diaryTitle = document.querySelector('#diaryTitle').value;
   const diaryContent = document.querySelector('#addTxt').value;
   if (diaryTitle == ""){
      window.alert("Error. Please make sure all boxes are filled and that there are not any symbols within the text.")
   }
   else {
      window.alert("Success")
      await fetch("/add/" + diaryTitle + "/" + diaryContent);
   }

}
import { addDiaryInfo } from './diary.js';

function onLoad() {
    loadNavBar();
    loadMainMenu();
}


function clearBody(area) {
    const pageArea = document.querySelector(area);
    while (pageArea.hasChildNodes()) {
        pageArea.removeChild(pageArea.firstChild);
    }
}

function loadPage(pageID) {
    const newPage = document.querySelector(`#${pageID}`);
    clearBody("#pageArea");
    const newContent = newPage.content.cloneNode(true);
    document.querySelector("#pageArea").appendChild(newContent);
}

function loadNavBar() {
    document.querySelector('#navDiary').addEventListener("click", loadDiaryPage);
    document.querySelector('#navGame').addEventListener("click", loadDifficultyPage);
    document.querySelector('#navMenu').addEventListener("click", loadMainMenu);
    document.querySelector('#navHelpPage').addEventListener("click", loadHelpPage);
}

function loadMainMenu() {
    loadPage("menu");
    document.querySelector('#mGame').addEventListener("click", loadDifficultyPage);
    document.querySelector('#mDiary').addEventListener("click", loadDiaryPage);
    document.querySelector('#mReminder').addEventListener("click", loadHelpPage);
    document.querySelector('#mzoom').addEventListener("click", zoomIn);
}

async function loadEntryPage(){
   loadPage("Entry");
   await showDiaryEntries();
}

function zoomIn(){
   document.body.style.zoom = "125%";
}

function loadHelpPage(){
   window.location.assign("https://www.nhs.uk/conditions/dementia/help-and-support/")
}

function loadDifficultyPage(){
   loadPage("difficultyPage");
   document.querySelector('#easyDif').addEventListener("click", ()=>loadGamePage(0));
   document.querySelector('#mediumDif').addEventListener("click", ()=>loadGamePage(1));
   document.querySelector('#hardDif').addEventListener("click", ()=>loadGamePage(2));
}

function loadGamePage(difficulty) {
    loadPage("Game");
    window.globalThis.prepareGame(difficulty);
}

function loadDiaryPage() {
    loadPage("Diary")
    document.querySelector('#addToDiary').addEventListener("click", submitButton);
    document.querySelector('#viewEntries').addEventListener("click", loadEntryPage);
}



function submitButton() {
      window.alert("Success")
      addDiaryInfo()
}

async function showDiaryEntries() {
   console.log("Fetching diary entries...");
   clearBody(".diaryArea");
   const div = document.querySelector(".diaryArea");
   let diaryEntries = await fetch("allDiary");
   diaryEntries = await diaryEntries.json();
   console.log("diaryEntries:", diaryEntries);
   for (let diary of diaryEntries) {
     const diaryInfo = document.createElement("div");
     const diaryTitle = document.createElement("h3");
     const diaryContent = document.createElement("p");
     diaryTitle.textContent = diary.Title;
     diaryContent.textContent = diary.Diary;
     diaryInfo.appendChild(diaryTitle);
     diaryInfo.appendChild(diaryContent);
     div.appendChild(diaryInfo);
   }
 }
/*
async function showDiaryEntries(){
   console.log("Fetching diary entries...");
   clearBody('.diaryArea');
   const div = document.querySelector(".diaryArea");
   let diaryEntry = await fetch("allDiary");
   console.log("diaryEntry:", diaryEntry);
   diaryEntry = await diaryEntry.json();
   console.log("parsed diaryEntry:", diaryEntry);
   for (let diary of diaryEntry){
      const diaryInfo = document.createElement("p");
      diaryInfo.textContent = JSON.stringify(diary);
      div.append(diaryInfo);
   }
}
*/
window.addEventListener("load", onLoad);
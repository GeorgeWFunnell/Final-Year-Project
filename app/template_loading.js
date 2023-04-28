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
    document.querySelector('#navGame').addEventListener("click", loadGamesPage);
    document.querySelector('#navMenu').addEventListener("click", loadMainMenu);
    document.querySelector('#navReminder').addEventListener("click", loadReminderPage);
    document.querySelector('#navHelpPage').addEventListener("click", loadHelpPage);
}

function loadMainMenu() {
    loadPage("menu");
    document.querySelector('#mGame').addEventListener("click", loadDifficultyPage);
    document.querySelector('#mDiary').addEventListener("click", loadDiaryPage);
    document.querySelector('#mReminder').addEventListener("click", loadReminderPage);
}

async function loadEntryPage(){
   loadPage("Entry");
   await showDiaryEntries();
}

function loadHelpPage(){
   window.location.assign("https://www.nhs.uk/conditions/dementia/help-and-support/")
}

function loadDifficultyPage(){
   loadPage("difficultyPage");
   document.querySelector('#easyDif').addEventListener("click", loadEasyPage);
   document.querySelector('#mediumDif').addEventListener("click", loadMediumPage);
   document.querySelector('#hardDif').addEventListener("click", loadHardPage);
}

function loadEasyPage(){
   loadGamesPage();
   const x = 1;
}

function loadMediumPage(){
   loadGamesPage();
   const x = 1;
}

function loadHardPage(){
   loadGamesPage();
   const x = 1;
}

function loadGamesPage() {
    loadPage("Game");
    window.globalThis.prepareGame();
}

function loadDiaryPage() {
    loadPage("Diary")
    document.querySelector('#addToDiary').addEventListener("click", addDiaryInfo);
    document.querySelector('#viewEntries').addEventListener("click", loadEntryPage);
}

function loadReminderPage() {
    loadPage("Reminder")
}



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

window.addEventListener("load", onLoad);
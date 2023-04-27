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

}

function loadMainMenu() {
    loadPage("menu");
    document.querySelector('#mGame').addEventListener("click", loadGamesPage);
    document.querySelector('#mDiary').addEventListener("click", loadDiaryPage);
    document.querySelector('#mReminder').addEventListener("click", loadReminderPage);
}

async function loadEntryPage(){
   loadPage("Entry");
   await showDiaryEntries();
}

function loadGamesPage() {
    loadPage("Game");
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
   clearBody('.diaryArea');
   const div = document.querySelector(".diaryArea");
   let diaryEntry = await fetch("allDiary");
   diaryEntry = await diaryEntry.json();
   for (let diary of diaryEntry){
      const diaryInfo = document.childElement("p");
      diaryInfo.textContent = JSON.stringify(diary)
      div.append(diaryInfo)
   }
}

window.addEventListener("load", onLoad);
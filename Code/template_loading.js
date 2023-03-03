function setUp() {
    loadMainMenu();
    document.querySelector('#navDiary').addEventListener("click", loadDiaryPage);
    document.querySelector('#navGame').addEventListener("click", loadGamesPage);
    document.querySelector('#navMenu').addEventListener("click", loadMenuPage);
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

function loadMainMenu() {
    loadPage("menu");
    document.querySelector('#mGame').addEventListener("click", loadGamesPage);
    document.querySelector('#mDiary').addEventListener("click", loadDiaryPage);
    document.querySelector('#mReminder').addEventListener("click", loadReminderPage);
}

function loadGamesPage() {
    loadPage("Game");
}

function loadMenuPage() {
    loadPage("Menu")
}

function loadDiaryPage(){
    loadPage("Diary")
}

function loadReminderPage(){
    loadPage("Reminder")
}

window.addEventListener("load", setUp);
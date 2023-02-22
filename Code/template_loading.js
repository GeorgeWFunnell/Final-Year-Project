function setUp() {
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

function loadMainMenu() {
    loadPage("menu");
    document.querySelector('#mbgame').addEventListener("click", loadGamesPage);
}

window.addEventListener("load", setUp);
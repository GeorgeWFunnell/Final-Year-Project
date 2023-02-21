function setUp() {
    loadMainMenu();
    document.querySelector("#hamburger").addEventListener("click", loadHamburger);
    document.querySelector("#Home").addEventListener("click", loadMainMenu);
    document.querySelector("#TrackedUnits").addEventListener("click", loadTrackingPage);
    document.querySelector("#InputDrinks").addEventListener("click", loadEditMenu);
    document.querySelector("#DrinkDatabase").addEventListener("click", loadDatabasePage);
    document.querySelector('#mbgames').addEventListener("click", loadGamesPage);
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
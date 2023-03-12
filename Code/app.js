const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 8;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "./images/Apple.png", name: "Apple" },
    { imgSrc: "./images/Banana.png", name: "Banana" },
    { imgSrc: "./images/Kiwi.png", name: "Kiwi" },
    { imgSrc: "./images/Lemon.png", name: "Lemon" },
    { imgSrc: "./images/Orange.png", name: "Orange" },
    { imgSrc: "./images/Pear.png", name: "Pear" },
    { imgSrc: "./images/Strawberry.png", name: "Strawberry" },
    { imgSrc: "./images/Tomato.png", name: "Tomato" },
    { imgSrc: "./images/Apple.png", name: "Apple" },
    { imgSrc: "./images/Banana.png", name: "Banana" },
    { imgSrc: "./images/Kiwi.png", name: "Kiwi" },
    { imgSrc: "./images/Lemon.png", name: "Lemon" },
    { imgSrc: "./images/Orange.png", name: "Orange" },
    { imgSrc: "./images/Pear.png", name: "Pear" },
    { imgSrc: "./images/Strawberry.png", name: "Strawberry" },
    { imgSrc: "./images/Tomato.png", name: "Tomato" }
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    //gets random images for cards
    const cardData = randomize();

    //creates cards
    cardData.forEach((item) => {

        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        //creates classes
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        //gets the images from array
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        //attaches card to section and attaches face and back to card
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        //toggles card when clicked 
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

const reset = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        cards[index].style.pointerEvents = ("all");
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 1000)
};
//Checks if cards are clicked
const checkCards = (e) => {
    const clickedCard = e.target; //gets data of card
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none"
            });
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                reset();
                playerLives = 8;
            };
        };
    };
    if (toggleCard.length === 16) {
        reset("good job bro");
    };
};



cardGenerator();
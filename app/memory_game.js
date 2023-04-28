let playerLivesCount;
let section;
let playerLives;
let dif;

window.globalThis.prepareGame = ()=>{
    section = document.querySelector("section");
    playerLivesCount = document.querySelector("span");
    playerLives = 8;
    playerLivesCount.textContent = playerLives;

    cardGenerator();
};

const getData1 = () => [
   { imgSrc: "./images/Apple.png", name: "Apple" },
   { imgSrc: "./images/Banana.png", name: "Banana" },
   { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
   { imgSrc: "./images/Lemon.png", name: "Lemon" },
   { imgSrc: "./images/Apple.png", name: "Apple" },
   { imgSrc: "./images/Banana.png", name: "Banana" },
   { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
   { imgSrc: "./images/Lemon.png", name: "Lemon" },
];


const getData2 = () => [
   { imgSrc: "./images/Apple.png", name: "Apple" },
   { imgSrc: "./images/Banana.png", name: "Banana" },
   { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
   { imgSrc: "./images/Lemon.png", name: "Lemon" },
   { imgSrc: "./images/Orange.png", name: "Orange" },
   { imgSrc: "./images/Pear.png", name: "Pear" },
   { imgSrc: "./images/Apple.png", name: "Apple" },
   { imgSrc: "./images/Banana.png", name: "Banana" },
   { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
   { imgSrc: "./images/Lemon.png", name: "Lemon" },
   { imgSrc: "./images/Orange.png", name: "Orange" },
   { imgSrc: "./images/Pear.png", name: "Pear" },
];


const getData3 = () => [
    { imgSrc: "./images/Apple.png", name: "Apple" },
    { imgSrc: "./images/Banana.png", name: "Banana" },
    { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
    { imgSrc: "./images/Lemon.png", name: "Lemon" },
    { imgSrc: "./images/Orange.png", name: "Orange" },
    { imgSrc: "./images/Pear.png", name: "Pear" },
    { imgSrc: "./images/Raspberry.png", name: "Raspberry" },
    { imgSrc: "./images/Cherry.png", name: "Cherry" },
    { imgSrc: "./images/Apple.png", name: "Apple" },
    { imgSrc: "./images/Banana.png", name: "Banana" },
    { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
    { imgSrc: "./images/Lemon.png", name: "Lemon" },
    { imgSrc: "./images/Orange.png", name: "Orange" },
    { imgSrc: "./images/Pear.png", name: "Pear" },
    { imgSrc: "./images/Raspberry.png", name: "Raspberry" },
    { imgSrc: "./images/Cherry.png", name: "Cherry" }
];


const randomize = () => {
   const cardData = getData3();
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
            card.style.pointerEvents = "none"
            checkCards(e, cardData);
        });
        cardData.forEach(() => {
            card.classList.add("toggleCard");
            card.style.pointerEvents = "none"
        })
    });

    setTimeout(() => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.classList.remove("toggleCard");
            card.style.pointerEvents = "all"
        });
    }, 4000);
};



const clearCards = () => {
    const section = document.querySelector("section");
    section.innerHTML = "";
}

const reset = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");

    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout(() => {
            cards[index].style.pointerEvents = ("all");
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000)
    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives;

};

//Checks if cards are clicked
const checkCards = (e, cardData) => {
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
                setTimeout(() => {
                    card.classList.remove("toggleCard")
                    card.style.pointerEvents = "all"
                }, 1000);
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                section.style.pointerEvents = "none";
                window.alert("You lose");
                setTimeout(() => { reset(); }, 2000)
                playerLives = 8;
            };
        };
    };
    if (toggleCard.length === 16) {

        section.style.pointerEvents = "none";
        setTimeout(() => window.alert("YOU WIN!!!!"), 1000);
        setTimeout(() => { reset(); }, 4000)
    };
};
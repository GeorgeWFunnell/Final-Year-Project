const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    {imgSrc: "./images/Apple.png", name: "Apple"},
    {imgSrc: "./images/Banana.png", name: "Banana"},
    {imgSrc: "./images/Kiwi.png", name: "Kiwi"},
    {imgSrc: "./images/Lemon.png", name: "Lemon"},
    {imgSrc: "./images/Orange.png", name: "Orange"},
    {imgSrc: "./images/Pear.png", name: "Pear"},
    {imgSrc: "./images/Strawberry.png", name: "Strawberry"},
    {imgSrc: "./images/Tomato.png", name: "Tomato"},
    {imgSrc: "./images/Apple.png", name: "Apple"},
    {imgSrc: "./images/Banana.png", name: "Banana"},
    {imgSrc: "./images/Kiwi.png", name: "Kiwi"},
    {imgSrc: "./images/Lemon.png", name: "Lemon"},
    {imgSrc: "./images/Orange.png", name: "Orange"},
    {imgSrc: "./images/Pear.png", name: "Pear"},
    {imgSrc: "./images/Strawberry.png", name: "Strawberry"},
    {imgSrc: "./images/Tomato.png", name: "Tomato"}
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
    cardData.forEach(item => {
    
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    //creates classes
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //gets the images from array
    face.src= item.imgSrc;
    //attaches card to section and attaches face and back to card
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    })
}

cardGenerator();



let playerLivesCount;
let section;
let playerLives;
let dif;

window.globalThis.prepareGame = (difficulty)=>{
    section = document.querySelector("section");
    playerLivesCount = document.querySelector("span");
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
    dif = difficulty;
    cardGenerator();
};

const getData = (difficulty) => {
   const images = [
       { imgSrc: "./images/Apple.png", name: "Apple" },
       { imgSrc: "./images/Banana.png", name: "Banana" },
       { imgSrc: "./images/Blueberry.png", name: "Blueberry" },
       { imgSrc: "./images/Lemon.png", name: "Lemon" },
       { imgSrc: "./images/Orange.png", name: "Orange" },
       { imgSrc: "./images/Pear.png", name: "Pear" },
       { imgSrc: "./images/Raspberry.png", name: "Raspberry" },
       { imgSrc: "./images/Cherry.png", name: "Cherry" }
   ];
   
   let image_count;
   switch(difficulty){
       case 0:
           image_count = 4;
           break;
       case 1:
           image_count = 6;
           break;
       default:
           image_count = 8;
   }
   
   let imageData = [];
   for (let i = 0; i < 2; i++) {
       for (let j = 0; j < image_count; j++){
           imageData.push(images[j]);
       }
   }
   return imageData;
}


const randomize = () => {
   const cardData = getData(dif);
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

//Checks if cards are clicked
const checkCards = (e, cardData) => {
    const clickedCard = e.target; //gets data of card
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none"
            });
        } else {
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
    if (toggleCard.length === cardData.length){

        section.style.pointerEvents = "none";
        setTimeout(() => window.alert("YOU WIN!!!!"), 1000);
        setTimeout(() => { reset(); }, 4000)
    };
};

const reset = () => {
   let cardData = randomize(dif);
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

   cardData.forEach(() => {
      card.classList.add("toggleCard");
      card.style.pointerEvents = "none"
  })
};
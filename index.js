let start = document.querySelector("#btn");
let container = document.querySelector("#container");
let flipCards = document.querySelectorAll(".flip-card"); // All flip cards

let imgArray = ["image/dog.avif", "image/dog2.avif", "image/dog3.avif", "image/dog4.avif", "image/dog5.avif", "image/dog6.avif"];

let firstCard = null;
let secondCard = null;
let isFlipping = false;

start.addEventListener("click", function () {
    start.style.display = "none";
    container.style.display = "block";
});

flipCards.forEach(item => {
    item.addEventListener("click", function () {
        if (isFlipping || item === firstCard) return; // Prevent clicking during flip or on the same card
        
        let flipCardInner = item.querySelector(".flip-card-inner");
        let flipCardBack = item.querySelector(".flip-card-back");

        flipCardBack.innerHTML = "";  // Clear existing content in the back of the card
        let flipImg = document.createElement("img");
        let randomImage = getRandomNum();
        flipImg.src = imgArray[randomImage];
        flipCardBack.append(flipImg);
        
        flipCardInner.style.transform = "rotateY(180deg)"; // Flip the card

        if (!firstCard) {
            // This is the first card clicked
            firstCard = item;
        } else if (!secondCard) {
            // This is the second card clicked
            secondCard = item;
            isFlipping = true;

            // Check for match or reset after a short delay
            setTimeout(() => {
                resetCards();
            }, 1000);
        }
    });
});

function getRandomNum() {
    return Math.floor(Math.random() * imgArray.length);
}

function resetCards() {
    let firstFlipInner = firstCard.querySelector(".flip-card-inner");
    let secondFlipInner = secondCard.querySelector(".flip-card-inner");

    // Reset the cards by flipping them back
    firstFlipInner.style.transform = "rotateY(0deg)";
    secondFlipInner.style.transform = "rotateY(0deg)";

    // Reset variables for the next round
    firstCard = null;
    secondCard = null;
    isFlipping = false;
}

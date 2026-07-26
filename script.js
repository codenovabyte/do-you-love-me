const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

function moveButton() {

    let x = Math.floor(Math.random() * 550) -300;
    let y = Math.floor(Math.random() * 400) -400;
    noBtn.style.transform = 'translate(${x}px, ${y}px)';
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener("click", function(){
    noBtn.style.transform = "translate(300px, 700px)";
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
});

// JavaScript

let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");
let resetBtn = document.querySelector("#reset-btn");




const playwinSound= ()=>{
    const winSound=document.getElementById('win-sound');
    winSound.play();
}
const playloseSound= ()=>{
    const loseSound =document.getElementById('lose-sound');
    loseSound.play();
}


 const playclickSound= ()=>{
    const clickSound=document.getElementById('click-sound');
    clickSound.play();
}
const playbackgroundSound= ()=>{
    const groundSound = document.getElementById('background-sound');
   groundSound.play();
}

document.getElementById('hide-btn');
resetBtn.addEventListener("click", () => {
    playbackgroundSound();
    // resetBtn.removeEventListener("click", playBackgroundMusic);
});
// playbackgroundSound();
// document.addEventListener("Click" , ()=>{
//     playbackgroundSound();
//     document.removeEventListener("click", playbackgroundSound);
// });



const genCompChoice = () => {
    const options = ["rock", "paper", "cisor"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
};

const drawGame = () => {
    message.innerText = `Game is draw! Play again`;
    message.style.backgroundColor = "#081b31";
    message.style.color = "#ffff";
};


const showWiner = (userWin, userChoice, computerChoice) => {
    if (userWin === true) {
      

        message.innerText = `You win! Your ${userChoice} has defeated ${computerChoice}`;
        message.style.backgroundColor = "skyBlue";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
       

        message.innerText = `You lose! Your ${userChoice} was defeated by ${computerChoice}`;
        message.style.backgroundColor = "violet";
        computerScore++;
        compScorePara.innerText = computerScore;
    }
};

const playGame = (userChoice) => {
    const computerChoice = genCompChoice();
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "cisor" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWiner(userWin, userChoice, computerChoice);
    }

    
    if (userScore === 10) {
       
        message.innerText = "Congratulations! You won!";
        playwinSound();
       setTimeout(()=>{
         window.location.href = "second.html";
        },3000);
    } else if (computerScore === 10) {
        playloseSound();
        message.innerText = "Sorry! You lose!";
        setTimeout(()=>{
            window.location.href = "3rd.html";
           },3000);

    }
};



choices.forEach((choice) => {
   


   choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        playclickSound();
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = computerScore;
    message.innerText = "Play Your Turn";
    resetBtn.style.backgroundImage="";


});


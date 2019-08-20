const userScore = 0;//actual score starts at 
const compScore = 0;//actual score starts at 

const userScore_span = document.getElementById('user-score');//show score to dom
const compScore_span = document.getElementById('comp-score');//show score to dom
const scoreBoard_div = document.querySelector(".scoreBoard");//entire scoreboard

const result_div = document.querySelector(".result");// result of last game

const rock_div = document.getElementById('r');// rock
const paper_div = document.getElementById('p');// paper
const scissors_div = document.getElementById('s');// scissors
/*_________________________________________________________________win function ------------------------------------------------------------------------*/
function win (userChoice, compChoice) {

userScore_span.innerHTML= Number(userScore_span.innerHTML);
userScore_span.innerHTML++;
result_div.innerHTML =`${userChoice} beats ${compChoice}. you Win!`;

rock_div.style.animation = ''; 
let animateMe = `${userChoice}_div`;
animateMe.style.animation= 'win';
}
/*_________________________________________________________________lose function ------------------------------------------------------------------------*/
function lose(userChoice, compChoice) {

  compScore_span.innerHTML= Number(compScore_span.innerHTML);
  compScore_span.innerHTML++;
  result_div.innerHTML =`${compChoice} beats ${userChoice}. you Loose!`;
}
/*_________________________________________________________________tie function ------------------------------------------------------------------------*/
function tie(userChoice) {
  result_div.innerHTML =`You both chose ${userChoice}. Tie!`
//update results
}
/*_________________________________________________________________updateReult  function ------------------------------------------------------------------------*/

/*_________________________________________________________________game function ------------------------------------------------------------------------*/
function game(userChoice) {
    // console.log(userchoice); will output rock,paper or scissors
  let compOptions = ['rock','paper','scissors'];
  let compChoice = compOptions[Math.floor(Math.random()*3)];

  if (userChoice == compChoice) {// if tie

    tie(userChoice);
    
  } 



if (userChoice == 'rock' && compChoice == 'paper') {// lose user rock vs paper

  lose(userChoice, compChoice);
  
}
if (userChoice == 'rock' && compChoice == 'scissors') {//winuser rock vs scis
  
  win(userChoice, compChoice);

}

if (userChoice == 'paper' && compChoice == 'scissors') {// lose user paper vs scis
  
  lose(userChoice, compChoice);
}
if (userChoice == 'paper' && compChoice == 'rock') {//winuser paper vs rock
  
  win(userChoice, compChoice);
}

if (userChoice == 'scissors' && compChoice == 'rock') {//lose user paper vs rock
  
  lose(userChoice, compChoice);
}
if (userChoice == 'scissors' && compChoice == 'paper') {//win user paper vs scis
  
  win(userChoice, compChoice);
 }
}
/*_________________________________________________________________main function called on load appy addEventListener------------------------------------------------------------------------*/
main();

function main(){// on cliock running & giving game() a user parameter
rock_div.addEventListener('click', () => {// when click rock, run function
  game('rock');    
} );
paper_div.addEventListener('click', () => {// when click , run function
  game('paper');
} );
scissors_div.addEventListener('click', () => {// when click scis, run function
  game('scissors');
} );
}
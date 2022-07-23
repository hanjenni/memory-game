console.log('working');
/*----- constants -----*/
const letters = ['A', 'a','B','b','C','c','D','d','E','e','F','f','G','g','H','h'];

/*----- app's state (variables) -----*/
//what needs to be reset every time?
let cardFlipped;
let time;
let win;
/*----- cached element references -----*/
//elements used more than once
const cardFlippedEl = document.querySelector('.front-card')
const timerEl= document.querySelector('.timer')

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', timerStart);

/*----- functions -----*/
// init()
// function init()

//     cardFlipped = {


//     }

//     time= {

//     }

//     win= null;


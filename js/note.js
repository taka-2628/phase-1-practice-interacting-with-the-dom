// Variables for DOM nodes
let counter = document.querySelector('#counter');
let plusBtn = document.querySelector('#plus');
let minusBtn = document.querySelector('#minus');
let heartBtn = document.querySelector('#heart');
let pauseBtn = document.querySelector('#pause');
let buttons = document.querySelectorAll('button');

let numLikeCountList = document.querySelector('.likes')

let likeCount = 0;

// Write a function countUp() that
//    creates a timer that increments every second once the page has loaded
function countUp(){
    setInterval(() => {
        let currentNum = parseInt(counter.textContent);
        counter.textContent = currentNum + 1;
    }, 1000);
};

// PLUS BUTTON
// When clicked, add 1 to the current number that the counter is showing 
plusBtn.addEventListener('click', () => {
    let currentNum = parseInt(counter.textContent);
    counter.textContent = currentNum + 1;
})

// MINUS BUTTON
// When clicked, subtract 1 from the current number that the counter is showing
minusBtn.addEventListener('click', () => {
    let currentNum = parseInt(counter.textContent);
    counter.textContent = currentNum - 1; 
})

// HEART BUTTON
// When clicked, 
heartBtn.addEventListener('click', () => {
    likeCount ++
    let currentNum = counter.textContent;
    li = document.createElement('li');
    li.textContent = (`${currentNum} has been liked ${likeCount} times`);
    numLikeCountList.appendChild(li);
})

// PAUSE BUTTON
// When clicked, it
//    stops the timer 
//    disables the PLUS/MINUS/HEART/COMMENT
//    switches the label from "pause" to "resume"
pauseBtn.addEventListener('click', () => {
    let currentStatus = pauseBtn.textContent
    if (currentStatus == 'resume'){
        pauseBtn.textContent = 'pause';
        for (const button of buttons){
            button.disabled = false;
        };
    } else {
        pauseBtn.textContent = 'resume';
        for (const button of buttons){
            button.disabled = true;
        };
        pauseBtn.disabled = false;
    }
})

// Initiate the countUp funtion
// document.addEventListener('DOMContentLoaded', countUp);
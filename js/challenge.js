// Variables for DOM nodes
let counter = document.querySelector('#counter');
let plusBtn = document.querySelector('#plus');
let minusBtn = document.querySelector('#minus');
let heartBtn = document.querySelector('#heart');
let pauseBtn = document.querySelector('#pause');
let buttons = document.querySelectorAll('button');

let submit = document.querySelector('#submit');
let input = document.querySelector('#comment-input')

let numLikeCountList = document.querySelector('.likes');
let commentList = document.querySelector('#list');

// Declare a variable timer which will later be assigned to setInterval() that increments textContent of counter every second 
let timer;
// Declare a variable likeTrackerObj which is assigned to an empty Object which is going to be used to keep track of the number of times individual numbers are liked 
let likeTrackerObj = {}

// Write a function countUp() that
//    assign timer a setInterval() method that increments every second once the page has loaded
function countUp(){
    timer = setInterval(() => {
        let currentNum = parseInt(counter.textContent);
        counter.textContent = currentNum + 1;
    }, 1000);
}

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
// When clicked, it 
//    counts the number of times an individual number on the counter is liked 
//    displays the number of likes associated with the number displayed
heartBtn.addEventListener('click', () => {
    let currentNum = counter.textContent;
    // use if statement: 
    //    if likeTrackerObj does NOT have currentNum as a key yet (meaning the number is liked for the first time)
    if (!likeTrackerObj.hasOwnProperty(currentNum)){
        // create the key-value pair and set the value to 0
        likeTrackerObj[currentNum] = 0
        // add 1 to the value 
        likeTrackerObj[currentNum] += 1
        // create <li> and assign it to a varible li
        let li = document.createElement('li');
        // make the id of <li> currentNum
        li.id = currentNum;
        // create the content of <li>: `${currentNum} has been liked <span>1</span> time`
        li.innerHTML = (`${currentNum} has been liked <span>1</span> time`);
        // add <li> to DOM by appending it to numLikeCountList 
        numLikeCountList.appendChild(li)
    } else { // in this case, else handles if likeTrackerObj DOES have currentNum as a key alrady (meaning the number has been liked before)
        // add 1 to the value that the key currentNum points to 
        likeTrackerObj[currentNum] += 1
        // grab the <li> by its id which is currentNum and assign it to a variable theLi
        let theLi = document.getElementById(`${currentNum}`);
        // update the content of <li> to: `${currentNum} has been liked <span>${likeTrackerObj[currentNum]}</span> time`
        theLi.innerHTML = (`${currentNum} has been liked <span>${likeTrackerObj[currentNum]}</span> time`)
    }
})

// PAUSE BUTTON
// When clicked, it
//    stops the timer 
//    disables the PLUS/MINUS/HEART/SUBMIT
//    switches the label from "pause" to "resume"
pauseBtn.addEventListener('click', () => {
    let currentStatus = pauseBtn.textContent
    if (currentStatus == 'resume'){
        // restarts the timer
        timer = setInterval(() => {
            let currentNum = parseInt(counter.textContent);
            counter.textContent = currentNum + 1;
        }, 1000);
        // re-enables the buttons
        for (const button of buttons){
            button.disabled = false;
        };
        // switches back the label to "pause"
        pauseBtn.textContent = 'pause';
    } else {
        // stops the timer
        clearInterval(timer);
        // disables the buttons except pauseBtn
        for (const button of buttons){
            button.disabled = true;
        };
        pauseBtn.disabled = false;
        // switches the label to "resume"
        pauseBtn.textContent = 'resume';
    }
})

// FORM SUBMISSION
// When written in and submited, it
//    prevents the form from refreshing
//    creates new DOM node <p> 
//    adds what's written in the form as content of <p> 
//    appends <p> to commentList (<div id="list">)
submit.addEventListener('click', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = input.value;
    commentList.appendChild(p);
})

// Initiate the countUp funtion
document.addEventListener('DOMContentLoaded', countUp);


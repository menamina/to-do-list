// import {createToDo} from './createToDo.js';
//import {changePriority} from './changePriority.js';
//import './CSStoDo.css';
//import star from './star.svg';


// GREETING!
const greetingDom = document.querySelector(".greeting");
const now = new Date();
const hour = now.getHours();
let greeting = "";

if (hour >= 5 && hour < 12){
    greeting = "Hi, good morning";
} else if (hour >= 12 && hour < 18) {
    greeting = "Hi, good afternoon";
} else {
    greeting = "Hi, good evening";
}

greetingDom.textContent = greeting;


// SHOW TASK!
const newTask = document.querySelector(".click4New");
const form = document.getElementById("form");

newTask.addEventListener('click', () => {
    form.showModal();
})


const toDoArray = [];
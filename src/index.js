import {createToDo} from './createToDo.js';
import {changePriority} from './changePriority.js';
import {renderHome} from './renderHome.js';
import {renderTasks, renderProjects} from './renderTasksAndProjs.js';
import { openProjectIndividual } from './openProjects.js';
import './CSStoDo.css';
import star from './star.svg';
const starImg = document.querySelector('.star');
starImg.src = star;



const toDoArray = [];

renderHome(toDoArray);
renderTasks(toDoArray);
renderProjects(toDoArray);

const home = document.querySelector(".home");
home.addEventListener('click', () => {
    renderHome(toDoArray);
    renderProjects(toDoArray);
    renderTasks(toDoArray);
});

// NEW TASK!
const newTask = document.querySelectorAll(".click4New");
const showForm = document.getElementById("form");
const cancel = document.querySelector(".cancel");

newTask.forEach(button => {
    button.addEventListener('click', () => {
    showForm.showModal();
});
});

showForm.addEventListener('click', (e) => {
    if (e.target === showForm) {
        showForm.close();
    }
});

cancel.addEventListener('click', ()=> {
    showForm.close();
});

// LOGIC FOR ADDING TO DO'S

const form = showForm.querySelector(".hiddenForm");
const taskNameInput = form.querySelector('input[placeholder="Task name"]');
const descriptionInput = form.querySelector('input[placeholder="Description"]');
const dueDateInput = form.querySelector('input[type="datetime-local"]');
const mainProjName = form.querySelector('input[placeholder="Project Name"]');
const prioritySelect = form.querySelector("select");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = createToDo(mainProjName.value, taskNameInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value);
    
    toDoArray.push(newTask);
    renderTasks(toDoArray);
    renderProjects(toDoArray);
    form.reset();
    showForm.close();
});

// after clicking project display the individ proj's to do

const renderProjectsDiv = document.querySelector(".renderProjects");

renderProjectsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains("projectsMiniSide")) {
        const clickedProject = e.target.textContent;
        openProjectIndividual(clickedProject, toDoArray);
    }
});



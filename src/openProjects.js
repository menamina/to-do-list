import {renderTasks} from "./renderTasksAndProjs.js";


export function openProjectIndividual(clickedProject, array){
    const clearCurrentList = document.querySelector(".renderCurrentList");
    clearCurrentList.textContent = "";
    const currentProjName = document.querySelector(".listName");
    currentProjName.textContent = clickedProject;

    const projectNameMatch = array.filter(item => item.projName === clickedProject);

    renderTasks(projectNameMatch);


}
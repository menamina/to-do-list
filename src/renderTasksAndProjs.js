import { markAsComplete } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";
import { deleteProjectAndList } from "./deleteProject.js";

export function renderTasks(toDoArray){
    const renderCurrentList = document.querySelector(".renderCurrentList");
    renderCurrentList.textContent = "";
    toDoArray.forEach(task => {

        const containerdiv = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.type = "checkbox";
    
        const div = document.createElement("div");
        div.classList.add("task-text");
        div.textContent = `${task.toDoName} ${task.dateDue} ${task.priority}`;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");

        containerdiv.appendChild(checkbox);
        containerdiv.appendChild(div);
        containerdiv.appendChild(deleteBtn);
        renderCurrentList.appendChild(containerdiv);

        markAsComplete(checkbox, task, div, toDoArray);
        deleteTask(deleteBtn, task, toDoArray, containerdiv);

    });
}

export function renderProjects(toDoArray){
        const renderedProjectNames = new Set();
        const projectsOnSideMini = document.querySelector(".renderProjects");
        projectsOnSideMini.textContent = "";

        toDoArray.forEach(task => {
            if(!renderedProjectNames.has(task.projName)){
                const renderedProjDiv = document.createElement("div");
                renderedProjDiv.classList.add("projectsMiniSide");
                renderedProjDiv.textContent = task.projName;

                projectsOnSideMini.appendChild(renderedProjDiv);
                renderedProjectNames.add(task.projName);

                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("deleteBtn");
                deleteBtn.textContent = "x";
                renderedProjDiv.appendChild(deleteBtn);

                deleteProjectAndList(deleteBtn, renderedProjDiv, task.projName, toDoArray);

            }
        })
        
}
export function renderTasks(toDoArray){
    const renderCurrentList = document.querySelector(".renderCurrentList");
    renderCurrentList.textContent = "";
    toDoArray.forEach(task => {
        const div = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        div.textContent = `${task.toDoName} ${task.dateDue} ${task.priority}`;
        renderCurrentList.appendChild(checkbox);
        renderCurrentList.appendChild(div);
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

            }
        })
        
}
export function renderTasks(toDoArray){
    const renderCurrentList = document.querySelector(".renderCurrentList");
    renderCurrentList.innerHTML = "";
    toDoArray.forEach(task => {
        // check if the Dom name == to the arraylist projName and if so display that element
        const div = document.createElement("div");
        div.textContent = `${task.toDoName} ${task.dateDue} ${task.priority}`;
        renderCurrentList.appendChild(div);
    });
}

export function renderProjects(toDoArray){
        const renderedProjectNames = new Set();
        const renderProjects = document.querySelector(".renderProjects");
        const mainProjectDisplay = document.querySelector(".mainProjectList");
        renderProjects.textContent = "";
        mainProjectDisplay.textContent = "";

        toDoArray.forEach(task => {
            if(!renderedProjectNames.includes(task.projName)){
                const renderedProjDiv = document.createElement("div");
                renderedProjDiv.classList.add("projectsMiniSide");
                renderedProjDiv.textContent = task.projName;

                const projDivRender = document.createElement("div");
                projDivRender.classList.add("mainProjRend");
                projDivRender.textContent = task.projName;

                mainProjectDisplay.appendChild(projDivRender);
                renderProjects.appendChild(renderedProjDiv);
                renderedProjectNames.add(task.projName);

            }
        })
        
}
export function renderTasks(toDoArray){
    const renderCurrentList = document.querySelector(".renderCurrentList");
    toDoArray.forEach(task => {
        // check if the Dom name == to the arraylist projName and if so display that element
        const div = document.createElement("div");
        div.textContent = `${task.toDoName} ${task.dateDue} ${task.priority}`;
        renderCurrentList.appendChild(div);
    });
}

export function renderProjects(toDoArray){
        const renderedProjectNames = new Set();
        const projectsOnSideMini = document.querySelector(".renderProjects");
        projectsOnSideMini.textContent = "";

        const mainProjectList = document.querySelector(".mainProjectList")

        toDoArray.forEach(task => {
            if(!renderedProjectNames.has(task.projName)){
                const renderedProjDiv = document.createElement("div");
                renderedProjDiv.classList.add("projectsMiniSide");
                renderedProjDiv.textContent = task.projName;

                const projDivRender = document.createElement("div");
                projDivRender.classList.add("underMainProjList");
                projDivRender.textContent = task.projName;

                projectsOnSideMini.appendChild(renderedProjDiv);
                mainProjectList.appendChild(projDivRender);

                renderedProjectNames.add(task.projName);
                

            }
        })
        
}
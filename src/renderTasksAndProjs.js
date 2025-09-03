

export function renderTasks(){
    const renderCurrentList = document.querySelector(".renderCurrentList");
    renderCurrentList.innerHTML = "";
    toDoArray.forEach(task => {
        const div = document.createElement("div");
        div.textContent = `${task.itemToDo} ${task.dueBy} ${task.priority}`;
        renderCurrentList.appendChild(div);
    });
}

export function renderProjects(){
        const renderProjects = document.querySelector(".renderProjects");
        renderProjects.textContent = "";

        const renderedProjects = Array.from(renderProjects.children).map(div => div.textContent);
        toDoArray.forEach(task => {
            if(!renderedProjects.includes(task.projName)){
                const renderedProjDiv = createElement("div");
                renderedProjDiv.classList.add("projects");
                renderedProjDiv.textContent = task.projName;

                const mainProjectDisplay = document.querySelector(".mainProjectList");
                mainProjectDisplay.appendChild(renderedProjDiv);

                renderProjects.appendChild(renderedProjDiv);
                renderedProjects.push(task.projName);

            }
        })
        
}
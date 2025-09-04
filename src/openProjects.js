export function openProjectIndividual(clickedProject, array){
    // if the some open dom name is === somethig in projectToDisplay
    // take that name + it's items and render it 

    const mainDisplay = document.querySelector(".showProject");
    mainDisplay.classList.add("showProject");
    mainDisplay.textContent = "";

    const renderDiv = document.createElement("div");
    renderDiv.classList.add("projectLeft")
    mainDisplay.appendChild(renderDiv);

    const projectNameMatch = array.filter((item => item.projName === clickedProject));
    // if so we are going to go through projectNameMatch and get .toDoName and render it
    projectNameMatch.forEach((item => {
        const displayTask = document.createElement("div");
        displayTask.classList.add("clickedProjectsToDo");
        displayTask.textContent = item.toDoName;
        renderDiv.appendChild(displayTask);
    }
    ));

}
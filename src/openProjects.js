export function openProjectIndividual(clickedProject, array){
    const clearCurrentList = document.querySelector(".renderCurrentList");
    clearCurrentList.textContent = "";
    const currentProjName = document.querySelector(".listName");
    currentProjName.textContent = clickedProject;

    const projectNameMatch = array.filter(item => item.projName === clickedProject);

    projectNameMatch.forEach(item => {
        const displayTask = document.createElement("div");
        displayTask.classList.add("clickedProjectsToDo");
        displayTask.textContent = item.toDoName;
        clearCurrentList.appendChild(displayTask);
    });
}
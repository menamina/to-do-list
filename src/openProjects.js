export function openProjectIndividual(clickedProject, array){
    const projectLeft = document.querySelector(".projectLeft");
    const deleteRight = document.querySelector(".projectRight");
    deleteRight.textContent = "";
    projectLeft.textContent = "";


    const projectNameMatch = array.filter(item => item.projName === clickedProject);

    projectNameMatch.forEach(item => {
        const displayTask = document.createElement("div");
        displayTask.classList.add("clickedProjectsToDo");
        displayTask.textContent = item.toDoName;
        projectLeft.appendChild(displayTask);
    });
}
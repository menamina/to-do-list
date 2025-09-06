

export function createToDo(projectName, toDoName, description, dateDue, priority){
    return {
        projName: projectName,
        toDoName: toDoName,
        description: description,
        dateDue: dateDue,
        priority: priority,
        completed: false,
        toggleCompleted() {
            this.completed = !this.completed;
        }
    };
}



export function createToDo(toDoName, description, dateDue, priority){
    return {
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

const tester = createToDo("h", "hhh", "12-30-20", "urgent");
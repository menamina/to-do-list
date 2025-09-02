function toDoList(toDoName, description, dateDue, priority){
    return {
        itemToDo: toDoName,
        descript: description,
        dueBy: dateDue,
        
        completed: false,
        toggle(){
            this.completed = !this.completed;
        }

    };
}
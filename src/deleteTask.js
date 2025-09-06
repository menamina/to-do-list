import { renderTasks } from "./renderTasksAndProjs";
import { saveTasks } from "./storage.js";

export function deleteTask(deleteBtn, task, array, domItem) {
    deleteBtn.addEventListener('click', () => {
        const index = array.indexOf(task);
        if (index > -1) array.splice(index, 1);
        domItem.remove();

        saveTasks(array);
    })
}

import { renderTasks } from "./renderTasksAndProjs";

export function deleteTask(deleteBtn, task, array, domItem) {
    deleteBtn.addEventListener('click', () => {
        const index = array.indexOf(task);
        if (index > -1) array.splice(index, 1);
        domItem.remove();
    })
}

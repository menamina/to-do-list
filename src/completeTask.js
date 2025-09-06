import { saveTasks } from "./storage.js";
export function markAsComplete(selectedBox, item, textToSlash, array){
    selectedBox.addEventListener('click', () => {
        item.toggleCompleted();

        if (item.completed){
        textToSlash.style.textDecoration = "line-through";
        } else {
            textToSlash.style.textDecoration = "none";
        }
        saveTasks(array);
        
    });
}
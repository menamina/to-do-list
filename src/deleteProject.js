import { renderHome } from "./renderHome";
import { saveTasks } from "./storage.js";

export function deleteProjectAndList(deleteBtn, projectDiv, projName, array) {
    deleteBtn.addEventListener('click', () => {

        for (let x = array.length - 1; x >= 0; x--){
            if (array[x].projName === projName) {
                array.splice(x, 1);
            }
        };

        projectDiv.remove();
        saveTasks(array);
        renderHome();
    });

}
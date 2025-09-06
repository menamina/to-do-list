export function markAsComplete(selectedBox, item, textToSlash){
    selectedBox.addEventListener('click', () => {
        item.toggleCompleted();

        if (item.completed){
        textToSlash.style.textDecoration = "line-through";
        } else {
            textToSlash.style.textDecoration = "none";
        }
        
    })
}
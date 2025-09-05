
export function renderHome(){
    const greetingDom = document.querySelector(".greeting");
    greetingDom.textContent = "";
    const now = new Date();
    const hour = now.getHours();

    let greeting = "";
    if (hour >= 5 && hour < 12){
        greeting = "Hi, good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Hi, good afternoon";
    } else {
        greeting = "Hi, good evening";
    };
    greetingDom.textContent = greeting;

    const underGreetingText = document.querySelector(".underGreeting");
    underGreetingText.textContent = "";
    underGreetingText.textContent = "here is your to-do list";

    const homeLabelforListNames = document.querySelector(".listName");
    homeLabelforListNames.textContent = "Your to do's";
}

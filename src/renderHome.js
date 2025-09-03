const { createElement } = require("react");

export function renderHome(){
    greetingDom = document.querySelector(".greeting");
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12){
        greeting = "Hi, good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Hi, good afternoon";
    } else {
        greeting = "Hi, good evening";
    };
    greetingDom.textContent = greeting;

    underGreetingText = document.querySelector(".underGreeting");
    underGreetingText.textContent = "here are your current to-do lists";
}

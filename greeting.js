const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const  USER_LC = "currentUser";     //LocalStorage 에서 받은 유저이름값
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LC, text);
}

//*event가 document로 default대로 실행되는데 그 defaultEvent를 막는다.
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LC);
    if(currentUser === null){
        // *유저가 없는 경우
        askForName();
    }else {
        // *유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();
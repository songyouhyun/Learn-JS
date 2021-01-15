const ToDoform = document.querySelector(".js-ToDoForm");
const ToDoInput = ToDoform.querySelector("input");
const ToDoList = document.querySelector(".js-ToDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    //create list
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text
    //apend = 추가하다.
    li.appendChild(delBtn);     //list에 delBtn 추가
    li.appendChild(span);       //list에 span 추가
    ToDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = ToDoInput.value;
    paintToDo(currentValue);
    ToDoInput.value = "";           //preventDefault로 막은걸 submit처럼 되게 하는거
}

function loadToDo(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos != null){
        //todolist가 비어있지 않다면

    }
}

function init(){
    loadToDo();
    ToDoform.addEventListener("submit", handleSubmit);
}
init();
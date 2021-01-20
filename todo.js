const ToDoform = document.querySelector(".js-ToDoForm");
const ToDoInput = ToDoform.querySelector("input");
const ToDoList = document.querySelector(".js-ToDoList");

const TODOS_LS = "toDos";

function filterFn(toDo){
    return toDo.id === 1;
}

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode
    ToDoList.removeChild(li);
    //******중요****** filter와 forEach는 list에 있는 모든 item을 위한 함수를 실행시키는 것
    const cleanToDos = toDos.filter(function(toDo){
        //'toDo의' id가 숫자인데 'li'의 id는 String이다.
        //모든 toDos가 'li'의 id와 같지 않을때
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

    //local storage에 저장하는 함수
function saveToDos() {
    /* local storage에는 JS의 데이터를 넣지 못함, 오직 string으로만
    왜냐하면 local storage는 있는 모든 JS의 data를 String으로 저장함
    그래서 object가 string이 되도록 만드는 함수 필요 */
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));      //JSON.stringify는 JS의 object를 string으로 바꿔줌
}

function paintToDo(text){
    //create list
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text
    //apend = 추가하다.
    li.appendChild(delBtn);     //list에 delBtn 추가
    li.appendChild(span);       //list에 span 추가
    li.id = newId;              //li에 id 추가
    ToDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    //이 경우 "toDos" array 안에 "toDoObj"를 넣음
    toDos.push(toDoObj);         //push를 써서 array안에 element를 삽입, push를 한 후엔 항상 호출
    saveToDos();                //local storage에 저장해주는 함수 호출
}



function handleSubmit(event){
    event.preventDefault();
    const currentValue = ToDoInput.value;
    paintToDo(currentValue);
    ToDoInput.value = "";           //preventDefault로 막은걸 submit처럼 되게 하는거
}

function loadToDos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos != null){
        //todolist가 비어있지 않다면 아무것도 일어나지 않음
        //JSON이란 'JavaScript Object Notation'의 준말
        //데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(todo){
            paintToDo(todo.text);
        });
    }
}

function init(){
    loadToDos();
    ToDoform.addEventListener("submit", handleSubmit);
}
init();
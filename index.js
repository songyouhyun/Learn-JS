const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
        title.classList.toggle(CLICKED_CLASS);
        // toggle = 클라스가 거기 있는지 체크해서 거기 있으면 add 해주고 아니면 remove 해주는 함수
}
function init() {
    title.addEventListener("click", handleClick);
}
init();
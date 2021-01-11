const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleClick);
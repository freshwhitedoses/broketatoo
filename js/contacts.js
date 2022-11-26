let button=document.querySelector(".massage")
let content=document.querySelector(".container")
button.addEventListener("click",()=>{
    if (content.style.display !== "block") {
        content.style.display = "block"; //Показываем элемент
    }
    else content.style.display = "none"; //Скрываем элемент
})
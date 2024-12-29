const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-Container');
function addTask()
{
    if(inputBox.value == '')
    {
        alert("Please add Task....!");
    }
    else
    {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("img");
        span.src = "https://images.vexels.com/media/users/3/154399/isolated/preview/a6cbb3c6caaf36bb7fd72b6a71e4aaf7-cross-check-mark-stroke-icon-by-vexels.png";
        li.appendChild(span);

    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
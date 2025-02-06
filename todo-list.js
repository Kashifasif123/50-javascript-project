const inputBtn = document.getElementById("input-btn");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBtn.value === ""){
        alert("you must Write Something here!");
}
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBtn.value;
         listContainer.appendChild(li);  
         let span = document.createElement("span");
         span.innerHTML = "x";
         li.appendChild(span);
         
    }
    inputBtn.value = "";
    saveData()
}
 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
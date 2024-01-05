let input = document.querySelector('#inputBox');
let addBtn = document.querySelector('#addBtn');
let listContainer = document.querySelector('#list-container');
let deleteIcon = document.querySelector('.fa-trash-o');



addBtn.addEventListener("click", function(){
    if(input.value === ''){
        alert("Input must contain text")
    } else {
        let li = document.createElement("li");
        li.innerText = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
})


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();
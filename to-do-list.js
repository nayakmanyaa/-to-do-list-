const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        // "\u00d7" will generate a cross icon in front of the list item
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = "";
    savaData();
}

listContainer.addEventListener("click", function(e){
    // target refers to the element on with event has to triggered to occur
    // tagName refers to the html tag which is triggered
    // tagName returns tag names in uppercase i.e, LI
    if(e.target.tagName === "LI"){
        // check class name
        e.target.classList.toggle("check");
        // toggle se agar element nhi hai to add ho jayega aur agar hai toh remove ho jayega
        savaData();
    } else if(e.target.tagName === "SPAN"){
        // parent element delete karna hai naki ye cross delete karna hai..aur parent element ke delete hone se cross toh delete ho hi jayega
        e.target.parentElement.remove();
        savaData();
    }
},false);

function savaData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
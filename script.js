const inputBox=document.getElementById("inputBox");
let  listContainer=document.getElementById("list-container")

function addTask(){

    if(inputBox.value ===" "){
        alert("Youmust write something");
    }
    else{  
    let li=document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li)
    let span=document.createElement('span');
    span.innerHTML="\u00d7"
    li.appendChild(span);
   
}   
    inputBox.value=" " 
    saveData();
}

listContainer.addEventListener("click",(e)=>{
           if(e.target.tagName ==="LI"){
            e.target.classList.toggle("checked");
            saveData();
           }
           else if(e.target.tagName==="SPAN")
           {
            e.target.parentElement.remove();
            saveData();
           }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showData();
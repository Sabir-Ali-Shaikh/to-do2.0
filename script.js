const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");
const clearAll = document.getElementById("clearall")
const active = document.getElementById("active") 
const all = document.getElementById("all") 
const clearCompleted = document.getElementById("clrcompleted") 
const completed = document.getElementById("completed") 

let alltasks=[]

addToDoButton.addEventListener("click", function () {
add()
});

let docTitle =document.title;
window.addEventListener("blur",()=>{
  document.title="come here :("
})

window.addEventListener("focus", ()=>{
  document.title=docTitle
})

// 

inputField.addEventListener("keyup",function(e){
    if(e.key==='Enter'){
        add()
    }
})


const add=()=>{
   
    if (!inputField.value.trim().length) {
      alert("You must write something!");
    } else {
        const obj={
            text:inputField.value,
            done:false,
            id:Date.now()
        }
        alltasks.push(obj)
        
        toDoContainer.innerHTML += `
      <div data-id=${obj.id} id="task">
          <span>${obj.text}</span>
            <button data-id=${obj.id} class="complete" id="btn">Done</button>
            <button data-id=${obj.id} class="Delete" id="btn">delete</button>
      </div>
      `;
        inputField.value = "";
} 
}

toDoContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('complete')){
     let key=e.target.parentElement.dataset.id
 
     let index= alltasks.findIndex(()=>Number(key))
 
     alltasks[index].done= true
     
     e.target.parentElement.classList.add('done')
    }
    if(e.target.classList.contains('Delete')){
     let key=e.target.parentElement.dataset.id
     let index= alltasks.findIndex(()=>Number(key))
     alltasks.splice(index,1)
     e.target.parentElement.remove()
    }
 })

clearAll.onclick=function(){
    toDoContainer.innerHTML=""
}

active.addEventListener('click',()=>{
    let task= document.querySelectorAll('#task')
    for (let i = 0; i < task.length; i++) {
      if(task[i].classList.contains('done')){
        task[i].style.display="none"  
      }
      else{
        task[i].style.display="flex"  
      }
    }

})

completed.addEventListener('click',()=>{
    let task= document.querySelectorAll('#task')
    for (let i = 0; i < task.length; i++) {
      if(task[i].classList.contains('done')){
        task[i].style.display="flex"  
      }
      else{
        task[i].style.display="none"  
      }
    }

})

all.addEventListener('click',()=>{
    let task= document.querySelectorAll('#task')
    for (let i = 0; i < task.length; i++) {
        task[i].style.display="flex"  
      }

})

clearCompleted.addEventListener('click',()=>{
    let task= document.querySelectorAll('#task')
    for (let i = 0; i < task.length; i++) {
      // console.log();
      if(task[i].classList.contains('done')){
        let id=task[i].dataset.id
        task[i].remove()
        let index= alltasks.findIndex(()=>Number(id))
        alltasks.splice(index,1)
      }
      
    }

})
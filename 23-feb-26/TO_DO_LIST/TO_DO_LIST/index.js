const addBtn=document.getElementById("addBtn");
const taskInput=document.getElementById("taskInput")
const taskList=document.getElementById("taskList");
addBtn.addEventListener("click", function addTask(){
const taskText=taskInput.value.trim();
if(taskText===""){
    alert("please enter a text");
    return;
}
const li=document.createElement("li");
const checkbox=document.createElement("input");
checkbox.type="checkbox";
const span=document.createElement("span");
span.className="task-text";
span.innerText=taskText;

checkbox.addEventListener("change",function (){
    span.classList.toggle("completed");
});
const actions=document.createElement("div");
actions.className="actions";
const editBtn=document.createElement("button");
editBtn.innerText="Edit";
editBtn.className="edit-btn";
editBtn.addEventListener("click",function (){
    const newTask=prompt("edit task",span.innerText);
    if(newTask !==null && newTask.trim()!==null){
        span.innerText=newTask;
    }
});
const deletBtn=document.createElement("button");
    deletBtn.innerText="Delete";
    deletBtn.className="delete-btn";
    deletBtn.addEventListener("click",function(){
        li.remove();
    })
    actions.appendChild(editBtn);
    actions.appendChild(deletBtn);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";

})
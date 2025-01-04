
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllbtn = document.getElementById('clearAllBtn');


const addTask = ()=>{
    //get the user value
    const taskText = taskInput.value.trim();

    //step 1 : create li and span elements

     // Step 1: Create li and span elements
     const listitem = document.createElement('li');
     const compltecheckbox = document.createElement('input');
     compltecheckbox.type ='checkbox';
     compltecheckbox.className = "complete-checkbox";
     compltecheckbox.addEventListener('change',()=>{
        listitem.classList.toggle('completed');
     })
     const taskSpan = document.createElement('span');
     taskSpan.className = 'taskText';
     taskSpan.textContent = taskText;

     //delete button
     const deletebtn = document.createElement('button');
     deletebtn.className = 'delete-btn';
     deletebtn.textContent = 'x';
     deletebtn.addEventListener('click',()=>{
        listitem.remove();
     })

     listitem.appendChild(compltecheckbox);
     listitem.appendChild(taskSpan);
     listitem.appendChild(deletebtn);
     taskList.appendChild(listitem);

     taskInput.value = "";
    
}
const clearAllTasks = ()=>{
    taskList.innerHTML = "";
}
addTaskBtn.addEventListener('click',addTask);
clearAllbtn.addEventListener('click',clearAllTasks);
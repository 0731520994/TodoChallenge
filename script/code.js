/*
let list = [
    
];


let sortItemButton = document.getElementById("#sorting");
let addItemButton = document.getElementById("add");


sorting.eventLister("click", (e) =>{
namelist.forEach(name) => {
e.preventDefault output.innerHTML += `
<li>${name}</li>`
}
   

let taskInput = document.getElementById("#input");
 
e.preventDefault()
if (listInput.value){
    listInput.push(listInput.value)
    listInput.value = " "
}else{
    display no
}
})
*/

const addItemButton = document.getElementById("#add");
const taskInput = document.getElementById("#nput");
const sortingButton = document.getElementById('#sorting');


let tasks = [

];


addingButton.addEventListener('click', function(){
  const task = taskInput.value
   
    tasks.push();
    


    taskInput.value = '';
  }
});


sortingButton.addEventListener('click', function() {
  sortTasks();
});


function validateTask(task) {
  if (task === '') {
    return false;
  }
  
  if (task.length < 4) {
    return false;
  }
  
  if (!/^[A-Z]/.test(task)) {
    return false;
  }
  
  return true;
}

  taskList.innerHTML = '';
 
  tasks.forEach(task => {
    submit(task);
  });




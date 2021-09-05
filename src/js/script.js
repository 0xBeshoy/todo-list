const addBtn = document.querySelector('#push');
const taskList = document.querySelector('#tasks');


addBtn.addEventListener('click', addItem);
taskList.addEventListener('click', removeItem);
taskList.addEventListener('click', completed);




function addItem(event){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("The Task is Empty")
    }
    else{
        const task = document.createElement('div');
        task.classList.add('task');

        const taskSpan = document.createElement('span');
        taskSpan.id = 'taskname';
        taskSpan.innerText = document.querySelector('#newtask input').value;
        task.appendChild(taskSpan);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        
        const deleteBtnIcon = document.createElement('i');
        deleteBtnIcon.classList.add('fa', 'fa-trash-alt');
        
        deleteBtn.appendChild(deleteBtnIcon);
        task.appendChild(deleteBtn)
        taskList.appendChild(task);

        document.querySelector('#newtask input').value = '';

    }
}

function removeItem(event) {
    if (event.target.classList.contains('delete')){ //event.target.classList.contains('fa-trash-alt') 
        if (confirm("Are you sure?")){
            var toDeleteTask = event.target.parentElement;
            taskList.removeChild(toDeleteTask)
            //console.log(toDeleteTask)
        }
    }
}


function completed(event) {
    if (event.target.id.includes('taskname')){
        event.target.classList.toggle('completed')
        }
    }




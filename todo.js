
     let h2=document.createElement('h2');
     h2.textContent='Todo App';
     
    

     let btn=document.createElement('button');
     btn.textContent='Add Task';
     btn.addEventListener('click', addTask)

     let input=document.createElement('input');
     input.id='taskInput';
     input.placeholder='Add a new task'

    let list=document.createElement('div');
    list.id="todoList";

    document.body.appendChild(h2)
    document.body.appendChild(input)
    document.body.appendChild(btn)
    document.body.appendChild(list)
   
    const todoList = document.getElementById('todoList');

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
        const taskElement = document.createElement('div');
        taskElement.innerHTML =`
          <span>${taskText}</span>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        `;
        todoList.appendChild(taskElement);
        taskInput.value = '';
    
      }
    }

    function editTask(button) {
      const taskSpan = button.parentNode.querySelector('span');
      const updatedTaskText = prompt('Edit task:', taskSpan.textContent);

      if (updatedTaskText !== null) {
        taskSpan.textContent = updatedTaskText.trim();
      }
    }

    function deleteTask(button) {
      const taskElement = button.parentNode;
      todoList.removeChild(taskElement);
    }
  
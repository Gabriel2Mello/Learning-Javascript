function mainFunction() {
    const inputNewTask = document.getElementById('input-new-task');
    const btnAddTask = document.querySelector('.btn-add-task');
    const tasks = document.querySelector('.tasks');

    clearInputAndFocus();
    function clearInputAndFocus() {
        inputNewTask.value = '';
        inputNewTask.focus();
    }    

    const verifyText = (text) => !text.trim();
    
    function createTask(taskText) { 
        if (verifyText(taskText)) return clearInputAndFocus();

        const li = createLi(taskText)        
        createDeleteButton(li);        
        tasks.appendChild(li);
        clearInputAndFocus();
        saveTasks();
    }

    function createLi(text) {
        const li = document.createElement('li');
        li.innerText = text
        return li;
    }

    function createDeleteButton(li) {
        li.innerText += ' ';
        const deleteTaskButton = document.createElement('button');
        deleteTaskButton.innerText = 'Delete'
        deleteTaskButton.setAttribute('class', 'delete')
        deleteTaskButton.setAttribute('title', 'Delete task')
        li.appendChild(deleteTaskButton);
    }

    // Save Tasks to the Browser
    function saveTasks() {
        const liTasks = tasks.querySelectorAll('li');
        const listTasks = [];

        for (let task of liTasks) {
            let taskText = task.innerText;
            taskText = taskText.replace('Delete', '').trim();
            listTasks.push(taskText);
        }

        const tasksJson = JSON.stringify(listTasks);
        localStorage.setItem('tasks', tasksJson);        
    }

    restoreSavedTasks();
    function restoreSavedTasks() {
        const tasks = localStorage.getItem('tasks');
        const listTasks = JSON.parse(tasks);

        for (let task of listTasks) {
            createTask(task);
        }
    }

    // Create Task Button Event
    btnAddTask.addEventListener('click', function() {        
        const task = inputNewTask.value;        
        createTask(task);
    });

    // Create Task Press 'Enter' Event
    inputNewTask.addEventListener('keypress', function(e) {        
        if (e.key === 'Enter') {
            createTask(inputNewTask.value);
        }
    });

    // Delete Task Button Event
    document.addEventListener('click', function(e) {
        const element = e.target;
        if (element.classList.contains('delete')) {
            element.parentElement.remove();
            saveTasks();            
        }
        inputNewTask.focus();
    })
}

mainFunction();
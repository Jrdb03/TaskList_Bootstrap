const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let count = 0;

const svgCheck = `<svg class="icon-svg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.42-6.446z"/></svg>`;
const svgDelete = `<svg class="icon-svg icon-delete" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>`;

function updateCounter() {
    taskCount.innerText = `${count} tareas`;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    count++;
    updateCounter();

    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `<span>${text}</span><div>${svgCheck}${svgDelete}</div>`;

    li.querySelector('.icon-delete').onclick = () => { li.remove(); count--; updateCounter(); };
    li.querySelector('.icon-svg:not(.icon-delete)').onclick = () => {
        li.querySelector('span').classList.toggle('text-decoration-line-through');
    };

    taskList.appendChild(li);
    taskInput.value = "";
}

addTaskBtn.onclick = addTask;
taskInput.onkeypress = (e) => { if(e.key === 'Enter') addTask(); };
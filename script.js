const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a task
function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return; // Prevent empty tasks

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Toggle completion on click
    li.querySelector('.task-text').addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete task on click
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = ""; // Clear input
}

addBtn.addEventListener('click', addTask);

// Allow adding tasks with the "Enter" key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

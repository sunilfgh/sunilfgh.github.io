// Get references to elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Remove task
function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

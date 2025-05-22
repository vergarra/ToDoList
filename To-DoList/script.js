const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    newTaskInput.value = ""; 
  }
}

function deleteTask(event) {
  const listItem = event.target.parentNode;
  taskList.removeChild(listItem);
}
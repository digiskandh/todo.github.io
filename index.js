const addTaskButton = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function cut() {
    const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create new task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("flex", "justify-between", "items-center", "m-1");

  const taskTextNode = document.createElement("p");
  taskTextNode.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("bg-red-100",  "p-1", "rounded-md" );
  deleteButton.innerHTML = "delete"
  deleteButton.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskTextNode);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  // Clear the input field after adding the task
  taskInput.value = "";
}

addTaskButton.addEventListener("click", () => {
 
  cut(); // Pass taskText as argument
});

// Fix the typo here to refer to 'taskInput'
taskInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    const taskText = taskInput.value.trim();
    cut(); // Pass taskText as argument
  }
});

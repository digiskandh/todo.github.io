const addTaskButton = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function cut() {
    const taskText = taskInput.value.trim();
  if (taskText === "") return;

 
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

 
  taskInput.value = "";
}

addTaskButton.addEventListener("click", () => {
 
  cut();
});

taskInput.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    const taskText = taskInput.value.trim();
    cut();
  }
});

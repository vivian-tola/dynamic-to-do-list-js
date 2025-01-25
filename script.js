document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
    if (taskText !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = taskText;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.className = "remove-btn";

      removeButton.onclick = () => {
        taskList.removeChild(newTask);
      };
      newTask.appendChild(removeButton);

      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

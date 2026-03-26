const addTask = document.getElementById("add-task");
addTask.addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const task = document.querySelector("task-container")
  const createTask = document.createElement('li')
  createTask.innerHTML = inputText
  task.appendChild(createTask)
})


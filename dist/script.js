const tasks = [
{
  title: "Get Groceries",
  id: "1",
  description: "Veggies, Fruits and Sugar" },

{
  title: "Service Bike",
  description: "Change engine oil",
  id: "2" },

{
  title: "Buy Basketball",
  description: "Buy a basketball of size 7",
  id: "3" }];



const todo = document.querySelector(".todo");

appendTasks(todo);

function appendTasks(container) {
  for (let task of tasks) {
    const taskDiv = document.createElement("div");
    const taskTitle = document.createElement("h4");
    taskTitle.innerHTML = task.title;
    const taskDescription = document.createElement("p");
    taskDescription.innerHTML = task.description;
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);
    taskDiv.classList.add("task");
    taskDiv.setAttribute("draggable", true);
    taskDiv.setAttribute("id", task.id);
    container.appendChild(taskDiv);
  }
}

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
}
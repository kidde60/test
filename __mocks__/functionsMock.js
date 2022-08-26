import Task from "../src/Task.js";
import LocalStorage from "./localStorage.js";

export const localstorage = new LocalStorage();

export const editTask = (task, taskIndex, newDescription) => {
  task.description = newDescription;
};

export const editButton = (task, taskIndex, newDescription) => {
  document.querySelectorAll('.edit').forEach((el) => {
    el.addEventListener('click', editTask(task, taskIndex, newDescription));
  });
};

/* export const checkTask = () => {

} */

export const checkBtn = () => {
  document.querySelectorAll('.check-input').forEach((el) => {
    el.addEventListener('click', checkTask);
  });
}

export const tasksDisplay = () => {
  document.body.innerHTML = '<div class="list"></div>';
  localstorage.getAllItems().forEach((task) => {
    const oneTask = document.createElement('div');
    oneTask.classList.add('list-item');
    oneTask.innerHTML = `
    <label for="${task.index}" class="label">
      <input type="checkbox"  ${task.completed} id="${task.index}" class="check-input">
      <p class="parahraph ${task.completed}">${task.description}</p>
    </label>

    <div class="action">
      <button class="edit" id=${task.index} ">Edit</button>
      <button class="delete"  id=${task.index}">delete</button>
    </div>`;

    document.querySelector('.list').appendChild(oneTask);
  });
};

export const addTask = (task) => {
  localstorage.setItem(task);
}

export const removeTask = (index) => {
  localstorage.taskArray.splice(index, 1);


  localstorage.taskArray.forEach((item, i) => {
    item.index = i + 1;
  })
}

/* function checkTask(event) {
  const taskName = event.target.parentElement.lastElementChild;
  if (event.target.checked) {
    taskName.classList.add('checked');
    localTasks[event.target.id].completed = true;
  } else {
    taskName.classList.remove('checked');
    localTasks[event.target.id].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(localTasks));
} */
const model = {
  tasks: [],

  addTask: function (task) {
    this.tasks.push(task);
  },
  deleteTask: function (task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  },
};

const controller = {
  init: function () {
    view.render();
  },
  handleAddTask: function (e) {
    e.preventDefault();
    const input = document.getElementById('task-input');

    model.addTask(input.value);
    view.render();
    input.value = '';
  },
  handleDeleteTask: function (idX) {
    model.deleteTask(model.tasks[idX]);
    view.render();
  },
};

const view = {
  render: function () {
    const addButton = document.getElementById('addTask');

    addButton.addEventListener('click', controller.handleAddTask);
    const ul = document.getElementById('taskList');
    ul.innerHTML = '';
    model.tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task;
      const button = document.createElement('button');
      button.textContent = 'X';
      button.addEventListener(
        'click',
        controller.handleDeleteTask.bind(null, index)
      );

      li.appendChild(button);
      ul.appendChild(li);
    });
  },
};

controller.init();

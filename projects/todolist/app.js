const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];

(function(arrOfTasks) {
  const objectOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTheme = localStorage.getItem('app_theme') || 'default';

  // Elements UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms.addTask;
  const inputTitle = form.title;
  const inputBody = form.body;
  const themeSelect = document.getElementById('themeSelect');

  renderAllTasks(objectOfTasks);
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeleteHandler);
  themeSelect.addEventListener('change', onThemeSelectHandler);

  setTheme(lastSelectedTheme);

  /**
   * Рендерим на страницу данные из объектов в список
   * @param {Object} tasksList 
   */
  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error('Список задач не передан!');
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(task => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

   /**
   * Создаем тег LI и наполняем данными о конкретной задаче
   * @param {String} _id
   * @param {String} title
   * @param {String} body
   * @return li
   */
  function listItemTemplate({_id, title, body}) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');
    li.setAttribute('data-task-id', _id);

    addTitle(li, title);
    addDeleteButton(li);
    addText(li, body);

    return li;
  }

  /**
   * Создаем тег заголовка и добавляем в него содержимое
   * @param {Element} li 
   * @param {String} title 
   */
  function addTitle(li, title) {
    const span = document.createElement('span');
    span.textContent = title;
    li.appendChild(span);
  }

  /**
   * Создаем кнопку удаления задачи
   * @param {Element} li  
   */
  function addDeleteButton(li) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
    button.textContent = 'Delete';
    li.appendChild(button);
  }

  /**
   * Создаем тег блока текста и добавляем в него содержимое
   * @param {Element} li 
   * @param {String} body 
   */
  function addText(li, body) {
    const p = document.createElement('p');
    p.classList.add('mt-2', 'w-100');
    p.textContent = body;
    li.appendChild(p);
  }

  /**
   * Обработчик события отправки формы
   * @param SubmitEvent e 
   */
  function onFormSubmitHandler(e) {
    e.preventDefault();

    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert('Введите title и body');
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    addNewTaskToLIst(task);
  }

  /**
   * Создаем новую задачу и добавляем ее в объект задач
   * @param {String} title 
   * @param {String} body 
   * @return newTask
   */
  function createNewTask(title, body) {
    const newTask = {
      _id: `task-${Math.random()}`,
      title,
      body,
      complited: false,
    };

    objectOfTasks[newTask._id] = newTask;

    // Копия объекта
    return {...newTask};
  }

  /**
   * Добавляем новую задачу в DOM и очищаем форму
   * @param {Object} task 
   */
  function addNewTaskToLIst(task) {
    console.log(typeof task);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement('afterbegin', listItem);
    form.reset();
  }

  /**
   * Обработчик удаления задачи
   * @param {Object} target 
   */
  function onDeleteHandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      deleteTask(parent);
    }
  }

  /**
   * Удаляем задачу при получении подтверждения
   * @param {Object} task 
   * @return Boolean
   */
  function deleteTask(task) {
    const title = task.querySelector('span').textContent;
    const isConfirm = confirm(`Удалить задачу "${title}"?`);

    if (isConfirm) {
      task.remove();
      delete objectOfTasks[task.dataset.taskId];
    }

    return isConfirm;
  }

  /**
   * Обработчик изменения select-а темы оформления
   * @return Boolean
   */
  function onThemeSelectHandler() {
    const selectedTheme = themeSelect.value;
    const isConfirm = confirm(`Изменить тему оформления на ${selectedTheme}?`);

    if (isConfirm) {
      setTheme(selectedTheme);
      lastSelectedTheme = selectedTheme;
      localStorage.setItem('app_theme', selectedTheme);
    } else {
      themeSelect.value = lastSelectedTheme;
    }

    return isConfirm;
  }

  /**
   * Устанавливаем css переменные согласно выбранной теме оформления
   * @param {String} name 
   */
  function setTheme(name) {
    const selectedThemeObject = themes[name];

    Object.entries(selectedThemeObject).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);

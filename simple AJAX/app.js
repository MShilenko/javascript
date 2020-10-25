// ! GET и POST по простому на AJAX все вместе
const btnGetUsers = document.querySelector('.btn-get-users');
const addUserForm = document.forms.addUser;
const myHttp = http();
let usersBlock = document.getElementById('users');
btnGetUsers.addEventListener('click', e => {
  getUsers((error, response) => {
    if (error) {
      alert(error);
      return;
    }
    displayUsers(response);
  });
});
addUserForm.addEventListener('submit', e => {
  e.preventDefault();
  const request = setRequest();
  if (request) {
    createUser(request, (error, response) => {
      if (error) {
        alert(error);
        return;
      }
      const newUserBlock = setUserBlock(response);
      usersBlock.insertAdjacentElement('afterbegin', newUserBlock);
    });
  }
});
usersBlock.addEventListener('click', (e) => showMore(e));

/**
 * POST и GET запросы
 */
function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          // Не 200-ые заголовки в ответе
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error: ${xhr.status}`, xhr);
            return;
          }

          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, cb, headers) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          // Не 200-ые заголовки в ответе
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error: ${xhr.status}`, xhr);
            return;
          }

          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

/**
 * Отправляем запрос и получаем объект пользователей
 * @param {Object} cb 
 */
function getUsers(cb) {
  myHttp.get('https://jsonplaceholder.typicode.com/users', cb);
}

/**
 * Отправляем запрос и получаем объект нового пользователя
 * @param {Object} body 
 * @param {Function} cb 
 */
function createUser(body, cb) {
  myHttp.post(
    'https://jsonplaceholder.typicode.com/users',
    body,
    cb,
    { 'Content-type': 'application/json; charset=UTF-8' },
  );
}

/**
 * Создаем тело запроса на добавление нового пользователя
 * @return {Object}
 */
function setRequest() {
  let validateForm = validate(addUserForm);

  if (validateForm.error) {
    alert(validateForm.error);
    return false;
  }

  return {
    name: addUserForm.name.value,
    email: addUserForm.email.value,
    phone: addUserForm.phone.value,
    website: addUserForm.website.value,
  }
}

/**
 * Простая валидация формы
 * @param {object} form 
 * @return {object}
 */
function validate(form) {
  let error = '';
  [...form.elements].forEach(element => {
    if (!element.value && element.type !== 'submit') {
      error += `Field ${element.name} is required! \n`;
    }
  });

  return {
    error: error
  };
}

/**
 * Выводим информацию о пользователях на страницу
 * @param {Object} users 
 */
function displayUsers(users) {
  if (!users) {
    throw new Error('Не переданы данные о пользователях!');
  }

  let fragment = document.createDocumentFragment();
  users.forEach(user => {
    const userBlock = setUserBlock(user);
    fragment.appendChild(userBlock);
  });

  usersBlock.appendChild(fragment);
}

/**
   * Создаем и наполняем данными карточку пользователя
   * @param {Object} user 
   * @return {Object} cardBlock 
   */
function setUserBlock(user) {
  const block = createBlock(['col-sm-6']);

  const cardBlock = createBlock(['card', 'mt-2']);
  block.appendChild(cardBlock);

  const cardBodyBlock = createBlock(['card-body']);
  cardBlock.appendChild(cardBodyBlock);

  const titleBlock = createBlock(['card-title'], 'h5');
  titleBlock.innerHTML = `${user.name} | <a href="#" class="more">Подробнее</a>`;
  cardBodyBlock.appendChild(titleBlock);

  const infoBlock = createBlock(['info', 'd-none']);
  let info = setInfo(user);
  infoBlock.appendChild(info);

  cardBodyBlock.appendChild(infoBlock);

  return block;
}

/**
 * Функция для создания типовых блоков
 * @param {Array} classes 
 * @param {String} tag 
 * @return {Object} block
 */
function createBlock(classes = [], tag = 'div') {
  let block = document.createElement(tag);
  if (classes && typeof Array.isArray(classes)) {
    classes.forEach(currentClass => block.classList.add(currentClass));
  }

  return block;
}

/**
 * Создаем параграфы и наполняем их дынными
 * @param {Object} user 
 * @return {Object} fragment 
 */
function setInfo(user) {
  const fragment = document.createDocumentFragment();

  Object.keys(user).forEach(key => {
    let info = addParagraph(key, user[key])
    fragment.appendChild(info);
  });

  return fragment;
}

/**
 * Создаем и наполняем параграф
 * @param {String} key 
 * @param {String} value 
 * @param {String} parentKey 
 * @return {String} fragment
 */
function addParagraph(key, value, parentKey = '') {
  const fragment = document.createDocumentFragment();

  if (typeof value === 'object') {
    Object.keys(value).forEach(innerKey => {
      const p = addParagraph(innerKey, value[innerKey], key);
      fragment.appendChild(p);
    });

    return fragment;
  }

  const item = createBlock(['card-text', 'p']);
  item.innerHTML = `<span class="font-weight-bold">${parentKey ? parentKey + '.' + key : key}:</span> ${value}`;

  fragment.appendChild(item);

  return fragment;
}

/**
 * Выводим на страницу всю информацию
 * @param {*} e 
 */
function showMore(e) {
  if (e.target.classList.contains('more')) {
    const userCard = e.target.closest('.card');
    const cardInfo = userCard.querySelector('.info');

    cardInfo.classList.toggle('d-none');
  }
}



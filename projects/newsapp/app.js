// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = 'b6c7eb560d764cff87e56e5576265056';
  const apiUrl = 'https://news-api-v2.herokuapp.com';

  return {
    topHeadlines(country = 'ru', category = 'technology', cb) {
      http.get(`${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, cb);
    },
    everthing(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

const form = document.forms.newsControls;
const countrySelect = form.elements.country;
const categorySelect = form.elements.category;
const searchInput = form.elements.search;

form.addEventListener('submit', e => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
  loadNews();
});

/**
 * Загружаем ТОП новостей
 */
function loadNews() {
  showPreloader();
  const country = countrySelect.value;
  const category = categorySelect.value;
  const searchText = searchInput.value;

  if (searchText) {
    newsService.everthing(searchText, onGetResponse);
  } else {
    newsService.topHeadlines(country, category, onGetResponse);
  }
}

/**
 * Обработка при загрузке новостей с сервера
 * @param {Object} error 
 * @param {Object} result 
 */
function onGetResponse(error, result) {
  removePreloader();

  if (error) {
    showMessage(error, 'error-msg');
    return;
  }

  if (!result.articles.length) {
    showMessage('News not found', 'error-msg');
    return;
  }

  renderNews(result.articles);
}

/**
 * Выводим новости на страницу
 * @param {Object} news 
 */
function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = '';

  news.forEach(newsItem => {
    const element = newsItemTemplate(newsItem);
    fragment += element;
  });

  newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

/**
 * Сбор верстки и заполнение данными отдельной новости
 * @param {Object}
 */
function newsItemTemplate({ urlToImage, title, url, description }) {
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}">
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Очищаем блок новостей
 * @param {Object} container 
 */
function clearContainer(container) {
  let child = container.lastElementChild;

  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;;
  }
}

/**
 * Выводим сообщение
 * @param {String} msg 
 * @param {String} type 
 */
function showMessage(msg, type = 'success') {
  M.toast({
    html: msg,
    classes: type
  });
}

/**
 * Добавляем прогресс-бар
 */
function showPreloader() {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    `
  );
}

/**
 * Удаляем прогресс-бар
 */
function removePreloader() {
  const loader = document.querySelector('.progress');

  if (loader) {
    loader.remove();
  }
}
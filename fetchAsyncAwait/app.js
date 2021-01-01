async function getPost(id) { // async - всегда возвращает Promise + асинхронное выполнение, выполнение по очереди(а не паралелльно) цепочки из .then
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json()); // await - ждет выполнение предыдущих шагов, далее выполняет свою часть и возвращает результат
  return response;
}

async function getPostComments(post) {
  const { id } = post;
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(response => response.json());
  return { post, comments: response }; // передаем объект post по цепочке дальше + объект response передаем как comments, получив туда комменты по запросу
}

async function getUserCreatedPost(data) {
  const { post: { userId } } = data;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => response.json());
  return { ...data, user: response }; // деструктурируем data(получаем отдельные объекты post, comments) и  ответ по запросу записываем как user
}

getPost(3)
  .then(post => getPostComments(post)) // получили пост
  .then(data => getUserCreatedPost(data)) // получили пост и комментарии для поста
  .then(fullData => console.log(fullData)) // получили все данные(пост, комментарии, юзера)
  .catch(err => console.log(err)) // единый обработчик ошибок всех шагов
  .finally(() => console.log('finally')); // выполняется всегда, независимот от наличия ошибок

// Единый вызов Promise(нельзя передавать данные по цепочке, только если заранее известны аргументы)
// Promise.all(
//   getPost(1),
//   getPostComments(1),
//   getUserCreatedPost(1)
// )
//   .then(fullData => console.log(fullData))
//   .catch(err => console.log(err));
export let token;

const API_URL_TASK = "https://wedev-api.sky.pro/api/kanban";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";

export async function getTasks({user}) {
  // const userData = JSON.parse(localStorage.getItem("user"));
  token = user.token;

  // return fetch(API_URL, {
  // method: "GET",
  const response = await fetch(API_URL_TASK, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // .then((response) => {
  //   return response.json();
  const data = await response.json();
  return data;
}

export async function postTask({ text }) {
  const response = await fetch(API_URL_TASK, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      text,
    }),
  });
    if (response.status === 400) {
      alert("Ошибка загрузки")
      throw new Error("Ошибка загрузки");
    }
  const data = await response.json();
  return data;
}

export async function getUsers({ users }) {
  const response = await fetch(API_URL_USER, {
    method: "GET",
    body: JSON.stringify({
      users,
    }),
  });
  const data = await response.json();
  return data;
}

export async function loginUser({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  if (response.status === 400) {
    alert("Введены неверные логин или пароль");
    throw new Error("Введены неверные логин или пароль");
  }
  const data = await response.json();
  return data;
}

export async function regUser({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    if (response.status === 400) {
      alert("Пользователь с таким логином уже существует");
      throw new Error("Пользователь с таким логином уже существует");
    }
  const data = await response.json();
  return data;
}

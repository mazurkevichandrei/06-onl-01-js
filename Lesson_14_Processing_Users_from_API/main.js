const createUserBtnElement = document.querySelector(`.create-user`)
const getAllUsersBtnElement = document.querySelector(`.get-all-users`);
const getUserBtnElement = document.querySelector(`.get-user`);
const updateUserBtnElement = document.querySelector(`.update-user`);
const deleteUserBtnElement = document.querySelector(`.delete-user`);

const userIdElement = document.querySelector(`.user-id`);

const userPhoneElement = document.querySelector(`.phone-value`);
const userNameElement = document.querySelector(`.name-value`);
const userEmailElement = document.querySelector(`.email-value`);
const userAvatarElement = document.querySelector(`.avatar-value`);

const formElement = document.querySelector(`.form`);
const userFormElement = document.forms.user;

createUserBtnElement.addEventListener(`click`, () => {
  const userData = getUserFromForm();

  const p = createUser(userData);
  proceedRequest(p)
    .then(() => { resetUserForm() });
});
getAllUsersBtnElement.addEventListener(`click`, () => {
  const p = readUsers()
  proceedRequest(p);
});
getUserBtnElement.addEventListener(`click`, () => {
  const userId = userIdElement.value;
  const p = readUser(userId)
  proceedRequest(p)
    .then(userData => {
      userPhoneElement.value = userData.phone;
      userNameElement.value = userData.name;
      userEmailElement.value = userData.email;
      userAvatarElement.value = userData.avatar;
    });
});
updateUserBtnElement.addEventListener(`click`, () => {
  const userId = userIdElement.value;
  const userData = getUserFromForm();
  
  const p = updateUser(userId, userData)
  
  proceedRequest(p)
    .then(() => { resetUserForm()})
    .then(()=>updateUserInTable(userId,userData))
});
deleteUserBtnElement.addEventListener(`click`, () => {
  const userId = userIdElement.value;
  const p = deleteUser(userId)
  proceedRequest(p);
});

function getUserFromForm() {
  const userData = {};
  const formData = new FormData(userFormElement)
  
  for (let [key, val] of formData.entries()) {
    userData[key] = val; 
  }
  
  return userData;
}

function resetUserForm() {
  formElement.reset();
}

function proceedRequest(promise) {
  return promise
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      return data;
    })
}

// CRUD
function createUser(newUserData) {
  //return fetch(`https://605b63ff27f0050017c070d1.mockapi.io/api/v1/users`, {
    return fetch(`https://605ef6cfe96e5c0017407fad.mockapi.io/users`, {
    method: 'POST',
    body: JSON.stringify(newUserData),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

function readUsers() {
  //return fetch(`https://605b63ff27f0050017c070d1.mockapi.io/api/v1/users`)
  return fetch(`https://605ef6cfe96e5c0017407fad.mockapi.io/users`)
}

function readUser(userId) {
  //return fetch(`https://605b63ff27f0050017c070d1.mockapi.io/api/v1/users/${userId}`)
  return fetch(`https://605ef6cfe96e5c0017407fad.mockapi.io/users/${userId}`)
}

function updateUser(userId, newUserData) {
  //return fetch(`https://605b63ff27f0050017c070d1.mockapi.io/api/v1/users/${userId}`, {
    return fetch(`https://605ef6cfe96e5c0017407fad.mockapi.io/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(newUserData),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

function deleteUser(userId) {
  //return fetch(`https://605b63ff27f0050017c070d1.mockapi.io/api/v1/users/${userId}`, {
    return fetch(`https://605ef6cfe96e5c0017407fad.mockapi.io/users/${userId}`, {
    method: 'DELETE',
  })
}

function loadUsersToTable() {
  //fetch(`https://605b63ff27f0050017c070d1.mockapi.io/api/v1/users`)
  fetch('https://605ef6cfe96e5c0017407fad.mockapi.io/users')
      .then(data => {
          return data.json()
      })
      .then(data => {
          console.log(data)
          return data
      })
      .then(data => {
          data.forEach(userData => publisToTable(userData))
      })
}
const userTableElement = document.querySelector('.users-table');
const userStringElement = document.querySelector('.user-string');

function publisToTable(userData) {
  //console.log(userData)
  const userString = userStringElement.cloneNode(true);
  userString.classList.add('inserted')
  const stringItems = userString.querySelectorAll('.user-string-cell');
  stringItems.forEach(item => item.textContent = '')
  stringItems[0].textContent = userData.id
  stringItems[1].textContent = userData.name
  stringItems[2].textContent = userData.phone
  stringItems[3].textContent = userData.email
  const userFoto = document.createElement('img')
  userFoto.src = userData.avatar
  stringItems[4].append(userFoto)
  userTableElement.append(userString)
}
loadUsersToTable()

function updateUserInTable(userId, userData) {
  console.log(userId)
  const insertedUserElement = document.querySelectorAll('.inserted')
  insertedUserElement.forEach((item) => {
      const idElement = item.querySelector('.user-string-cell')
      if (idElement.textContent == userId) {
          const cellsToUpdateElements = item.querySelectorAll('.user-string-cell')
          cellsToUpdateElements[1].textContent = userData.name
          cellsToUpdateElements[2].textContent = userData.phone
          cellsToUpdateElements[3].textContent = userData.email
      }
  })
}
//Button Load Users Data
const loadBtnElement = document.querySelector('.load_users');
//Users Container
const usersContainerElement = document.querySelector('.users_container');
//User Modal Image
const userModalImageElement = document.querySelector('.modal_user_image');
//Modal
const modalElement = document.querySelector('.modal');
//Modal Info 
const modalInfoElement = document.querySelector('.modal_info');
//Close Modal Button
const closeModalElement = document.querySelector('.close_modal_window');
//Select Count Users
const selectCountElement = document.querySelector('.users_per_page');


//Button Load Users Data Scenario:
function loadUsersData() {
    const dataToClean = document.querySelectorAll('.user_item')
    dataToClean.forEach((item) => item.remove())
    const users_per_page = selectCountElement.value;
    localStorage.setItem('countUsers', users_per_page);
    fetch(`https://reqres.in/api/users?per_page=${users_per_page}`)
        .then((data) => {
            let responseData = data.json()
            return responseData
        })
        .then((responseData) => {
            let usersData = responseData.data
            publishUser(usersData)
        })
}

function publishUser(userData) {
    //for test
    //console.log(userData)
    userData.forEach((item) => renderUser(item))
}

function renderUser(user) {
    const userItemElement = document.createElement('div')
    userItemElement.classList.add('user_item')
    userItemElement.dataset.id = user.id

    const userName = document.createElement('p')
    userName.textContent = user.first_name + ' ' + user.last_name
    userName.classList.add('user_name')

    // const userEmail = document.createElement('p')
    // userEmail.textContent = user.email

    const userImage = document.createElement('img')
    userImage.src = user.avatar

    const clickedArea = document.createElement('div')
    clickedArea.classList.add('user_item_link')

    userItemElement.append(userName)
    // userItemElement.append(userEmail)
    userItemElement.append(userImage)
    userItemElement.append(clickedArea)
    usersContainerElement.append(userItemElement)

    //for test
    //console.log(user)
    //User Item Element add Event
    clickedArea.addEventListener('click', loadClickedUserData);
}

//User Item Click Scenario:
function loadClickedUserData(evt) {
    //Define Clicked user ID for use it in Fetch
    const elementId = evt.target.parentElement.dataset.id
    fetch(`https://reqres.in/api/users/${elementId}`)
        .then((data) => {
            let responseUserItemData = data.json()
            return responseUserItemData
        })
        .then((responseUserItemData) => {
            let userDataDetailed = responseUserItemData.data
            showUserInfoDetailed(userDataDetailed)
        })
}

function showUserInfoDetailed(user) {
    userModalImageElement.src = user.avatar

    const userFullName = document.createElement('p')
    userFullName.classList.add('del_flag')
    userFullName.textContent = `FULL NAME: ${user.first_name} ${user.last_name}`
    
    const userId = document.createElement('p')
    userId.classList.add('del_flag')
    userId.textContent = `USER ID: ${user.id}`
    
    const userEmail = document.createElement('p')
    userEmail.classList.add('del_flag')
    userEmail.textContent = `E-MAIL: ${user.email}`

    modalInfoElement.append(userFullName)
    modalInfoElement.append(userId)
    modalInfoElement.append(userEmail)

    modalElement.classList.add('show_modal')
}



function closeModalWindow() {
    modalElement.classList.remove('show_modal')
    const fieldsToCleanData = document.querySelectorAll('.del_flag')
    //for test
    //console.log(fieldsToCleanData)
    fieldsToCleanData.forEach((item) => item.remove())
}

//Button Load Users Data
loadBtnElement.addEventListener('click', loadUsersData);
//Close Modal
closeModalElement.addEventListener('click', closeModalWindow)
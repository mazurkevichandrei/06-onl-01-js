//ADD USER BUTTON
const btnAddUser = document.querySelector('.add-user');
//FORM FOR INPUT
const form = document.querySelector('.modal');
//FORM FIELDS
const inpt = document.querySelectorAll('input')
//FORM CLOSE BUTTONS
const btnClose = document.querySelectorAll('.close');

//Action Show_element
function showElement (elm){
    elm.style.display='block'    
}
//Action Hide_element
function hideElement(elm){
    elm.style.display='none'
}

//Scenario for ADD_USER Button
function btnAddUserAction(){
    showElement(form)
    btnAddUser.style.backgroundColor='green';
}
//Scenario for CLOSE Buttons
function btnCloseAction(){
    hideElement(form)
    btnAddUser.style.backgroundColor='';
    for(let item of inpt){
        item.value=('Empty for Test')
    }
}

//Listeners for Buttons
btnAddUser.addEventListener('click',btnAddUserAction)
for(let item of btnClose){
    item.addEventListener('click', btnCloseAction)
}

//ADD USER BUTTON
const btnAddUser = document.querySelector('.add-user');
//FORM FOR INPUT
const form = document.querySelector('.modal');
//FORM FIELDS
const inpt = document.querySelectorAll('.popap-form > label > input')
//FORM CLOSE BUTTONS
const btnClose = document.querySelectorAll('.close');

//Action Show_element
function showElement (elm){
    elm.style.display='block'
    setTimeout(()=>elm.style.opacity='1',1)    
}
//Action Hide_element
function hideElement(elm){
    elm.style.opacity='0'
    setTimeout(()=>elm.style.display='none',500)
}

//Scenario for ADD_USER Button
function btnAddUserAction(){
    showElement(form)
    btnAddUser.style.backgroundColor='green';
    btnAddUser.style.color='#fff';
}
//Scenario for CLOSE Buttons
function btnCloseAction(){
    hideElement(form)
    btnAddUser.style.backgroundColor='';
    btnAddUser.style.color='#000';
    setTimeout(function(){
        for(let item of inpt){
        item.value=('')
        }
    } ,500)
}

//Listeners for Buttons
btnAddUser.addEventListener('click',btnAddUserAction)
for(let item of btnClose){
    item.addEventListener('click', btnCloseAction)
}

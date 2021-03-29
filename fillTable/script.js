let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: '40'
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: '54'
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: '24'
    }
];

//ADD USER BUTTON
const btnAddUser = document.querySelector('.add-user');
//FORM FOR INPUT
const form = document.querySelector('.modal');
//FORM FIELDS
const inpt = document.querySelectorAll('.popap-form > label > input')
//FORM CLOSE BUTTONS
const btnClose = document.querySelectorAll('.close');
//FORM OK BUTTON
const okButton = document.querySelector('.ok');
//FORM Customers
const customers = document.querySelector('.customers');
//Customer item
const customerItem = document.querySelector('.customers-item')


//Clean input fields
function cleanInput(){
    for(let item of inpt){
        item.value=('')
        }
}
//Remove customer item
function delCust(e) {
    const elementToDel = e.target.parentElement.parentElement
    elementToDel.style.transform = 'scaleY(1.4)'
    setTimeout(() => elementToDel.style.transform = 'scaleY(0)', 300)
    setTimeout(() => elementToDel.style.fontSize = '0', 300)
    setTimeout(() => e.target.remove(), 300)
    setTimeout(() => elementToDel.remove(), 600)

    //Remove element from DATA Array
    const elementId = elementToDel.getAttribute('id')
    const indexToDel = data.findIndex((item) => item.id == elementId)
    data.splice(indexToDel, 1)
    console.log(data)

    //Remove from Storage
    localStorage.removeItem(elementId)
}

//Add Delete Button to element
function addDelBtn(element) {
    const delBtn = document.createElement('button');
    delBtn.textContent = ('X')
    delBtn.classList.add('delete_customer');

    delBtn.addEventListener('click', delCust)

    element.textContent = ('')
    element.append(delBtn)
}
//Push to DATA
function pushToData(custFName, custLName, custAge, idCounter) {
    data.push({
        firstName: custFName,
        lastName: custLName,
        age: custAge,
        id: idCounter
    })
}
//Publish new Customer
let idCounter=1001; //idCounter for Data
function publishCustomer(custFName, custLName, custAge) {
    //Customer Template
    const customerTemplate = customerItem.cloneNode(true)
    customerTemplate.classList.remove('customers-item_header')
    //Temlate cells
    const customerTemplateFName = customerTemplate.querySelector('.item_firstname')
    const customerTemplateLName = customerTemplate.querySelector('.item_lastname')
    const customerTemplateAge = customerTemplate.querySelector('.item_age')
    const customerDeleteBtn = customerTemplate.querySelector('.item_delete');

    //Set data to Template cells
    customerTemplateFName.textContent = custFName;
    customerTemplateLName.textContent = custLName;
    customerTemplateAge.textContent = custAge;
    //Add data of new Customer to Table
    addDelBtn(customerDeleteBtn)
    customerTemplate.setAttribute('id', idCounter++)
    customers.append(customerTemplate)
}

//Initial Adding from data to table --!!First action during Loading Page!!
function initialLoad() {
    //Check is Initial Load or Storage has already Data inserted manually:
    if (localStorage.key(0)) {
        //Clean DATA for further rewrite
        data = []
        //For Sort
        function compareNumbers(a, b) {
            return a - b;
        }
        //Get all Keys from Storage..
        const storageKeys = Object.keys(localStorage)
        //..and Sort it
        storageKeys.sort(compareNumbers)
        console.log(storageKeys)
        //Get Data from Storage(Initial+Inserted Manually)and write to DATA and Table:
        for (let key of storageKeys) {
            //Get value by KEY:
            const storageElement = JSON.parse(localStorage.getItem(key))
            const objId = {
                id: key
            }
            let objFromStorage = Object.assign(storageElement, objId)
            //Define argument's values for next transmition it to pushToData() and publishCustomer()
            let {firstName, lastName, age, id} = objFromStorage
            idCounter = id
            //Rewrite DATA:
            pushToData(firstName, lastName, age, idCounter)
            //Publish to Table
            publishCustomer(firstName, lastName, age)
        }
    } else {
        //Processing initial DATA:

        data.forEach(function(item, i, data) {
            const custFName = item.firstName;
            const custLName = item.lastName;
            const custAge = item.age;
            //1.Add ID for each DATA Element
            item.id = idCounter

            //2.Write DATA to Storage
            const dataToStorage = {
                firstName: custFName,
                lastName: custLName,
                age: custAge,
            }
            const serialdataToStorage = JSON.stringify(dataToStorage)
            localStorage.setItem(idCounter, serialdataToStorage)
            //3.Publish to Table
            publishCustomer(custFName, custLName, custAge)
        })
    }
    console.log(data)
}

//Action Show_element
function showElement(elm) {
    elm.style.display = 'block'
    setTimeout(() => elm.style.opacity = '1', 1)
}
//Action Hide_element
function hideElement(elm) {
    elm.style.opacity = '0'
    setTimeout(() => elm.style.display = 'none', 500)
}

//Scenario for ADD_USER Button
function btnAddUserAction() {
    showElement(form)
    btnAddUser.style.backgroundColor = '#98acb8';
    btnAddUser.style.color = '#fff';
    customers.style.marginTop = '250px';
}
//Scenario for CLOSE Buttons
function btnCloseAction() {
    hideElement(form)
    btnAddUser.style.backgroundColor = '';
    btnAddUser.style.color = '#5c5a5a';
    setTimeout(cleanInput, 500)
    setTimeout(() => customers.style.marginTop = '20px', 250);
}

//Scenario for OK
function addCustomer() {
    const custFName = inpt[0].value;
    const custLName = inpt[1].value;
    const custAge = inpt[2].value;
    if ((custFName === '') || (custLName === '') || (custAge === '')) {
        alert('Please, fill all fields!')
    } else if (custFName.toLowerCase().match(/[a-z]/) === null || custLName.toLowerCase().match(/[a-z]/) === null) {
        alert('FIRST NAME and LAST NAME should be contains letters!\nCorrect, please!')
    } else if (custAge.match(/\D/g)) {
        alert('AGE field should be contains Numbers!\nCorrect, please!')
    } else {
        //Add to DATA
        pushToData(custFName, custLName, custAge, idCounter)
        console.log(data)
        //Write to Storage
        const dataToStorage = {
            firstName: custFName,
            lastName: custLName,
            age: custAge,
        }
        const serialdataToStorage = JSON.stringify(dataToStorage)
        localStorage.setItem(idCounter, serialdataToStorage)
        //Publish customer to Table
        publishCustomer(custFName, custLName, custAge)
        //Clean Input Area
        cleanInput();
    }
}

//Listeners for Buttons
btnAddUser.addEventListener('click', btnAddUserAction)
for (let item of btnClose) {
    item.addEventListener('click', btnCloseAction)
}
okButton.addEventListener('click', addCustomer)

//Run Initial Load Data:
initialLoad()

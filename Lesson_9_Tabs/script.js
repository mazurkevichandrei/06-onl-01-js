const tabButton = document.querySelectorAll('.bookmark_tab');
const tabButtonActive = document.querySelector('.bookmark_tab.bookmark_tab_active');
const contentItem = document.querySelectorAll('.content_item');
const delTabBtn = document.querySelectorAll('.delete_tab_btn');

function tabButtonSwitcher(evt) {
    const clickedButton = evt.target
    const tabButtonActive = document.querySelector('.bookmark_tab.bookmark_tab_active');
    const contentItemActive = document.querySelector('.content_item.content_item_active');
    const content = document.querySelector('.content');
    const linkId = clickedButton.dataset.tabid
    const newItemActive = content.querySelector(`[data-tabid='${linkId}']`)
    //Change Buttons Classes:
    tabButtonActive.classList.remove('bookmark_tab_active')
    clickedButton.classList.add('bookmark_tab_active')

    //Change Content classes:
    contentItemActive.classList.remove('content_item_active')
    newItemActive.classList.add('content_item_active')
}

function delTab(evt) {
    const clickedDelButton = evt.target
    const elementToDel = clickedDelButton.parentElement
    const contentItemActive = document.querySelector('.content_item.content_item_active');

    if (elementToDel.classList.contains('bookmark_tab_active')) {
        elementToDel.classList.remove('bookmark_tab_active')
        elementToDel.remove()
        const tabButton = document.querySelectorAll('.bookmark_tab');
        tabButton[0].classList.add('bookmark_tab_active')
        contentItemActive.remove()
        const contentItem = document.querySelectorAll('.content_item');
        contentItem[0].classList.add('content_item_active')
    } else {
        const content = document.querySelector('.content');
        const clickedButton = evt.target
        const linkId = clickedButton.parentElement.dataset.tabid
        const contentToDel = content.querySelector(`[data-tabid='${linkId}']`)
        elementToDel.remove()
        contentToDel.remove()
    }
    checkIsLastElement()
    evt.stopPropagation()
}

tabButton.forEach(function(item){
    item.addEventListener('click',tabButtonSwitcher)
})
delTabBtn.forEach(function(item){
    item.addEventListener('click',delTab)
})

function checkIsLastElement(){
    const delTabBtn = document.querySelectorAll('.delete_tab_btn');
    console.log(tabButton)
    if(delTabBtn.length===1){
        delTabBtn[0].classList.add('last')
    }
}

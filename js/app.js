

const inputElement = document.getElementById('list')
const buttonElement = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')
const resetBtnElement = document.getElementById('reset-button')

buttonElement.addEventListener('click', newListItem)
resetBtnElement.addEventListener('click', reset)

 function newListItem() {
    const newListItems = document.createElement('li')
    newListItems.textContent = inputElement.value
    if (inputElement.value !== '')
    ulElement.appendChild(newListItems)
    inputElement.value = ''
    }



function reset() {
    ulElement.remove()
}
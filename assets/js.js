

const listInput = document.getElementById('typeInput')
const listOverview = document.getElementById('todoList')
const listSubmit = document.getElementById('submitInput')
let listItems = []


listSubmit.addEventListener('pointerup', (e) => {
    e.preventDefault()
    listItems.push(listInput.value)
    listOverview.innerHTML = ""
    temp()
})

function temp () {
    listItems.forEach((e) => {
        listOverview.innerHTML += `<li>${e}</li>`
    })
};

const listDelete = document.getElementById('deleteInput');

listDelete.addEventListener('pointerup', () => {
    listItems.shift()
    listOverview.innerHTML = ""
    temp ()
})


const listInput = document.getElementById('typeInput')
const listOverview = document.getElementById('todoList')
const listSubmit = document.getElementById('submitInput')



listSubmit.addEventListener('pointerup', submitFunc())

function submitFunc () {
    listOverview.innerHTML += `<li>${listInput.value}</li>`
};

const listDelete = document.getElementById('deleteInput');
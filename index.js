let draggedItem = null;
const container2 = document.getElementById('container2');
const successMessage = document.getElementById('successMessage');

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text', draggedItem.innerHTML);
    draggedItem.classList.add('dragging');
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    container2.innerHTML += '<div class="item">' + data + '</div>';
    draggedItem.classList.remove('dragging');
    successMessage.innerText = 'Item dropped successfully!';
}

function reset() {
    container2.innerHTML = '';
    successMessage.innerText = '';
}

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragstart', drag);
});
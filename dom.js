var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(event) {
    event.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li')
    li.classList.add('list-group-item')
    li.appendChild(document.createTextNode(newItem))
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete');
    var deleteBtnIcon = document.createElement('li');
    deleteBtnIcon.classList.add('bi', 'bi-x-square');
    deleteBtn.appendChild(deleteBtnIcon);
    li.appendChild(deleteBtn);
    itemList.appendChild(li)
}

function removeItem(event) {
    if (event.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

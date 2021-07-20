// var li1 = document.getElementById('listOne')
// console.log(li1.innerText)

// Event
// var titleElement = document.getElementById('title');
// titleElement.addEventListener('mouseenter', () => alert('It works'))

var addBtn = document.getElementById('addBtn');
var todoItemField = document.getElementById('todo-item');
var ul = document.getElementById('todo-list-container');
var delBtn = document.getElementById('delBtn')

// console.log(todoItemField.value)

// class in HTML
function changeActiveClass() {
    this.classList.toggle('active');
}

function doneItem() {
    this.classList.add("text-white");
    this.style.textDecoration = 'line-through'
    this.classList.add("bg-success");
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create element
    var li = document.createElement('li');

    // Set the innerHTML to what's inside the input field
    li.innerHTML = todoItemField.value;

    // Add the classes
    li.classList.add("list-group-item");

    // Add it into the ul
    ul.appendChild(li);

    // Add the toggle event listener
    li.addEventListener('mouseover', changeActiveClass); 
    li.addEventListener('mouseleave', changeActiveClass);

    // OR ....
    // ul.innerHTML += `<li onmouseover="changeActiveClass(this)" onmouseleave="changeActiveClass(this)" class="list-group-item">${ todoItemField.value }</li>`;
    
    li.addEventListener('click', doneItem);

    todoItemField.value = '';
    // console.log(todoItemField.value) 

})

delBtn.addEventListener('click', (e) => {
    ul.innerHTML = '';
    // $(ul).empty();
})


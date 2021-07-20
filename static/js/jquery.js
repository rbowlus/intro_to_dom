// document.getElementById('todo-list-container').classList.add('bg-danger');
// var liTags = document.getElementsByClassName('list-group-item');
var liTags = $('.list-group-item');

var addBtn = $('#addBtn');
var todoItemField = $('#todo-item');
var ul = $('#todo-list-container');
var delBtn = $('#delBtn')

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

addBtn.on('click', (e) => {
    // Turns off default functionality of Form - it keeps it from refreshing the page
    e.preventDefault();
    ul.append(`<li onmouseover="changeActiveClass(this)" onmouseleave="changeActiveClass(this)" class="list-group-item>${ todoItemField.val() }</li>`)
    todoItemField.val('')

    ul.each((idx, el) => console.log(el))
    // ul.forEach((idx, el) => console.log(el)) <- not valid on jquery creation
})

// addBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     // Create element
//     var li = document.createElement('li');

//     // Set the innerHTML to what's inside the input field
//     li.innerHTML = todoItemField.value;

//     // Add the classes
//     li.classList.add("list-group-item");

//     // Add it into the ul
//     ul.appendChild(li);

//     //////////////////////////////////////
//     for (const el of liTags) {
//         console.log(el.innerText)
//     }
//     /////////////////////////////////////

//     // Add the toggle event listener
//     li.addEventListener('mouseover', changeActiveClass);
//     li.addEventListener('mouseleave', changeActiveClass);

//     // OR ....
//     // ul.innerHTML += `<li onmouseover="changeActiveClass(this)" onmouseleave="changeActiveClass(this)" class="list-group-item">${ todoItemField.value }</li>`;

//     li.addEventListener('click', doneItem);

//     todoItemField.value = '';
//     // console.log(todoItemField.value) 

// })

// delBtn.addEventListener('click', (e) => {
//     ul.innerHTML = '';
//     // $(ul).empty();
// })


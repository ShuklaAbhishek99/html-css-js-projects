document.addEventListener('DOMContentLoaded', function () {
    loadTodos();
});

function loadTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    const todos = getTodos();

    todos.forEach(function (todo, index) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
        <span>${todo}</span>
        <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
      `;
        todoList.appendChild(li);
    });
}

function getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const inputElement = document.getElementById('todo-input');
    const newTodo = inputElement.value.trim();

    if (newTodo !== '') {
        const todos = getTodos();
        todos.push(newTodo);
        saveTodos(todos);
        inputElement.value = '';
        loadTodos();
    }
}

function editTodo(index) {
    const todos = getTodos();
    const updatedTodo = prompt('Edit Todo:', todos[index]);

    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        saveTodos(todos);
        loadTodos();
    }
}

function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    loadTodos();
}
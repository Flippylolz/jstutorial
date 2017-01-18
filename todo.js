function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function clear() {
    localStorage.clear();
    show();
    return false;
}


function load_box() {
    var checked = JSON.parse(localStorage.getItem('box'));
    document.getElementsByClassName('box').checked = checked;
    show();
}


function save_box() { //я не могу использовать ClassName потому что мне нужет айдишник, достается командой #var id = this.getAttribute('id');
    var checkbox = document.getElementsByClassName('box');
    localStorage.setItem('box', checkbox.checked); // Возможна мне нужно тут использовать JSON.stringify
    show();
    return false;
}

function show() {
    load_box()
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<input class="box" type="checkbox" id="' + i + '"></></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var box = document.getElementsByClassName('box');
    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('checked', save_box);
    };
}

document.getElementById('add').addEventListener('click', add);
document.getElementById('clear').addEventListener('click', clear);
show();

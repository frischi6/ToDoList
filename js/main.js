//bei Klick wird Item entfernt

class item {

    constructor(itemName, priority) {
        this.createToDo(itemName, priority);
    }

    createToDo(itemName, priority) {
        let text = document.createElement('li');
        text.value = priority;
        text.innerText = itemName;

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        if (priority == 3){
            document.getElementById('todo3').appendChild(itemBox);
            text.style.background = '#C00000';

        }else if (priority == 2){
            document.getElementById('todo2').appendChild(itemBox);
            text.style.background = '#E6AC00';

        }else{
            document.getElementById('todo1').appendChild(itemBox);
            text.style.background = '#6DA945';
        }

        itemBox.appendChild(text);
        itemBox.addEventListener('click', () => this.removeToDo(itemBox, text.value));
    }

    removeToDo(item, priority) {
        if (priority == 3){
            document.querySelector('.todo3').removeChild(item);
        }else if (priority == 2){
            document.querySelector('.todo2').removeChild(item);
        }else {
            document.querySelector('.todo1').removeChild(item);
        }
    }

}

document.getElementById("addNew1").addEventListener('click', function () {
    let newTodo = prompt("Sie wollen ein neues ToDo der Priorität 1 hinzufügen.\nGeben Sie ein, was Sie zu erledigen haben:",);
    new item(newTodo, 1);
});
document.getElementById("addNew2").addEventListener('click', function () {
    let newTodo = prompt("Sie wollen ein neues ToDo der Priorität 2 hinzufügen.\nGeben Sie ein, was Sie zu erledigen haben:");
    new item(newTodo, 2);
});
document.getElementById("addNew3").addEventListener('click', function () {
    let newTodo = prompt("Sie wollen ein neues ToDo der Priorität 3 hinzufügen.\nGeben Sie ein, was Sie zu erledigen haben:");
    new item(newTodo, 3);
});





new item("Email Jessi", 1);
new item("Buy dinner for Sunday", 2);
new item("Birthday present Mom", 3);
new item("Call Noemi", 3);
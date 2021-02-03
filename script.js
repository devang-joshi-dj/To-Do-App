"use strict";

window.onload = () => {
    document.getElementById("task").value = "";
    document.getElementById("task").focus();
    document.getElementById("addTask").addEventListener("click", addTask);
    document.getElementById("task").addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addTask").click();
        }
    });
};

let i = 0;
var tasks = [];

const addTask = () => {
    var task = document.getElementById("task").value;
    task = task.trim();
    if (task != "") {
        if (!tasks.includes(task)) {
            tasks.push(task);
            var todoItem = document.createElement("li");
            var addValue = document.createTextNode(task);
            todoItem.className = "addedTodo";
            todoItem.appendChild(addValue);

            var todoRemove = document.createElement("span");
            var removeValue = document.createTextNode("Close");
            todoRemove.className = "removeTodo";
            todoRemove.appendChild(removeValue);

            todoItem.appendChild(todoRemove);

            var element = document.getElementById("todoItems");
            element.appendChild(todoItem);

            document.getElementsByClassName("removeTodo")[i].addEventListener("click", function () {
                this.parentNode.remove();
                i--;
                var index = tasks.indexOf(task);
                tasks.splice(index, 1);

                document.getElementById("task").focus();
            }, false);
            i++;
            document.getElementById("task").value = "";
        }
    }
    document.getElementById("task").focus();
};
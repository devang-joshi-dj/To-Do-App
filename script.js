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
    let task = document.getElementById("task").value;
    task = task.trim();
    task = task.charAt(0).toUpperCase() + task.slice(1);
    if (task != "") {
        if (!tasks.includes(task)) {
            tasks.push(task);

            const todoItemValue = document.createElement("span");
            todoItemValue.className = "addedTodoValue";
            const addValue = document.createTextNode(task);
            todoItemValue.appendChild(addValue);

            const todoRemove = document.createElement("div");
            const todoRemoveElement = document.createElement("span")
            const todoRemoveElementValue = document.createTextNode("Done");
            todoRemoveElement.appendChild(todoRemoveElementValue);
            todoRemove.className = "removeTodo";
            todoRemove.appendChild(todoRemoveElement);

            const todoItem = document.createElement("li");
            todoItem.className = "addedTodo";
            todoItem.appendChild(todoItemValue);
            todoItem.appendChild(todoRemove);

            const element = document.getElementById("todoItems");
            element.appendChild(todoItem);

            document.getElementsByClassName("removeTodo")[i].addEventListener("click", function () {
                this.parentNode.remove();
                i--;
                const index = tasks.indexOf(task);
                tasks.splice(index, 1);

                document.getElementById("task").focus();
            }, false);
            i++;
            document.getElementById("task").value = "";
        }
        else {
            alert("Task Already Exists");
            document.getElementById("task").select();
        }
    }
    document.getElementById("task").focus();
};
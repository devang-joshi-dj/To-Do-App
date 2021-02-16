"use strict";

window.onload = () => {
    // following commands execute on page load
    document.getElementById("task").value = "";
    document.getElementById("task").focus(); // Sets the focus on input field on page load

    document.getElementById("addTask").addEventListener("click", addTask); // executes addTask function when Add Button is clicked

    document.getElementById("task").addEventListener("keyup", function (event) { // function to explicitly click on Add button so it would execute addTask button whenever Enter key is presed
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addTask").click();
        }
    });
};

// following are the variables important to store tasks in page and in array
let i = 0;
var tasks = [];

const addTask = () => {
    // function to print task in page and add task in array by creating nodes and printing them and also to check whether if that task already exists in the list and atlast gives focus backs to input field
    let task = document.getElementById("task").value;
    task = task.trim();
    task = task.charAt(0).toUpperCase() + task.slice(1);
    if (task != "") {
        if (!tasks.includes(task)) {
            tasks.push(task);

            // to create checkbox
            const todoItemCheckBox = document.createElement("input");
            todoItemCheckBox.type = "checkbox";
            todoItemCheckBox.name = "name";
            todoItemCheckBox.value = "";
            todoItemCheckBox.className = "checkbox";

            // to create text node
            const todoItemValue = document.createElement("span");
            todoItemValue.className = "addedTodoValue";
            const addValue = document.createTextNode(task);
            todoItemValue.appendChild(addValue);

            // to create remove button
            const todoRemove = document.createElement("div");
            const todoRemoveElement = document.createElement("span")
            const todoRemoveElementValue = document.createTextNode("Done");
            todoRemoveElement.appendChild(todoRemoveElementValue);
            todoRemove.className = "removeTodo";
            todoRemove.appendChild(todoRemoveElement);

            // to create li tag and appending everything in it
            const todoItem = document.createElement("li");
            todoItem.className = "addedTodo";
            todoItem.appendChild(todoItemCheckBox);
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

            document.getElementsByClassName("checkbox")[i].addEventListener("click", function () {
                let nextSibling = this.nextElementSibling;
                if (this.checked) {
                    nextSibling.style.setProperty("text-decoration", "line-through");
                    nextSibling.style.setProperty("color", "#287D7D");
                } else {
                    nextSibling.style.setProperty("text-decoration", "none");
                    nextSibling.style.setProperty("color", "black");
                }

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
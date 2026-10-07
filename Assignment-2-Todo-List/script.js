function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");

    span.innerText = task;

    span.onclick = function() {
        span.style.textDecoration = "line-through";
    };

    let button = document.createElement("button");
    button.innerText = "Delete";

    button.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
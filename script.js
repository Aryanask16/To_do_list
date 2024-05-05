function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(li);
        taskInput.value = "";

        li.onclick = function() {
            this.classList.toggle("completed");
        };

        li.oncontextmenu = function(e) {
            e.preventDefault();
            this.remove();
        };
    }
}

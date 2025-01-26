// Handles the frontend
document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
});

// Fetch task from server
function loadTask() {
    fetch("/tasks")
        .then((res) => res.json())
        .then((tasks) => {
            taskList.innerHTML = '';
            tasks.forEach
        })
}
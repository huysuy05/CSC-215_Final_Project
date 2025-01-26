// Handles the frontend
document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-name");

    // Handle form submission
    taskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
        const taskName = taskInput.value.trim();

        if (taskName) {
            addTask(taskName);
            taskInput.value = ""; // Clear input field
        }
    });

    // Function to add a task to the list
    function addTask(taskName) {
        const li = document.createElement("li");
        li.textContent = taskName;

        // Add a delete button to each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            li.remove(); // Remove task from list
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }


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

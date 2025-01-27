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
        li.classList.add("task-item"); // Optional class for styling

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        // Add an event listener for checking/unchecking
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed"); // Toggle a completed class for styling
        });

        // Create a span for the task name
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskName;
        taskSpan.classList.add("task-title"); // Optional class for styling

        // Add a delete button to each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function () {
            li.remove(); // Remove task from list
        });

        // Append the checkbox, task name, and delete button to the list item
        li.appendChild(checkbox); // Checkbox comes first
        li.appendChild(taskSpan); // Then the task name
        li.appendChild(deleteButton); // Finally the delete button

        // Append the list item to the task list
        taskList.appendChild(li);
    }



});

// Fetch task from server
function loadTask() {
    fetch("/tasks")
        .then((res) => res.json())
        .then((tasks) => {
            taskList.innerHTML = '';
            tasks.forEach((task) => {
                const li = document.createElement("li");
                li.textContent = task.name;
                taskList.appendChild(li);
            })
        })
}

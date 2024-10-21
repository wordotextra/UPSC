// Function to mark a target as complete
function markComplete(statusId) {
    const statusElement = document.getElementById(statusId);
    statusElement.textContent = "Complete";
    statusElement.classList.add("complete");
}

// Function to add a new target
function addTarget() {
    const topic = document.getElementById('topic').value;
    const section = document.getElementById('section').value;

    if (topic === '') {
        alert("Please enter a topic");
        return;
    }

    const list = document.getElementById(section);
    const newItem = document.createElement('li');
    const statusId = section + "-" + (list.childElementCount + 1) + "-status";

    newItem.innerHTML = `${topic} - <span class="status" id="${statusId}">Pending</span> <button onclick="markComplete('${statusId}')">Mark Complete</button>`;
    list.appendChild(newItem);

    // Clear the form
    document.getElementById('topic').value = '';
}

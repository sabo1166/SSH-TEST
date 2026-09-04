function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (email && password) {
        message.textContent = "Login successful!";
    } else {
        message.textContent = "Please enter email and password.";
    }
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (input.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    taskList.appendChild(li);
    input.value = "";
}

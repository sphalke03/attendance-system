document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simu$(document).ready(function () {
    // Function to handle login
    function tryLogin() {
        let username = $("#txtUsername").val().trim();
        let password = $("#txtPassword").val().trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Simulated authentication (replace with AJAX request to backend)
        if (username === "admin" && password === "1234") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect after login
        } else {
            alert("Invalid username or password.");
        }
    }

    // Capture button click event
    $("#btnLogin").on("click", function (e) {
        e.preventDefault();
        tryLogin();
    });

    // Capture "Enter" key press
    $("#txtUsername, #txtPassword").on("keyup", function (e) {
        if (e.key === "Enter") {
            tryLogin();
        }
    });
});
late login functionality
    if (username === "admin" && password === "1234") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});

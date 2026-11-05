
// Get HTML elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");
const rememberMeCheckbox = document.getElementById("rememberMe");
const forgotPasswordLink = document.getElementById("forgotPassword");
const message = document.getElementById("message");

// Demo credentials
const validUsername = "admin";
const validPassword = "Admin@123";

// History settings
const HISTORY_KEY = "loginHistory";
const MAX_ENTRIES = 500;

// Save login activity
function saveLoginActivity(username, status) {
    let history = JSON.parse(
        localStorage.getItem(HISTORY_KEY) || "[]"
    );

    history.push({
        username: username,
        status: status,
        timestamp: new Date().toLocaleString()
    });

    // Keep the latest 500 entries
    if (history.length > MAX_ENTRIES) {
        history = history.slice(-MAX_ENTRIES);
    }

    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

    displayLoginHistory();
}

// Display login history
function displayLoginHistory() {
    const history = JSON.parse(
        localStorage.getItem(HISTORY_KEY) || "[]"
    );

    const historyContainer = document.getElementById("history");

    historyContainer.innerHTML = "";

    history.forEach(function (entry) {
        const item = document.createElement("li");

        item.textContent =
            entry.username + " | " +
            entry.status + " | " +
            entry.timestamp;

        historyContainer.appendChild(item);
    });
}

// Show or hide password
showPasswordCheckbox.addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";
});

// Handle login submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === "" || password === "") {
        message.textContent = "Please enter your username and password.";
        return;
    }

    if (username !== validUsername) {
        message.textContent = "Invalid username.";
        saveLoginActivity(username, "Failed");
        passwordInput.value = "";
        return;
    }

    if (password !== validPassword) {
        message.textContent = "Incorrect password.";
        saveLoginActivity(username, "Failed");
        passwordInput.value = "";
        return;
    }

    message.textContent = "Login successful! Welcome, " + username + ".";

    saveLoginActivity(username, "Successful");

    if (rememberMeCheckbox.checked) {
        localStorage.setItem("rememberedUsername", username);
    } else {
        localStorage.removeItem("rememberedUsername");
    }

    passwordInput.value = "";
});

// Forgot password
forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault();

    message.textContent =
        "Please contact your administrator to reset your password.";
});


// Load saved username, history and button functionality
window.addEventListener("DOMContentLoaded", function () {
    const savedUsername = localStorage.getItem("rememberedUsername");

    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }

    displayLoginHistory();

    // Clear history
    const clearHistoryButton = document.getElementById("clearHistory");

    if (clearHistoryButton) {
        clearHistoryButton.addEventListener("click", function () {
            localStorage.removeItem(HISTORY_KEY);

            displayLoginHistory();

            message.textContent = "Login history cleared successfully.";

            console.log("Login history cleared:", localStorage.getItem(HISTORY_KEY));
        });
    } else {
        console.error("Clear History button was not found!");
    }
});

// Load saved username and history
window.addEventListener("DOMContentLoaded", function () {
    const savedUsername = localStorage.getItem("rememberedUsername");

    if (savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }

    displayLoginHistory();
});

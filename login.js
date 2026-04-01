// Predefined faculty users
const users = [
    { username: "lily.bloom", password: "pass123" },
    { username: "jane.smith", password: "admin456" },
    { username: "vishnu", password: "uyir_naadi_nanban" }
];

// Handling login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        document.getElementById('error-message').innerText = "Invalid username or password";
    }
});

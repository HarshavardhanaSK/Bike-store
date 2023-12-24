function validateForm() {
    var passwordInput = document.getElementById("password");
    
    // Validate password
    var password = passwordInput.value;
    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        passwordInput.focus();
        return false;
    }

    // Check for at least one special character using a regular expression
    if (!/[^a-zA-Z0-9]/.test(password)) {
        alert("Password should contain at least one special character.");
        passwordInput.focus();
        return false;
    }
    
    // Form is valid, allow submission
    return true;
}

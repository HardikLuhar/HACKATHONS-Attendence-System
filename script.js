let generatedOTP = null;

function sendOTP() {
    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    generatedOTP = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    alert(`OTP sent to ${email}: ${generatedOTP}`); // Simulating OTP send

    document.getElementById("emailSection").style.display = "none";
    document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otp").value;
    if (enteredOTP == generatedOTP) {
        alert("OTP verified successfully.");
        document.getElementById("otpSection").style.display = "none";
        document.getElementById("passwordSection").style.display = "block";
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

function changePassword() {
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Password changed successfully!");
    window.location.href = "TeacherLogInPage.html"; // Redirect back to login
}

// Show/Hide Password Toggle
document.getElementById("toggleNewPassword").addEventListener("click", function() {
    togglePasswordVisibility("newPassword", this);
});
document.getElementById("toggleConfirmPassword").addEventListener("click", function() {
    togglePasswordVisibility("confirmPassword", this);
});

function togglePasswordVisibility(fieldId, icon) {
    let field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
        icon.classList.replace("bx-show", "bx-hide");
    } else {
        field.type = "password";
        icon.classList.replace("bx-hide", "bx-show");
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Form eka submit wela page refresh wena eka nawattanawa

    // Input values gannawa
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation Logic
    let isValid = true;

    // Name validation
    if (name === "") {
        alert("Please enter your name");
        isValid = false;
    } 
    // Email validation using Regex
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        isValid = false;
    }
    // Message validation
    else if (message === "") {
        alert("Message cannot be empty");
        isValid = false;
    }

    if (isValid) {
        // Validation pass nam meka wenawa
        console.log("Form Data:", { name, email, message });
        alert("Validation Success! Form data is ready to be sent.");
        
        // Form eka clear karanawa
        this.reset();
    }
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    if (name === "") {
        alert("Please enter your name");
        isValid = false;
    } 
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        isValid = false;
    }
    else if (message === "") {
        alert("Message cannot be empty");
        isValid = false;
    }

    if (isValid) {
        console.log("Form Data:", { name, email, message });
        alert("Validation Success! Form data is ready to be sent.");
        
        this.reset();
    }
});
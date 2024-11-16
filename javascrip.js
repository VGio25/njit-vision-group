document.getElementById('contact-form').addEventListener('submit', function(event) {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting!");
        event.preventDefault();
    } else {
        alert("Thank you for reaching out! We'll get back to you soon.");
    }})
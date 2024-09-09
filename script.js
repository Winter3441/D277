document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form field values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirm-email').value;
        const message = document.getElementById('message').value;

        // Email validation
        if (email !== confirmEmail) {
            alert('Email addresses do not match. Please check and try again.');
            return;
        }

        // Simulate form submission (for demo purposes)
        alert(`Thank you for contacting us, ${firstName} ${lastName}. We have received your message and will get back to you soon.`);

        // Reset form fields
        form.reset();
    });
});



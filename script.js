document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Here, you can perform form validation if needed

        // For demonstration purposes, log the form data to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can add AJAX request to submit form data to the server if needed

        // Reset form fields after submission
        form.reset();
    });
});

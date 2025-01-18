
(function () {
    emailjs.init('CIqRBkdXWNfdTS1W8'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const serviceID = 'service_a4m9lhm'; // Replace with your EmailJS service ID
        const templateID = 'template_7ky650i'; // Replace with your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Poruka je uspešno poslata!');
                form.reset(); // Optional: Reset the form fields
            }, (err) => {
                alert('Greška pri slanju poruke: ' + JSON.stringify(err));
            });
    });
});

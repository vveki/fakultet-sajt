
(function () {
    emailjs.init('CIqRBkdXWNfdTS1W8');
})();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const serviceID = 'service_a4m9lhm'; 
        const templateID = 'template_7ky650i';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Poruka je uspešno poslata!');
                form.reset();
            }, (err) => {
                alert('Greška pri slanju poruke: ' + JSON.stringify(err));
            });
    });
});

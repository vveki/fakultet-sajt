document.addEventListener('DOMContentLoaded', () => {
    const oceanSelect = document.getElementById('ocean-select');
    const oceanInfo = document.getElementById('ocean-info');
    const isLoggedIn = localStorage.getItem('isLoggedIn');


    oceanSelect.addEventListener('click', (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            alert('Please log in to select an ocean.');
        }
    });

    fetch('https://vebdizajn4.onrender.com/api/vebdizajn/okeani')
        .then(response => {
            if (!response.ok) {
                console.error('API response error:', response.status);
                return Promise.reject('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            for (const ocean in data) {
                const option = document.createElement('option');
                option.value = ocean;
                option.textContent = ocean;
                oceanSelect.appendChild(option);
            }

            oceanSelect.addEventListener('change', (e) => {
                const selectedOcean = e.target.value;
                const marineLife = data[selectedOcean];
                if (marineLife) {
                    oceanInfo.innerHTML = `
                        <h3>${selectedOcean}</h3>
                        <p><strong>Marine Life:</strong> ${marineLife}</p>
                    `;
                }
            });
        })
        .catch(error => {
            console.error('Error fetching ocean data:', error);
            oceanInfo.innerHTML = `<p>Failed to load ocean data: ${error}</p>`;
        });
});

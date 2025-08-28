// Cargar datos desde JSON
fetch('datos_campanas.json')
.then(response => response.json())
.then(data => {
    const labels = data.map(item => item.campaña);
    const ctr = data.map(item => item.CTR);

    const ctx = document.getElementById('ctrChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'CTR (%)',
                data: ctr,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

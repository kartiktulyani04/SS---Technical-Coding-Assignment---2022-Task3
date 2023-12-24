document.addEventListener("DOMContentLoaded", function () {
    initLineChart();
    initDropdown();
});

function initLineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sample Data',
            data: [10, 20, 15, 25, 30],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}

function initDropdown() {
    const dropdown = document.getElementById('dashboardDropdown');

    dropdown.addEventListener('change', function () {
        console.log('Selected option:', dropdown.value);
    });
}

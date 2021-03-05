var ctx = document.getElementById('pedidosTotais').getContext('2d');
var pedidosTotais = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: ['Total de Pedidos mês a mês'],
            data: [50, 42, 87, 124, 180, 156],
            backgroundColor: [
                'rgba(7, 193, 84, 0.5)',
            ],
            borderColor: [
                '#018939',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('pedidosAprovados').getContext('2d');
var pedidosAprovados = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: ['Pedidos aprovados mês a mês'],
            data: [50, 42, 87, 124, 180, 156],
            backgroundColor: [
                'rgba(7, 193, 84, 0.5)',
            ],
            borderColor: [
                '#018939',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
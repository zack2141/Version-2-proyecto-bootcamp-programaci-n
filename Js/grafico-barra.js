function barra(){
    //inicializa el grafico
        const ctx = document.getElementById('barra');

        const colores=['#152cd4','#e6e5dc','#ddcb03','#6ce84d', ' #eb9b10']

        // da comienzo a las librerias de chartjs
        new Chart(ctx, {
            type: 'bar', // tipo de grafico a representar
            data: {    //  0      1         2         3
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                        // 0   1   2   
                    data: [50, 19, 3, 5, 2, 3],
                    // ancho de borde de las barra
                    borderWidth: 3,
                    backgroundColor:colores

                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

}

barra();
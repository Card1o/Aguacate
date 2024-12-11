document.addEventListener("DOMContentLoaded", function () {

    const data = [
      { "plaga y/o enfermedad": "Thrips", "%incidencia": 80 },
      { "plaga y/o enfermedad": "Monalonion", "%incidencia": 7 },
      { "plaga y/o enfermedad": "Mosca blanca", "%incidencia": 67 },
      { "plaga y/o enfermedad": "Marceño", "%incidencia": 20 },
      { "plaga y/o enfermedad": "Copturominus", "%incidencia": 20 },
      { "plaga y/o enfermedad": "Compsus", "%incidencia": 47 },
      { "plaga y/o enfermedad": "Mosca ovario", "%incidencia": 20 },
      { "plaga y/o enfermedad": "Escama", "%incidencia": 93 },
      { "plaga y/o enfermedad": "Comedores de follaje", "%incidencia": 13 },
      { "plaga y/o enfermedad": "Ácaros (huevo)", "%incidencia": 13 },
      { "plaga y/o enfermedad": "Ácaros (movil)", "%incidencia": 13 }
    ];
  
    // Procesar los datos para el gráfico
    const labels = data.map(item => item["plaga y/o enfermedad"]);
    const incidencias = data.map(item => item["%incidencia"]);
  
    // Colores aleatorios para el gráfico
    const backgroundColors = labels.map(() =>
      `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.6)`
    );
  
    const ctx = document.getElementById("graficoTortaPlagas").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: incidencias,
            backgroundColor: backgroundColors,
            borderColor: "#fff",
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const label = tooltipItem.label || "";
                const value = tooltipItem.raw || 0;
                return `${label}: ${value}%`;
              }
            }
          }
        }
      }
    });
  });
  
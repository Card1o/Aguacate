document.addEventListener("DOMContentLoaded", function () {

    const data = [
      { "Lote": 1, "Resiembras": 47, "Zocas": 213 },
      { "Lote": 2, "Resiembras": 49, "Zocas": 347 },
      { "Lote": 3, "Resiembras": 46, "Zocas": 137 },
      { "Lote": 4, "Resiembras": 80, "Zocas": 96 },
      { "Lote": 5, "Resiembras": 37, "Zocas": 160 },
      { "Lote": 6, "Resiembras": 69, "Zocas": 126 },
      { "Lote": 7, "Resiembras": 0, "Zocas": 0 },
      { "Lote": 8, "Resiembras": 38, "Zocas": 143 },
      { "Lote": 9, "Resiembras": 35, "Zocas": 159 },
      { "Lote": 10, "Resiembras": 32, "Zocas": 152 },
      { "Lote": 11, "Resiembras": 14, "Zocas": 160 }
    ];
  
    // Procesar datos para el gráfico
    const labels = data.map(item => `Lote ${item.Lote}`);
    const resiembras = data.map(item => item.Resiembras);
    const zocas = data.map(item => item.Zocas);
  
    // Crear el gráfico
    const ctx = document.getElementById("graficoLineasResiembrasZocas").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Resiembras",
            data: resiembras,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
            tension: 0.3
          },
          {
            label: "Zocas",
            data: zocas,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              }
            }
          },
          legend: {
            position: "top"
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Cantidad"
            }
          },
          x: {
            title: {
              display: true,
              text: "Lotes"
            }
          }
        }
      }
    });
  });
  
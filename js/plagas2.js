document.addEventListener("DOMContentLoaded", function () {

    const data = [
      { "Lote": 1, "Thrips": 80, "Monalonion": 7, "Mosca blanca": 67, "Escama": 93 },
      { "Lote": 2, "Thrips": 73, "Monalonion": 20, "Mosca blanca": 93, "Escama": 93 },
      { "Lote": 3, "Thrips": 73, "Monalonion": 13, "Mosca blanca": 100, "Escama": 100 },
      { "Lote": 4, "Thrips": 87, "Monalonion": 20, "Mosca blanca": 87, "Escama": 100 },
      { "Lote": 5, "Thrips": 67, "Monalonion": 13, "Mosca blanca": 87, "Escama": 100 },
      { "Lote": 6, "Thrips": 100, "Monalonion": 7, "Mosca blanca": 93, "Escama": 100 },
      { "Lote": 7, "Thrips": 100, "Monalonion": 20, "Mosca blanca": 93, "Escama": 93 },
      { "Lote": 8, "Thrips": 93, "Monalonion": 13, "Mosca blanca": 67, "Escama": 87 },
      { "Lote": 9, "Thrips": 40, "Monalonion": 13, "Mosca blanca": 33, "Escama": 40 },
      { "Lote": 10, "Thrips": 47, "Monalonion": 0, "Mosca blanca": 93, "Escama": 93 },
      { "Lote": 11, "Thrips": 80, "Monalonion": 33, "Mosca blanca": 93, "Escama": 93 }
    ];
  
    // Procesar datos para el gráfico
    const labels = data.map(item => `Lote ${item.Lote}`);
    const datasets = [
      {
        label: "Thrips",
        data: data.map(item => item["Thrips"]),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        fill: true
      },
      {
        label: "Monalonion",
        data: data.map(item => item["Monalonion"]),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        fill: true
      },
      {
        label: "Mosca blanca",
        data: data.map(item => item["Mosca blanca"]),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        fill: true
      },
      {
        label: "Escama",
        data: data.map(item => item["Escama"]),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        fill: true
      }
    ];
  
    // Crear el gráfico
    const ctx = document.getElementById("graficoAreaPlagas").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                return `${tooltipItem.dataset.label}: ${value}%`;
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
              text: "Porcentaje (%)"
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
  
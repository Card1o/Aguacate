document.addEventListener("DOMContentLoaded", function () {
  const data = {
    "siembra": [
      { "No DE LOTE": 1, "TOTAL ARBOLES": 1078, "ARBOLES PRODUCTIVOS": 673, "ÁRBOLES IMPRODUCTIVOS": 25, "ZOCAS": 213, "RESIEMBRAS": 47 },
      { "No DE LOTE": 2, "TOTAL ARBOLES": 1068, "ARBOLES PRODUCTIVOS": 541, "ÁRBOLES IMPRODUCTIVOS": 0, "ZOCAS": 347, "RESIEMBRAS": 49 },
      { "No DE LOTE": 3, "TOTAL ARBOLES": 971, "ARBOLES PRODUCTIVOS": 907, "ÁRBOLES IMPRODUCTIVOS": 42, "ZOCAS": 137, "RESIEMBRAS": 46 },
      { "No DE LOTE": 4, "TOTAL ARBOLES": 1128, "ARBOLES PRODUCTIVOS": 893, "ÁRBOLES IMPRODUCTIVOS": 0, "ZOCAS": 96, "RESIEMBRAS": 80 },
      { "No DE LOTE": 5, "TOTAL ARBOLES": 728, "ARBOLES PRODUCTIVOS": 348, "ÁRBOLES IMPRODUCTIVOS": 7, "ZOCAS": 160, "RESIEMBRAS": 37 },
      { "No DE LOTE": 6, "TOTAL ARBOLES": 674, "ARBOLES PRODUCTIVOS": 574, "ÁRBOLES IMPRODUCTIVOS": 86, "ZOCAS": 126, "RESIEMBRAS": 69 },
      { "No DE LOTE": 7, "TOTAL ARBOLES": 744, "ARBOLES PRODUCTIVOS": 639, "ÁRBOLES IMPRODUCTIVOS": 0, "ZOCAS": 0, "RESIEMBRAS": 0 },
      { "No DE LOTE": 8, "TOTAL ARBOLES": 867, "ARBOLES PRODUCTIVOS": 718, "ÁRBOLES IMPRODUCTIVOS": 0, "ZOCAS": 143, "RESIEMBRAS": 38 },
      { "No DE LOTE": 9, "TOTAL ARBOLES": 786, "ARBOLES PRODUCTIVOS": 454, "ÁRBOLES IMPRODUCTIVOS": 0, "ZOCAS": 159, "RESIEMBRAS": 35 },
      { "No DE LOTE": 10, "TOTAL ARBOLES": 1006, "ARBOLES PRODUCTIVOS": 977, "ÁRBOLES IMPRODUCTIVOS": 16, "ZOCAS": 152, "RESIEMBRAS": 32 },
      { "No DE LOTE": 11, "TOTAL ARBOLES": 775, "ARBOLES PRODUCTIVOS": 593, "ÁRBOLES IMPRODUCTIVOS": 164, "ZOCAS": 160, "RESIEMBRAS": 14 }
    ]
  };

  const ctx = document.getElementById('graficoBarrasLotes').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.siembra.map(item => `Lote ${item["No DE LOTE"]}`),
      datasets: [
        {
          label: 'Árboles Productivos',
          data: data.siembra.map(item => item["ARBOLES PRODUCTIVOS"]),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Árboles Improductivos',
          data: data.siembra.map(item => item["ÁRBOLES IMPRODUCTIVOS"]),
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cantidad de Árboles'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Lotes'
          }
        }
      }
    }
  });
});

// Datos en formato JSON
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
  
  // Inicializar el canvas
  const canvas = document.getElementById('barChart');
  const ctx = canvas.getContext('2d');
  
  // Configuración básica del gráfico
  const chartWidth = canvas.width - 100;
  const chartHeight = canvas.height - 100;
  const barWidth = 40;
  const gap = 20;
  const labels = data.siembra.map(item => `Lote ${item["No DE LOTE"]}`);
  const values = data.siembra.map(item => item["ARBOLES PRODUCTIVOS"]);
  
  // Dibujar ejes
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50, chartHeight + 50);
  ctx.lineTo(chartWidth + 50, chartHeight + 50);
  ctx.stroke();
  
  // Dibujar barras
  values.forEach((value, index) => {
    const barHeight = (value / Math.max(...values)) * chartHeight;
    const x = 50 + gap + index * (barWidth + gap);
    const y = chartHeight + 50 - barHeight;
  
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(x, y, barWidth, barHeight);
  
    // Etiquetas de valor
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fillText(value, x + barWidth / 2, y - 5);
  });
  
  // Etiquetas de ejes
  labels.forEach((label, index) => {
    const x = 50 + gap + index * (barWidth + gap) + barWidth / 2;
    ctx.textAlign = 'center';
    ctx.fillText(label, x, chartHeight + 70);
  });
  
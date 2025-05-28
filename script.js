
document.getElementById("buscador").addEventListener("input", function () {
  const valor = this.value.toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (const el of Object.values(elementos)) {
    if (
      el.nombre.toLowerCase().includes(valor) ||
      el.simbolo.toLowerCase() === valor ||
      el.numero.toString() === valor ||
      el.masa.toString().includes(valor)
    ) {
      resultado.innerHTML = `
        <div>
          <h2>${el.nombre} (${el.simbolo})</h2>
          <p><strong>Número atómico:</strong> ${el.numero}</p>
          <p><strong>Masa atómica:</strong> ${el.masa}</p>
          <p><strong>Tipo:</strong> ${el.tipo}</p>
          <p><strong>Grupo:</strong> ${el.grupo}</p>
          <p><strong>Periodo:</strong> ${el.periodo}</p>
          <p><strong>Distribución electrónica:</strong> ${el.distribucion}</p>
        </div>
      `;
      break;
    }
  }
});

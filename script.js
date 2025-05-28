const elementos = {
  1:  {numero: 1,  nombre: "Hidrógeno", simbolo: "H",  masa: 1.008, tipo: "No metal", grupo: 1,  periodo: 1},
  2:  {numero: 2,  nombre: "Helio", simbolo: "He", masa: 4.0026, tipo: "Gas noble", grupo: 18, periodo: 1},
  3:  {numero: 3,  nombre: "Litio", simbolo: "Li", masa: 6.94, tipo: "Metal alcalino", grupo: 1,  periodo: 2},
  4:  {numero: 4,  nombre: "Berilio", simbolo: "Be", masa: 9.0122, tipo: "Metal alcalinotérreo", grupo: 2, periodo: 2},
  5:  {numero: 5,  nombre: "Boro", simbolo: "B", masa: 10.81, tipo: "Metaloide", grupo: 13, periodo: 2},
  6:  {numero: 6,  nombre: "Carbono", simbolo: "C", masa: 12.011, tipo: "No metal", grupo: 14, periodo: 2},
  7:  {numero: 7,  nombre: "Nitrógeno", simbolo: "N", masa: 14.007, tipo: "No metal", grupo: 15, periodo: 2},
  8:  {numero: 8,  nombre: "Oxígeno", simbolo: "O", masa: 15.999, tipo: "No metal", grupo: 16, periodo: 2},
  9:  {numero: 9,  nombre: "Flúor", simbolo: "F", masa: 18.998, tipo: "Halógeno", grupo: 17, periodo: 2},
  10: {numero: 10, nombre: "Neón", simbolo: "Ne", masa: 20.180, tipo: "Gas noble", grupo: 18, periodo: 2},
  11: {numero: 11, nombre: "Sodio", simbolo: "Na", masa: 22.990, tipo: "Metal alcalino", grupo: 1,  periodo: 3},
  12: {numero: 12, nombre: "Magnesio", simbolo: "Mg", masa: 24.305, tipo: "Metal alcalinotérreo", grupo: 2, periodo: 3},
  13: {numero: 13, nombre: "Aluminio", simbolo: "Al", masa: 26.982, tipo: "Metal pobre", grupo: 13, periodo: 3},
  14: {numero: 14, nombre: "Silicio", simbolo: "Si", masa: 28.085, tipo: "Metaloide", grupo: 14, periodo: 3},
  15: {numero: 15, nombre: "Fósforo", simbolo: "P", masa: 30.974, tipo: "No metal", grupo: 15, periodo: 3},
  16: {numero: 16, nombre: "Azufre", simbolo: "S", masa: 32.06,  tipo: "No metal", grupo: 16, periodo: 3},
  17: {numero: 17, nombre: "Cloro", simbolo: "Cl", masa: 35.45, tipo: "Halógeno", grupo: 17, periodo: 3},
  18: {numero: 18, nombre: "Argón", simbolo: "Ar", masa: 39.948, tipo: "Gas noble", grupo: 18, periodo: 3},
  19: {numero: 19, nombre: "Potasio", simbolo: "K", masa: 39.098, tipo: "Metal alcalino", grupo: 1,  periodo: 4},
  20: {numero: 20, nombre: "Calcio", simbolo: "Ca", masa: 40.078, tipo: "Metal alcalinotérreo", grupo: 2, periodo: 4},
  21: {numero: 21, nombre: "Escandio", simbolo: "Sc", masa: 44.956, tipo: "Metal de transición", grupo: 3, periodo: 4},
  22: {numero: 22, nombre: "Titanio", simbolo: "Ti", masa: 47.867, tipo: "Metal de transición", grupo: 4, periodo: 4},
  23: {numero: 23, nombre: "Vanadio", simbolo: "V", masa: 50.942, tipo: "Metal de transición", grupo: 5, periodo: 4},
  24: {numero: 24, nombre: "Cromo", simbolo: "Cr", masa: 51.996, tipo: "Metal de transición", grupo: 6, periodo: 4},
  25: {numero: 25, nombre: "Manganeso", simbolo: "Mn", masa: 54.938, tipo: "Metal de transición", grupo: 7, periodo: 4},
  26: {numero: 26, nombre: "Hierro", simbolo: "Fe", masa: 55.845, tipo: "Metal de transición", grupo: 8, periodo: 4},
  27: {numero: 27, nombre: "Cobalto", simbolo: "Co", masa: 58.933, tipo: "Metal de transición", grupo: 9, periodo: 4},
  28: {numero: 28, nombre: "Níquel", simbolo: "Ni", masa: 58.693, tipo: "Metal de transición", grupo: 10, periodo: 4},
  29: {numero: 29, nombre: "Cobre", simbolo: "Cu", masa: 63.546, tipo: "Metal de transición", grupo: 11, periodo: 4},
  30: {numero: 30, nombre: "Zinc", simbolo: "Zn", masa: 65.38,  tipo: "Metal de transición", grupo: 12, periodo: 4},
  31: {numero: 31, nombre: "Galio", simbolo: "Ga", masa: 69.723, tipo: "Metal pobre", grupo: 13, periodo: 4},
  32: {numero: 32, nombre: "Germanio", simbolo: "Ge", masa: 72.630, tipo: "Metaloide", grupo: 14, periodo: 4},
  33: {numero: 33, nombre: "Arsénico", simbolo: "As", masa: 74.922, tipo: "Metaloide", grupo: 15, periodo: 4},
  34: {numero: 34, nombre: "Selenio", simbolo: "Se", masa: 78.971, tipo: "No metal", grupo: 16, periodo: 4},
  35: {numero: 35, nombre: "Bromo", simbolo: "Br", masa: 79.904, tipo: "Halógeno", grupo: 17, periodo: 4},
  36: {numero: 36, nombre: "Kriptón", simbolo: "Kr", masa: 83.798, tipo: "Gas noble", grupo: 18, periodo: 4},
  37: {numero: 37, nombre: "Rubidio", simbolo: "Rb", masa: 85.468, tipo: "Metal alcalino", grupo: 1,  periodo: 5},
  38: {numero: 38, nombre: "Estroncio", simbolo: "Sr", masa: 87.62,  tipo: "Metal alcalinotérreo", grupo: 2, periodo: 5},
  39: {numero: 39, nombre: "Itrio", simbolo: "Y", masa: 88.906, tipo: "Metal de transición", grupo: 3, periodo: 5},
  40: {numero: 40, nombre: "Circonio", simbolo: "Zr", masa: 91.224, tipo: "Metal de transición", grupo: 4, periodo: 5},
  41: {numero: 41, nombre: "Niobio", simbolo: "Nb", masa: 92.906, tipo: "Metal de transición", grupo: 5, periodo: 5},
  42: {numero: 42, nombre: "Molibdeno", simbolo: "Mo", masa: 95.95,  tipo: "Metal de transición", grupo: 6, periodo: 5},
  43: {numero: 43, nombre: "Tecnecio", simbolo: "Tc", masa: 98,     tipo: "Metal de transición", grupo: 7, periodo: 5},
  44: {numero: 44, nombre: "Rutenio", simbolo: "Ru", masa: 101.07, tipo: "Metal de transición", grupo: 8, periodo: 5},
  45: {numero: 45, nombre: "Rodio", simbolo: "Rh", masa: 102.91, tipo: "Metal de transición", grupo: 9, periodo: 5},
  46: {numero: 46, nombre: "Paladio", simbolo: "Pd", masa: 106.42, tipo: "Metal de transición", grupo: 10, periodo: 5},
  47: {numero: 47, nombre: "Plata", simbolo: "Ag", masa: 107.87, tipo: "Metal de transición", grupo: 11, periodo: 5},
  48: {numero: 48, nombre: "Cadmio", simbolo: "Cd", masa: 112.41, tipo: "Metal de transición", grupo: 12, periodo: 5},
  49: {numero: 49, nombre: "Indio", simbolo: "In", masa: 114.82, tipo: "Metal pobre", grupo: 13, periodo: 5},
  50: {numero: 50, nombre: "Estaño", simbolo: "Sn", masa: 118.71, tipo: "Metal pobre", grupo: 14, periodo: 5},
  51: {numero: 51, nombre: "Antimonio", simbolo: "Sb", masa: 121.76, tipo: "Metaloide", grupo: 15, periodo: 5},
  52: {numero: 52, nombre: "Telurio", simbolo: "Te", masa: 127.60, tipo: "Metaloide", grupo: 16, periodo: 5},
  53: {numero: 53, nombre: "Yodo", simbolo: "I", masa: 126.90, tipo: "Halógeno", grupo: 17, periodo: 5},
  54: {numero: 54, nombre: "Xenón", simbolo: "Xe", masa: 131.29, tipo: "Gas noble", grupo: 18, periodo: 5},
  55: {numero: 55, nombre: "Cesio", simbolo: "Cs", masa: 132.91, tipo: "Metal alcalino", grupo: 1,  periodo: 6},
  56: {numero: 56, nombre: "Bario", simbolo: "Ba", masa: 137.33, tipo: "Metal alcalinotérreo", grupo: 2, periodo: 6},
  57: {numero: 57, nombre: "Lantano", simbolo: "La", masa: 138.91, tipo: "Lantánido", grupo: null, periodo: 6},
  58: {numero: 58, nombre: "Cerio", simbolo: "Ce", masa: 140.12, tipo: "Lantánido", grupo: null, periodo: 6},
  59: {numero: 59, nombre: "Praseodimio", simbolo: "Pr", masa: 140.91, tipo: "Lantánido", grupo: null, periodo: 6},
  60: {numero: 60, nombre: "Neodimio", simbolo: "Nd", masa: 144.24, tipo: "Lantánido", grupo: null, periodo: 6},
  61: {numero: 61, nombre: "Prometio", simbolo: "Pm", masa: 145,    tipo: "Lantánido", grupo: null, periodo: 6},
  62: {numero: 62, nombre: "Samario", simbolo: "Sm", masa: 150.36, tipo: "Lantánido", grupo: null, periodo: 6},
  63: {numero: 63, nombre: "Europio", simbolo: "Eu", masa: 151.96, tipo: "Lantánido", grupo: null, periodo: 6},
  64: {numero: 64, nombre: "Gadolinio", simbolo: "Gd", masa: 157.25, tipo: "Lantánido", grupo: null, periodo: 6},
  65: {numero: 65, nombre: "Terbio", simbolo: "Tb", masa: 158.93, tipo: "Lantánido", grupo: null, periodo: 6},
  66: {numero: 66, nombre: "Disprosio", simbolo: "Dy", masa: 162.50, tipo: "Lantánido", grupo: null, periodo: 6},
  67: {numero: 67, nombre: "Holmio", simbolo: "Ho", masa: 164.93, tipo: "Lantánido", grupo: null, periodo: 6},
  68: {numero: 68, nombre: "Erbio", simbolo: "Er", masa: 167.26, tipo: "Lantánido", grupo: null, periodo: 6},
  69: {numero: 69, nombre: "Tulio", simbolo: "Tm", masa: 168.93, tipo: "Lantánido", grupo: null, periodo: 6},
  70: {numero: 70, nombre: "Iterbio", simbolo: "Yb", masa: 173.05, tipo: "Lantánido", grupo: null, periodo: 6},
  71: {numero: 71, nombre: "Lutecio", simbolo: "Lu", masa: 174.97, tipo: "Lantánido", grupo: 3, periodo: 6},
  72: {numero: 72, nombre: "Hafnio", simbolo: "Hf", masa: 178.49, tipo: "Metal de transición", grupo: 4, periodo: 6},
  73: {numero: 73, nombre: "Tantalio", simbolo: "Ta", masa: 180.95, tipo: "Metal de transición", grupo: 5, periodo: 6},
  74: {numero: 74, nombre: "Wolframio", simbolo: "W", masa: 183.84, tipo: "Metal de transición", grupo: 6, periodo: 6},
  75: {numero: 75, nombre: "Renio", simbolo: "Re", masa: 186.21, tipo: "Metal de transición", grupo: 7, periodo: 6},
  76: {numero: 76, nombre: "Osmio", simbolo: "Os", masa: 190.23, tipo: "Metal de transición", grupo: 8, periodo: 6},
  77: {numero: 77, nombre: "Iridio", simbolo: "Ir", masa: 192.22, tipo: "Metal de transición", grupo: 9, periodo: 6},
  78: {numero: 78, nombre: "Platino", simbolo: "Pt", masa: 195.08, tipo: "Metal de transición", grupo: 10, periodo: 6},
  79: {numero: 79, nombre: "Oro", simbolo: "Au", masa: 196.97, tipo: "Metal de transición", grupo: 11, periodo: 6},
  80: {numero: 80, nombre: "Mercurio", simbolo: "Hg", masa: 200.59, tipo: "Metal de transición", grupo: 12, periodo: 6},
  81: {numero: 81, nombre: "Talio", simbolo: "Tl", masa: 204.38, tipo: "Metal pobre", grupo: 13, periodo: 6},
  82: {numero: 82, nombre: "Plomo", simbolo: "Pb", masa: 207.2,  tipo: "Metal pobre", grupo: 14, periodo: 6},
  83: {numero: 83, nombre: "Bismuto", simbolo: "Bi", masa: 208.98, tipo: "Metal pobre", grupo: 15, periodo: 6},
  84: {numero: 84, nombre: "Polonio", simbolo: "Po", masa: 209,    tipo: "Metaloide", grupo: 16, periodo: 6},
  85: {numero: 85, nombre: "Astato", simbolo: "At", masa: 210,    tipo: "Halógeno", grupo: 17, periodo: 6},
  86: {numero: 86, nombre: "Radón", simbolo: "Rn", masa: 222,    tipo: "Gas noble", grupo: 18, periodo: 6},
  87: {numero: 87, nombre: "Francio", simbolo: "Fr", masa: 223,   tipo: "Metal alcalino", grupo: 1,  periodo: 7},
  88: {numero: 88, nombre: "Radio", simbolo: "Ra", masa: 226,    tipo: "Metal alcalinotérreo", grupo: 2, periodo: 7},
  89: {numero: 89, nombre: "Actinio", simbolo: "Ac", masa: 227,    tipo: "Actínido", grupo: null, periodo: 7},
  90: {numero: 90, nombre: "Torio", simbolo: "Th", masa: 232.04, tipo: "Actínido", grupo: null, periodo: 7},
  91: {numero: 91, nombre: "Protactinio", simbolo: "Pa", masa: 231.04, tipo: "Actínido", grupo: null, periodo: 7},
  92: {numero: 92, nombre: "Uranio", simbolo: "U", masa: 238.03, tipo: "Actínido", grupo: null, periodo: 7},
  93: {numero: 93, nombre: "Neptunio", simbolo: "Np", masa: 237,    tipo: "Actínido", grupo: null, periodo: 7},
  94: {numero: 94, nombre: "Plutonio", simbolo: "Pu", masa: 244,    tipo: "Actínido", grupo: null, periodo: 7},
  95: {numero: 95, nombre: "Americio", simbolo: "Am", masa: 243,    tipo: "Actínido", grupo: null, periodo: 7},
  96: {numero: 96, nombre: "Curio", simbolo: "Cm", masa: 247,    tipo: "Actínido", grupo: null, periodo: 7},
  97: {numero: 97, nombre: "Berkelio", simbolo: "Bk", masa: 247,    tipo: "Actínido", grupo: null, periodo: 7},
  98: {numero: 98, nombre: "Californio", simbolo: "Cf", masa: 251,    tipo: "Actínido", grupo: null, periodo: 7},
  99: {numero: 99, nombre: "Einstenio", simbolo: "Es", masa: 252,    tipo: "Actínido", grupo: null, periodo: 7},
  100: {numero: 100, nombre: "Fermio", simbolo: "Fm", masa: 257,   tipo: "Actínido", grupo: null, periodo: 7},
  101: {numero: 101, nombre: "Mendelevio", simbolo: "Md", masa: 258, tipo: "Actínido", grupo: null, periodo: 7},
  102: {numero: 102, nombre: "Nobelio", simbolo: "No", masa: 259,  tipo: "Actínido", grupo: null, periodo: 7},
  103: {numero: 103, nombre: "Lawrencio", simbolo: "Lr", masa: 262, tipo: "Actínido", grupo: null, periodo: 7},
  104: {numero: 104, nombre: "Rutherfordio", simbolo: "Rf", masa: 267, tipo: "Metal de transición", grupo: 4, periodo: 7},
  105: {numero: 105, nombre: "Dubnio", simbolo: "Db", masa: 270,    tipo: "Metal de transición", grupo: 5, periodo: 7},
  106: {numero: 106, nombre: "Seaborgio", simbolo: "Sg", masa: 271, tipo: "Metal de transición", grupo: 6, periodo: 7},
  107: {numero: 107, nombre: "Bohrio", simbolo: "Bh", masa: 270,    tipo: "Metal de transición", grupo: 7, periodo: 7},
  108: {numero: 108, nombre: "Hassio", simbolo: "Hs", masa: 277,    tipo: "Metal de transición", grupo: 8, periodo: 7},
  109: {numero: 109, nombre: "Meitnerio", simbolo: "Mt", masa: 276, tipo: "Metal de transición", grupo: 9, periodo: 7},
  110: {numero: 110, nombre: "Darmstatio", simbolo: "Ds", masa: 281, tipo: "Metal de transición", grupo: 10, periodo: 7},
  111: {numero: 111, nombre: "Roentgenio", simbolo: "Rg", masa: 282, tipo: "Metal de transición", grupo: 11, periodo: 7},
  112: {numero: 112, nombre: "Copernicio", simbolo: "Cn", masa: 285, tipo: "Metal de transición", grupo: 12, periodo: 7},
  113: {numero: 113, nombre: "Nihonio", simbolo: "Nh", masa: 286,   tipo: "Metal pobre", grupo: 13, periodo: 7},
  114: {numero: 114, nombre: "Flerovio", simbolo: "Fl", masa: 289,  tipo: "Metal pobre", grupo: 14, periodo: 7},
  115: {numero: 115, nombre: "Moscovio", simbolo: "Mc", masa: 290,  tipo: "Metal pobre", grupo: 15, periodo: 7},
  116: {numero: 116, nombre: "Livermorio", simbolo: "Lv", masa: 293, tipo: "Metal pobre", grupo: 16, periodo: 7},
  117: {numero: 117, nombre: "Tenesino", simbolo: "Ts", masa: 294,   tipo: "Halógeno", grupo: 17, periodo: 7},
  118: {numero: 118, nombre: "Oganesón", simbolo: "Og", masa: 294,  tipo: "Gas noble", grupo: 18, periodo: 7}
};

const tabla = document.getElementById('tabla-periodica');

function crearElementoHTML(elemento) {
    const div = document.createElement('div');
    div.classList.add('elemento');
    div.style.gridColumnStart = elemento.grupo || 4; // Los lantánidos y actínidos empiezan en columna 4
    div.style.gridRowStart = elemento.periodo;
    
    div.innerHTML = `
      <strong>${elemento.numero}. ${elemento.nombre} (${elemento.simbolo})</strong><br>
      Masa: ${elemento.masa}<br>
      Tipo: ${elemento.tipo}
    `;
    return div;
}

function cargarTablaPeriodica() {
    for (let i = 1; i <= 118; i++) {
        const elemento = elementos[i];
        const elementoHTML = crearElementoHTML(elemento);
        tabla.appendChild(elementoHTML);
    }
}

cargarTablaPeriodica();
</script>
</body>
</html>  

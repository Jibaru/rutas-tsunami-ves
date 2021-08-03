const DATOS = {
  RUTAS: {
    ul: document.getElementById("rutas-evacuacion"),
    elementos: [
      {
        nombre: "Ruta Evacuación 1",
        descripcion: "La ruta pasa por A, B, C",
      },
      {
        nombre: "Ruta Evacuación 2",
        descripcion: "La ruta pasa por A, B, D",
      },
      {
        nombre: "Ruta Evacuación 3",
        descripcion: "La ruta pasa por A, B, C",
      },
      {
        nombre: "Ruta Evacuación 4",
        descripcion: "La ruta pasa por A, B, D",
      },
      {
        nombre: "Ruta Evacuación 5",
        descripcion: "La ruta pasa por A, B, C",
      },
    ],
  },
  DISPOSICIONES: {
    ul: document.getElementById("disposiciones-mar"),
    elementos: [
      {
        nombre: "Sismo Grado 8",
        descripcion: "El área cubierta por el mar sería de ...",
      },
      {
        nombre: "Sismo Grado 9",
        descripcion: "lorem2",
      },
    ],
  },
  REFUGIOS: {
    ul: document.getElementById("refugios"),
    elementos: [
      {
        nombre: "Refugio 1",
        descripcion: "lorem",
      },
      {
        nombre: "Refugio 2",
        descripcion: "lorem2",
      },
    ],
  },
};

const checkLists = document.getElementsByClassName(
  "leaflet-control-layers-selector"
);

const Intervalo = {
  interval: null,
  terminarYNuevo(input) {
    this.terminar();
    this.nuevo(input);
  },
  nuevo(input) {
    this.interval = setInterval(function () {
      input.click();
    }, 500);
  },
  terminar() {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  },
};

(function () {
  let i = 0;
  while (i < 2) {
    DATOS.REFUGIOS.elementos[i].input = checkLists[i];
    i++;
  }

  while (i < 7) {
    DATOS.RUTAS.elementos[i - 2].input = checkLists[i];
    i++;
  }

  while (i < 9) {
    DATOS.DISPOSICIONES.elementos[i - 7].input = checkLists[i];
    i++;
  }
})();

(function () {
  function toggleContenidoElemento(div) {
    const els = document.getElementsByClassName("elementos-contenido");

    for (el of els) {
      if (el != div) {
        el.style.display = "none";
      }
    }

    div.style.display = div.style.display == "block" ? "none" : "block";
  }

  for (const key in DATOS) {
    for (const dato of DATOS[key].elementos) {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const p = document.createElement("p");

      li.textContent = dato.nombre;
      p.textContent = dato.descripcion;

      li.classList = "elementos";
      div.classList = "elementos-contenido";
      div.style.display = "none";

      li.addEventListener("click", function () {
        toggleContenidoElemento(div);
        if (div.style.display == "none") {
          Intervalo.terminar();
        } else {
          Intervalo.terminarYNuevo(dato.input);
        }
      });

      div.appendChild(p);
      DATOS[key].ul.appendChild(li);
      DATOS[key].ul.appendChild(div);
    }
  }
})();

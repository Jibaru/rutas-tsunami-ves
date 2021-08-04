const DATOS = {
  RUTAS: {
    ul: document.getElementById("rutas-evacuacion"),
    elementos: [
      {
        nombre: "Ruta Evacuación 1",
        descripcion:
          "Incluye zonas como el Circuito Jorgito, la Escuela de Manejo Universal, la Escuela de Choferes Aarón Macedo, la Carretera Panamericana, la empresa médica Andina Medical EIRL, el Circuito Grand Prix y el Centro de Evaluación Touring.",
      },
      {
        nombre: "Ruta Evacuación 2",
        descripcion:
          "Incluye zonas como el Circuito Alternativo-Malecón, Restaurantes aledaños (costeros), Almacenes y algunos Grifos.",
      },
      {
        nombre: "Ruta Evacuación 3",
        descripcion:
          "Incluye la avenida San Pedro, el puente Peatonal Llanavilla y la Asociación de familias Santa Rosa de Villa.",
      },
      {
        nombre: "Ruta Evacuación 4",
        descripcion:
          "Incluye el club Wash Vip, algunos locales y almacenes, Adel Construcciones SAC.",
      },
      {
        nombre: "Ruta Evacuación 5",
        descripcion:
          "Es la ruta para el distrito aledaño de Lurín (únicamente Puente Lurín). Incluye la avenida San Martín, FEMSA Logística, el grifo Pecsa y la avenida María Reiche.",
      },
    ],
  },
  DISPOSICIONES: {
    ul: document.getElementById("disposiciones-mar"),
    elementos: [
      {
        nombre: "Sismo Grado 8",
        descripcion:
          "Un tsunami causado por un terremoto de 8 grados de magnitud inundaría por completo el litoral del distrito, cubriendo totalmente la carretera panamericana sur, además de adentrarse en la antigua panamericana sur y la refinería de Conchán, en lo que respecta a la zona aledaña ubicada en el distrito de Lurín. En esta situación, la población de la Comunidad Campesina de Llanavilla, Las brisas de Lurín y Villa Venecia quedarían sumergidas en su totalidad, por lo cual prepararse para una evacuación total y rápida es de vital importancia.",
      },
      {
        nombre: "Sismo Grado 9",
        descripcion:
          "De producirse un tsunami luego de un terremoto de 9 grados de magnitud el agua podría adentrarse más en el distrito de VES. Sin embargo, la situación sería aún peor en la zona aledaña ubicada en Lurín, donde se inundaría más el área de la antigua panamericana sur y casi la totalidad de la refinería de Conchán. Además de las poblaciones mencionadas anteriormente, también tendrían que prepararse para una evacuación total las zonas de Héroes del Cenepa, en VES; y las de Valle de Jesús y San Antonio, en las áreas aledañas ubicadas en Lurín.",
      },
    ],
  },
  REFUGIOS: {
    ul: document.getElementById("refugios"),
    elementos: [
      {
        nombre: "Refugio 1",
        descripcion:
          "Un área identificada por Defensa Civil para poder servir de refugio para los evacuados se ubica en un sector del descampado en el Lomo de Corvina, dada su proximidad a las vías de escape hacia zonas altas. Sin embargo, esta zona presenta algunos problemas, como la falta de acondicionación adecuada de los accesos, además de mejorar la señalética. Aquellos problemas están buscando ser atendidos por Defensa Civil.",
      },
      {
        nombre: "Refugio 2",
        descripcion:
          "Un segundo refugio estaría ubicado entre el desierto entre Villa el Salvador y Puente Lurín. Este refugio funcionaría únicamente para los habitantes aledaños.",
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

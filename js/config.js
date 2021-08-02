var map = L.map("map", {
  zoomControl: true,
  maxZoom: 28,
  minZoom: 1,
}).fitBounds([
  [-12.254302417587255, -76.93868518226468],
  [-12.244599271250365, -76.9105864876641],
]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix(
  '<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>'
);
var autolinker = new Autolinker({
  truncate: { length: 30, location: "smart" },
});
var measureControl = new L.Control.Measure({
  position: "topleft",
  primaryLengthUnit: "feet",
  secondaryLengthUnit: "miles",
  primaryAreaUnit: "sqfeet",
  secondaryAreaUnit: "sqmiles",
});
measureControl.addTo(map);
document.getElementsByClassName("leaflet-control-measure-toggle")[0].innerHTML =
  "";
document.getElementsByClassName(
  "leaflet-control-measure-toggle"
)[0].className += " fas fa-ruler";
var bounds_group = new L.featureGroup([]);
function setBounds() {}
map.createPane("pane_GoogleMaps_0");
map.getPane("pane_GoogleMaps_0").style.zIndex = 400;
var layer_GoogleMaps_0 = L.tileLayer(
  "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    pane: "pane_GoogleMaps_0",
    opacity: 1.0,
    attribution: "",
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 22,
  }
);
layer_GoogleMaps_0;
map.addLayer(layer_GoogleMaps_0);
function pop_MarSismo9Grados_1(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>qc_id</strong><br />' +
    (feature.properties["qc_id"] !== null
      ? autolinker.link(feature.properties["qc_id"].toLocaleString())
      : "") +
    '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_MarSismo9Grados_1_0() {
  return {
    pane: "pane_MarSismo9Grados_1",
    interactive: true,
  };
}
function style_MarSismo9Grados_1_1() {
  return {
    pane: "pane_MarSismo9Grados_1",
    opacity: 1,
    color: "rgba(0,0,0,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_MarSismo9Grados_1");
map.getPane("pane_MarSismo9Grados_1").style.zIndex = 401;
map.getPane("pane_MarSismo9Grados_1").style["mix-blend-mode"] = "normal";
var layer_MarSismo9Grados_1 = new L.geoJson.multiStyle(json_MarSismo9Grados_1, {
  attribution: "",
  interactive: true,
  dataVar: "json_MarSismo9Grados_1",
  layerName: "layer_MarSismo9Grados_1",
  pane: "pane_MarSismo9Grados_1",
  onEachFeature: pop_MarSismo9Grados_1,
  styles: [style_MarSismo9Grados_1_0, style_MarSismo9Grados_1_1],
});
bounds_group.addLayer(layer_MarSismo9Grados_1);
map.addLayer(layer_MarSismo9Grados_1);
function pop_MarSismo8Grados_2(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>qc_id</strong><br />' +
    (feature.properties["qc_id"] !== null
      ? autolinker.link(feature.properties["qc_id"].toLocaleString())
      : "") +
    '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_MarSismo8Grados_2_0() {
  return {
    pane: "pane_MarSismo8Grados_2",
    interactive: true,
  };
}
function style_MarSismo8Grados_2_1() {
  return {
    pane: "pane_MarSismo8Grados_2",
    opacity: 1,
    color: "rgba(0,0,0,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_MarSismo8Grados_2");
map.getPane("pane_MarSismo8Grados_2").style.zIndex = 402;
map.getPane("pane_MarSismo8Grados_2").style["mix-blend-mode"] = "normal";
var layer_MarSismo8Grados_2 = new L.geoJson.multiStyle(json_MarSismo8Grados_2, {
  attribution: "",
  interactive: true,
  dataVar: "json_MarSismo8Grados_2",
  layerName: "layer_MarSismo8Grados_2",
  pane: "pane_MarSismo8Grados_2",
  onEachFeature: pop_MarSismo8Grados_2,
  styles: [style_MarSismo8Grados_2_0, style_MarSismo8Grados_2_1],
});
bounds_group.addLayer(layer_MarSismo8Grados_2);
map.addLayer(layer_MarSismo8Grados_2);
function pop_RutaEvacuacin5_3(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2">' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_RutaEvacuacin5_3_0() {
  return {
    pane: "pane_RutaEvacuacin5_3",
    opacity: 1,
    color: "rgba(81,183,38,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 6.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_RutaEvacuacin5_3");
map.getPane("pane_RutaEvacuacin5_3").style.zIndex = 403;
map.getPane("pane_RutaEvacuacin5_3").style["mix-blend-mode"] = "normal";
var layer_RutaEvacuacin5_3 = new L.geoJson(json_RutaEvacuacin5_3, {
  attribution: "",
  interactive: true,
  dataVar: "json_RutaEvacuacin5_3",
  layerName: "layer_RutaEvacuacin5_3",
  pane: "pane_RutaEvacuacin5_3",
  onEachFeature: pop_RutaEvacuacin5_3,
  style: style_RutaEvacuacin5_3_0,
});
bounds_group.addLayer(layer_RutaEvacuacin5_3);
map.addLayer(layer_RutaEvacuacin5_3);
function pop_RutaEvacuacin4_4(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_RutaEvacuacin4_4_0() {
  return {
    pane: "pane_RutaEvacuacin4_4",
    opacity: 1,
    color: "rgba(229,182,54,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 6.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_RutaEvacuacin4_4");
map.getPane("pane_RutaEvacuacin4_4").style.zIndex = 404;
map.getPane("pane_RutaEvacuacin4_4").style["mix-blend-mode"] = "normal";
var layer_RutaEvacuacin4_4 = new L.geoJson(json_RutaEvacuacin4_4, {
  attribution: "",
  interactive: true,
  dataVar: "json_RutaEvacuacin4_4",
  layerName: "layer_RutaEvacuacin4_4",
  pane: "pane_RutaEvacuacin4_4",
  onEachFeature: pop_RutaEvacuacin4_4,
  style: style_RutaEvacuacin4_4_0,
});
bounds_group.addLayer(layer_RutaEvacuacin4_4);
map.addLayer(layer_RutaEvacuacin4_4);
function pop_RutaEvacuacin3_5(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_RutaEvacuacin3_5_0() {
  return {
    pane: "pane_RutaEvacuacin3_5",
    opacity: 1,
    color: "rgba(72,225,41,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 6.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_RutaEvacuacin3_5");
map.getPane("pane_RutaEvacuacin3_5").style.zIndex = 405;
map.getPane("pane_RutaEvacuacin3_5").style["mix-blend-mode"] = "normal";
var layer_RutaEvacuacin3_5 = new L.geoJson(json_RutaEvacuacin3_5, {
  attribution: "",
  interactive: true,
  dataVar: "json_RutaEvacuacin3_5",
  layerName: "layer_RutaEvacuacin3_5",
  pane: "pane_RutaEvacuacin3_5",
  onEachFeature: pop_RutaEvacuacin3_5,
  style: style_RutaEvacuacin3_5_0,
});
bounds_group.addLayer(layer_RutaEvacuacin3_5);
map.addLayer(layer_RutaEvacuacin3_5);
function pop_RutaEvacuacin2_6(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_RutaEvacuacin2_6_0() {
  return {
    pane: "pane_RutaEvacuacin2_6",
    opacity: 1,
    color: "rgba(86,59,207,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 6.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_RutaEvacuacin2_6");
map.getPane("pane_RutaEvacuacin2_6").style.zIndex = 406;
map.getPane("pane_RutaEvacuacin2_6").style["mix-blend-mode"] = "normal";
var layer_RutaEvacuacin2_6 = new L.geoJson(json_RutaEvacuacin2_6, {
  attribution: "",
  interactive: true,
  dataVar: "json_RutaEvacuacin2_6",
  layerName: "layer_RutaEvacuacin2_6",
  pane: "pane_RutaEvacuacin2_6",
  onEachFeature: pop_RutaEvacuacin2_6,
  style: style_RutaEvacuacin2_6_0,
});
bounds_group.addLayer(layer_RutaEvacuacin2_6);
map.addLayer(layer_RutaEvacuacin2_6);
function pop_RutaEvacuacin1_7(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_RutaEvacuacin1_7_0() {
  return {
    pane: "pane_RutaEvacuacin1_7",
    opacity: 1,
    color: "rgba(221,231,75,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 6.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_RutaEvacuacin1_7");
map.getPane("pane_RutaEvacuacin1_7").style.zIndex = 407;
map.getPane("pane_RutaEvacuacin1_7").style["mix-blend-mode"] = "normal";
var layer_RutaEvacuacin1_7 = new L.geoJson(json_RutaEvacuacin1_7, {
  attribution: "",
  interactive: true,
  dataVar: "json_RutaEvacuacin1_7",
  layerName: "layer_RutaEvacuacin1_7",
  pane: "pane_RutaEvacuacin1_7",
  onEachFeature: pop_RutaEvacuacin1_7,
  style: style_RutaEvacuacin1_7_0,
});
bounds_group.addLayer(layer_RutaEvacuacin1_7);
map.addLayer(layer_RutaEvacuacin1_7);
function pop_SegundoRefugio_8(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2">' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

var pattern_SegundoRefugio_8_0 = new L.StripePattern({
  weight: 0.3,
  spaceWeight: 2.0,
  color: "#8a531c",
  opacity: 1.0,
  spaceOpacity: 0,
  angle: 315,
});
pattern_SegundoRefugio_8_0.addTo(map);
function style_SegundoRefugio_8_0() {
  return {
    pane: "pane_SegundoRefugio_8",
    stroke: false,
    fillOpacity: 1,
    fillPattern: pattern_SegundoRefugio_8_0,
    interactive: true,
  };
}
function style_SegundoRefugio_8_1() {
  return {
    pane: "pane_SegundoRefugio_8",
    opacity: 1,
    color: "rgba(138,83,28,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 2.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_SegundoRefugio_8");
map.getPane("pane_SegundoRefugio_8").style.zIndex = 408;
map.getPane("pane_SegundoRefugio_8").style["mix-blend-mode"] = "normal";
var layer_SegundoRefugio_8 = new L.geoJson.multiStyle(json_SegundoRefugio_8, {
  attribution: "",
  interactive: true,
  dataVar: "json_SegundoRefugio_8",
  layerName: "layer_SegundoRefugio_8",
  pane: "pane_SegundoRefugio_8",
  onEachFeature: pop_SegundoRefugio_8,
  styles: [style_SegundoRefugio_8_0, style_SegundoRefugio_8_1],
});
bounds_group.addLayer(layer_SegundoRefugio_8);
map.addLayer(layer_SegundoRefugio_8);
function pop_PrimerRefugio_9(feature, layer) {
  var popupContent =
    '<table>\
                    <tr>\
                        <td colspan="2"><strong>qc_id</strong><br />' +
    (feature.properties["qc_id"] !== null
      ? autolinker.link(feature.properties["qc_id"].toLocaleString())
      : "") +
    '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>id</strong><br />' +
    (feature.properties["id"] !== null
      ? autolinker.link(feature.properties["id"].toLocaleString())
      : "") +
    "</td>\
                    </tr>\
                </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
}

var pattern_PrimerRefugio_9_0 = new L.StripePattern({
  weight: 0.3,
  spaceWeight: 2.0,
  color: "#ff7f00",
  opacity: 1.0,
  spaceOpacity: 0,
  angle: 315,
});
pattern_PrimerRefugio_9_0.addTo(map);
function style_PrimerRefugio_9_0() {
  return {
    pane: "pane_PrimerRefugio_9",
    stroke: false,
    fillOpacity: 1,
    fillPattern: pattern_PrimerRefugio_9_0,
    interactive: true,
  };
}
function style_PrimerRefugio_9_1() {
  return {
    pane: "pane_PrimerRefugio_9",
    opacity: 1,
    color: "rgba(255,127,0,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 2.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_PrimerRefugio_9");
map.getPane("pane_PrimerRefugio_9").style.zIndex = 409;
map.getPane("pane_PrimerRefugio_9").style["mix-blend-mode"] = "normal";
var layer_PrimerRefugio_9 = new L.geoJson.multiStyle(json_PrimerRefugio_9, {
  attribution: "",
  interactive: true,
  dataVar: "json_PrimerRefugio_9",
  layerName: "layer_PrimerRefugio_9",
  pane: "pane_PrimerRefugio_9",
  onEachFeature: pop_PrimerRefugio_9,
  styles: [style_PrimerRefugio_9_0, style_PrimerRefugio_9_1],
});
bounds_group.addLayer(layer_PrimerRefugio_9);
map.addLayer(layer_PrimerRefugio_9);
var osmGeocoder = new L.Control.Geocoder({
  collapsed: true,
  position: "topleft",
  text: "Search",
  title: "Testing",
}).addTo(map);
document.getElementsByClassName("leaflet-control-geocoder-icon")[0].className +=
  " fa fa-search";
document.getElementsByClassName("leaflet-control-geocoder-icon")[0].title +=
  "Search for a place";
var baseMaps = {};
L.control
  .layers(
    baseMaps,
    {
      '<img src="legend/PrimerRefugio_9.png" /> Primer Refugio':
        layer_PrimerRefugio_9,
      '<img src="legend/SegundoRefugio_8.png" /> Segundo Refugio':
        layer_SegundoRefugio_8,
      '<img src="legend/RutaEvacuacin1_7.png" /> Ruta Evacuación 1':
        layer_RutaEvacuacin1_7,
      '<img src="legend/RutaEvacuacin2_6.png" /> Ruta Evacuación 2':
        layer_RutaEvacuacin2_6,
      '<img src="legend/RutaEvacuacin3_5.png" /> Ruta Evacuación 3':
        layer_RutaEvacuacin3_5,
      '<img src="legend/RutaEvacuacin4_4.png" /> Ruta Evacuación 4':
        layer_RutaEvacuacin4_4,
      '<img src="legend/RutaEvacuacin5_3.png" /> Ruta Evacuación 5':
        layer_RutaEvacuacin5_3,
      '<img src="legend/MarSismo8Grados_2.png" /> Mar Sismo 8 Grados':
        layer_MarSismo8Grados_2,
      '<img src="legend/MarSismo9Grados_1.png" /> Mar Sismo 9 Grados':
        layer_MarSismo9Grados_1,
      "Google Maps": layer_GoogleMaps_0,
    },
    { collapsed: false }
  )
  .addTo(map);
setBounds();

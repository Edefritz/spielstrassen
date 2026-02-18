const map = new maplibregl.Map({
  container: "map",
  style: "https://api.protomaps.com/styles/v5/light/de.json?key=48e391584b4f8883",
  center: [13.384517363587292, 52.43386123818473],
  zoom: 16,
});

map.addControl(new maplibregl.NavigationControl(), "top-right");

// Coordinates of the two closure markers (start and end of blocked section)
const markerCoords = [
  [13.3860519308991, 52.43380151962589],
  [13.383113397749696, 52.43401252483835],
];

function createMarker(coords) {
  const el = document.createElement("div");
  el.className = "sperrung-marker";
  new maplibregl.Marker({ element: el, anchor: "bottom" })
    .setLngLat(coords)
    .addTo(map);
}

map.on("load", function () {
  map.addSource("closure", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [13.3860519308991, 52.43380151962589],
          [13.385555645300599, 52.43379753838565],
          [13.385033239406624, 52.43381744458287],
          [13.384517363587292, 52.43386123818473],
          [13.384034138136457, 52.43390503174311],
          [13.383368070622055, 52.43397669383555],
          [13.383113397749696, 52.43401252483835],
        ],
      },
    },
  });

  map.addLayer({
    id: "closure-line",
    type: "line",
    source: "closure",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#c0392b",
      "line-width": 4,
      "line-dasharray": [2, 2],
      "line-opacity": 0.5,
    },
  }, "address_label");

  markerCoords.forEach(createMarker);
});

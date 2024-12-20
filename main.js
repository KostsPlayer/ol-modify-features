import GeoJSON from "https://cdn.skypack.dev/ol/format/GeoJSON.js";
import Map from "https://cdn.skypack.dev/ol/Map.js";
import VectorLayer from "https://cdn.skypack.dev/ol/layer/Vector.js";
import VectorSource from "https://cdn.skypack.dev/ol/source/Vector.js";
import View from "https://cdn.skypack.dev/ol/View.js";
import {
  Modify,
  Select,
  defaults as defaultInteractions,
} from "https://cdn.skypack.dev/ol/interaction.js";
import { fromLonLat } from "https://cdn.skypack.dev/ol/proj.js";

const vector = new VectorLayer({
  background: "white",
  source: new VectorSource({
    url: "https://openlayers.org/data/vector/us-states.json",
    format: new GeoJSON(),
    wrapX: false,
  }),
});

const select = new Select({
  wrapX: false,
});

const modify = new Modify({
  features: select.getFeatures(),
});

const map = new Map({
  interactions: defaultInteractions().extend([select, modify]),
  layers: [vector],
  target: "map",
  view: new View({
    center: fromLonLat([-100, 38.5]),
    zoom: 4,
  }),
});

map
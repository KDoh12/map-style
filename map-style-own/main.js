import "./style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import * as pmtiles from "pmtiles";

let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
  container: "map",
  style: "./scripts/style.json",
  zoom: 2,
  minZoom: 1,
});

let nav = new maplibregl.NavigationControl();
map.addControl(nav, "top-right");

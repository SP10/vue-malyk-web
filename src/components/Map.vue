<template>
  <div style="height: 600px;">
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import {latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 15,
      center: latLng(49.26, 28.3652),
      bounds: null,
      marker: [49.25697,28.36726]
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

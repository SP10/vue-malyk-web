<template>
  <div style="height: 500px;">
    <l-map
      style="height: 100%; width: 100%"
      ref="map"
      v-resize="onResize"
      :zoom="zoom"
      :center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker :lat-lng="marker" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
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
      zoom: 16,
      center: latLng(49.2570,28.3673),
      bounds: null,
      marker: [49.2569,28.3673]
    };
  },
  methods: {
    onResize() {
      console.log( this.$refs);
      this.$refs.map.mapObject._onResize();
    }
  }
};
</script>

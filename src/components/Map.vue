<template lang="html">
    <baidu-map class="map"
    :center="center"
    :zoom="zoom"
    :scroll-wheel-zoom="true"
    @ready="handler">
      <bml-heatmap :data="data" :max="100" :radius="20">
      </bml-heatmap>
    </baidu-map>
</template>

<script>
import { BmlHeatmap } from 'vue-baidu-map'
export default {
  components: {
    BmlHeatmap
  },
  data() {
    return {
      data: [
        // { lng: 116.418261, lat: 39.921984, count: 50 },
        // { lng: 116.423332, lat: 39.916532, count: 51 },
        // { lng: 116.419787, lat: 39.930658, count: 15 }
      ],
      center: { lng: 0, lat: 0 },
      zoom: 10
    }
  },
  created() {
    this.$ajax.get('/static/data.json').then(res => {
      console.log(res.data)
      for (let i = 0; i < res.data.length; i++) {
        let x = res.data[i]
        console.log(x)
        this.data.push({ lng: x.point.lng, lat: x.point.lat, count: x.quantity })
      }
      // console.log(this.data)
      // this.data = res.data
    })
  },
  methods: {
    handler({ BMap, map }) {
      // console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style>
#container {
  width: 500px;
  height: 500px;
  /* border: #ccc solid 1px; */
}
.map {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>

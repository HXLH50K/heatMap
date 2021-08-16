// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BaiduMap from "vue-baidu-map";
import axios from "axios";
Vue.use(BaiduMap, {
  ak: "bSx3PV1zoTHpkQFsQoUt2LNeG0GqtGwV"
});
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

//default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages(routes)
import Home from "@/pages/Home";
import Notify from "@/pages/NotifyPage";
import NotFound from "@/pages/404";

// Routering
export default new Router({
  // HASH!!!
  mode: "history",
  //
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/notify",
      name: "notify",
      component: Notify,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

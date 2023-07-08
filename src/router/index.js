import { createRouter, createWebHistory } from "vue-router";

import HotelsList from "@/views/HotelsList.vue";
import UserBookings from "@/views/UserBookings.vue";

const routes = [
  { path: "/", redirect: "/hotels" },
  { path: "/hotels", component: HotelsList },
  { path: "/bookings", component: UserBookings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-tab",
});

export default router;

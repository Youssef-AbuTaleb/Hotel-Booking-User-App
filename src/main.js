import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import bookingStore from "./store/bookingStore";

// Styles
import "./assets/css/reset.css";
import "./assets/css/main.css";

// global components
import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import ModalOverlay from "./components/UI/ModalOverlay.vue";
import SuccessNotification from "./components/UI/SuccessNotification.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-input", BaseInput);
app.component("modal-overlay", ModalOverlay);
app.component("success-notification", SuccessNotification);

app.use(bookingStore);
app.use(router);
app.mount("#app");

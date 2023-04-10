import { createApp } from "vue";
import App from "./App.vue";
import { plugin } from "@query-kit/vue";
createApp(App)
  .use(plugin, {
    schemaLoader: () => null,
    schemaLocaleLoader: () => null,
    defaultLocale: "en",
    fallbackLocale: "fr",
    renderHtml: true,
    requester: () => null,
  })
  .mount("#app");

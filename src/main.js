import "@babel/polyfill";
import App from "./app.svelte";
const app = new App({
  target: document.getElementById("main"),
});

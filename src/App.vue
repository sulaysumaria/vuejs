<template>
  <div>
    <app-header></app-header>
    <Ninjas></Ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ninjas from "./components/Ninjas";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    Ninjas
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>

<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Names></Names>
  </div>
</template>

<script>
import Names from "./names";

export default {
  name: "app",
  components: {
    Names
  },
  data() {
    return {
      title: "My First App"
    };
  }
};
</script>

<style>
</style>

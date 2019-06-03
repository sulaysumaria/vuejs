<template>
  <ul>
    <li :key="name" v-for="name in data">{{name}}</li>
  </ul>
</template>

<script>
export default {
  name: "names",
  data() {
    return {
      data: ["Mario", "Luigi", "Princess"]
    };
  }
};
</script>

<style>
</style>

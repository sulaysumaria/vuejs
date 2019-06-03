<template>
  <div>
    <h1>List of names</h1>
    <ul>
      <li :key="name" v-for="name in data">{{name}}</li>
    </ul>
  </div>
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

<style scoped>
h1 {
  color: green;
}
</style>

new Vue({
  el: "#vue-app",
  data: {
    name: "Sulay",
    job: "Artist"
  },
  methods: {
    greet(time) {
      return `Good ${time}, ${this.name}`;
    }
  }
});

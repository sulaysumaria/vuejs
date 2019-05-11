new Vue({
  el: "#vue-app",
  data: {
    name: "Sulay",
    job: "Artist",
    website: "https://sulaysumaria.github.io",
    websiteTag:
      '<a href="https://sulaysumaria.github.io" target="_blank">Sulay Sumaria</a>'
  },
  methods: {
    greet(time) {
      return `Good ${time}, ${this.name}`;
    }
  }
});

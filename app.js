new Vue({
  el: "#vue-app",
  data: {
    output: "Your fav food"
  },
  methods: {
    readRefs() {
      this.output = this.$refs.input.value;
      this.$refs.test.innerHTML = this.output;
    }
  }
});

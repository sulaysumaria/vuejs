const one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One"
  },
  methods: {},
  computed: {
    greet() {
      return "Hello from app one.";
    }
  }
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeTitle() {
      one.title = "New title";
    }
  },
  computed: {
    greet() {
      return "Hello from app two.";
    }
  }
});

two.title = "Changed from outside";

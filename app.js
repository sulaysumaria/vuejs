Vue.component("greeting", {
  template: `
    <p>
      I am a re-usable component. -{{name}}
      <button @click="changeName">Change Name</button>
    </p>
  `,
  data() {
    return {
      name: "Sulay"
    };
  },
  methods: {
    changeName() {
      this.name = "Mario";
    }
  }
});

new Vue({
  el: "#vue-app-one"
});

new Vue({
  el: "#vue-app-two"
});

new Vue({
  el: "#vue-app",
  data: {
    name: "Sulay",
    job: "Artist",
    website: "https://sulaysumaria.github.io",
    websiteTag:
      '<a href="https://sulaysumaria.github.io" target="_blank">Sulay Sumaria</a>',
    age: 23,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false
  },
  methods: {
    greet(time) {
      return `Good ${time}, ${this.name}`;
    },
    addYear(years) {
      this.age += years;
    },
    subtractYear(years) {
      this.age -= years;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click() {
      alert("You clicked me");
    },
    logName() {
      console.log("You have entered name.");
    },
    logAge() {
      console.log("You have entered age.");
    }
  },
  computed: {
    addToA() {
      return this.age + this.a;
    },
    addToB() {
      return this.age + this.b;
    },
    compClasses() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
});

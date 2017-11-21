Vue.config.devtools = true;
var vd = {
  message: "test",
  msg2: "test2",
  count: 0,
  listeditems: ["Item 1", "Item 2"]
};
var vm = new Vue({
  el: "#app",
  data: vd,
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    tester: function() {
      this.count += 1;
    }
  }
});

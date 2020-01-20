<template>
  <div class="container pessoal">
    <h1>About me</h1>
  </div>
</template>
<script>
import axios from "axios";

export default {
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      axios
        .get("https://api.github.com/users/thigaleno")
        .then(response => {
          window.console.log(response);
        })
        .catch(err => window.console.log(err));
    }
  }
};
</script>

<style>
</style>
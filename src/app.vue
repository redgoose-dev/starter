<template>
<article class="app">
  <h1>Hello my app</h1>
  <p>Ready create app.</p>
  <HelloWorld/>
</article>
</template>

<script setup>
import store from './store';
import HelloWorld from './components/hello-world/index.vue';

console.log('Store:', store.state);
console.log(window.DEBUG)
</script>

<style lang="scss" scoped>
.app {
  padding: 30px;
}
</style>

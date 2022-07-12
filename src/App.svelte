<article class="app">
  <h1>Hello my app</h1>
  <p>Ready create app.</p>
  <HelloWorld/>
</article>

<script lang="ts">
import HelloWorld from './components/hello-world/index.svelte';
</script>

<style lang="scss">
.app {
  h1 {
    margin: 0;
    background: #999;
    padding: 16px;
    color: #fff;
  }
}
</style>

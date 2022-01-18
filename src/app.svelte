<article class="app">
  <h1>Hello my app</h1>
  <p>Ready create app.</p>
  <HelloWorld/>
</article>

<script>
import HelloWorld from './components/hello-world/index.svelte';
console.warn('DEBUG:', window.DEBUG)
</script>

<style lang="scss">
.app {
  h1 {
    background: #999;
    padding: 16px;
    color: #fff;
  }
}
</style>

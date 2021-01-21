<script lang="ts">
import HelloWorld from '~/components/HelloWorld.svelte';
</script>

<style lang="scss">
main {
  padding: 2rem;
  > *:first-child {
    margin-top: 0;
  }
}
</style>

<main>
  <h1>Starter ground / Svelte</h1>
  <p>Hello Svelte project</p>
  <ul>
    <li>apple</li>
    <li>banana</li>
    <li>mango</li>
  </ul>
  <HelloWorld/>
</main>

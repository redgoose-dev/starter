<template>
  <h1>Vue3 app</h1>
  <hello-world/>
</template>

<script>
import { defineComponent } from 'vue';
import HelloWorld from '~/components/hello-world';
import * as util from '~/libs/util';

export default defineComponent({
  name: 'app-main',
  components: {
    'hello-world': HelloWorld,
  },
  setup()
  {
    console.log('call setup()');
    util.foo();
  },
});
</script>

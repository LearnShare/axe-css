<template>
  <div class="main-frame">
    <aside>
      <nav-menu></nav-menu>
    </aside>
    <main>
      <component
          :is="current"></component>
    </main>
  </div>
</template>

<script>
import {
  defineAsyncComponent,
} from 'vue';

import NavMenu from '@/components/nav-menu/index';

export default {
  components: {
    NavMenu,
  },
  setup() {
    //
  },
  computed: {
    current() {
      switch (this.$route.path.substring(1)) {
        case 'shape':
          return defineAsyncComponent(
            () => import('@/components/shape/index'),
          );
        default:
          return defineAsyncComponent(
            () => import('@/components/404/index'),
          );
      }
    },
  },
};
</script>

<style
    lang="scss"
    scoped>
.main-frame {
  display: flex;
  height: 100%;

  aside {
    width: 240px;
    background-color: #F5F5F5;
  }

  main {
    flex: 1;
    padding: 12px;
  }
}
</style>

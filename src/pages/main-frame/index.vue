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
        case 'size':
          return defineAsyncComponent(
            () => import('@/components/size/index'),
          );
        case 'font':
          return defineAsyncComponent(
            () => import('@/components/font/index'),
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
    overflow: auto;
  }

  main {
    flex: 1;
    padding: 12px;
    overflow: auto;
  }
}
</style>

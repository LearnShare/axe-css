<template>
  <div>
    <div class="shape-rectangle"></div>
    <div class="shape-rectangle-corner"></div>
    <div class="shape-round"></div>
  </div>
</template>

<script>
export default {
  setup() {
    //
  },
};
</script>

<style
    lang="scss"
    scoped>
  @import '@/axe/mixins/main.scss';

  div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
  }

  .shape-rectangle {
    @include rectangle(80px);
    background-color: #CCC;
  }

  .shape-rectangle-corner {
    @include rectangle(120px, 80px, 6px);
    background-color: #CCC;
  }

  .shape-round {
    @include round(80px);
    background-color: #CCC;
  }
</style>

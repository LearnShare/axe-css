<template>
  <ul class="size-list">
    <li
        v-for="(size, index) in sizeList"
        :key="index"
        :style="{
          width: `var(--size-${size})`,
          height: `var(--size-${size})`,
        }"></li>
  </ul>
</template>

<script>
export default {
  setup() {
    const generateSizeList = () => {
      const list = [];

      const names = [
        'corner',
        'a',
        'b',
        'c',
        'd',
      ];
      const sizes = [
        's',
        'm',
        'l',
        'xl',
      ];

      list.push(...sizes);

      for (const name of names) { // eslint-disable-line
        for (const size of sizes) { // eslint-disable-line
          list.push(`${name}-${size}`);
        }
      }

      return list;
    };

    return {
      sizeList: generateSizeList(),
    };
  },
};
</script>

<style
    lang="scss"
    scoped>
  ul {
    li {
      display: inline-block;
      vertical-align: top;
      margin: 0 var(--size-xl);
      background-color: #CCC;
    }
  }
</style>

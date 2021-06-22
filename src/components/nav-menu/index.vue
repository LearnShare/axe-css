<template>
  <nav class="nav-menu">
    <ul
        class="menu-group">
      <li
          v-for="(group, index) in menus"
          :key="index">
        <router-link
            v-if="group.value"
            :to="group.value">{{ group.label }}</router-link>
        <template
            v-if="group.children">
          <div class="group-name">{{ group.label }}</div>
          <ul
              class="menu-items">
            <li
                v-for="(item, index) in group.children"
                :key="index">
              <router-link
                  :to="item.value">{{ item.label }}</router-link>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  ref,
} from 'vue';

import navList from '../../config/nav';

export default {
  setup() {
    const menus = ref(navList);

    return {
      menus,
    };
  },
};
</script>

<style
    lang="scss"
    scoped>
  .menu-group,
  .menu-items {
    list-style-type: none;
    padding-left: 1.4em;

    a {
      display: block;
      font-size: 16px;
      line-height: 32px;
      color: #666;
      &.router-link-active {
        color: #AAF;
      }
    }
  }
</style>

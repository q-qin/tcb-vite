<template>
  <SubMenu :key="route.path">
    <template #title>
      <Icon :icon="route.meta.icon" />
      <span>{{ route.meta.title }}</span>
    </template>
    <template v-for="child in route.children" :key="child.path">
      <router-link :to="child.path">
        <Item v-model:key="child.path">
          <Icon :icon="child.meta.icon" />
          <span>{{ child.meta.title }}</span>
        </Item>
      </router-link>
    </template>
  </SubMenu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import {Menu } from 'ant-design-vue';
const {Item,SubMenu} = Menu;
import { Icon } from './_Icon'

const _MenuItem = defineComponent({
  components: {
    SubMenu,
    Item,
    Icon
  },
  props: {
    route: {
      type: Object,
      default: () => ({}),
    },
  },
})
export default _MenuItem
</script>

<template>
  <SubMenu :key="route.path" >
      <template #title>
        <span>
          <MailOutlined /><span>{{ route.meta.title }}</span>
        </span>
      </template>
      <template v-for="child in route.children" :key="child.path">
        <router-link :to="child.path">
          <Item v-model:key="child.path">
            <PieChartOutlined />
            <span>{{ child.meta.title }}</span>
          </Item>
        </router-link>
      </template>
    </SubMenu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';

import {Menu } from 'ant-design-vue';
const {Item,SubMenu} = Menu;

export default defineComponent({
  components: {
    PieChartOutlined,
    MailOutlined,
    SubMenu,
    Item
  },
  props: {
    route: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>

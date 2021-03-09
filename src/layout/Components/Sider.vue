<template>
  <a-layout-sider v-model="collapsed" collapsible @click="() => (collapsed = !collapsed)">
    <template #trigger>
      <MenuUnfoldOutlined
        v-if="collapsed"
      />
      <MenuFoldOutlined v-else />
    </template>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" >
      <!-- <template v-for="route in routes"> -->
        <a-menu-item  >
          <router-link to="/index" >
              <LineChartOutlined />
              <span>工作台</span>
          </router-link>
        </a-menu-item>
      <!-- </template> -->
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { defineComponent,ref } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined,LineChartOutlined } from '@ant-design/icons-vue';
import { routes } from '@/router';

export default defineComponent({
  setup() {
    const collapsed = ref(false);
    console.log(routes)
    return {
      collapsed,
    }
  },
  components:{
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LineChartOutlined,
  }
})
</script>

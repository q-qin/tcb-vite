<template>
  <Sider v-model="collapsed" collapsible @click="() => (collapsed = !collapsed)">
    <template #trigger>
      <MenuUnfoldOutlined
        v-if="collapsed"
      />
      <MenuFoldOutlined v-else />
    </template>
    <div class="logo" />
    <Menu theme="dark" mode="inline" >
      <!-- <template v-for="route in routes"> -->
        <Item  >
          <router-link to="/index" >
              <LineChartOutlined />
              <span>工作台</span>
          </router-link>
        </Item>
      <!-- </template> -->
    </Menu>
  </Sider>
</template>
<script>
import { defineComponent,ref } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined,LineChartOutlined } from '@ant-design/icons-vue';
import { routes } from '@/router';
import { Layout,Menu } from 'ant-design-vue';
const {Sider} = Layout;
const {Item} = Menu;

export default defineComponent({
  setup() {
    const collapsed = ref(false);
    console.log(routes)
    return {
      collapsed,
    }
  },
  components:{
    Sider,
    Menu,
    Item,

    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LineChartOutlined,
  }
})
</script>
<style lang="scss" scoped>
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>

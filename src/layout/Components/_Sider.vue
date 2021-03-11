<template>
  <Sider v-model="collapsed" collapsible @click="() => (collapsed = !collapsed)">
    <template #trigger>
      <MenuUnfoldOutlined
        v-if="collapsed"
      />
      <MenuFoldOutlined v-else />
    </template>
    <div class="logo" />
    <Menu
      mode="inline"
      theme="dark"
      :selectedKeys="keys.selectedKeys"
      :openKeys="keys.openKeys"
      @openChange="v => (keys.openKeys = v)"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <router-link :to="item.path">
            <Item :key="item.path">
              <PieChartOutlined />
              <span>{{ item.meta.title }}</span>
            </Item>
          </router-link>
        </template>
        <template v-else>
          <MenuItem :route="item" :key="item.path" />
        </template>
      </template>
    </Menu>
  </Sider>
</template>
<script lang='ts'>
import { defineComponent,reactive,ref,watch  } from 'vue'
import useApp from "@/hooks/useApp";
import { MenuFoldOutlined, MenuUnfoldOutlined,LineChartOutlined,PieChartOutlined } from '@ant-design/icons-vue';
import { routes } from '@/router';
import { Layout,Menu } from 'ant-design-vue';
const {Sider} = Layout;
const {Item} = Menu;
import { RouteConfig } from "@/types/route";

import MenuItem from './_MenuItem.vue';

export default defineComponent({
  components:{
    Sider,
    Menu,
    Item,

    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LineChartOutlined,
    MenuItem,
    PieChartOutlined,
  },
  setup() {
    const { route } = useApp();

    const formatNavRoutes = (routes: RouteConfig[]) => {
      const validRoutes = routes.filter((route) => !route.hidden);
      const resultRoutes: RouteConfig[] = [];
      validRoutes.forEach((route) => {
        let tempRoute = { ...route };
        if (tempRoute.children) {
          tempRoute.children = formatNavRoutes(tempRoute.children);
        }
        resultRoutes.push(tempRoute);
      });
      return resultRoutes;
    }

    const list = formatNavRoutes(routes as RouteConfig[]);

    const collapsed = ref(false);

    const keys = reactive<{
      selectedKeys:string[]
      openKeys: string[]
    }>({
       selectedKeys:[],
       openKeys:[]
    });

    watch(route, ({ path, matched }) => {
      matched[0].children.length > 1
        ? (keys.selectedKeys = [path])
        : (keys.selectedKeys = [matched[0].path]);
      keys.openKeys = [matched[0].path];
    }, { immediate: true });

    return {
      collapsed,
      keys,
      list
    }
  }
})
</script>
<style lang="less" scoped>
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>

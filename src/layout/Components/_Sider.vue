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
      <template v-for="(item,$index) in list" :key="$index">
        <template v-if="!item.children">
          <router-link :to="item.path">
            <Item :key="item.path">
                <Icon :icon="item.meta.icon"/>
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
import { defineComponent,reactive,ref,watchEffect } from 'vue'
import { useApp } from "@/hooks/useApp";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { routes } from '@/router';
import { Layout,Menu } from 'ant-design-vue';
const {Sider} = Layout;
const {Item} = Menu;
import { RouteConfig } from "@/types/route";

import MenuItem from './_MenuItem.vue';
import { Icon } from './_Icon'

export default defineComponent({
  components:{
    Sider,
    Menu,
    Item,
    MenuItem,
    Icon,

    MenuFoldOutlined,
    MenuUnfoldOutlined
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

    watchEffect(()=>{
      const { path,matched } = route;
      matched.length > 1
            ? (keys.selectedKeys = [path])
        : (keys.selectedKeys = [matched[0].path]);
      keys.openKeys = [matched[0].path];
    })

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

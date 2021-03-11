<template>
  <Layout style="min-height: 100vh">
    <Sider />
    <Layout>
      <Header />
      <Content class="margin-lr-10">
        <Breadcrumb />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '300px', }">
          <router-view />
        </div>
      </Content>
      <Footer  />
    </Layout>
  </Layout>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { Header,Sider,Breadcrumb,Footer } from './Components/index';
import { LinkOutlined } from '@ant-design/icons-vue';

import { Layout } from 'ant-design-vue';
const {Content} = Layout;

export default defineComponent({
  setup() {
  },
  components: {
    Layout,
    Content,

    Header,
    Footer,
    Sider,
    Breadcrumb,
    LinkOutlined
  },
});
</script>
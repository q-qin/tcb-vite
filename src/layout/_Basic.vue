<template>
  <a-layout style="min-height: 100vh">
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content class="margin-lr-10">
        <Breadcrumb />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '300px', }">
          <router-view />
        </div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>
<script lang='ts'>
import { defineComponent,ref  } from 'vue';
import { Header,Footer,Sider,Breadcrumb } from './Components/index';

export default defineComponent({
  setup() {
  },
  components: {
    Header,
    Footer,
    Sider,
    Breadcrumb
  },
});
</script>
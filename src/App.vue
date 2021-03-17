<template>
  <ConfigProvider :locale="zh_CN">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'ant-design-vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components:{
    ConfigProvider
  },
  setup(){
    return {
      zh_CN
    }
  }
})
</script>

<style lang="less">
/*
** antdesign 样式覆盖
*/
.margin-auto{
  margin: auto;
}
</style>
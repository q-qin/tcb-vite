<template>
  <Breadcrumb class="margin-tb-10">
    <Item>首页</Item>
    <Item>工作台</Item>
  </Breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Breadcrumb } from 'ant-design-vue';
const { Item } = Breadcrumb;

export default defineComponent({
  setup() {
    
  },
  components:{
    Breadcrumb,
    Item
  }
})
</script>

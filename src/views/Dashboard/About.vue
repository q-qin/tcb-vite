<template>
  <Descriptions bordered title="关于本系统">
    <Item label="开发环境">
      windows
    </Item>
    <Item label="开发工具">
      vscode
    </Item>
    <Item label="开发语言">
      vue3+ts+antd
    </Item>
    <Item label="操作步骤" :span="3">
      1. aaa
      2. bbb
      3. ccc
    </Item>
    <Item label="参考资料">
      1. 《Javascript从入门到放弃》
    </Item>
  </Descriptions>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Descriptions } from 'ant-design-vue';
const { Item } = Descriptions;

export default defineComponent({
  name:'About',
  components:{
    Descriptions,
    Item
  },
  setup() {
    
  },
})
</script>

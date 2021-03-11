<template>
  <Footer :style="{textAlign:'center'}">
    develop by q-qin <a href="https://www.github.com/q-qin/tcb-vue" target="_blank"><LinkOutlined />Github</a>
  </Footer>
</template>
<script>
import { defineComponent } from 'vue'
import { LinkOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
const { Footer } = Layout;
export default defineComponent({
  setup() {
    
  },
  components:{
    Footer,
    LinkOutlined
  }
})
</script>

<template>
  <a-layout-footer style="text-align: center">
    develop by q-qin <a href="https://www.github.com/q-qin/tcb-vue" target="_blank"><LinkOutlined />Github</a>
  </a-layout-footer>
</template>
<script>
import { defineComponent } from 'vue'
import { LinkOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    
  },
  components:{
    LinkOutlined
  }
})
</script>

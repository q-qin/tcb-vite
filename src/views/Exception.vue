<template>
  <Result status="404" title="404" sub-title="抱歉，您访问的页面不存在！">
    <template #extra>
      <router-link to="/">
        <Button type="primary">
          返回首页
        </Button>
      </router-link>
    </template>
  </Result>
</template>

<script lang="ts">
import { Button,Result } from 'ant-design-vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: '404',
  components:{
    Button,
    Result
  },
})
</script>

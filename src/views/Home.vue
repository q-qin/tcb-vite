<template>
  <div>
    <hello-world :msg="msg"/>
    <a-button type="primary" @click="addCount">点击</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { message } from 'ant-design-vue';
import { getApp } from '@/tcb';

const Home = defineComponent({
  setup(props,context) {
    const addCount = () => {
      message.error('This is a normal message');
    };
    const msg = ref('[mail]');
    console.log(getApp)
    return {
      msg,
      addCount
    };
  },
  components: {
    HelloWorld,
  },
});

export default Home;
</script>
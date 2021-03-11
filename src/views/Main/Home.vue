<template>
  <div>
    {{state._getKey}}
    <a-input v-model:value="state.key" ></a-input>
    <a-button type="primary" @click="addCount">点击</a-button>
    <a-button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }} 
    </a-button>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref,reactive,computed,watch } from 'vue';
import { message } from 'ant-design-vue';
import { getApp } from '@/tcb';

declare interface State {
  count:number
  key:string
  double:string
  _getKey:string
}

export default defineComponent({
  setup(props,context) {
    const addCount = () => {
      message.success('This is a normal message');
    };
    const increment = ()=>{
      state.count++
    }
    const state:State = reactive({
        count: 0,
        key:ref<string>(''),
        double: computed(():string => `${state.count * 2}`),
        _getKey: computed(():string => `${state.key} $`),
      })
    
    watch(
        [() => state.double,() => state.key],
        ([double,key], [prevDouble,prevKey]) => {
          console.log(double,prevDouble)
          console.log(key,prevKey)
        }
      )
    return {
      state,
      addCount,
      increment,
    };
  },
});

</script>
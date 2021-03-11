<template>
  <div>
    {{state._getKey}}
    <Input v-model:value="state.key" ></Input>
    <Button type="primary" @click="addCount">点击</Button>
    <Button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }} 
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,reactive,computed,watch } from 'vue';
import { message,Button,Input } from 'ant-design-vue';
import { getApp } from '@/tcb';

declare interface State {
  count:number
  key:string
  double:string
  _getKey:string
}

export default defineComponent({
  components:{
    Button,
    Input
  },
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
  }
});

</script>
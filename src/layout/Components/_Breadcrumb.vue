<template>
  <Breadcrumb :style="{margin:'10px 0'}">
    <Item v-for="item in state.Breadcrumb" :key="item">{{item}}</Item>
  </Breadcrumb>
</template>
<script lang="ts">
import { defineComponent,reactive,computed,watchEffect } from 'vue'
import useApp from "@/hooks/useApp";

import { Breadcrumb } from 'ant-design-vue';
const { Item } = Breadcrumb;

export default defineComponent({
  components:{
    Breadcrumb,
    Item
  },
  setup() {
    const { route } = useApp()
    const state = reactive<any>({
      Breadcrumb:[]
    })

    watchEffect(()=>{
      const { matched } = route;
      matched.length > 1?
        ( state.Breadcrumb = [route.matched[0].meta.title,route.matched[1].meta.title])
        : (state.Breadcrumb = [route.matched[0].meta.title]);
    })
    
    return {
      state
    }
  }
})
</script>

<template>
  <div>
    <Skeleton v-if="!state.loaded" />
    <div v-show="state.loaded">
      <div ref="line" class="margin-auto" :style="{ height: '300px', width: '800px' }" ></div>
      <div class="flex justify-around">
        <Statistic
          title="今日工单"
          :value="36"
          suffix="单"
        />
        <Statistic
          title="剩余工单"
          :value="12"
          suffix="单"
        />
        <Statistic
          title="本月工单"
          :value="280"
          suffix="单"
          :value-style="{ color: '#3f8600' }"
        >
          <template #prefix>
            <ArrowDownOutlined />
          </template>
        </Statistic>
        <Statistic
          title="本月销售额"
          :value="90000"
          :precision="2"
          suffix="￥"
          :value-style="{ color: '#cf1322' }"
        >
          <template #prefix>
            <ArrowUpOutlined />
          </template>
        </Statistic>
      </div>
    </div>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import { defineComponent,onBeforeMount,onMounted,defineAsyncComponent, reactive } from 'vue';
import { Skeleton,Statistic } from 'ant-design-vue';
import { ArrowDownOutlined,ArrowUpOutlined } from '@ant-design/icons-vue';
import { getApp } from '@/tcb';
import { useApp } from '@/hooks/useApp';
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components:{
    Skeleton,
    Statistic,

    ArrowDownOutlined,
    ArrowUpOutlined,
    // HelloWorld
    HelloWorld:defineAsyncComponent({
      loader:()=> import('@/components/HelloWorld.vue'),
      delay: 5000, 
      timeout: 5000,
      errorComponent: () => import("./ErrorComponent.vue"),
      loadingComponent: () => import("./LoadingComponent.vue"),
    })
  },
  setup() {
    const state = reactive({
      loaded:false,
    })
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    });
    onMounted(()=>{
      console.log('onMounted')
    });
    return {
      state,
    };
  },
  mounted(){
      console.log('mounted')
    setTimeout(()=>{
      this.state.loaded = true;
      let myChart = echarts.init(this.$refs.line as HTMLCanvasElement);
      const option = {
        title:{
          text:'近7天修理工单'
        },
        tooltip:{},
        xAxis: {
          type: "category" as "category",
          data: ["6天前", "5天前", "4天前", "3天前", "2天前", "1天前", "今日"],
        },
        yAxis: {
          type: "value" as "value",
        },
        series: [
          {
            name:'工单数(单)',
            data: [15, 20, 32, 18, 35, 47, 36],
            type: "line" as "line"
          },
        ],
      };
      myChart.setOption(option);
    },1e3)
  }
});

</script>
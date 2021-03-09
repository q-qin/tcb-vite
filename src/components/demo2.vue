<template>
  <div>
    <h1>{{ msg }}</h1>
    <a-button type="primary" @click="addCount">count is: {{ count }}</a-button>

  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from 'vue-property-decorator';

class demo2 extends Vue {
  @Prop() msg!: string;

  private count:number = 0;
  
  private addCount():void{
    this.count++
  }
}

export default Options({})(demo2)
</script>
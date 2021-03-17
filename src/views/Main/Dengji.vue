<template>
  <div class="page">
    <Skeleton v-if="!state.loaded" />
    <div v-else>
      <Card>
        <Form layout="inline">
          <Item label="客户">
            <Input placeholder="请输入客户名称、手机号" />
          </Item>
          <Item>
            <Button type="primary">查询</Button>
          </Item>
          <Item>
            <Button type="danger">新增</Button>
          </Item>
        </Form>
      </Card>
      <Card class="margin-top-10" :bodyStyle="{ padding: 0 }">
        <Table :columns="columns" :data-source="state.list" :rowKey="(record, $index) => $index" :pagination="pagination" >
          <template #expandedRowRender="{ record }" >
            {{ record.damage }}
          </template>
          <template #status="{ text, record}" >
            <Badge  color="orange" v-if="text=='待派单'" :text="text"></Badge >
            <Badge  color="blue" v-if="text=='工作中'" :text="`${text} 【修理工：${record.worker}】`"></Badge >
            <Badge  color="green" v-if="text=='已完成'" :text="`${text} 【修理工：${record.worker}】`"></Badge >
          </template>
          <template #priority="{ text }" >
            <Tag color="green" v-if="text=='一般'">{{ text }}</Tag>
            <Tag color="blue" v-if="text=='重要'">{{ text }}</Tag>
            <Tag color="red" v-if="text=='紧急'">{{ text }}</Tag>
            <Tag color="purple" v-if="text=='非常紧急'">{{ text }}</Tag>
          </template>
          <template #action="{ text,record }" >
            <Popconfirm
              title="修理结束，短信通知客户取车吗?"
              @confirm="complete(text)"
            >
              <Button type="primary" class="margin-right-10" v-if="record.status =='工作中'">完成</Button>
            </Popconfirm>
            <Popconfirm
              title="作废此订单吗?"
              @confirm="remove(text)"
            >
            <Button type="danger" v-if="record.status =='待派单'">作废</Button>
            </Popconfirm>
          </template>
        </Table>
      </Card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { get } from '@/api/checkout';
import {Skeleton,Card,Form,Input,Button,Table,Badge,Tag,Popconfirm, notification} from 'ant-design-vue';
const {Item} = Form;

export default defineComponent({
  name: 'Dengji',
  components:{
    Skeleton,
    Card,
    Form,
    Item,
    Input,
    Button,
    Table,
    Badge,
    Tag,
    Popconfirm
  },
  setup(){
    const state = reactive({
      loaded:false,
      list:[]
    })
    const columns =  [{
      title:'车牌',
      dataIndex:'plate'
    },{
      title:'车型',
      dataIndex:'model'
    },{
      title:'车龄',
      dataIndex:'age',
      customRender: ({ text }: any ) => {
        return {
          children: `${text} 年`,
          props: {} as any,
        };
      },
    },{
      title:'公里数',
      dataIndex:'odo',
      customRender: ({ text }: any ) => {
        return {
          children: `${text} 万`,
          props: {} as any,
        };
      },
    },{
      title:'状态',
      dataIndex:'status',
      slots: { customRender: 'status' },
    },{
      title:'优先级',
      dataIndex:'priority',
      slots: { customRender: 'priority' },
    },{
      title:'登记时间',
      dataIndex:'checkinTime',
    },{
      title:'修理工',
      dataIndex:'worker',
    },{
      title:'操作',
      dataIndex:'_id',
      slots: { customRender: 'action' },
    }];
    const pagination = {
      current: 1,
      total: 0,
      pageSize: 10,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      showTotal: (total: string) => `共有 ${total} 条数据`
    }
    const search = ()=>{
      pagination.current = 1;
      getList()
    }
    const getList = async ()=>{
      state.list = await get('');
    }

    const complete = ()=>{
      notification.success({message:'提示',description:'短信已通知客户~'});
    }
    const remove = ()=>{
      notification.error({message:'提示',description:'该订单已作废~'});
    }
    setTimeout(()=>{
      state.loaded = true;
      getList();
    },1e3)

    return {
      state,
      columns,
      pagination,
      complete,
      remove
    }
  }
})
</script>

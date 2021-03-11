<template>
  <Header style="background:#fff" >
    <Dropdown  placement="bottomRight">
      <span class="account-avatar">
        <Avatar size="small" class="margin-right-10" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
        <span>{{userName}}</span>
      </span>
      <template #overlay>
        <Menu class="ant-drop-down" >
          <Item key="center" class="item" >
            <UserOutlined />
            个人中心
          </Item>
          <Item key="settings" class="item" >
            <SettingOutlined />
            个人设置
          </Item>
          <Divider />
          <Item key="logout" class="item" @click="logout" >
            <LogoutOutlined />
            退出登录
          </Item>
        </Menu>
      </template>
    </Dropdown>
  </Header>
</template>
<script lang="ts">
import { createVNode,defineComponent } from 'vue';
import { Modal } from 'ant-design-vue';
import {clearToken} from '@/utils/jscookie'
import { useRouter } from 'vue-router';
import {UserOutlined,SettingOutlined,LogoutOutlined,ExclamationCircleOutlined }  from '@ant-design/icons-vue';
import { Layout,Dropdown,Menu,Avatar } from 'ant-design-vue';
const { Header } = Layout;
const { Item,Divider } = Menu;

export default defineComponent({
  setup() {
    const router = useRouter();
    const userName = 'admin';
    const logout = ()=>{
      Modal.confirm({
        icon: createVNode(ExclamationCircleOutlined),
        title: '确定退出账号吗？',
        okText:'确定',
        cancelText:'取消',
        onOk:()=> {
          clearToken();
          router.replace('/user/login')
        },
      })
    }
    return {
      userName,
      logout
    }
  },
  components:{
    Header,
    Avatar,
    Dropdown,
    Menu,
    Item,
    Divider,

    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
  }
})
</script>
<style lang="less" scoped>
  .account-avatar {
    float: right;
    height: 100%;
    margin-left: auto;
    overflow: hidden;
  }
  .ant-drop-down .item {
    min-width: 160px;
  }
</style>

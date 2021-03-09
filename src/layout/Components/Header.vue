<template>
  <a-layout-header style="background:#fff" >
    <a-dropdown  placement="bottomRight">
      <span class="account-avatar">
        <a-avatar size="small" class="margin-right-10" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
        <span>admin</span>
      </span>
      <template #overlay>
        <a-menu class="ant-pro-drop-down" >
          <a-menu-item key="center" >
            <UserOutlined />
            个人中心
          </a-menu-item>
          <a-menu-item key="settings" >
            <SettingOutlined />
            个人设置
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="logout" @click="logout" >
            <LogoutOutlined />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>
<script>
import { createVNode,defineComponent } from 'vue';
import { Modal } from 'ant-design-vue';
import {clearToken} from '@/utils/jscookie'
import { useRouter } from 'vue-router';
import {UserOutlined,SettingOutlined,LogoutOutlined,ExclamationCircleOutlined }  from '@ant-design/icons-vue';
export default defineComponent({
  setup() {
    const router = useRouter();

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
      logout
    }
  },
  components:{
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
  }
})
</script>
<style lang="scss" scoped>
  .account-avatar {
    float: right;
    height: 100%;
    margin-left: auto;
    overflow: hidden;
  }
  .ant-dropdown-menu-item {
    min-width: 160px;
  }
</style>

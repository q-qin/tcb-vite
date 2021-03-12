<template>
  <div class="main">
    <div class="user-layout-login">
      <div class="title">修车管理系统V1.0</div>
      <Tabs :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
        <TabPane tab="账号密码登录" key="tab1">
          <Form
            ref="formRef"
            :model="formPass"
            :rules="rulesPass"
            :wrapperCol="{ span: 24 }"
          >
            <Item name="username">
              <Input
                placeholder="账户: admin"
                v-model:value="formPass.username"
              >
                <template #prefix>
                  <UserOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                </template>
              </Input>
            </Item>
            <Item name="password">
              <Password
                placeholder="密码: admin"
                v-model:value="formPass.password"
              >
                <template #prefix>
                  <LockOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                </template>
              </Password>
            </Item>
            <Item class="user-login-other">
              <span>其他登录方式</span>
              <a>
                <AlipayCircleOutlined class="item-icon" />
              </a>
              <a>
                <TaobaoCircleOutlined class="item-icon" />
              </a>
              <a>
                <WechatOutlined class="item-icon" />
              </a>
              <router-link class="register" to="/user/register">
                <LinkOutlined /> 注册账户
              </router-link>
            </Item>
            <Item>
              <Button
                type="primary"
                :loading="state.loginBtn"
                :disabled="state.loginBtn"
                class="login-button"
                @click="loginPass"
              >
                登录
              </Button>
            </Item>
          </Form>
        </TabPane>
        <TabPane tab="手机号码登录" key="tab2">
          <Form :wrapperCol="{ span: 24 }">
            <Item>
              <Input placeholder="手机号" v-model:value="formSms.mobile">
                <template #prefix>
                  <MobileOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                </template>
              </Input>
            </Item>
            <Item>
              <Input placeholder="验证码" v-model:value="formSms.captcha">
                <template #prefix>
                  <MailOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                </template>
                <template #addonAfter>
                  <span
                    class="text-cursor"
                    @click="sendSms"
                    :disabled="state.smsSendBtn"
                    >{{
                      (!state.smsSendBtn && "获取验证码") || state.time + " s"
                    }}</span
                  >
                </template>
              </Input>
            </Item>
            <Item class="user-login-other">
              <span>其他登录方式</span>
              <a>
                <AlipayCircleOutlined class="item-icon" />
              </a>
              <a>
                <TaobaoCircleOutlined class="item-icon" />
              </a>
              <a>
                <WechatOutlined class="item-icon" />
              </a>
              <router-link class="register" to="/user/register">
                <LinkOutlined /> 注册账户
              </router-link>
            </Item>
            <Item>
              <Button type="primary"
                :loading="state.loginBtn"
                :disabled="state.loginBtn"
                class="login-button"
                @click="loginSms"> 登录 </Button>
            </Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,reactive,ref } from 'vue'
import { Tabs,Form,Input,Button,message,notification } from 'ant-design-vue';
import {UserOutlined,LockOutlined,AlipayCircleOutlined,TaobaoCircleOutlined,WechatOutlined,LinkOutlined,MobileOutlined,MailOutlined} from '@ant-design/icons-vue'
const { TabPane } = Tabs;
const { Item } = Form;
const { Password } = Input;
import { login } from '@/api/user';
import { useApp } from '@/hooks/useApp';
import { setToken } from '@/utils/jscookie';

export default defineComponent({
  components:{
    Tabs,
    TabPane,

    Form,
    Item,
    Input,
    Password,
    Button,
    
    UserOutlined,
    LockOutlined,
    WechatOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    LinkOutlined,
    MobileOutlined,
    MailOutlined

  },
  setup() {
    const formRef = ref();
    const state = reactive({
      loginBtn:false,
      smsSendBtn:false,
      time:0,
    });

    const formPass = reactive({
      username:'',
      password:''
    })

    const formSms = reactive({
      mobile:'',
      captcha:''
    })
    const rulesPass = {
      username:[{required: true, message: '请输入用户名', trigger: 'blur' }],
      password:[{required: true, message: '请输入密码', trigger: 'blur' }]
    }

    const { router } = useApp();

    const loginPass = ()=>{
      state.loginBtn = true;
      formRef.value.validate().then(async()=>{
        login({
          ...formPass,
          type:'1'
        }).then((result)=>{
          const {code,data,msg} = (result as any ).result;
          state.loginBtn = false;
          if(code == 200){
            setToken(data);
            router.replace('/');
          }else{
            notification.error({message:msg});
          }
        })
      })
    }

    const loginSms = () => {
      state.loginBtn = true;
      login({
          ...formSms,
          type:'2'
        }).then((result)=>{
          const {code,data,msg} = (result as any ).result;
          state.loginBtn = false;
          if(code == 200){
            setToken(data);
            router.replace('/');
          }else{
            notification.error({message:msg});
            state.loginBtn = false;
          }
        })
    }

    const sendSms = () =>{
      if (state.smsSendBtn) {
        // 判断是否开始倒计时，避免重复点击
        return false;
      }
      notification.success({message:'已发送',description:'验证码：123456'})
      state.smsSendBtn = true;
      state.time = 60;
      const countDown = setInterval(() => {
        state.time --;
        if (state.time <= 0) {
          state.smsSendBtn = false;
          clearInterval(countDown);
        }
      }, 1000);
    }

    return {
      formRef,
      formPass,
      rulesPass,
      state,
      loginPass,

      formSms,
      sendSms,
      loginSms
    }
  },
})
</script>
<style lang="less" scoped>
.main {
  background: #f0f2f5 url(@/assets/background.svg) no-repeat 50%;
  height: 100%;
  overflow: hidden;
  .user-layout-login {
    position: fixed;
    top: 32%;
    width: 600px;
    left: 0;
    right: 0;
    background: #fff;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    .title {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      padding: 10px 0;
      letter-spacing: 4px;
    }

    .login-button {
      width: 100%;
    }

    .user-login-other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;

      .item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }

      .register {
        float: right;
      }
    }
  }
}
</style>

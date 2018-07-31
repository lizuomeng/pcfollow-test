<template>
  <div class='login-item'>
    <a-form :autoFormCreate="(form)=>{this.form = form}" v-if='!registration'>
      <p class='login-item_title'>PC-FOLLOW TEST项目</p>
      <a-form-item
        fieldDecoratorId="email"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入邮箱' }]}"
      >
        <a-input placeholder='请输入邮箱' size='large'>
          <a-icon type='mail' slot='prefix' />
        </a-input>
      </a-form-item>

      <a-form-item
        fieldDecoratorId="password"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码' }]}"
        v-show='!registration'
      >
        <a-input placeholder='请输入密码' size='large' type='password'>
          <a-icon type='lock' slot='prefix' />
        </a-input>
      </a-form-item>
      <a-button type='primary' @click="check" class='login-item_button' size='large'>登录</a-button>
      <p class='login-item_create' @click='register' v-if='!registration'>还未注册?点击注册</p>
    </a-form>
    <sign-up v-else @changeStatus='changeTologin'></sign-up>
  </div>
</template>

<script>
import api from '@/api/auth'
import { Auth } from '@/utils'
import SignUp from './sign_up'

export default {
  data () {
    return {
      registration: false
    }
  },
  components: {
    SignUp
  },
  methods: {
    check() {
      this.form.validateFields(
        (err) => {
          if (!err) {
            const formData = this.form.getFieldsValue()
            Auth.login({ 'Email': formData.email, 'Password': formData.password }).then(data => {
              this.$router.push({ name: 'user' })
            })
          }
        },
      )
    },
    register() {
      this.registration = true
      this.form.resetFields()
    },
    changeTologin() {
      this.registration = false
    }
  }
}
</script>

<style lang='less'>
.login-item {
  width: 350px;
  margin: 200px auto;
  text-align: center;
  border: 1px solid #eee;
  padding: 20px 20px;
  border-radius: 4px;
  -moz-box-shadow:0px 2px 3px #333;
  -webkit-box-shadow:0px 2px 3px #333;
  box-shadow:0px 2px 3px #333;

  .login-item_title {
    font-size: 20px;
    font-weight: 400;
  }

  .login-item_button {
    width: 100%
  }

  .login-item_create {
    color: #3c8dbc;
    text-decoration: underline;
    margin-top: 24px;
    cursor: pointer;
  }
}
</style>

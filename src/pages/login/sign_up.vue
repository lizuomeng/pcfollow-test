<template>
<div>
  <a-form :autoFormCreate="(form)=>{this.form = form}">
    <p class='login-item_title'>注册新用户</p>
    <a-form-item
      fieldDecoratorId="username"
      :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入用户名' }]}"
    >
      <a-input placeholder='请输入用户名' size='large'>
        <a-icon type='user' slot='prefix' />
      </a-input>
    </a-form-item>

    <a-form-item
      fieldDecoratorId="signupEmail"
      :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入邮箱' }]}"
    >
      <a-input placeholder='请输入邮箱' size='large'>
        <a-icon type='mail' slot='prefix' />
      </a-input>
    </a-form-item>
    <!-- <a-form-item
      fieldDecoratorId="password"
      :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码' }]}"
    >
      <a-input placeholder='请输入密码' size='large' type='password'>
        <a-icon type='lock' slot='prefix' />
      </a-input>
    </a-form-item>
    <a-form-item
      fieldDecoratorId="confirmpassword"
      :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码' },{ validator: confirmPassword }]}"
      v-if='registration'
    >
      <a-input placeholder='请再次输入以确认新密码' size='large' type='password'>
        <a-icon type='lock' slot='prefix' />
      </a-input>
    </a-form-item> -->
    <a-button type='primary' @click="check" class='login-item_button' size='large'>注册</a-button>
    <p class='login-item_create' @click='login'>已有账号?点击登录</p>
  </a-form>
</div>
</template>

<script>
import api from '@/api/auth'
export default {
  data () {
    return {
    }
  },
  methods: {
    check() {
      this.form.validateFields(
        (err) => {
          console.log('err', err)
          if (!err) {
            const formData = this.form.getFieldsValue()
            api.signUp({ 'Email': formData.signupEmail, 'Username': formData.username }).then(data => {
              console.log('data', data)
            })
            // this.$emit('submit')
          }
        },
      )
    },
    login() {
      this.form.resetFields()
      this.$emit('changeStatus')
    }
    // confirmPassword(rule, value, callback) {
    //   if (value && value !== this.form.getFieldValue('password')) {
    //     callback('两次输入不一致！')
    //   }
    //   callback()
    // }
  }
}
</script>

<template>
  <div class='project-new'>
    <a-form :autoFormCreate="(form)=>{this.form = form}">
      <p class='project-new__title'>新建项目</p>
      <a-form-item
        label='项目名称'
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
        fieldDecoratorId="name"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入项目名称' }]}"
      >
        <a-input placeholder='请输入项目名称' size='large'></a-input>
      </a-form-item>
      <a-form-item
        label='项目介绍'
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
        fieldDecoratorId="introduction"
      >
        <a-textarea placeholder="请输入项目介绍" :rows="4"/>
      </a-form-item>
      <a-form-item
        :labelCol="formTailLayout.labelCol"
        :wrapperCol="formTailLayout.wrapperCol"
      >
        <a-button type='primary' @click="check" size='large'>登录</a-button>
      </a-form-item>
      
    </a-form>
  </div>
</template>

<script>
import api from "@/api/project"

const formItemLayout = {
  labelCol: { span: 3, offset: 6 },
  wrapperCol: { span: 9 },
}

const formTailLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 9, offset: 9 },
}

export default {
  data () {
    return {
      formItemLayout,
      formTailLayout
    }
  },
  components: {
  },
  methods: {
    check() {
      this.form.validateFields(
        (err) => {
          if (!err) {
            console.info('登录success', this.form.getFieldsValue())
            const formData = this.form.getFieldsValue()
            api.creatProject({ 'Name': formData.name }).then(data => {
              console.log('data', data)
            })
          }
        },
      )
    }
  }
}
</script>

<style lang='less'>
.project-new {
  &__title {
    text-align: center;
    font-size: 20px
  }
}
</style>


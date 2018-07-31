<template>
  <div id="app">
    <template v-if='$route.meta.keepAlive'>
      <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider
          collapsible
          v-model="collapsed"
        >
          <div class="logo" />
          <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
            <a-menu-item key="1">
              <a-icon type="pie-chart" />
              <span>Option 1</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: #fff; padding: 0">
            <a-dropdown style='marginLeft: 30px'>
              <a class="ant-dropdown-link">
                <a-button type="primary">新增</a-button>
              </a>
              <a-menu slot="overlay" @click="handleMenuClickCreate">
                <a-menu-item key='project'>项目</a-menu-item>
                <a-menu-item key='module'>模块</a-menu-item>
                <a-menu-item key='item'>功能</a-menu-item>
                <a-menu-item key='case'>测试用例</a-menu-item>
              </a-menu>
            </a-dropdown>
            <a-dropdown class='float-box-right' style='marginRight: 30px'>
              <a class="ant-dropdown-link">
                <a-avatar icon="user" size="large" /><a-icon type="down" />
              </a>
              <a-menu slot="overlay" @click="handleMenuClick">
                <a-menu-item key='setting'>设置</a-menu-item>
                <a-menu-item key='loginout'>退出</a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-layout-header>
          <a-layout-content style="margin: 0 16px">
            <div :style="{ marginTop:'16px', padding: '24px', background: '#fff', minHeight: '660px' }">
              <router-view/>
            </div>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </template>
    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
// import loginItem from '@/pages/login'

export default {
  name: 'APP',
  data() {
    return {
      collapsed: false
    }
  },
  components: {
  },
  methods: {
    handleMenuClick(e) {
      console.log('e', e.key)
      if (e.key === 'loginout') {
        this.$router.push({ name: 'login' })
      }
    },
    handleMenuClickCreate(e) {
      console.log('e', e.key)
      if (e.key === 'project') {
        this.$router.push({ name: 'projectCreate' })
      } else if (e.key === 'module') {
        this.$router.push({ name: 'moduleCreate' })
      } else if (e.key === 'item') {
        this.$router.push({ name: 'itemCreate' })
      } else if (e.key === 'case') {
        this.$router.push({ name: 'caseCreate' })
      } else {

      }
    }
  }
}
</script>

<style lang='less'>
@import "./styles/home";

#components-layout-demo-side .logo {
  height: 32px;
  background: url('./assets/logo.png') no-repeat 50% 50%;
  background-size: contain;
  margin: 16px;
}

.ant-avatar {
  overflow: visible;
}
</style>

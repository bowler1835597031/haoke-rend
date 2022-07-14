<template>
  <div>
    <van-nav-bar
      class="nav-bar"
      title="账号登录"
      left-arrow
      @click-left="backToPrePage"
    />
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          class="btn"
          block
          type="info"
          native-type="submit"
          @click="btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="toRegister"><a href="#/registe">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { login } from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    backToPrePage() {
      this.$router.back()
    },
    async login() {
      const res = await login(this.username, this.password)
      console.log(res)
    },
    btn() {
      Toast.success('登录成功')
      Toast.fail('你的账号或密码异常')
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  background-color: #21b97a;
  :deep(.van-icon) {
    color: #fff;
  }

  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
.btn {
  background-color: #21b97a;
}
.toRegister {
  margin-top: 30px;
  text-align: center;
  a {
    font-size: 14px;
    color: #666;
  }
}
</style>

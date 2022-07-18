<template>
  <div>
    <div class="My_title">
      <!-- 已登录的盒子 -->
      <div v-if="isLogin" class="user-info">
        <img src="http://liufusong.top:8080/img/avatar.png" />
        <div class="My_info">
          <div class="My_myIcon">
            <img src="http://liufusong.top:8080/img/avatar.png" />
          </div>
          <div class="My_name">游客_845296</div>
          <van-button type="primary" class="My_btn" round @click="logout">
            <span>退出</span>
          </van-button>
          <div class="My_edit">编辑个人资料▶</div>
        </div>
      </div>
      <!-- 未登录 -->
      <div v-else class="login-register">
        <img src="http://liufusong.top:8080/img/profile/bg.png" />
        <div class="My_info">
          <div class="My_myIcon">
            <img src="http://liufusong.top:8080/img/profile/avatar.png" />
          </div>
          <div class="My_name">游客</div>
          <van-button type="primary" class="My_btn" round @click="goLogin"
            ><span>去登录</span></van-button
          >
        </div>
      </div>
    </div>

    <main>
      <!-- 宫格导览 -->
      <van-grid :border="false" :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" to="/favorate" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="/rent"/>
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="debit-pay" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
      <!-- 广告 -->
      <div class="my-ad">
        <img src="http://liufusong.top:8080/img/profile/join.png" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  methods: {
    logout() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认退出'
        })
        .then(() => {
          // 确认
          this.$store.commit('setUser', {})
        })
        .catch(() => {
          // 取消
        })
    },
    //前往login页面
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped lang="less">
.My_title {
  min-height: 300px;
  position: relative;
  .user-info,
  .login-register {
    img {
      width: 100%;
    }
    .My_info {
      position: absolute;
      background: #fff;
      width: 85%;
      height: 55%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px 3px #ddd;
      // margin: 50px auto 0;
      // padding: 0 20px;
      text-align: center;
      font-size: 13px;
      .My_myIcon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 5px solid #f5f5f5;
        box-shadow: 0 2px 2px #bdbdbd;
        position: relative;
        transform: translate(350%, -50%);
        // display: inline-block;
      }
      .My_name {
        margin-top: -30px;
        margin-bottom: 10px;
      }
      .My_edit {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
}
.my-ad {
  text-align: center;
  img {
    width: 95%;
  }
}
</style>

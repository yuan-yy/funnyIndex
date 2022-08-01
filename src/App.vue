<template>
  <router-view />

  <div>

    <!-- <a-button type="primary" v-if @click="showModal">Open Modal</a-button> -->
    <a-modal v-model:visible="visible" cancelText="不想登录,给老子滚" okText="我以人格担保会去注册,登录" title="温馨提示一下哈!" @cancel="cancel"
      @ok="handleOk">
      <p>注册用户: user register -u 用户名 -p 密码 -e 邮箱
      </p>
      <p>登录用户: user login -u 用户名 -p 密码
      </p>
      <p>输入bg回车 更换背景
      </p>
      <p>输入moyu回车 开始摸鱼
      </p>
      <p>输入momoyu回车 展示摸鱼游戏列表
      </p>
      <p style="text-align:center;color:red;margin-top:30px">请各位注册登录再使用,以获得良好的体验哈</p>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
const visible = ref<boolean>(false);
const info = () => {
  message.warn('你是不是有病?  注册去');
};
const showModal = () => {
  visible.value = true;
};

showModal()


const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};

const cancel = () => {
  info();
  showModal()
  // console.log("231231")
}
</script>

<style>
body {
  margin: 0;
}
</style>

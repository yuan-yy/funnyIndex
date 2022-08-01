<!--
 * @Author: wangtao 1477017843@qq.com
 * @Date: 2022-07-28 14:50:50
 * @LastEditors: wangtao 1477017843@qq.com
 * @LastEditTime: 2022-07-28 15:52:08
 * @FilePath: \yuindex\src\core\commands\zhenGu\DdosBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <a-button style="display:none" type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="你承认不?" cancelText="是" okText="不是" @cancel="canCle" @ok="handleOk">
      <div v-for="item in 6">{{ listW[count] }}</div>
    </a-modal>
    <a-button type="primary" @click="info">Display normal message</a-button>
  </div>

</template>

<script setup lang="ts">

import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';

const visible = ref<boolean>(false);
const listW = ref<string[]>(["你是傻逼吗?", "你确定你不是傻逼?", "你要笑死爹爹"]);
const count = ref<number>(0)
const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
  count.value++;
  if (listW.value.length >= count.value) {
    showModal();
  }
};

showModal();

const canCle = () => {
  message.error('你真是个大天才,哈哈哈哈');

}

const info = () => {
  message.info('This is a normal message');
};

</script>


<style scoped>
</style>

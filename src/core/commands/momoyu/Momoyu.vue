<template>
  <div style="background:white;padding:20px 0;display: flex;">
    <div @click="chooseGame(index)" style="color:black;cursor: pointer;padding-left: 20px;"
      v-for="(item, index) in gameListObj">
      {{ item.n }}
    </div>
  </div>
  <div style="margin: 8px 0">
    <iframe :src="currentGame" class="main" frameborder="no" marginwidth="0" marginheight="0" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const gameList = [
  "https://haiyong.site/moyu/shitoujiandaobu/",
  "https://haiyong.site/moyu/lion.html",
  "https://haiyong.site/moyu/shengchengshu.html",
  "https://haiyong.site/moyu/zhipaijiyi.html",
  "https://haiyong.site/moyu/doumao.html",
  "https://haiyong.site/moyu/dadishu.html",
  "https://haiyong.site/moyu/laganziguoguan/",
  "https://haiyong.site/moyu/danzhu.html",
  "https://haiyong.site/moyu/feiji.html",
  "https://haiyong.site/moyu/doudizhu.html",
  "https://haiyong.site/moyu/tiaofangzi.html",
  "https://haiyong.site/moyu/SpaceHuggers/",
  "https://haiyong.site/moyu/weijing/",
];

const gameListObj = [
  { n: '爱吹风的小狮子', he: 'https://haiyong.site/moyu/lion.html' },
  { n: '响应式2048小游戏', he: 'https://haiyong.site/moyu/2048.html' },
  { n: '飞机躲避障碍', he: 'https://haiyong.site/moyu/feiji.html' },
  { n: '圣诞老人过桥', he: 'https://haiyong.site/moyu/Santa-Claus.html' },
  { n: '切方块', he: 'https://haiyong.site/moyu/qiefangkuai.html' },
  { n: '打地鼠', he: 'https://haiyong.site/moyu/catch-mole.html' },
  { n: 'JS闯关小游戏', he: 'https://haiyong.site/moyu/simplejsgame.html' },
  { n: '扫雷', he: 'https://haiyong.site/moyu/saolei.html' },
  { n: '撕衣服👗', he: 'https://haiyong.site/moyu/siyifu' },
  { n: '双人五子棋', he: ' https://haiyong.site/moyu/wu.html' },
  { n: '水果忍者', he: 'https://wanghao221.github.io/shuiguorenzhe/' },
  { n: '小霸王游戏机', he: 'https://haiyong.site/moyu/xbw' },
  { n: '中国象棋', he: 'https://haiyong.site/moyu/xiangqi/' },
  { n: '斗地主', he: 'https://haiyong.site/moyu/doudizhu.html' },
  { n: '无限跑酷', he: 'https://haiyong.site/moyu/wuxianpaoku.html' },
  { n: '羊毛球逗猫咪', he: 'https://haiyong.site/moyu/doumaomi.html' },
  { n: '人生重开模拟器', he: 'http://liferestart.syaro.io/view/' },
  { n: '人工智障', he: 'https://haiyong.site/moyu/rengongzhizh.html' },
  { n: '自定义生成树', he: 'https://haiyong.site/moyu/shengchengshu.html' },
  { n: '俄罗斯方块', he: 'https://haiyong.site/moyu/eluosi.html' },
]
const currentGame = ref<string>(gameList[Math.floor(Math.random() * gameList.length)]);

const chooseGame = (index: number) => {
  currentGame.value = gameListObj[index].he;
}

</script>

<style scoped>
.main {
  width: 100%;
  height: 80vh;
  min-height: 600px;
}
</style>

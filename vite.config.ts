/*
 * @Author: wangtao 1477017843@qq.com
 * @Date: 2022-07-27 14:26:14
 * @LastEditors: wangtao 1477017843@qq.com
 * @LastEditTime: 2022-07-29 10:39:10
 * @FilePath: \yuindex\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import Components from "unplugin-vue-components/vite";
// @ts-ignore
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需加载 ant-design-vue
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    open: false,
    port: 1081,
  }
});

/*
 * @Author: wangtao 1477017843@qq.com
 * @Date: 2022-07-28 14:50:15
 * @LastEditors: wangtao 1477017843@qq.com
 * @LastEditTime: 2022-07-28 15:28:45
 * @FilePath: \yuindex\src\core\commands\zhenGu\ddosCommand.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * 
 * @author yupi
 */
const ddosCommand: CommandType = {
  func: "雷子",
  name: "雷子",
  desc: "雷子",
  options: [],
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./leizhi.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default ddosCommand;

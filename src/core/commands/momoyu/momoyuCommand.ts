import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * 
 * @author yupi
 */
const momoyuCommand: CommandType = {
  func: "momoyu",
  name: "摸鱼",
  desc: "查看所有的摸鱼游戏",
  options: [],
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./Momoyu.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default momoyuCommand;

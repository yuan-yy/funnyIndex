/*
 * @Author: wangtao 1477017843@qq.com
 * @Date: 2022-07-28 17:21:38
 * @LastEditors: wangtao 1477017843@qq.com
 * @LastEditTime: 2022-07-28 17:24:52
 * @FilePath: \yuindex\src\core\commands\search\qixiCommand.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CommandType } from "../../command";

/**
 * 查梗（小鸡词典）命令
 * @author yupi
 */
const qixiCommand: CommandType = {
  func: "qixi",
  name: "网站浏览七夕",
  alias: ["qx"],
  params: [
    // {
    //   key: "qq",
    //   desc: "",
    //   required: true,
    // },
  ],
  options: [
    // {
    //   key: "self",
    //   desc: "是否当前页面打开",
    //   alias: ["s"],
    //   type: "boolean",
    //   defaultValue: false,
    // },
  ],
  action(options, terminal) {
    // const { _, self } = options;
    // const word = _.length > 0 ? _[0] : "";
    // console.log(word, 'word-22222');
    const targetLink = `https://yacan8.github.io/valentine/`;
    if (self) {
      window.location.href = targetLink;
    } else {
      window.open(targetLink);
    }
  },
};

export default qixiCommand;

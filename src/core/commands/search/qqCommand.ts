import { CommandType } from "../../command";

/**
 * 查梗（小鸡词典）命令
 * @author yupi
 */
const qqCommand: CommandType = {
  func: "qq",
  name: "强制聊天",
  alias: ["QQ,Qq"],
  params: [
    {
      key: "qq",
      desc: "需要强制聊天的QQ号",
      required: true,
    },
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
    const { _, self } = options;
    const word = _.length > 0 ? _[0] : "";
    console.log(word, 'word-22222');
    const targetLink = `https://api.btstu.cn/qqtalk/api.php?qq=${word}`;
    if (self) {
      window.location.href = targetLink;
    } else {
      window.open(targetLink);
    }
  },
};

export default qqCommand;

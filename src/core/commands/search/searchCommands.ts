/*
 * @Author: wangtao 1477017843@qq.com
 * @Date: 2022-07-27 14:26:14
 * @LastEditors: wangtao 1477017843@qq.com
 * @LastEditTime: 2022-07-28 17:25:15
 * @FilePath: \yuindex\src\core\commands\search\searchCommands.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CommandType } from "../../command";
import baiduCommand from "./baiduCommand";
import baidudevCommand from "./baidudevCommand";
import bilibiliCommand from "./bilibili/bilibiliCommand";
import bingCommand from "./bingCommand";
import codenavCommand from "./codenavCommand";
import doubanCommand from "./doubanCommand";
import douyinCommand from "./douyinCommand";
import githubCommand from "./githubCommand";
import googleCommand from "./googleCommand";
import wangyiyunCommand from "./wangyiyunCommand";
import zhihuCommand from "./zhihuCommand";
import gengCommand from "./gengCommand";
import qqCommand from "./qqCommand";
import qixiCommand from "./qixiCommand";

/**
 * 搜索源
 */
const fromDict: Record<string, CommandType> = {
  baidu: baiduCommand,
  baidudev: baidudevCommand,
  bilibili: bilibiliCommand,
  bing: bingCommand,
  codenav: codenavCommand,
  douban: doubanCommand,
  douyin: douyinCommand,
  github: githubCommand,
  google: googleCommand,
  wangyiyun: wangyiyunCommand,
  zhihu: zhihuCommand,
  geng: gengCommand,
  qq: qqCommand,
  qixi: qixiCommand,
};

/**
 * 搜索命令
 * @author yupi
 */
const searchCommand: CommandType = {
  func: "search",
  name: "网页搜索",
  alias: ["s", "sousuo", "sou", "query"],
  desc: "支持从不同平台快捷搜索内容",
  params: [
    {
      key: "word",
      desc: "搜索内容",
      required: true,
    },
  ],
  options: [
    {
      // 来源
      key: "from",
      alias: ["f"],
      type: "string",
      defaultValue: "baidu",
    },
    {
      key: "self",
      desc: "是否当前页面打开",
      alias: ["s"],
      type: "boolean",
      defaultValue: false,
    },
  ],
  // 默认使用百度搜索
  action: (options, terminal) => {
    const { from = "baidu" } = options;
    // 执行不同搜索源的搜索方法
    const fromObj = fromDict[from];
    if (!fromObj) {
      terminal.writeTextErrorResult("找不到搜索源");
      return;
    }
    return fromObj.action(options, terminal);
  },
};

export default [searchCommand, ...Object.values(fromDict)];

import { ref } from "vue";
import { getUsageStr } from "../../core/commands/terminal/help/helpUtils";
import { commandMap } from "../../core/commandRegister";
import _, { trim } from "lodash";
import { useTerminalConfigStore } from "../../core/commands/terminal/config/terminalConfigStore";

/**
 * 命令提示功能
 * @author yupi
 */
const useHint = () => {

  const hint = ref("");
  const { showHint } = useTerminalConfigStore();

  const setHint = (inputText: string) => {
    // 未开启提示
    if (!showHint) {
      return;
    }
    if (!inputText) {
      hint.value = "";
      return;
    }

    console.log(inputText, '进入setHint');

    const args = trim(inputText).split(" ");
    const func = args[0];

    console.log(commandMap, 'commandMap');

    let command = commandMap[func];
    if (!command) {
      hint.value = "";
      return;
    }
    // 子命令提示
    if (
      command.subCommands &&
      Object.keys(command.subCommands).length > 0 &&
      args.length > 1
    ) {
      hint.value = getUsageStr(command.subCommands[args[1]], command);
    } else {
      hint.value = getUsageStr(command);
    }
  };

  /**
   * 输入提示防抖
   */
  const debounceSetHint = _.debounce(function (inputText: string) {
    setHint(inputText);
  }, 500);

  return {
    hint,
    setHint,
    debounceSetHint,
  };
};

export default useHint;

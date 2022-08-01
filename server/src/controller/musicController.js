const { getSingleMusic } = require("../service/musicService");
const MyError = require("../exception");
const {
  REQUEST_PARAMS_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
} = require("../exception/errorCode");

/**
 * 获取单首音乐
 * @param event
 * @param req
 * @param res
 */
async function getSingleMusicApi(event, req, res) {
  const { keywords } = event;
  if (!keywords) {
    throw new MyError(REQUEST_PARAMS_ERROR_CODE, "请输入关键词");
  }
  const song = await getSingleMusic(keywords);
  if (!song) {
    throw new MyError(NOT_FOUND_ERROR_CODE);
  }
  return {
    name: song.name,
    id: song.id,
  };
}

module.exports = {
  getSingleMusicApi,
};

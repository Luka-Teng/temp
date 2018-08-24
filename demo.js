const constants = {
  env: 'production',
  commandUrl: 'http://api.xchanger.cn/open_platform/car/command?openId='
}

const requestCommand = ({ openId = null, accessToken = null, deviceId = null, ecarxId = null, command }, callback) => {
  Rokid.request({
    method: 'PUT',
    url: constants.commandUrl + openId,
    headers: {
      'Authorization': accessToken,
      'X-ENV-TYPE': constants.env,
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Accept': 'application/json;responseformat=3'
    },
    body: JSON.stringify({
      'deviceId': deviceId,
      'ecarxId': ecarxId,
      'command': command
    })
  }, callback)
}

const setDatabase = (self, data) => {
  const _data = JSON.stringify(data)
  Rokid.dbServer.set('commandState', _data, (error, result) => {
    if (error) {
      // 错误处理
      self.emit(':error', error)
    } else {
      self.emit(':done')
    }
  })
}

exports.handler = function (event, context, callback) {
  var rokid = Rokid.handler(event, context, callback)
  rokid.registerHandlers(handlers)
  rokid.execute()
}

const handlers = {
  'ROKID.INTENT.WELCOME': function () {
    try {
      this.setTts({tts: '滕伟是个天才'})
      setDatabase(this, {'command': '', 'state': 'stop', 'count': 0})
    } catch (e) {
      this.emit(':error', e)
    }
  },
  'start_car': function () {
    requestCommand({

    }, function (e, response, body) {

    })
  },
  // 轮询来查看回调
  'Voice.FINISHED': function () {

  }
}

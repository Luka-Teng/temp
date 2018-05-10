$('.need-slideInDown').addClass("slideInDown")

function addParams (next_page, key, param) {
  if (location.href.indexOf('?') >= 0) {
    location.href = location.origin + '/' + next_page + location.search + '&' + key + '=' + param
  } else {
    location.href = location.origin + '/' + next_page + '?' + key + '=' + param
  }
}

function goResult () {
  location.href = location.origin + '/' + 'result.html' + location.search
}

function goBack() {
  history.go(-1)
}

var mpid = 'mpid:a7d000ef-0d95-48c2-9596-31a2ba7083df';
var share_pic = 'http://temp.luka-test.cn/img/p.jpg';
var share_url;
var weChatUrlBase =  'http:⁄⁄wechat.mgcc.com.cn⁄wechat⁄wxapi⁄jssdkjsonp?mpid='+ mpid +'&callback=1234&urlmode=base64&callurl=';
var weChatUrl;
var sharetitle="找到你的本命饮品配方";
var sharedesc="";
function wechatConfig() {
    weChatUrl = weChatUrlBase + 'temp.luka-test.cn'.EncodeBase64();
    share_url = 'temp.luka-test.cn';
    $.ajax({
        type: 'post',
        url: weChatUrl,
        dataType: "jsonp",
        crossDomain: !0,
        jsonpCallback: "callbackfn",
        success: function(data) {
            var config_obj = data;
            wx.config({
                debug: false,
                appId: config_obj.appId,
                timestamp: config_obj.timestamp,
                nonceStr: config_obj.nonceStr,
                signature: config_obj.signature,
                jsApiList: [
                    ⁄⁄ 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline'
                ]
            });
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: sharetitle+sharedesc,
                    link: share_url,
                    imgUrl: share_pic,
                    success: function (res) {
                    },
                    cancel: function (res) {
                    },
                    fail: function (res) {
                    }
                });
            });
            wx.error(function(res){
            });
        },
        error:function(xhr, type) {
        }
    });
}
wechatConfig()

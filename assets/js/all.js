this.JSON || (this.JSON = {}),
(function () {
  function f (t) {
    return t < 10 ? '0' + t : t
  }
  function quote (t) {
    return escapable.lastIndex = 0,
    escapable.test(t) ? '"' + t.replace(escapable, function (t) {
      var e = meta[t]
            return 'string' === typeof e ? e : '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + t + '"'
  }
  function str (t, e) {
    var i, o, n, a, s, r = gap, u = e[t]
        switch (u && 'object' === typeof u && 'function' === typeof u.toJSON && (u = u.toJSON(t)),
      'function' === typeof rep && (u = rep.call(e, t, u)),
      typeof u) {
      case 'string':
        return quote(u)
        case 'number':
        return isFinite(u) ? String(u) : 'null';
      case 'boolean':
      case 'null':
        return String(u)
        case 'object':
        if (!u)
          {return "null";}
        if (gap += indent,
          s = [],
          '[object Array]' === Object.prototype.toString.apply(u)) {
          for (a = u.length,
            i = 0; i < a; i += 1)
            {s[i] = str(i, u) || "null";}
          return n = s.length === 0 ? '[]' : gap ? '[\n' + gap + s.join(',\n' + gap) + '\n' + r + ']' : '[' + s.join(',') + ']',
          gap = r,
          n
        }
        if (rep && 'object' === typeof rep)
          {for (a = rep.length,
                i = 0; i < a; i += 1)
                    "string" == typeof (o = rep[i]) && (n = str(o, u)) && s.push(quote(o) + (gap ? ": " : ":") + n);}
        else
          {for (o in u)
                    Object.hasOwnProperty.call(u, o) && (n = str(o, u)) && s.push(quote(o) + (gap ? ": " : ":") + n);}
        return n = s.length === 0 ? '{}' : gap ? '{\n' + gap + s.join(',\n' + gap) + '\n' + r + '}' : '{' + s.join(',') + '}',
        gap = r,
        n
    }
  }
  'function' !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (t) {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null
  }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (t) {
      return this.valueOf()
    }
  )
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    }, rep
    "function" !== typeof JSON.stringify && (JSON.stringify = function (t, e, i) {
    var o
        if (gap = '',
      indent = '',
      'number' === typeof i)
      {for (o = 0; o < i; o += 1)
                indent += " ";}
    else
      'string' === typeof i && (indent = i)
        if (rep = e,
      e && 'function' !== typeof e && ('object' !== typeof e || 'number' !== typeof e.length))
      {throw new Error("JSON.stringify");}
    return str('', {
      '': t
    })
  }
  ),
  'function' !== typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk (t, e) {
      var i, o, n = t[e]
            if (n && 'object' === typeof n)
        {for (i in n)
                    Object.hasOwnProperty.call(n, i) && (void 0 !== (o = walk(n, i)) ? n[i] = o : delete n[i]);}
      return reviver.call(t, e, n)
    }
    var j
        if (cx.lastIndex = 0,
      cx.test(text) && (text = text.replace(cx, function (t) {
        return '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4)
      })),
      /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))
      {return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;}
    throw new SyntaxError('JSON.parse')
  }
  )
}()),
(function (t) {
  'function' === typeof define && define.amd ? define(['jquery'], t) : 'object' === typeof exports ? module.exports = t(require('jquery')) : t(jQuery)
}(function (t) {
  function e (t) {
    return r.raw ? t : encodeURIComponent(t)
  }
  function i (t) {
    return r.raw ? t : decodeURIComponent(t)
  }
  function o (t) {
    return e(r.json ? JSON.stringify(t) : String(t))
  }
  function n (t) {
    t.indexOf('"') === 0 && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'))
        try {
      return t = decodeURIComponent(t.replace(s, ' ')),
      r.json ? JSON.parse(t) : t
    } catch (t) {}
  }
  function a (e, i) {
    var o = r.raw ? e : n(e)
        return t.isFunction(i) ? i(o) : o
  }
  var s = /\+/g,
       r = t.cookie = function (n, s, u) {
      if (arguments.length > 1 && !t.isFunction(s)) {
        if ('number' === typeof (u = t.extend({}, r.defaults, u)).expires) {
          var l = u.expires,
                   d = u.expires = new Date
                d.setMilliseconds(d.getMilliseconds() + 864e5 * l)
        }
        return document.cookie = [e(n), '=', o(s), u.expires ? '; expires=' + u.expires.toUTCString() : '', u.path ? '; path=' + u.path : '', u.domain ? '; domain=' + u.domain : '', u.secure ? '; secure' : ''].join('')
      }
      for (var p = n ? void 0 : {}, h = document.cookie ? document.cookie.split('; ') : [], c = 0, y = h.length; c < y; c++) {
        var f = h[c].split('='),
               m = i(f.shift()),
               g = f.join('=')
            if (n === m) {
          p = a(g, s)
                break
        }
        n || void 0 === (g = a(g)) || (p[m] = g)
      }
      return p
    }
    
    r.defaults = {},
  t.removeCookie = function (e, i) {
    return t.cookie(e, '', t.extend({}, i, {
      expires: -1
    })),
    !t.cookie(e)
  }
})),
(function (t) {
  function e (t, e) {
    return !!t && (!(t[0] < e[0]) && (t[0] > e[0] || !(t[1] < e[1]) && (t[1] > e[1] || !(t[2] < e[2]) && t[2] > e[2])))
  }
  function i () {
    if (document.hasOwnProperty && document.hasOwnProperty('currentScript'))
      {return document.currentScript.src;}
    for (var t = document.scripts || document.getElementsByTagName('script'), e = '', i = t.length, o = 0; o < i; o++) {
      if ('interactive' == t[o].readyState && t[o].src)
        {return t[o].src;}
      t[o].src && (e = t[o])
    }
    return e.src
  }
  function o () {
    return 'localStorage' in window && window.localStorage !== null
  }
  function n (t) {
    this.debugMode = t.debugMode || !0
  }
  window._id = window._id || (new Date()).getTime(),
  window.xm = window.xm || {},
  xm.config = xm.config || {}
    var a = navigator.userAgent,
       s = /(ipad|iphone|ipod)/i.test(a),
       r = /android/i.test(a),
       u = /mac/i.test(a),
       l = /webkit/i.test(a),
       d = u && /safari/i.test(a) && !/chrome/i.test(a),
       p = s || d,
       h = (function() {
        if (xm.config.STATIC_PATH)
            return xm.config.STATIC_PATH;
        var t = i()
          , e = /http(s)?\:\/\/([^\/]+)\/?/i.exec(t);
        return (e = e ? e[0] : "http://" + location.host).replace(/\/$/, "")
    }()),
       c = !!window.ActiveXObject || 'ActiveXObject' in window,
       y = /windows phone/i.test(a),
       f = !('MicroMessenger' != a.match(/MicroMessenger/i)),
       m = c && /360|compatible|maxthon|lbbrowser|qqbrowser|2345|theworld/i.test(a),
       g = s || r || d,
       v = /weibo/i.test(a),
       P = [],
       S = []
    s && (P = /IPhone OS (\d+)\_(\d+)\_(\d+)/gi.exec(a) || /IPhone OS (\d+)\_(\d+)/gi.exec(a)) && (S = P.slice(1)),
  r && (P = /Android[\.\/\s](\d+)\.(\d+)\.(\d+)/gi.exec(a) || /Android[\.\/\s](\d+)\.(\d+)/gi.exec(a)) && (S = P.slice(1)),
  r && !e(S, [4, 0, 0]) && (g = !1),
  n.prototype.log = function (t) {
    this.debugMode && window.console && console.log(t)
  }
  ,
  n.prototype.debug = function (t) {
    this.debugMode = t
  }
    
    var x = {
    Console: n,
    env: {
      inIOS: s,
      inMac: u,
      inPcIE: c,
      inCompatibleIE: m,
      inWindowsPhone: y,
      inWebkit: l,
      inAndroid: r,
      inMacSafari: d,
      m3u8SupportByHtml5: g,
      inWeiXin: f,
      inWeibo: v,
      osVersion: S,
      inFlashLess: p
    },
    xpmPath: function (t, e, i) {
      return h + '/lib/' + t + '/' + e + '/' + i
    },
    console: new n(!0),
    staticPath: h,
    supportsStorage: o,
    isHighThan: e,
    escape: function (t) {
      return t.replace(/\`/g, '&#96;').replace(/\'/g, '&#x27;').replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    },
    localStorage: function (t, e) {
      try {
        if (!o())
          {return;}
        if (void 0 === e)
          {return localStorage[t];}
        localStorage[t] = e
      } catch (t) {}
    }
  }
    xm.util = t.extend(xm.util || {}, x)
}($)),
(function (t) {
  function e () {}
  window.xm = window.xm || {},
  xm.util = xm.util || {},
  e.parse = function (t, e) {
    for (var e = e.replace(/[^hms]/gi, ' '), t = t.replace(/[^\d]/gi, ' '), i = e.split(' '), o = t.split(' '), n = 0, a = 0, s = 0, r = 0, u = i.length; r < u; r++) {
      var l = i[r]
            "h" !== l && 'hh' !== l || (n = o[r]),
      'm' !== l && 'mm' !== l || (a = o[r]),
      's' !== l && 'ss' !== l || (s = o[r])
    }
    return 60 * n * 60 + 60 * a + 1 * s
  }
  ,
  e.stringify = function (t, e, i) {
    var o = this.toObject(t),
           n = e
        return !o.hour && i && (n = i),
    n = n.replace(/h{1,2}/gi, function (t) {
      return t.length === 1 ? o.hour : o.hour < 10 ? '0' + o.hour : o.hour
    }),
    n = n.replace(/m{1,2}/gi, function (t) {
      return t.length === 1 ? o.min : o.min < 10 ? '0' + o.min : o.min
    }),
    n = n.replace(/s{1,2}/gi, function (t) {
      return t.length === 1 ? o.sec : o.sec < 10 ? '0' + o.sec : o.sec
    })
  }
  ,
  e.toObject = function (t) {
    var e = Math.floor(t / 60),
           i = Math.floor(e / 60)
        return {
      hour: i,
      min: e - 60 * i,
      sec: parseInt(t - 60 * e)
    }
  }
  ,
  e.toLocal = function (t) {
    return this.parse(t, 'hh:mm:ss') + 60 * (-480 - (new Date()).getTimezoneOffset())
  }
  ,
  xm.util.Time = e
}($)),
(function (t) {
  window.xm = window.xm || {},
  xm.util = xm.util || {}
    var e = {
    build: function (t, e, i, o, n) {
      xm.util.env.inCompatibleIE ? (e += e.indexOf("?") === -1 ? '?' : '&',
        e += '_t_=' + (new Date()).getTime(),
        this._build(t, e, i, o, n)) : this._build(t, e, i, o, n)
    },
    _build: function (e, i, o, n, a) {
      var s = '',
               r = '',
               u = '',
               l = '<object id="' + e + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0"',
               d = '<embed name="' + e + '" src="' + i + '"'
            a = a || t('body')
            for (var p in o)
        {r += " " + p + '="' + (s = o[p]) + '"';}
      l += r + '>';
      for (var h in n)
        {r += " " + h + '="' + (s = n[h]) + '"',
                u += '<param name="' + h + '" value="' + s + '" />';}
      r += ' pluginspage="http://www.macromedia.com/go/getflashplayer"',
      l += '<param name="movie" value="' + i + '" />',
      l += u + (d += (r += ' type="application/x-shockwave-flash"') + '></embed>') + '</object>',
      a.append(l)
    },
    get: function (t) {
      return window.document[t] ? window.document[t] : navigator.appName.indexOf("Microsoft Internet") != -1 ? document.getElementById(t) : document.embeds && document.embeds[t] ? document.embeds[t] : void 0
    }
  }
    xm.util.flash = e
}($)),
(function (t) {
  function e (e, i) {
    this.step = i || 500,
    this.saveOptions = e || [],
    this.saveOptions = t.isArray(this.saveOptions) ? this.saveOptions : [this.saveOptions],
    this.intervalId = 0,
    this.running = !1,
    this.run()
  }
  window.xm = window.xm || {},
  xm.util = xm.util || {},
  e.prototype.pace = function () {
    this.on(),
    this.initOptions()
  }
  ,
  e.prototype.initOptions = function () {
    for (var t = 0, e = this.saveOptions.length; t < e; t++)
      {this.saveOptions[t].saving = !1}
  }
  ,
  e.prototype.on = function () {
    this.last = (new Date()).getTime(),
    this.running = !0
  }
  ,
  e.prototype.off = function () {
    this.running = !1
  }
  ,
  e.prototype.run = function () {
    var t = this
        this.intervalId = setInterval(function () {
      if (t.running)
        {for (var e = (new Date).getTime(), i = 0, o = t.saveOptions.length; i < o; i++) {
                    var n = t.saveOptions[i];
                    n.saving || e - t.last > n.duration && (n.saving = !0,
                    (!n.filter || n.filter && n.filter.call(n.context)) && n.callback.call(n.context))
                }}
    }, this.step)
  }
  ,
  e.prototype.release = function () {
    clearInterval(this.intervalId)
  }
  ,
  xm.util.Pacemaker = e
}($)),
(function (t) {
  function e () {
    this.date = new Date(),
    'function' !== typeof this.create && (e.prototype.create = function () {
      this.date = new Date
            var t = '';
      sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16),
      sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16)
            for (var e = 0; e < 9; e++)
        {t += Math.floor(16 * Math.random()).toString(16);}
      for (t += sexadecimalDate,
        t += sexadecimalTime; t.length < 32;)
        {t += Math.floor(16 * Math.random()).toString(16);}
      return this.format(t)
    }
      ,
      e.prototype.getGUIDDate = function () {
        return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay())
      }
      ,
      e.prototype.getGUIDTime = function () {
        return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() / 10))
      }
      ,
      e.prototype.addZero = function (t) {
        return 'NaN' != Number(t).toString() && t >= 0 && t < 10 ? '0' + Math.floor(t) : t.toString()
      }
      ,
      e.prototype.hexadecimal = function (t, e, i) {
        return void 0 != i ? parseInt(t.toString(), i).toString(e) : parseInt(t.toString()).toString(e)
      }
      ,
      e.prototype.format = function (t) {
        return t.slice(0, 8) + '-' + (t.slice(8, 12) + '-') + (t.slice(12, 16) + '-') + (t.slice(16, 20) + '-') + t.slice(20)
      }
    )
  }
  window.xm = window.xm || {},
  xm.util = xm.util || {},
  xm.util.GUID = e
}($)),
(function () {
  window.xm = window.xm || {},
  xm.util = xm.util || {},
  xm.config = xm.config || {}
    var t = {
    getUid: function () {
      var t = $.cookie(xm.config.TOKEN_LABEL)
            return t ? t.split('&')[0] : ''
    },
    getToken: function () {
      var t = $.cookie(xm.config.TOKEN_LABEL)
            return t ? t.split('&')[1] : ''
    },
    getGUID: function () {
      if (!localStorage.guid) {
        var t = new xm.util.GUID
                localStorage.guid = t.create()
      }
      return localStorage.guid
    }
  }
    xm.util.account = t
}()),
(function (t) {
  function e (t) {
    t = t || {},
    this.debugMode = t.debugMode || !1,
    e.instances.push(this),
    this.name = 'xm_audio_flash_mp3_' + e.instances.length,
    this.seekTimeout = 0,
    this.audio = null,
    this.sound = {},
    this.playState = null,
    this.playInfo = [],
    this.build(),
    this.console = new i.Console({
      debugMode: this.debugMode
    })
  }
  window.xm = window.xm || {}
    var i = xm.util,
       o = {
      READY: 0,
      LOADING: 1,
      PLAYING: 2,
      PAUSED: 3,
      STOPED: 4,
      FINISHED: 5,
      LOADERROR: 6
    }
    e.PlayState = o,
  e.instances = [],
  e.prototype.build = function () {
    var t = this.debugMode ? 1 : 0,
           o = e.instances.length - 1,
           n = i.xpmPath('player', '2.0.0', 'swf/xmaudio_mp3.swf?debugMode=' + t + "&instance=xm.XMAudioFlashMP3.instances['" + o + "']"),
           a = {
        width: 1,
        height: 1
      },
           s = {
        quality: 'autohigh',
        bgcolor: '#fff',
        align: 'middle',
        allowFullScreen: 'true',
        allowScriptAccess: 'always',
        swliveconnect: 'true',
        wmode: 'window'
      }
        i.flash.build(this.name, n, a, s)
  }
  ,
  e.prototype._ready = function () {
    var e = this
        this.audio = i.flash.get(this.name),
    setTimeout(function () {
      t.event.trigger('ready', e, e)
    }, 1e3)
  }
  ,
  e.prototype.setSound = function (e) {
    this.stop(),
    this.playState !== o.LOADING && this.playState !== o.PLAYING && this.playState !== o.PAUSED && (this.sound = t.extend({
      position: 0,
      duration: 0,
      title: '',
      src: 'javascript:;'
    }, e),
      this.setPlayState(o.READY),
      t.event.trigger('soundchange', this.sound, this))
  }
  ,
  e.prototype.play = function () {
    var e = !1
        this.audio && this.sound.src && this.playState !== o.LOADING && this.playState !== o.PLAYING && (this.playState !== o.LOADERROR && this.playState !== o.READY && this.playState !== null && this.playState !== o.STOPED || (this.audio.load(this.sound.src),
      e = !0),
      this.audio.xplay(this.sound.position),
      this.setPlayState(o.LOADING),
      e ? t.event.trigger('onplay', this.sound, this) : t.event.trigger('onresume', this.sound, this))
  }
  ,
  e.prototype.pause = function () {
    this.audio && (this.playState !== o.LOADING && this.playState !== o.PLAYING || (this.audio.xpause(),
      this.setPlayState(o.PAUSED)))
  }
  ,
  e.prototype.stop = function () {
    this.audio && this.playState !== null && this.playState !== o.READY && this.playState !== o.STOPED && this.playState !== o.FINISHED && (this.audio.xstop(),
      this.setPlayState(o.STOPED))
  }
  ,
  e.prototype.getPosition = function () {
    if (this.audio)
      {return this.audio.getPosition()}
  }
  ,
  e.prototype.setPosition = function (t) {
    this.audio && (this.sound.position = parseFloat(t),
      this.audio.setPosition(this.sound.position))
  }
  ,
  e.prototype.setPlayState = function (e) {
    if (this.playState !== e) {
      this.playState = e
            var i = {
        t: (new Date()).getTime(),
        s: this.playState,
        p: this.sound.position || 0
      }
            this.playInfo.push(i),
      t.event.trigger('playstatechange', [this.playState, this.playInfo], this),
      this.playState !== o.STOPED && this.playState !== o.FINISHED || (this.playInfo = [])
    }
  }
  ,
  e.prototype.setVolume = function (t) {
    this.audio && this.audio.setVolume(t)
  }
  ,
  e.prototype.getVolume = function () {
    return this.audio.getVolume()
  }
  ,
  e.prototype.onPlaystateChange = function () {
    t.event.trigger('playstatechange', this.playState, this)
  }
  ,
  e.prototype.onTimeUpdate = function (e) {
    this.sound.position = e,
    this.playState !== o.STOPED && this.playState !== o.PAUSED && this.setPlayState(o.PLAYING),
    t.event.trigger('timeupdate', this.sound.position, this)
  }
  ,
  e.prototype.onSoundEnded = function () {
    this.sound.position = 0,
    t.event.trigger('timeupdate', this.sound.position, this),
    this.setPlayState(o.FINISHED)
  }
  ,
  e.prototype.onLoading = function (e, i) {
    t.event.trigger('loading', e / i, this)
  }
  ,
  e.prototype.onLoadError = function (e) {
    this.console.log(e),
    t.event.trigger('loaderror', e, this),
    this.setPlayState(o.LOADERROR)
  }
  ,
  e.prototype.debug = function (t) {
    this.console.debug(t),
    this.audio && this.audio.debug(t)
  }
  ,
  xm.XMAudioFlashMP3 = e
}($)),
(function (t) {
  function e (t) {
    t = t || {},
    this.debugMode = t.debugMode || !1,
    e.instances.push(this),
    this.name = 'xm_audio_flash_mp4_' + e.instances.length,
    this.seekTimeout = 0,
    this.audio = null,
    this.sound = {},
    this.playState = null,
    this.playInfo = [],
    this.build(),
    this.timeupdateLocked = !1,
    this.console = new i.Console({
      debugMode: this.debugMode
    })
  }
  window.xm = window.xm || {}
    var i = xm.util,
       o = {
      READY: 0,
      LOADING: 1,
      PLAYING: 2,
      PAUSED: 3,
      STOPED: 4,
      FINISHED: 5,
      LOADERROR: 6
    }
    e.PlayState = o,
  e.instances = [],
  e.prototype.build = function () {
    var t = this.debugMode ? 1 : 0,
           o = e.instances.length - 1,
           n = i.xpmPath('player', '2.0.0', 'swf/xmaudio_mp4.swf?debugMode=' + t + "&instance=xm.XMAudioFlashMP4.instances['" + o + "']"),
           a = {
        width: 1,
        height: 1
      },
           s = {
        quality: 'autohigh',
        bgcolor: '#fff',
        align: 'middle',
        allowFullScreen: 'true',
        allowScriptAccess: 'always',
        swliveconnect: 'true',
        wmode: 'window'
      }
        i.flash.build(this.name, n, a, s)
  }
  ,
  e.prototype._ready = function () {
    var e = this
        this.audio = i.flash.get(this.name),
    setTimeout(function () {
      t.event.trigger('ready', e, e)
    }, 1e3)
  }
  ,
  e.prototype.setSound = function (e) {
    this.stop(),
    this.playState !== o.LOADING && this.playState !== o.PLAYING && this.playState !== o.PAUSED && (this.sound = t.extend({
      position: 0,
      duration: 0,
      title: '',
      src: 'javascript:;'
    }, e),
      this.setPlayState(o.READY),
      t.event.trigger('soundchange', this.sound, this))
  }
  ,
  e.prototype.play = function () {
    this.audio && this.sound.src && this.playState !== o.LOADING && this.playState !== o.PLAYING && (this.playState === o.LOADERROR || this.playState === o.READY || this.playState === null || this.playState === o.STOPED ? (this.audio.load(this.sound.src),
      this.audio.xplay(),
      this.sound.position && (this.timeupdateLocked = !0),
      t.event.trigger('onplay', this.sound, this)) : (this.audio.xplay(),
      t.event.trigger('onresume', this.sound, this)),
      this.setPlayState(o.LOADING))
  }
  ,
  e.prototype.pause = function () {
    this.audio && (this.playState !== o.LOADING && this.playState !== o.PLAYING || (this.audio.xpause(),
      this.setPlayState(o.PAUSED)))
  }
  ,
  e.prototype.stop = function () {
    this.audio && this.playState !== null && this.playState !== o.READY && this.playState !== o.STOPED && this.playState !== o.FINISHED && (this.audio.xstop(),
      this.setPlayState(o.STOPED))
  }
  ,
  e.prototype.getPosition = function () {
    if (this.audio)
      {return this.audio.getPosition()}
  }
  ,
  e.prototype.setPosition = function (t) {
    this.audio && (this.sound.position = parseFloat(t),
      this.audio.setPosition(this.sound.position))
  }
  ,
  e.prototype.setPlayState = function (e) {
    if (this.playState !== e) {
      this.playState = e
            var i = {
        t: (new Date()).getTime(),
        s: this.playState,
        p: this.sound.position || 0
      }
            this.playInfo.push(i),
      t.event.trigger('playstatechange', [this.playState, this.playInfo], this),
      this.playState !== o.STOPED && this.playState !== o.FINISHED || (this.playInfo = [])
    }
  }
  ,
  e.prototype.setVolume = function (t) {
    this.audio && this.audio.setVolume(t)
  }
  ,
  e.prototype.getVolume = function () {
    return this.audio.getVolume()
  }
  ,
  e.prototype.onPlaystateChange = function () {
    t.event.trigger('playstatechange', this.playState, this)
  }
  ,
  e.prototype.onMetaData = function (e) {
    this.sound.position && (this.timeupdateLocked = !1,
      this.audio.setPosition(this.sound.position)),
    t.event.trigger('loadedmetadata', e, this)
  }
  ,
  e.prototype.onTimeUpdate = function (e) {
    this.timeupdateLocked || (this.sound.position = e,
      this.playState !== o.STOPED && this.playState !== o.PAUSED && this.setPlayState(o.PLAYING),
      t.event.trigger('timeupdate', this.sound.position, this))
  }
  ,
  e.prototype.onSoundEnded = function () {
    this.sound.position = 0,
    t.event.trigger('timeupdate', this.sound.position, this),
    this.setPlayState(o.FINISHED)
  }
  ,
  e.prototype.onLoading = function (e, i) {
    t.event.trigger('loading', e / i, this)
  }
  ,
  e.prototype.onLoadError = function (e) {
    this.console.log(e),
    t.event.trigger('loaderror', e, this),
    this.setPlayState(o.LOADERROR)
  }
  ,
  e.prototype.debug = function (t) {
    this.console.debug(t),
    this.audio && this.audio.debug(t)
  }
  ,
  e.prototype.onBufferFull = function () {
    this.console.log('onBufferFull')
  }
  ,
  xm.XMAudioFlashMP4 = e
}($)),
(function (t) {
  function e (t) {
    t = t || {},
    this.debugMode = t.debugMode || !1,
    e.instances.push(this),
    this.name = 'xm_audio_flash_m3u8_' + e.instances.length,
    this.seekTimeout = 0,
    this.audio = null,
    this.sound = {},
    this.playState = null,
    this.playInfo = [],
    this.build(),
    this.console = new i.Console({
      debugMode: this.debugMode
    }),
    this.pacemaker = new o([{
      context: this,
      duration: 5e3,
      callback: this.playRepair,
      filter: function () {
        return this.sound.isLive
      }
    }])
  }
  window.xm = window.xm || {}
    var i = xm.util,
       o = xm.util.Pacemaker,
       n = {
      READY: 0,
      LOADING: 1,
      PLAYING: 2,
      PAUSED: 3,
      STOPED: 4,
      FINISHED: 5,
      LOADERROR: 6
    }
    e.PlayState = n,
  e.instances = [],
  e.prototype.build = function () {
    var t = this.debugMode ? 1 : 0,
           o = e.instances.length - 1,
           n = i.xpmPath('player', '2.0.0', 'swf/xmaudio_m3u8.swf?debugMode=' + t + '&callback=xm.XMAudioFlashM3U8.instances[' + o + '].callback'),
           a = {
        width: 1,
        height: 1
      },
           s = {
        quality: 'autohigh',
        bgcolor: '#fff',
        align: 'middle',
        allowFullScreen: 'true',
        allowScriptAccess: 'always',
        swliveconnect: 'true',
        wmode: 'window'
      }
        i.flash.build(this.name, n, a, s)
  }
  ,
  e.prototype.playRepair = function () {
    this.console.log('playRepair')
        var t = this
        this.audio.playerStop(),
    setTimeout(function () {
      t.audio.playerLoad(t.sound.src)
    }, 500)
  }
  ,
  e.prototype.callback = function (t, e) {
    this.events[t].apply(this, e)
  }
  ,
  e.prototype.events = {
    ready: function () {
      this._ready()
    },
    complete: function () {
      this.onSoundEnded()
    },
    manifest: function () {
      this.audio.playerPlay(-1)
    },
    position: function (t) {
      var e = t.duration.toFixed(2),
               i = (t.live_sliding_main.toFixed(2),
          t.position.toFixed(2),
          (t.live_sliding_main + t.position).toFixed(2)),
               o = (t.backbuffer.toFixed(2),
          t.buffer.toFixed(2))
            this.playState === n.PLAYING && this.onTimeUpdate(i),
      this.playState === n.LOADING && this.onLoading(o, e)
    },
    state: function (t) {
      var e = n.READY
            "IDLE" === t && (e = n.READY),
      'PAUSED_BUFFERING' === t && (e = n.LOADING),
      'PLAYING_BUFFERING' !== t && 'PLAYING' !== t || (e = n.PLAYING),
      'PAUSED' === t && (e = n.PAUSED),
      this.state = t,
      this.setPlayState(e)
    },
    error: function (t, e, i) {
      this.onLoadError('onError():error code:' + t + ' url:' + e + ' message:' + i)
    }
  },
  e.prototype._ready = function () {
    var e = this
        this.audio = i.flash.get(this.name),
    setTimeout(function () {
      t.event.trigger('ready', e, e)
    }, 1e3)
  }
  ,
  e.prototype.setSound = function (e) {
    this.stop(),
    this.playState !== n.LOADING && this.playState !== n.PLAYING && this.playState !== n.PAUSED && (this.sound = t.extend({
      position: 0,
      duration: 0,
      title: '',
      src: 'javascript:;'
    }, e),
      this.setPlayState(n.READY),
      t.event.trigger('soundchange', this.sound, this))
  }
  ,
  e.prototype.play = function () {
    this.audio && this.sound.src && this.playState !== n.LOADING && this.playState !== n.PLAYING && (this.playState === n.LOADERROR || this.playState === n.READY || this.playState === null || this.playState === n.STOPED ? (this.audio.playerLoad(this.sound.src),
      this.setPlayState(n.LOADING),
      t.event.trigger('onplay', this.sound, this)) : (this.setPlayState(n.LOADING),
      this.audio.playerResume(),
      t.event.trigger('onresume', this.sound, this)))
  }
  ,
  e.prototype.pause = function () {
    this.audio && (this.playState !== n.LOADING && this.playState !== n.PLAYING || (this.audio.playerPause(),
      this.setPlayState(n.PAUSED)))
  }
  ,
  e.prototype.stop = function () {
    this.audio && this.playState !== null && this.playState !== n.READY && this.playState !== n.STOPED && this.playState !== n.FINISHED && (this.audio.playerStop(),
      this.setPlayState(n.STOPED))
  }
  ,
  e.prototype.getPosition = function () {
    if (this.audio)
      {return this.audio.getPosition()}
  }
  ,
  e.prototype.setPosition = function (t) {
    this.audio && (this.sound.position = parseFloat(t),
      this.audio.setPosition(this.sound.position))
  }
  ,
  e.prototype.setPlayState = function (e) {
    if (this.playState !== e) {
      this.playState = e
            var i = {
        t: (new Date()).getTime(),
        s: this.playState,
        p: this.sound.position || 0
      }
            this.playInfo.push(i),
      t.event.trigger('playstatechange', [this.playState, this.playInfo], this),
      this.playState !== n.STOPED && this.playState !== n.FINISHED || (this.playInfo = []),
      this.playState !== n.LOADING && this.playState !== n.PLAYING && this.pacemaker.off()
    }
  }
  ,
  e.prototype.setVolume = function (t) {
    this.audio && this.audio.playerVolume(t)
  }
  ,
  e.prototype.getVolume = function () {}
  ,
  e.prototype.onPlaystateChange = function () {
    t.event.trigger('playstatechange', this.playState, this)
  }
  ,
  e.prototype.onTimeUpdate = function (e) {
    this.pacemaker.pace(),
    this.sound.position = e,
    this.playState !== n.STOPED && this.playState !== n.PAUSED && this.setPlayState(n.PLAYING),
    t.event.trigger('timeupdate', this.sound.position, this)
  }
  ,
  e.prototype.onSoundEnded = function () {
    this.sound.position = 0,
    t.event.trigger('timeupdate', this.sound.position, this),
    this.setPlayState(n.FINISHED)
  }
  ,
  e.prototype.onLoading = function (e, i) {
    t.event.trigger('loading', e / i, this)
  }
  ,
  e.prototype.onLoadError = function (e) {
    this.console.log(e),
    t.event.trigger('loaderror', e, this),
    this.setPlayState(n.LOADERROR)
  }
  ,
  e.prototype.debug = function (t) {
    this.console.debug(t)
  }
  ,
  e.prototype.onBufferFull = function () {
    this.console.log('onBufferFull')
  }
  ,
  xm.XMAudioFlashM3U8 = e
}($)),
(function (t) {
  function e (t) {
    t = t || {},
    this.debugMode = t.debugMode || !1,
    this.breakpoint = t.breakpoint || !0
        var e = new Audio
        e.loop = !1,
    e.autoplay = !1,
    e.preload = 'none',
    this.audio = e,
    this.sound = {},
    this.playState = null,
    this.playInfo = [],
    this.metaDataLoaded = !1,
    this.bindEvents(),
    this.canplayLocked = !1,
    this.console = new i.Console({
      debugMode: this.debugMode
    }),
    this.pacemaker = new o([{
      context: this,
      duration: 1e3,
      callback: this.loadingRepair
    }, {
      context: this,
      duration: 5e3,
      callback: this.playRepair,
      filter: function () {
        return this.sound.isLive
      }
    }]),
    this._ready()
  }
  window.xm = window.xm || {}
    var i = xm.util,
       o = xm.util.Pacemaker,
       n = {
      READY: 0,
      LOADING: 1,
      PLAYING: 2,
      PAUSED: 3,
      STOPED: 4,
      FINISHED: 5,
      LOADERROR: 6
    }
    e.PlayState = n,
  e.prototype._ready = function () {
    var e = this
        setTimeout(function () {
      t.event.trigger('ready', e, e)
    }, 1e3)
  }
  ,
  e.prototype.loadingRepair = function () {
    this.playState === n.PLAYING && this.setPlayState(n.LOADING)
  }
  ,
  e.prototype.playRepair = function () {
    var t = this
        this.audio.pause(),
    this.audio.src = 'javascript:;',
    setTimeout(function () {
      xm.util.env.inIOS && !xm.util.isHighThan(xm.util.env.osVersion, [7, 1, 2]) || (t.canplayLocked = !1,
        t.audio.src = t.sound.src,
        t.audio.title = t.sound.title,
        t.metaDataLoaded = !1,
        t.audio.load(),
        t.setPlayState(n.LOADING))
    }, 500)
  }
  ,
  e.prototype.setSound = function (e) {
    this.stop(),
    this.playState !== n.LOADING && this.playState !== n.PLAYING && this.playState !== n.PAUSED && (this.sound = t.extend({
      position: 0,
      duration: 0,
      title: '',
      src: 'javascript:;'
    }, e),
      this.setPlayState(n.READY),
      t.event.trigger('soundchange', this.sound, this))
  }
  ,
  e.prototype.play = function () {
    var e = this
        this.sound.src && this.playState !== n.LOADING && this.playState !== n.PLAYING && (this.audio.src && this.audio.src === this.sound.src ? (this.audio.play(),
      t.event.trigger('onresume', this.sound, this)) : (this.audio.src = this.sound.src,
      this.audio.title = this.sound.title,
      this.metaDataLoaded = !1,
      this.audio.load(),
      this.setPlayState(n.LOADING),
      t.event.trigger('onplay', this.sound, this),
      setTimeout(function () {
        e.playState === n.LOADING && (e.audio.src = 'javascript:;',
          e.setPlayState(n.READY))
      }, 1e4)))
  }
  ,
  e.prototype.pause = function () {
    this.audio.pause()
  }
  ,
  e.prototype.stop = function () {
    this.playState !== null && this.playState !== n.READY && this.playState !== n.STOPED && this.playState !== n.FINISHED && (this.canplayLocked = !1,
      this.setPlayState(n.STOPED),
      this.audio.src = 'javascript:;')
  }
  ,
  e.prototype.getPosition = function () {
    return this.sound.position
  }
  ,
  e.prototype.setPosition = function (t) {
    if (this.metaDataLoaded || !xm.util.inPcIE)
      {try {
                t = parseFloat(t),
                this.audio.currentTime = t,
                this.sound.position = t
            } catch (t) {
                xm.util.console.log(t)
            }}
  }
  ,
  e.prototype.setPlayState = function (e) {
    if (this.playState !== e) {
      this.playState = e
            var i = {
        t: (new Date()).getTime(),
        s: this.playState,
        p: this.sound.position || 0
      }
            this.playInfo.push(i),
      t.event.trigger('playstatechange', [this.playState, this.playInfo], this),
      this.playState !== n.STOPED && this.playState !== n.FINISHED || (this.playInfo = []),
      this.playState !== n.LOADING && this.playState !== n.PLAYING && (this.playState === n.LOADERROR && this.sound.isLive ? this.pacemaker.pace() : this.pacemaker.off())
    }
  }
  ,
  e.prototype.setPlaybackRate = function (t) {
    this.audio.playbackRate = t
  }
  ,
  e.prototype.getPlaybackRate = function () {
    return this.audio.playbackRate
  }
  ,
  e.prototype.setVolume = function (t) {
    t = (t = (t = parseFloat(t)) <= 0 ? 0 : t) >= 1 ? 1 : t,
    this.audio.volume = parseFloat(t)
  }
  ,
  e.prototype.getVolume = function () {
    return this.audio.volume
  }
  ,
  e.prototype.bindEvents = function () {
    var e = this,
           i = this.audio
        i.addEventListener('timeupdate', function () {
      e.pacemaker.pace(),
      e.sound.position = i.currentTime,
      e.playState !== n.STOPED && e.playState !== n.PAUSED && e.setPlayState(n.PLAYING),
      t.event.trigger('timeupdate', e.sound.position, e)
    }, !1),
    i.addEventListener('play', function () {
      e.setPlayState(n.LOADING)
    }, !1),
    i.addEventListener('playing', function () {
      e.setPlayState(n.PLAYING)
    }, !1),
    i.addEventListener('pause', function () {
      e.setPlayState(n.PAUSED)
    }, !1),
    i.addEventListener('ended', function () {
      e.sound.position = 0,
      e.canplayLocked = !1,
      t.event.trigger('timeupdate', e.sound.position, e),
      e.setPlayState(n.FINISHED)
    }, !1),
    i.addEventListener('progress', function (i) {
      var o, n, a = e.sound, s = 0, r = i.target.buffered, u = i.loaded || 0, l = i.total || 1
            if (a.buffered = [],
        r && r.length) {
        for (o = 0,
          n = r.length; o < n; o++)
          {a.buffered.push({
                        start: 1e3 * r.start(o),
                        end: 1e3 * r.end(o)
                    });}
        s = 1e3 * (r.end(0) - r.start(0)),
        u = Math.min(1, s / (1e3 * i.target.duration))
      }
      isNaN(u) || t.event.trigger('loading', u / l, e)
    }),
    i.addEventListener('error', function (i) {
      e.console.log(i),
      e.canplayLocked = !1,
      e.audio.src = 'javascript:;',
      t.event.trigger('loaderror', i, e),
      e.setPlayState(n.LOADERROR)
    }),
    i.addEventListener('loadedmetadata', function () {
      e.metaDataLoaded = !0
    }, !1),
    i.addEventListener('canplay', function (t) {
      e.canplayLocked || (e.canplayLocked = !0,
        e.sound.position && e.breakpoint && e.setPosition(e.sound.position),
        i.play())
    })
  }
  ,
  e.prototype.debug = function (t) {
    this.console.debug(t)
  }
  ,
  xm.XMAudioHtml5 = e
}($)),
(function (t) {
  function e (t) {
    this.audio = null,
    this.sound = null,
    this.playState = null,
    this.volume = 1,
    this.isMute = !1,
    t = t || {},
    this.preferFlash = t.preferFlash || !1,
    this.supportMP3 = t.supportMP3 || !0,
    this.supportMP4 = t.supportMP4 || !0,
    this.supportM3U8 = t.supportM3U8 || !1,
    this.audios = [],
    this.audioMap = {},
    this.initAudios(t),
    this.bindEvents()
  }
  window.xm = window.xm || {}
    xm.util,
  !!window.Audio && (new Audio()).canPlayType('audio/x-m4a')
    var i = ['mpeg4', 'aac', 'flv', 'mov', 'mp4', 'm4v', 'f4v', 'm4a', 'm4b', 'mp4v', '3gp', '3g2'],
       o = (new RegExp('\\.(' + i.join('|') + ')(\\?.*)?$', 'i'),
      new RegExp('\\.(m3u8)(\\?.*)?$', 'i')),
       n = new RegExp('\\.(mp3)(\\?.*)?$', 'i')
    e.prototype.initAudio = function (e, i, o, n) {
    if (this[e])
      {return this[e];}
    var a = this,
           s = new xm[e](n)
        return o[i] = !1,
    t.event.add(s, 'ready', function (t) {
      var e = !0
            o[i] = !0
            for (var n in o)
        {o[n] || (e = !1);}
      e && a._ready()
    }),
    this[e] = s,
    this.audios.push(s),
    s
  }
  ,
  e.prototype.initAudios = function (t) {
    var e = {}
        this.supportM3U8 && (xm.util.env.m3u8SupportByHtml5 ? this.audioMap.M3U8 = this.initAudio('XMAudioHtml5', 'Html5', e, t) : this.audioMap.M3U8 = this.initAudio('XMAudioFlashM3U8', 'M3U8', e, t)),
    this.supportMP3 && (this.preferFlash || !window.Audio ? this.audioMap.MP3 = this.initAudio('XMAudioFlashMP3', 'MP3', e, t) : this.audioMap.MP3 = this.initAudio('XMAudioHtml5', 'Html5', e, t)),
    this.supportMP4 && (this.preferFlash || !window.Audio || window.Audio && !(new Audio()).canPlayType('audio/mp4') && !(new Audio()).canPlayType('audio/x-m4a') ? this.audioMap.MP4 = this.initAudio('XMAudioFlashMP4', 'MP4', e, t) : this.audioMap.MP4 = this.initAudio('XMAudioHtml5', 'Html5', e, t))
  }
  ,
  e.PlayState = xm.XMAudioHtml5 && xm.XMAudioHtml5.PlayState || xm.XMAudioFlashMP4 && xm.XMAudioFlashMP4.PlayState || xm.XMAudioFlashMP3 && xm.XMAudioFlashMP3.PlayState,
  e.prototype._bindEvents = function (e) {
    var i = this
        t.event.add(e, 'timeupdate', function (e, o) {
      t.event.trigger('timeupdate', o, i)
    }),
    t.event.add(e, 'playstatechange', function (e, o, n) {
      i.playState = o,
      t.event.trigger('playstatechange', [o, n], i)
    }),
    t.event.add(e, 'loading', function (e, o) {
      t.event.trigger('loading', o, i)
    }),
    t.event.add(e, 'soundchange', function (e, o) {
      t.event.trigger('soundchange', o, i)
    }),
    t.event.add(e, 'loaderror', function (e, o) {
      t.event.trigger('loaderror', o, i)
    }),
    t.event.add(e, 'onplay', function (e, o) {
      t.event.trigger('onplay', o, i)
    }),
    t.event.add(e, 'onresume', function (e, o) {
      t.event.trigger('onresume', o, i)
    })
  }
  ,
  e.prototype.setPlayState = function (t) {
    this.audio && this.audio.setPlayState(t)
  }
  ,
  e.prototype.bindEvents = function () {
    for (var t = 0; t < this.audios.length; t++) {
      var e = this.audios[t]
            this._bindEvents(e)
    }
  }
  ,
  e.prototype._ready = function () {
    t.event.trigger('ready', this, this)
  }
  ,
  e.prototype.select = function (t) {
    if (t.src && t.src.match(o)) {
      var e = this.sound.src
            !xm.util.env.m3u8SupportByHtml5 || xm.util.env.inAndroid ? /\btranscode=ts\b/gi.test(e) || (e = e + (/\?/.test(e) ? '&' : '?') + 'transcode=ts',
        this.sound.src = e) : /\btranscode=ts\b/gi.test(e) && (e = e.replace(/\btranscode=ts\b/gi, '').replace('?&', '?').replace('&&', '&'),
        this.sound.src = e),
      this.audio = this.audioMap.M3U8
    } else {
      var i = t.src && t.src.match(n)
            this.audio = i ? this.audioMap.MP3 : this.audioMap.MP4
    }
  }
  ,
  e.prototype.play = function () {
    this.audio && this.audio.play()
  }
  ,
  e.prototype.pause = function () {
    this.audio && this.audio.pause()
  }
  ,
  e.prototype.stop = function () {
    this.audio && this.audio.stop()
  }
  ,
  e.prototype.getPosition = function () {
    return this.audio.getPosition()
  }
  ,
  e.prototype.setPosition = function (t) {
    this.audio.setPosition(t)
  }
  ,
  e.prototype.setPlaybackRate = function (e) {
    this.XMAudioHtml5 && (this.XMAudioHtml5.setPlaybackRate(e),
      t.event.trigger('playbackRateChange', e, this))
  }
  ,
  e.prototype.getPlaybackRate = function () {
    if (this.XMAudioHtml5)
      {return this.XMAudioHtml5.getPlaybackRate()}
  }
  ,
  e.prototype.setVolume = function (e) {
    e = (e = (e = parseFloat(e)) <= 0 ? 0 : e) >= 1 ? 1 : e,
    this.volume = e,
    t.event.trigger('volumeChange', e, this),
    this.isMute || this._setVolume(e)
  }
  ,
  e.prototype._setVolume = function (t) {
    this.XMAudioHtml5 && this.XMAudioHtml5.setVolume(t),
    this.XMAudioFlashMP4 && this.XMAudioFlashMP4.setVolume(t),
    this.XMAudioFlashMP3 && this.XMAudioFlashMP3.setVolume(t)
  }
  ,
  e.prototype.getVolume = function () {
    return this.volume
  }
  ,
  e.prototype.mute = function () {
    this.isMute = !0,
    this._setVolume(0),
    t.event.trigger('muteEvent', this.volume, this)
  }
  ,
  e.prototype.unmute = function () {
    this.isMute = !1,
    this._setVolume(this.volume),
    t.event.trigger('unmuteEvent', this.volume, this)
  }
  ,
  e.prototype.setSound = function (t) {
    this.sound = t,
    this.select(t),
    this.audio.setSound(t)
  }
  ,
  e.prototype.debug = function (t) {
    this.XMAudioHtml5 && this.XMAudioHtml5.debug(t),
    this.XMAudioFlashMP4 && this.XMAudioFlashMP4.debug(t),
    this.XMAudioFlashMP3 && this.XMAudioFlashMP3.debug(t)
  }
  ,
  xm.XMAudio = e
}($)),
(function (t) {
  function e (t) {
    for (var e = 0, i = 0, o = t.length; i < o; i++) {
      var n = t[i],
               a = n.t
            if (n.s === 2) {
        var s = t[i + 1]
                s && (e += s.t - a)
      }
    }
    return e / 1e3
  }
  function i (t) {
    var e = 0,
           i = t.length
        return i && (e = t[i - 1].p),
    e
  }
  function o (t, e, i) {
    var o = s(t) + '?' + a(t, e, i),
           n = new Image
        n.src = o,
    n = null
  }
  function n (o, n, a) {
    var s = o.sound.id,
           r = h.playCounter + '/openapi/tracks/record',
           u = Math.round(e(a)) || 0,
           l = Math.round(i(a)) || 0,
           d = a[0].t || 0,
           c = xm.util.account,
           y = {
        started_at: d,
        played_secs: l,
        duration: u,
        uid: c.getUid(),
        device_id: c.getGUID(),
        track_id: s,
        play_type: 0,
        client_os_type: 3,
        app_key: p.appKey
      }
        r = r + '?' + t.param(y)
        var f = new Image
        f.src = r,
    f = null
  }
  function a (o, n, a) {
    var s = o.sound,
           r = (s.id,
        Math.round(e(a)) || 0),
           u = Math.round(i(a)) || 0,
           l = a[0].t || 0,
           d = xm.util.account.getUid(),
           p = {
        started_at: l,
        played_secs: u,
        duration: r
      }
        return s.isLive && (p.played_secs = r),
    s.programId && (p.programid = s.programid),
    s.linkData && !1 === s.linkData.isAuthorized && (p.trial = !0),
    d && (p.uid = d),
    t.param(p)
  }
  function s (t) {
    var e = '',
           i = t.sound,
           o = i.isLive ? i.resourceId : i.id
        return i.activityId && (o = i.activityId),
    e = i.isLive ? 'activity' === i.liveType ? '/liveActivity/web/{id}/play' : '/livePersonal/web/{id}/play' : '/tracks/{id}/play',
    h.playCounter + e.replace('{id}', o)
  }
  function r (t) {
    var e = '',
           i = t.sound,
           o = i.isLive ? i.resourceId : i.id
        return i.activityId && (o = i.activityId),
    e = i.isLive ? 'activity' === i.liveType ? '/liveActivity/web/{id}/played' : '/livePersonal/web/{id}/played' : '/tracks/{id}/played',
    h.playCounter + e.replace('{id}', o)
  }
  function u (e) {
    var i = r(e),
           o = e.sound,
           n = new Image(),
           a = xm.util.account.getUid(),
           s = {}
        o.linkData && !1 === o.linkData.isAuthorized && (s.trial = !0),
    a && (s.uid = a),
    n.src = i + '?' + t.param(s),
    n = null
  }
  function l () {
    this.isFinal = !1
  }
  window.xm = window.xm || {},
  xm.config = xm.config || {}
    var d = {
      NUM_INFO: 0,
      NUM: 1,
      UNCOUNT: 2
    },
       p = {
      counterType: 0,
      appKey: '',
      cloudType: 'wap'
    },
       h = {
      playCounter: xm.config.PLAY_COUNTER_PATH
    },
       c = {
      postPlayCount: function (e) {
        var i = e.sound.id
            t.ajax({
          url: '/nyx/v1/track/count/' + p.cloudType,
          type: 'post',
          data: {
            trackId: i
          }
        })
      },
      postPlayInfo: function (o, n, a) {
        var s = o.sound,
               r = s.id,
               u = Math.round(e(a)) || 0,
               l = Math.round(i(a)) || 0,
               d = a[0].t || 0
            t.ajax({
          url: '/nyx/v1/track/statistic/' + p.cloudType,
          data: {
            breakSecond: l,
            duration: u,
            startedAt: d,
            endedAt: (new Date()).getTime(),
            trackId: r,
            albumId: s.albumId || ''
          },
          timeout: 3e3,
          async: !1,
          type: 'post'
        })
      }
    },
       y = {
      postPlayCount: t.noop,
      postPlayInfo: t.noop
    },
       f = {
      postPlayCount: function (t) {
        y.postPlayCount.call(this, t)
      },
      postPlayInfo: function (t, o, n) {
        var a = t.sound.id,
               s = Math.round(e(n)) || 0,
               r = Math.round(i(n)) || 0,
               u = n[0].t || 0
            y.postPlayInfo.call(this, {
          breakSecond: r,
          duration: s,
          startedAt: u,
          endedAt: (new Date()).getTime(),
          itemId: a
        }, t, o, n)
      }
    }
    l.playUsage = d,
  l.setup = function (e) {
    t.extend(p, e),
    t.extend(h, e.hosts || {}),
    t.extend(y, e.counter)
  }
  ,
  l.prototype.postPlayInfo = function (t, e, i) {
    void 0 !== t.sound.playUsage && t.sound.playUsage !== d.NUM_INFO || (p.counterType === 1 ? n(t, 0, i) : p.counterType === 2 ? c.postPlayInfo(t, e, i) : p.counterType === 3 ? f.postPlayInfo(t, e, i) : o(t, e, i),
      xm.util.console.log('postPlayInfo'))
  }
  ,
  l.prototype.count = function (t) {
    void 0 !== t.sound.playUsage && t.sound.playUsage === d.UNCOUNT || (p.counterType === 2 ? c.postPlayCount(t) : p.counterType === 3 ? f.postPlayCount(t) : u(t),
      xm.util.console.log('__count__'))
  }
  ,
  l.prototype.setIsFinalFlag = function (t) {
    this.isFinal = t
  }
  ,
  xm.XMPlayerCounter = l
}($)),
(function (t) {
  function e (t) {
    if (!t)
      {return "";}
    var e, i, o, n, a, s = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1]
        for (n = (t = t.toString()).length,
      o = 0,
      a = ''; o < n;) {
      do {
        e = s[255 & t.charCodeAt(o++)]
      } while (o < n && e == -1);if (e == -1)
        {break;}
      do {
        i = s[255 & t.charCodeAt(o++)]
      } while (o < n && i == -1);if (i == -1)
        {break;}
      a += String.fromCharCode(e << 2 | (48 & i) >> 4)
            do {
        if ((e = 255 & t.charCodeAt(o++)) == 61)
          {return a;}
        e = s[e]
      } while (o < n && e == -1);if (e == -1)
        {break;}
      a += String.fromCharCode((15 & i) << 4 | (60 & e) >> 2)
            do {
        if ((i = 255 & t.charCodeAt(o++)) == 61)
          {return a;}
        i = s[i]
      } while (o < n && i == -1);if (i == -1)
        {break;}
      a += String.fromCharCode((3 & e) << 6 | i)
    }
    return a
  }
  function i (t, e) {
    for (var i, o = [], n = 0, a = '', s = 0; s < 256; s++)
      {o[s] = s;}
    for (s = 0; s < 256; s++)
      {n = (n + o[s] + t.charCodeAt(s % t.length)) % 256,
            i = o[s],
            o[s] = o[n],
            o[n] = i;}
    for (var r = n = s = 0; r < e.length; r++)
      {s = (s + 1) % 256,
            n = (n + o[s]) % 256,
            i = o[s],
            o[s] = o[n],
            o[n] = i,
            a += String.fromCharCode(e.charCodeAt(r) ^ o[(o[s] + o[n]) % 256]);}
    return a
  }
  function o (t, e) {
    for (var i = [], o = 0; o < t.length; o++) {
      for (var n = 0, n = 'a' <= t[o] && 'z' >= t[o] ? t[o].charCodeAt(0) - 97 : t[o] - 0 + 26, a = 0; a < 36; a++)
        {if (e[a] == n) {
                    n = a;
                    break
                }}
      i[o] = n > 25 ? n - 26 : String.fromCharCode(n + 97)
    }
    return i.join('')
  }
  function n (t) {
    this._randomSeed = t,
    this.cg_hun()
  }
  function a () {}
  n.prototype = {
    cg_hun: function () {
      this._cgStr = '';
      var t = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/\\:._-1234567890',
               e = t.length,
               i = 0
            for (i = 0; i < e; i++) {
        var o = this.ran() * t.length,
                   n = parseInt(o)
                this._cgStr += t.charAt(n),
        t = t.split(t.charAt(n)).join('')
      }
    },
    cg_fun: function (t) {
      var t = t.split('*'),
               e = '',
               i = 0
            for (i = 0; i < t.length - 1; i++)
        {e += this._cgStr.charAt(t[i]);}
      return e
    },
    ran: function () {
      return this._randomSeed = (211 * this._randomSeed + 30031) % 65536,
      this._randomSeed / 65536
    },
    cg_decode: function (t) {
      var e = '',
               i = 0
            for (i = 0; i < t.length; i++) {
        var o = t.charAt(i),
                   n = this._cgStr.indexOf(o);
        n !== -1 && (e += n + '*')
      }
      return e
    }
  },
  window.xm = window.xm || {}
    var s, r = xm.util, u = !1, l = {
    linkProtecterQuery: xm.config.Link_PROTECTER_QUERY + '/mobile/track/pay/{soundId}',
    linkProtecterCDN: xm.config.Link_PROTECTER_CDN
  }
    a.setup = function (e) {
    u = e.isBackend || u,
    t.extend(l, e.hosts || {}),
    'function' === typeof e.getAccountInfo && (s = e.getAccountInfo)
  }
  ,
  a.prototype.query = function (a, d, p, h) {
    var c = l.linkProtecterQuery,
           y = null,
           f = r.env.inIOS || r.env.inAndroid || r.env.inWindowsPhone
        if (s)
      {y = s();}
    else
      {try {
                var m = xm.util.account;
                y = {
                    uid: m.getUid(),
                    token: m.getToken()
                }
            } catch (t) {
                return void console.log("解析用户信息失败")
            }}
    t.ajax({
      url: c.replace('{soundId}', a.id).replace('{businessType}', a.businessType),
      dataType: 'json',
      data: t.extend({
        device: 'pc',
        isBackend: u
      }, y),
      method: 'GET',
      crossDomain: !0,
      cache: !1,
      async: !f || !!h,
      success: function (t) {
        if (a.linkData = t,
          t.ret)
          {p(t);}
        else {
          var s = i(o('dg3utf1k6yxdwi09', [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26]), e(t.ep)).split('-'),
                       r = new n(t.seed).cg_fun(t.fileId),
                       u = s[1],
                       h = s[0],
                       c = s[2],
                       y = s[3],
                       f = t.duration
                    r = '/' === r[0] ? r : '/' + r
                    var m = (t.domain || l.linkProtecterCDN) + '/download/' + t.apiVersion + r + '?sign=' + encodeURIComponent(u) + '&buy_key=' + encodeURIComponent(h) + '&timestamp=' + y + '&token=' + encodeURIComponent(c) + '&duration=' + f
                    a.src = m,
          d(a)
        }
      },
      statusCode: {
        400: function (t) {
          try {
            if (t && t.responseText) {
              var e = JSON.parse(t.responseText)
                            a.linkData = e,
              p(e)
            }
          } catch (t) {}
        },
        403: function (t) {
          try {
            if (t && t.responseText) {
              var e = JSON.parse(t.responseText)
                            a.linkData = e,
              p(e)
            }
          } catch (t) {}
        },
        404: function (t) {
          try {
            if (t && t.responseText) {
              var e = JSON.parse(t.responseText)
                            a.linkData = e,
              p(e)
            }
          } catch (t) {}
        },
        500: function (t) {
          try {
            if (t && t.responseText) {
              var e = JSON.parse(t.responseText)
                            a.linkData = e,
              p(e)
            }
          } catch (t) {}
        }
      }
    })
  }
  ,
  a.prototype.parse = function (t, e) {
    return t
  }
  ,
  xm.XMLinkProtecter = a
}($)),
(function (t) {
  function e (t) {
    for (var e, i, o = t.slice(0), n = o.length; n; e = parseInt(Math.random() * n),
      i = o[--n],
      o[n] = o[e],
      o[e] = i)
      ;
    return o
  }
  function i (e) {
    this.options = t.extend(n, e),
    this.playMode = u.ORDER,
    this.sounds = {},
    this.playlist = [],
    this.preloadSounds = {},
    this.orderPlaylist = [],
    this.playbackRate = n.playbackRate,
    this.audio = new a(this.options),
    this.playerCounter = new s(),
    this.linkProtect = new r(),
    this.bindEvents()
  }
  window.xm = window.xm || {},
  xm.config = xm.config || {}
    var o = xm.util || {},
       n = {
      isBackend: !1,
      preferFlash: !1,
      debugMode: !1,
      breakpoint: !0,
      initLast: !1,
      supportMP3: !0,
      supportMP4: !0,
      supportM3U8: !1,
      playbackRate: 1,
      playbackRates: [1, 2, 3, 4],
      savePlaybackRate: !1,
      querySoundInfo: '/tracks/{soundId}.json',
      parseSoundInfo: function (t) {
        if (t && !1 !== t.res)
          {return t.isPay = t.is_paid,
                t.isFree = t.is_free,
                t.src = t.src || t.play_path_64 || t.play_path_32 || t.play_path,
                t}
      }
    },
       a = xm.XMAudio,
       s = xm.XMPlayerCounter,
       r = xm.XMLinkProtecter,
       u = {
      ORDER: 0,
      LOOP: 1,
      RANDOM: 2
    },
       l = a.PlayState
    i.PlayMode = u,
  i.PlayState = l,
  i.setup = function (e) {
    n = t.extend(n, e)
  }
  ,
  i.prototype.init = function () {
    xm.util.supportsStorage() && (xm.util.env.inIOS || xm.util.env.inAndroid || !this.options.initLast || this.initLast(),
      n.savePlaybackRate && this.initPlaybackRate(),
      this.initVolume(),
      this.initPlayMode())
  }
  ,
  i.prototype.initLast = function () {
    var e = this,
           i = o.localStorage('xm_player_sound') || '{}',
           n = o.localStorage('xm_player_playlist') || '',
           a = o.localStorage('xm_player_sound_position') || 0,
           s = this.audio;
    (i = JSON.parse(i)) && i.id && (n = n.split(','),
      i.position = parseFloat(a),
      this.sounds[i.id] = i,
      this.setPlaylist(n),
      i.isPay ? this.linkProtect.query(i, function (i) {
        s.setSound(i),
        t.event.trigger('soundUsable', [i], e)
      }, function (o) {
        t.event.trigger('soundUnusable', [i, o], e)
      }) : s.setSound(i),
      t.event.trigger('xm_player_initlast', i, this))
  }
  ,
  i.prototype.initPlayMode = function () {
    var t = o.localStorage('xm_player_playmode') || u.ORDER
        t = parseInt(t),
    this.setPlayMode(t)
  }
  ,
  i.prototype.initPlaybackRate = function () {
    var t = o.localStorage('xm_player_playbackRate') || n.playbackRate
        this.setPlaybackRate(parseFloat(t))
  }
  ,
  i.prototype.initVolume = function () {
    var t = o.localStorage('xm_player_volume') || 100,
           e = parseInt(o.localStorage('xm_player_mute')) || 0
        this.setVolume(t),
    e ? this.mute() : this.unmute()
  }
  ,
  i.prototype.play = function (t) {
    var e = this,
           i = this.audio
        t && (!i.sound || i.sound && i.sound.id != t) ? this.select(t, function () {
      e._play()
    }) : this.audio.playState === l.PAUSED ? e._resume() : e._play()
  }
  ,
  i.prototype._play = function () {
    var t = this.audio
        this.playerCounter.count(t),
    t.play(),
    o.localStorage('xm_player_playing_id', window._id),
    this.setPlaybackRate(this.playbackRate)
  }
  ,
  i.prototype._resume = function () {
    this.audio.play(),
    o.localStorage('xm_player_playing_id', window._id)
  }
  ,
  i.prototype.pause = function () {
    this.audio.pause()
  }
  ,
  i.prototype.prev = function () {
    var t = this
        this.selectPrev(function (e) {
      t._play()
    })
  }
  ,
  i.prototype.next = function () {
    var t = this
        this.selectNext(function (e) {
      t._play()
    })
  }
  ,
  i.prototype.stop = function () {
    this.audio.stop()
  }
  ,
  i.prototype.getIndex = function (t) {
    for (var e = this.playlist, i = 0, o = e.length; i < o; i++)
      {if (e[i] == t)
                return i;}
    return -1
  }
  ,
  i.prototype.setSound = function (e) {
    if (e.id) {
      var i = e.id,
               o = this.sounds[i]
            o ? t.extend(o, e) : this.sounds[i] = e
    }
  }
  ,
  i.prototype.getSound = function (e, i, n) {
    var a = this,
           s = this.sounds[e],
           r = this.options.parseSoundInfo,
           u = o.env.inIOS || o.env.inAndroid || o.env.inWindowsPhone
        s && (s.isPay || s.src) ? (s.id = s.id + '',
      i(s)) : t.ajax({
      url: this.options.querySoundInfo.replace('{soundId}', e),
      dataType: 'json',
      crossDomain: !0,
      async: !u || !!n,
      success: function (o) {
        (o = r(o)) ? (o.id = o.id + '',
          o.playUsage = parseInt(o.playUsage) || 0,
          a.setSound(o),
          i(a.sounds[e])) : (t.event.trigger('soundNotExist', [e], a),
          t.event.trigger('soundUnusable', [o, data], a))
      },
      error: function () {
        t.event.trigger('soundUnusable', [e], a)
      }
    })
  }
  ,
  i.prototype.preloadSound = function (e, i, o) {
    var n = this,
           a = this.linkProtect
        i = i || t.noop,
    o = o || t.noop,
    xm.util.env.inWeibo && (this.preloadSounds[e] = !0,
      this.getSound(e, function (e) {
        e.isPay && a.query(e, function (e) {
          n.setSound(e),
          i(e),
          t.event.trigger('soundUsable', [e], n)
        }, function (i) {
          o(e, i),
          t.event.trigger('soundUnusable', [e, i], n)
        }, !0)
      }, !0))
  }
  ,
  i.prototype.isPreloadSound = function (t) {
    return this.preloadSounds[t.id]
  }
  ,
  i.prototype.select = function (e, i) {
    var o = this,
           n = this.linkProtect,
           a = this.audio
        a.sound && a.sound.id == e || (a.stop(),
      this.getSound(e, function (e) {
        e.isPay && !o.isPreloadSound(e) ? n.query(e, function (e) {
          a.setSound(e),
          t.event.trigger('soundUsable', [e], o),
          i(e)
        }, function (i) {
          t.event.trigger('soundUnusable', [e, i], o)
        }) : (a.setSound(e),
          t.event.trigger('soundUsable', [e], o),
          i(e))
      }))
  }
  ,
  i.prototype.selectPrev = function (t) {
    var e = this.audio,
           i = this.getIndex(e.sound.id)
        i = i > 0 ? i - 1 : this.playlist.length - 1
        var o = this.playlist[i]
        this.select(o, t)
  }
  ,
  i.prototype.selectNext = function (t) {
    var e = this.audio,
           i = this.getIndex(e.sound.id)
        i = i < this.playlist.length - 1 ? i + 1 : 0
        var o = this.playlist[i]
        this.select(o, t)
  }
  ,
  i.prototype.seek = function (t) {
    var e = this.audio,
           i = e.sound
        this.isTrial(i) && t > i.linkData.sampleDuration ? e.setPosition(i.linkData.sampleDuration - 5) : e.setPosition(t)
  }
  ,
  i.prototype.seekPlus = function (t) {
    var e = this.audio.getPosition()
        t = t || 1,
    this.seek(e + t)
  }
  ,
  i.prototype.seekMinus = function (t) {
    t = t || -1,
    this.seekPlus(t)
  }
  ,
  i.prototype.setPlayMode = function (i) {
    if (i = parseInt(i),
      this.playMode !== i)
      {if (this.playMode = i,
            o.localStorage("xm_player_playmode", this.playMode),
            t.event.trigger("playModeChange", this.playMode, this),
            this.playMode === u.RANDOM) {
                var n = e(this.playlist)
                  , a = this.audio;
                if (a && a.sound) {
                    var s = a.sound.id
                      , r = t.inArray(s, n)
                      , l = n[0];
                    n[0] = s,
                    n[r] = l
                }
                this.playlist = n
            } else
                this.playMode === u.ORDER ? this.playlist = this.orderPlaylist : this.playMode === u.LOOP && (this.playlist = this.orderPlaylist)}
  }
  ,
  i.prototype.getPlayMode = function () {
    return this.playMode
  }
  ,
  i.prototype.getPlaylist = function () {
    return this.orderPlaylist
  }
  ,
  i.prototype.setPlaylist = function (e) {
    this.playlist = e || [],
    this.orderPlaylist = e || [],
    this.playMode !== u.LOOP && this.setPlayMode(u.ORDER),
    t.event.trigger('playlistChange', [this.playlist], this),
    o.localStorage('xm_player_playlist', this.playlist.join(','))
  }
  ,
  i.prototype.setPlaybackRate = function (t) {
    this.playbackRate = t,
    this.audio.setPlaybackRate(t)
  }
  ,
  i.prototype.getPlaybackRate = function () {
    return this.playbackRate
  }
  ,
  i.prototype.getPlaybackRates = function () {
    return n.playbackRates
  }
  ,
  i.prototype.setVolume = function (t) {
    this.audio.setVolume(t)
  }
  ,
  i.prototype.getVolume = function () {
    return this.audio.getVolume()
  }
  ,
  i.prototype.mute = function () {
    this.audio.mute()
  }
  ,
  i.prototype.unmute = function () {
    this.audio.unmute()
  }
  ,
  i.prototype.getSoundById = function (t) {
    return this.sounds[t]
  }
  ,
  i.prototype.isTrial = function (t) {
    return !!t.isPay && (!!t.linkData && !t.linkData.isAuthorized)
  }
  ,
  i.prototype.bindEvents = function () {
    var e = this,
           i = this.audio,
           n = this.playerCounter
        t.event.add(i, 'playstatechange', function (o, n, a) {
      t.event.trigger('playstatechange', [n, a, i.sound, i], e),
      n !== l.FINISHED && n !== l.STOPED || (e.playerCounter.postPlayInfo(i, n, a),
        !e.isTrial(i.sound)) ? n === l.FINISHED && (e.playMode === u.LOOP ? setTimeout(function () {
          e._play()
        }, 0) : setTimeout(function () {
          e.next()
        }, 0)) : t.event.trigger('soundNeedPay', [i.sound], e)
    }),
    t.event.add(i, 'soundchange', function (i, n) {
      t.event.trigger('soundchange', n, e),
      o.localStorage('xm_player_sound', JSON.stringify(n))
    }),
    t.event.add(i, 'timeupdate', function (n, a) {
      var s = i.sound
            s.position = a,
      t.event.trigger('timeupdate', [a, s, i], e),
      o.localStorage('xm_player_sound_position', a)
      // e.isTrial(s) && a > s.linkData.sampleDuration - 3 && (e.seek(0),
      // setTimeout(function() {
      //     e.stop()
      // }, 200))
    }),
    t.event.add(i, 'loading', function (o, n) {
      var a = 1,
               s = i.sound
            e.isTrial(s) && (a = s.linkData.sampleDuration / s.duration),
      t.event.trigger('loading', [n * a, i.sound, i], e)
    }),
    t.event.add(i, 'ready', function (i) {
      e.init(),
      t.event.trigger('ready', e, e)
    }),
    t.event.add(i, 'playbackRateChange', function (i, n) {
      t.event.trigger('playbackRateChange', n, e),
      o.localStorage('xm_player_playbackRate', n)
    }),
    t.event.add(i, 'volumeChange', function (i, n) {
      t.event.trigger('volumeChange', n, e),
      o.localStorage('xm_player_volume', n)
    }),
    t.event.add(i, 'muteEvent', function (i, n) {
      t.event.trigger('muteEvent', n, e),
      o.localStorage('xm_player_mute', 1)
    }),
    t.event.add(i, 'unmuteEvent', function (i, n) {
      t.event.trigger('unmuteEvent', n, e),
      o.localStorage('xm_player_mute', 0)
    }),
    t.event.add(i, 'onplay', function (i, o) {
      t.event.trigger('onplay', o, e)
    }),
    t.event.add(i, 'onresume', function (i, o) {
      t.event.trigger('onresume', o, e)
    }),
    void 0 !== window.onpagehide ? window.onpagehide = function () {
      n.setIsFinalFlag(!0),
      i.stop()
    }
      : void 0 !== window.onbeforeunload ? window.onbeforeunload = function () {
        n.setIsFinalFlag(!0),
        i.stop()
      }
        : window.onunload = function () {
          n.setIsFinalFlag(!0),
          i.stop()
        }
    ,
    this.checkOnlyId = setInterval(function () {
      var t = o.localStorage('xm_player_playing_id')
            !(t && t != window._id) || xm.util.env.inIOS || xm.util.env.inAndroid || e.stop()
    }, 1e3)
  }
  ,
  i.prototype.release = function () {
    this.audio
        clearInterval(this.checkOnlyId)
  }
  ,
  xm.XMPlayer = i
}($)),
(function (t) {
  function e (e, i) {
    var o = t(e)
        i = i || {},
    this.el = e,
    this.$el = o,
    this.height = o.height(),
    this.width = o.width(),
    this.waveWidth = i.waveWidth || 2,
    this.gap = i.gap || !0,
    this.backgroundColor = i.backgroundColor || '#CCCCCC',
    this.seekColor = i.seekColor || '#AAAAAA',
    this.playColor = i.playColor || '#FF6600',
    this.minHeight = i.minHeight || 4,
    this.data = {},
    this.waves = [],
    this.samples = [],
    n.objs.push(this),
    this.load()
  }
  window.xm = window.xm || {}
    xm.util
    var i = !!document.createElement('canvas').getContext,
       o = {
      GAP: 0,
      BACKGROUND: 1,
      SEEK: 2,
      PLAY: 3
    },
       n = {
      objs: [],
      draw: function (t, e) {
        for (var i = 0, o = this.objs.length; i < o; i++) {
          var n = this.objs[i]
                n.id() == t && n.draw(e)
        }
      }
    }
    e.prototype.initWaves = function () {
    var t = this.width / this.waveWidth,
           e = !1
        this.waves = []
        for (var i = 0; i < t; i++)
      {e ? (this.waves[i] = o.GAP,
            this.gap && (e = !1)) : (this.waves[i] = o.BACKGROUND,
            this.gap && (e = !0))}
  }
  ,
  e.prototype.id = function () {
    return this.$el.attr('sound_uploadid')
  }
  ,
  e.prototype.load = function () {
    var e = this.$el.attr('sound_wave')
        e && t.ajax({
      url: e,
      cache: !0,
      crossDomain: !0,
      dataType: 'jsonp',
      jsonpCallback: '$.noop'
    })
  }
  ,
  e.prototype.initSamples = function (t) {
    this.ratioWidth = this.width / t.width,
    this.ratioHight = this.height / t.height
        var e = parseInt(this.width / this.waveWidth),
           i = t.samples.length / e
        this.samples = []
        for (var o = 0; o < e; o++) {
      for (var n = 0, a = parseInt(i * o); a < i * (o + 1); a++) {
        var s = t.samples[a]
                s > n && (n = s)
      }
      this.samples.push(n)
    }
  }
  ,
  e.prototype.init = function () {
    i ? (this.canvas = document.createElement('canvas'),
      this.context = this.canvas.getContext('2d'),
      this.canvas.width = this.width,
      this.canvas.height = this.height,
      this.$el.html(this.canvas)) : this.$el.html(''),
    this.last = [],
    this.initWaves(),
    this.initSamples(this.data),
    this.render(!0)
  }
  ,
  e.prototype.draw = function (t) {
    this.data = t,
    this.init()
  }
  ,
  e.prototype.renderPlayBar = function (t) {
    for (var e = this.waves, i = Math.ceil(t * e.length), n = 0, a = e.length; n < a; n++) {
      var s = e[n]
            s !== o.GAP && (n < i ? e[n] = o.PLAY : s === o.PLAY && (e[n] = o.SEEK))
    }
    this.render()
  }
  ,
  e.prototype.renderSeekBar = function (t) {
    for (var e = this.waves, i = Math.ceil(t * e.length), n = 0, a = e.length; n < a; n++) {
      var s = e[n]
            s !== o.GAP && (n < i ? s !== o.PLAY && (e[n] = o.SEEK) : e[n] = o.BACKGROUND)
    }
    this.render()
  }
  ,
  e.prototype.render = function (t) {
    for (var e = this.waves, i = this.last, n = this.minHeight, a = this.height, s = 0, r = e.length; s < r; s++) {
      var u = this.waves[s],
               l = this.waveWidth,
               d = s * l,
               p = Math.round(this.samples[s] * this.ratioHight),
               h = a - (p = (p = p < n ? n : p) > a - n ? a - n : p);
      (i[s] !== u || t) && (i[s] = u,
        u === o.BACKGROUND ? this.drawWave(s, d, h, l, p, this.backgroundColor) : u === o.SEEK ? this.drawWave(s, d, h, l, p, this.seekColor) : u === o.PLAY && this.drawWave(s, d, h, l, p, this.playColor))
    }
  }
  ,
  e.prototype.drawWave = function (t, e, o, n, a, s) {
    i ? this.drawWaveByCanvas(e, o, n, a, s) : this.drawWaveByVML(t, e, o, n, a, s)
  }
  ,
  e.prototype.drawWaveByCanvas = function (t, e, i, o, n) {
    var a = this.context
        a.fillStyle = n,
    a.fillRect(t, e, i, o)
  }
  ,
  e.prototype.drawWaveByVML = function (e, i, o, n, a, s) {
    var r = this.$el,
           u = r.find('.wave' + e)
        u.size() ? u.css({
      background: s
    }) : (u = t('<div class="wave' + e + '" style="position: absolute;left:' + i + 'px;top:' + o + 'px;width:' + n + 'px;height:' + a + 'px;background:' + s + '"></div>'),
      r.append(u))
  }
  ,
  xm.XMPlayerWaveView = e,
  window.wave = n
}($)),
(function (t) {
  function e (e, i) {
    var o = t(e)
        this.el = e,
    this.$el = o,
    this.xmPlayer = i,
    this.$btn = o.is(n.btn) ? o : o.find(n.btn),
    this.$progressbar = o.find(n.progressbar),
    this.$seekbar = o.find(n.seekbar),
    this.$playbar = o.find(n.playbar),
    this.$position = o.find(n.position),
    this.$playCount = o.find(n.playCount),
    this.$wavebox = o.find(n.wavebox),
    this.$playbackRate = o.find(n.playbackRate),
    this.$setPlaybackRateBtn = o.find(n.setPlaybackRateBtn),
    this.initWavebox(),
    this.bindEvents(),
    o.data('XMPlayerBaseView', this),
    this.init()
        var a = this.parseSound()
        i.setSound(a),
    a.needPreloadData && i.preloadSound(a.id)
  }
  window.xm = window.xm || {}
    var i = xm.XMPlayer.PlayState,
       o = xm.util,
       n = {
      btn: '.player_btn',
      progressbar: '.player_progressbar',
      seekbar: '.player_seekbar',
      playbar: '.player_playbar',
      position: '.player_position',
      playCount: '.player_playCount',
      wavebox: '.player_wavebox',
      playbackRate: '.player_playbackRate',
      setPlaybackRateBtn: '.player_setPlaybackRateBtn'
    }
    e.PlayState = i,
  e.selecters = n,
  e.setSelecters = function (e) {
    t.extend(n, e)
  }
  ,
  e.setup = function (t) {
    this.setSelecters(t.selecters)
  }
  ,
  e.prototype.parseSound = function () {
    var e = this.$el,
           i = e.attr('sound_id'),
           o = e.attr('sound_src') || e.attr('sound_url'),
           n = e.attr('sound_title'),
           a = e.attr('sound_cover'),
           s = e.attr('sound_album_id'),
           r = e.attr('sound_album_cover'),
           u = e.attr('sound_album_title'),
           l = e.attr('sound_position'),
           d = e.attr('sound_duration'),
           p = e.attr('sound_playusage'),
           h = !!e.attr('sound_has_programlist'),
           c = e.attr('sound_activity_id'),
           y = !!e.attr('sound_is_live'),
           f = e.attr('sound_live_type') || 'activity',
           m = e.attr('sound_program_id'),
           g = e.attr('sound_resource_id'),
           v = e.attr('sound_start_at'),
           P = e.attr('sound_end_at'),
           S = e.attr('sound_is_pay'),
           x = e.attr('sound_business_type'),
           b = JSON.parse(e.attr('sound_custom_data') || '{}'),
           w = !!e.attr('sound_need_preload_data')
        return t.extend({
      id: i + ''
    }, {
      src: o,
      title: n,
      cover: a,
      albumId: s,
      albumTitle: u,
      albumCover: r,
      position: parseInt(l) || 0,
      duration: parseInt(d) || 0,
      playUsage: parseInt(p) || 0,
      isLive: y,
      activityId: c,
      hasProgramList: h,
      programId: m,
      resourceId: g,
      startAt: v,
      endAt: P,
      businessType: parseInt(x) || 14,
      isPay: 'true' == S,
      liveType: f,
      needPreloadData: w
    }, b)
  }
  ,
  e.prototype.initWavebox = function () {
    this.$wavebox.size() && (this.wave = new xm.XMPlayerWaveView(this.$wavebox[0]))
  }
  ,
  e.prototype.init = function () {
    var t = this.$el,
           e = this.xmPlayer
        if (e.audio && e.audio.sound) {
      var i = e.audio.sound,
               o = t.attr('sound_id')
            i && o == i.id && this.renderBtn(e.audio.playState),
      this.rendPlaybackRate()
    }
  }
  ,
  e.prototype.getPlaylist = function () {
    var e = this.$el,
           i = e.attr('sound_id'),
           o = e.closest('[sound_ids]')
        if (o.size())
      {return o.attr("sound_ids").split(",");}
    var n = this.xmPlayer.getPlaylist()
        return t.inArray(i, n) !== -1 ? n : [i]
  }
  ,
  e.prototype.bindEvents = function () {
    var e = this,
           o = this.$el,
           a = this.xmPlayer,
           s = this.$btn
        this.$setPlaybackRateBtn.on('click', function (e) {
      t(this)
            var i, o = a.getPlaybackRates(), n = a.getPlaybackRate() || 1, s = o.indexOf(n)
            i = s === -1 ? o[0] : s >= o.length - 1 ? o[0] : o[s + 1],
      a.setPlaybackRate(i)
    }),
    t.event.add(a, 'playbackRateChange', function (t, i) {
      e.rendPlaybackRate()
    }),
    s.on('click', function (n) {
      t(this)
            var s = o.attr('sound_id')
            return o.is('.is-playing') || o.is('.is-loading') ? 'stop' === o.attr('sound_switch_method') ? a.stop() : a.pause() : (e.renderBtn(i.LOADING),
        a.setPlaylist(e.getPlaylist()),
        window.ya && ya.audio && ya.audio.pause(),
        a.play(s)),
      !1
    }),
    o.on('click', n.progressbar, function (t) {
      var i = o.attr('sound_id')
            if (o.is('.is-playing') || o.is('.is-loading')) {
        var n = e.$progressbar,
                   s = a.getSoundById(i),
                   r = n.offset().left,
                   u = n.width(),
                   l = (t.clientX - r) / u,
                   d = s.duration * l
                a.seek(d)
      } else
        {a.setPlaylist(e.getPlaylist()),
                a.play(i);}
      return !1
    }),
    t.event.add(a, 'loading', function (t, i, n) {
      o.attr('sound_id') == n.id && (e.rendSeekbar(i),
        e.wave && e.wave.renderSeekBar(i))
    }),
    t.event.add(a, 'timeupdate', function (t, i, n, a) {
      if (o.attr('sound_id') == n.id) {
        e.rendPlaybar(i, n, a),
        e.rendPostion(i, n, a)
                var s = i / n.duration
                e.wave && e.wave.renderPlayBar(s),
        o.trigger('timeupdate', [n, i])
      }
    }),
    t.event.add(a, 'onplay', function (t, i) {
      o.attr('sound_id') == i.id && (e.rendPlayCount(i),
        o.trigger('onPlay', [i]),
        o.trigger('onplay', [i]))
    }),
    t.event.add(a, 'onresume', function (t, e) {
      o.attr('sound_id') == e.id && o.trigger('onresume', [e])
    }),
    t.event.add(a, 'soundNeedPay', function (t, e) {
      o.attr('sound_id') == e.id && (o.addClass('is-soundNeedPay'),
        o.trigger('soundNeedPay', [e]))
    }),
    t.event.add(a, 'playstatechange', function (t, n, a, s) {
      o.attr('sound_id') == s.id && (e.renderBtn(n),
        o.trigger('playstatechange', [s, n]),
        n === i.PLAYING ? o.trigger('onplaying', [s]) : n === i.PAUSED ? o.trigger('onpause', [s]) : n === i.LOADING ? o.trigger('onloading', [s]) : n === i.LOADERROR ? o.trigger('onerror', [s]) : o.trigger('onready', [s]))
    }),
    t.event.add(a, 'soundUnusable', function (t, n, a) {
      o.attr('sound_id') == n.id && (o.addClass('is-disabled'),
        s.attr('title', '声音无法播放'),
        e.renderBtn(i.READY),
        o.trigger('soundUnusable', [n]))
    }),
    t.event.add(a, 'soundUsable', function (t, e, i) {
      o.attr('sound_id') == e.id && (o.removeClass('is-disabled'),
        o.trigger('soundUsable', [e]))
    })
  }
  ,
  e.prototype.unbindEvents = function () {
    var e = this.xmPlayer
        t.event.remove(e),
    this.$el.off('click')
  }
  ,
  e.prototype.release = function () {
    this.unbindEvents()
  }
  ,
  e.prototype.rendPlaybackRate = function () {
    var t = this.$playbackRate
        t.size() && t.text(this.xmPlayer.getPlaybackRate())
  }
  ,
  e.prototype.rendSeekbar = function (t) {
    var e = this.$seekbar
        if (e.size()) {
      var i = t > 1 ? 1 : t
            e.css('width', 100 * i + '%')
    }
  }
  ,
  e.prototype.rendPostion = function (t, e, i) {
    var n = this.$position
        n.size() && n.text(o.Time.stringify(t, 'h:mm:ss', 'mm:ss'))
  }
  ,
  e.prototype.rendPlaybar = function (t, e, i) {
    var o = this.$playbar
        if (o.size()) {
      var n = t / e.duration
            n = n > 1 ? 1 : n,
      o.css('width', 100 * n + '%')
    }
  }
  ,
  e.prototype.rendPlayCount = function (t) {
    var e = this.$playCount
        if (e.size()) {
      var i = e.eq(0).text()
            if (i.indexOf('万') > 0)
        {return;}
      i = parseInt(i, 10) + 1
            var o = e.text().replace(/\d*/, i)
            e.text(o).attr('title', i + '次播放'),
      t.playCount = i
    }
  }
  ,
  e.prototype.renderBtn = function (t) {
    var e = this.$btn,
           o = this.$el
        e.size() && (t === i.LOADERROR ? (o.addClass('is-error').removeClass('is-playing is-loading is-paused is-ready'),
      e.attr('title', '声音无法播放')) : t === i.LOADING ? (o.addClass('is-loading').removeClass('is-ready is-playing is-paused is-error'),
      e.attr('title', '加载中')) : t === i.PLAYING ? (o.addClass('is-playing').removeClass('is-ready is-loading is-paused is-error'),
      e.attr('title', '暂停')) : t === i.PAUSED ? (o.addClass('is-paused').removeClass('is-playing is-loading is-ready is-error'),
      e.attr('title', '播放')) : (o.addClass('is-ready').removeClass('is-playing is-loading is-paused is-error'),
      e.attr('title', '播放')))
  }
  ,
  xm.XMPlayerBaseView = e
}($)),
(function (t) {
  function e (e, i) {
    var o = t(e)
        this.el = e,
    this.$el = o,
    this.$soundIds = o.closest('[sound_ids]'),
    this.xmPlayer = i,
    this.bindEvents(),
    this.base = o.data('XMPlayerBaseView'),
    o.data('XMPlayerFollowView', this),
    this.init()
  }
  window.xm = window.xm || {},
  xm.config = xm.config || {}
    var i = xm.util,
       o = xm.XMPlayer.PlayState,
       n = '.player_',
       a = {
      soundWave: xm.config.FDFS_PATH
    },
       s = {
      duration: function (t, e, o) {
        t.text(i.Time.stringify(o.duration || 0, 'h:mm:ss', 'mm:ss'))
      },
      album: function (t, e, i) {
        var o = 'http://' + location.host + '/' + i.uid + '/album/' + (i.albumId || i.album_id)
            t.text(i.albumTitle || i.album_title).attr('href', o)
      },
      sound: function (t, e, i) {
        var o = 'http://' + location.host + '/' + i.uid + '/sound/' + i.id
            t.text(i.title).attr('href', o)
      },
      user: function (t, e, i) {
        var o = 'http://' + location.host + '/zhubo/' + i.uid + '/';
        t.text(i.nickname).attr('href', o)
      },
      albumCover: function (t, e, i) {
        var o = t.parent(),
               n = 'http://' + location.host + '/' + i.uid + '/album/' + (i.albumId || i.album_id)
            t.attr('src', i.albumCover),
        o.is('a') && o.attr('href', n)
      },
      soundCover: function (t, e, i) {
        var o = t.parent(),
               n = 'http://' + location.host + '/zhubo/' + i.uid + '/';
        t.attr('src', i.cover || i.cover_url_142 || i.cover_url),
        o.is('a') && o.attr('href', n)
      },
      likeBtn: function (t, e, i) {
        i.isFavorited || i.is_favorited ? (t.addClass('is-sound-liked'),
          t.attr('title', '取消喜欢')) : (t.removeClass('is-sound-liked'),
          t.attr('title', '喜欢'))
      },
      forwordCount: function (t, e, i) {
        t.text(i.sharesCount || i.shares_count || 0)
      },
      commentCount: function (t, e, i) {
        t.text(i.commentsCount || i.comments_count || 0)
      },
      likeCount: function (t, e, i) {
        t.text(i.favoritesCount || i.favorites_count || 0)
      },
      playCount: function (t, e, i) {
        t.text(i.playCount || i.play_count || 0)
      },
      wavebox: function (t, e, i) {
        t.attr('sound_uploadid', i.uploadId || i.upload_id),
        t.attr('sound_wave', a.soundWave + '/' + i.waveform),
        this.base.wave.load()
      }
    }
    e.PlayState = o,
  e.setup = function (e) {
    t.extend(a, e.hosts || {}),
    t.extend(s, e.rules || {}),
    n = e.subElementPrefix || n
  }
  ,
  e.prototype.init = function () {
    var e = this.$el,
           i = this.xmPlayer
        if (i.audio && i.audio.sound) {
      var o = i.audio.sound,
               n = (e.attr('sound_id'),
          this.$soundIds.attr('sound_ids')),
               a = n ? n.split(',') : []
            o && t.inArray(o.id, a) >= 0 && this.rend(o)
    }
    this.base.init()
  }
  ,
  e.prototype.bindEvents = function () {
    var e = this,
           i = (this.$el,
        this.xmPlayer)
        t.event.add(i, 'soundchange', function (i, o) {
      if (e.$soundIds.size()) {
        var n = e.$soundIds.attr('sound_ids').split(',')
                if (t.inArray(o.id, n) === -1)
          {return}
      }
      e.rend(o)
    })
  }
  ,
  e.prototype.unbindEvents = function () {
    var e = this.xmPlayer
        t.event.remove(e, 'soundchange')
  }
  ,
  e.prototype.release = function () {
    this.unbindEvents()
  }
  ,
  e.prototype.rend = function (t) {
    var e = this.$el
        this.addAttrs(e, t),
    e.removeClass('is-soundNeedPay'),
    e.removeClass('is-disabled')
        for (var i in s) {
      var o = e.find(n + i)
            o.size() && s[i].call(this, o, e, t)
    }
  }
  ,
  e.prototype.addAttrs = function (t, e) {
    t.attr('sound_id', e.id),
    void 0 !== e.isLive ? t.attr('sound_is_live', e.isLive) : t.removeAttr('sound_is_live'),
    void 0 !== e.hasProgramList ? t.attr('sound_has_programlist', e.hasProgramList) : t.removeAttr('sound_has_programlist'),
    void 0 !== e.activityId ? t.attr('sound_activity_id', e.activityId) : t.removeAttr('sound_activity_id'),
    void 0 !== e.programId ? t.attr('sound_program_id', e.programId) : t.removeAttr('sound_program_id'),
    void 0 !== e.resourceId ? t.attr('sound_resource_id', e.resourceId) : t.removeAttr('sound_resource_id'),
    void 0 !== e.startAt ? t.attr('sound_start_at', e.startAt) : t.removeAttr('sound_start_at'),
    void 0 !== e.startEnd ? t.attr('sound_end_at', e.startEnd) : t.removeAttr('sound_end_at')
  }
  ,
  xm.XMPlayerFollowView = e
}($)),
(function (t) {
  function e (e, i, o) {
    var n = t(e)
        this.el = e,
    this.$el = n,
    this.xmPlayer = i,
    this.$prevBtn = n.find(a.prevBtn),
    this.$nextBtn = n.find(a.nextBtn),
    this.$modeBtn = n.find(a.modeBtn),
    this.$soundIds = n.closest('[sound_ids]'),
    this.bindEvents(),
    n.data('XMPlayerGrobalView', this)
  }
  window.xm = window.xm || {}
    xm.util
    var i = xm.XMPlayer,
       o = i.PlayState,
       n = i.PlayMode,
       a = {
      prevBtn: '.player_prevBtn',
      nextBtn: '.player_nextBtn',
      modeBtn: '.player_modeBtn'
    }
    e.PlayState = o,
  e.PlayMode = n,
  e.setSelecters = function (e) {
    t.extend(a, e)
  }
  ,
  e.setup = function (t) {
    this.setSelecters(t.selecters)
  }
  ,
  e.prototype.bindEvents = function () {
    var e = this,
           i = this.$el,
           o = this.xmPlayer
        i.on('click', a.modeBtn, function (e) {
      var i = t(this),
               a = n.ORDER
            i.is('.orderplayBtn') ? a = n.LOOP : i.is('.loopplayBtn') ? a = n.RANDOM : i.is('.randomplayBtn') && (a = n.ORDER),
      o.setPlayMode(a)
    }),
    i.on('click', a.prevBtn + ':not(.disabled)', function (t) {
      o.prev()
    }),
    i.on('click', a.nextBtn + ':not(.disabled)', function (t) {
      o.next()
    }),
    t.event.add(o, 'playModeChange', function (t, i) {
      e.$modeBtn.size() && e.renderPlayModeBtn(i)
    }),
    t.event.add(o, 'playlistChange', function (t, i) {
      e.$soundIds.attr('sound_ids', i)
    })
  }
  ,
  e.prototype.unbindEvents = function () {
    var e = this.xmPlayer
        t.event.remove(e, 'soundchange'),
    this.$el.off('click')
  }
  ,
  e.prototype.release = function () {
    this.unbindEvents()
  }
  ,
  e.prototype.renderPlayModeBtn = function (t) {
    var e = this.$modeBtn,
           i = '',
           o = '';
    e.removeClass('loopplayBtn').removeClass('randomplayBtn').removeClass('orderplayBtn'),
    t === n.ORDER ? (i = 'orderplayBtn',
      o = '顺序播放') : t === n.LOOP ? (i = 'loopplayBtn',
      o = '单曲循环') : t === n.RANDOM && (i = 'randomplayBtn',
      o = '随机播放'),
    e.attr('title', o).addClass(i)
  }
  ,
  xm.XMPlayerGrobalView = e
}($)),
(function (t) {
  function e (e, o, n) {
    var a = t(e)
        n = n || {},
    this.isLandscape = n.isLandscape || !1,
    this.el = e,
    this.$el = a,
    this.xmPlayer = o,
    this.$bar = a.find(i.bar),
    this.$volume = a.find(i.volume),
    this.$muteBtn = a.find(i.muteBtn),
    this.bindEvents()
  }
  window.xm = window.xm || {}
    xm.player,
  t(document)
    var i = {
    muteBtn: '.volumePanel_muteBtn',
    bar: '.volumePanel_bar',
    volume: '.volumePanel_volumebar'
  }
    e.setSelecters = function (e) {
    t.extend(i, e)
  }
  ,
  e.setup = function (t) {
    this.setSelecters(t.selecters)
  }
  ,
  e.prototype.renderVolume = function (t) {
    this.$el,
    this.$muteBtn
        var e = this.$volume,
           i = 100 * t
        this.isLandscape ? e.css('width', i + '%') : e.css('height', i + '%')
  }
  ,
  e.prototype.renderMuteBtn = function (t) {
    t ? (this.$el.addClass('is-mute'),
      this.$muteBtn.attr('title', '取消静音')) : (this.$el.removeClass('is-mute'),
      this.$muteBtn.attr('title', '静音'))
  }
  ,
  e.prototype.calculateInLandscape = function (t) {
    var e = this.$bar,
           i = e.offset().left,
           o = e.width(),
           n = t.pageX - i,
           a = n / o
        return !(n < 0 || n > o) && (n >= o - 3 && (a = 1),
      n <= 3 && (a = 0),
      a)
  }
  ,
  e.prototype.calculateInPortrait = function (t) {
    var e = this.$bar,
           i = e.offset().top,
           o = e.height(),
           n = t.pageY - i,
           a = (o - n) / o
        return !(n < 0 || n > o) && (n <= 3 && (a = 1),
      n >= o - 3 && (a = 0),
      a)
  }
  ,
  e.prototype.bindEvents = function () {
    var e = this,
           o = this.$el,
           n = this.xmPlayer
        o.on('click', i.muteBtn, function () {
      o.is('.is-mute') ? n.unmute() : n.mute()
    }),
    o.on('click', i.bar, function (t) {
      var i = 1
            i = e.isLandscape ? e.calculateInLandscape(t) : e.calculateInPortrait(t),
      n.setVolume(i)
    }),
    t.event.add(n, 'volumeChange', function (t, i) {
      e.renderVolume(i)
    }),
    t.event.add(n, 'muteEvent', function (t, i) {
      e.renderMuteBtn(!0)
    }),
    t.event.add(n, 'unmuteEvent', function (t, i) {
      e.renderMuteBtn(!1)
    })
  }
  ,
  xm.XMPlayerVolumeView = e
}($)),
(function (t) {
  function e () {}
  window.xm = window.xm || {}
    var i = {
    followPlayer: '.followPlayer',
    grobalPlayer: '.grobalPlayer',
    volumePanel: '.volumePanel'
  }
    e.setup = function (t) {
    t = t || {},
    xm.XMPlayerBaseView && xm.XMPlayerBaseView.setup(t),
    xm.XMPlayerFollowView && xm.XMPlayerFollowView.setup(t),
    xm.XMPlayerGrobalView && xm.XMPlayerGrobalView.setup(t),
    xm.XMPlayerVolumeView && xm.XMPlayerVolumeView.setup(t),
    xm.XMPlayerCounter && xm.XMPlayerCounter.setup(t),
    xm.XMLinkProtecter && xm.XMLinkProtecter.setup(t)
  }
  ,
  t.fn.xmPlayer = function (e) {
    var o = this
        e || (xm.xmPlayer = xm.xmPlayer || new xm.XMPlayer(),
      e = xm.xmPlayer),
    xm.xmPlayer = xm.xmPlayer || e,
    o.each(function () {
      var o = this,
               n = t(this)
            n.data('is-xmBasePlayer-binded') || (n.data('is-xmBasePlayer-binded', !0),
        new xm.XMPlayerBaseView(o, e)),
      !n.data('is-xmFollowPlayer-binded') && n.is(i.followPlayer) && (n.data('is-xmFollowPlayer-binded', !0),
        new xm.XMPlayerFollowView(o, e)),
      !n.data('is-xmGrobalPlayer-binded') && n.is(i.grobalPlayer) && (n.data('is-xmGrobalPlayer-binded', !0),
        new xm.XMPlayerGrobalView(o, e))
    })
  }
  ,
  t.fn.xmPlayerVolume = function (e) {
    var o = this
        e || (xm.xmPlayer = xm.xmPlayer || new xm.XMPlayer(),
      e = xm.xmPlayer),
    xm.xmPlayer = xm.xmPlayer || e,
    o.each(function () {
      var o = this,
               n = t(this)
            !n.data('is-xmPlayerVolume-binded') && n.is(i.volumePanel) && (n.data('is-xmPlayerVolume-binded', !0),
        n.is('.volumePanel-isLandscape') ? new xm.XMPlayerVolumeView(o, e, {
          isLandscape: !0
        }) : new xm.XMPlayerVolumeView(o, e))
    })
  }
  ,
  xm.XMPlayerView = e
}($))

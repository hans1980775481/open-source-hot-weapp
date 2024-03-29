"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames4 = _interopRequireDefault(require("../helpers/classNames")),
  _gestures = require("../helpers/gestures");
function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
    default:
      t
  }
}
function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _nonIterableRest()
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance")
}
function _iterableToArrayLimit(t, e) {
  var i = [],
    n = !0,
    s = !1,
    o = void 0;
  try {
    for (var a, r = t[Symbol.iterator](); !(n = (a = r.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
  } catch (t) {
    s = !0,
      o = t
  } finally {
    try {
      n || null == r.
        return || r.
          return()
    } finally {
      if (s) throw o
    }
  }
  return i
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t
}
function _defineProperty(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = i,
    t
} (0, _baseComponent.
  default)({
    relations:
    {
      "../swipe-action-group/index":
      {
        type:
          "ancestor"
      }
    },
    properties: {
      prefixCls: {
        type: String,
        value: "wux-swipe"
      },
      autoClose: {
        type: Boolean,
        value: !1
      },
      disabled: {
        type: Boolean,
        value: !1
      },
      left: {
        type: Array,
        value: [],
        observer: "updateBtns"
      },
      right: {
        type: Array,
        value: [],
        observer: "updateBtns"
      },
      useSlots: {
        type: Boolean,
        value: !1
      }
    },
    data: {
      index: 0,
      swiping: !1,
      showCover: !1,
      offsetStyle: ""
    },
    computed: {
      classes: ["prefixCls, swiping",
        function (t, e) {
          return {
            wrap: (0, _classNames4.
              default)(t, _defineProperty({},
                "".concat(t, "--swiping"), e)),
            cover: "".concat(t, "__cover"),
            left: (0, _classNames4.
              default)("".concat(t, "__actions"), _defineProperty({},
                "".concat(t, "__actions--left"), !0)),
            right: (0, _classNames4.
              default)("".concat(t, "__actions"), _defineProperty({},
                "".concat(t, "__actions--right"), !0)),
            action: "".concat(t, "__action"),
            text: "".concat(t, "__text"),
            content: "".concat(t, "__content")
          }
        }]
    },
    methods: {
      updated: function (t) {
        this.data.index !== t && this.setData({
          index: t
        })
      },
      onCloseSwipe: function () {
        var t = this.getRelationNodes("../swipe-action-group/index")[0];
        t && t.onCloseSwipe(this.data.index)
      },
      getContentEasing: function (t, e) {
        var i = Math.abs(t) - Math.abs(e),
          n = 0 < e ? 1 : -1;
        return 0 < i ? (t = e + Math.pow(i, .85) * n, Math.abs(t) > Math.abs(e) ? e : t) : t
      },
      setStyle: function (t) {
        var e = 0 < t ? this.btnsLeftWidth : -this.btnsRightWidth,
          i = this.getContentEasing(t, e),
          n = "left: ".concat(i, "px"),
          s = 0 < Math.abs(t);
        this.data.offsetStyle === n && this.data.showCover === s || this.setData({
          offsetStyle: n,
          showCover: s
        })
      },
      updateBtns: function () {
        var s = this,
          t = this.data.prefixCls,
          e = wx.createSelectorQuery().in(this);
        e.select(".".concat(t, "__actions--left")).boundingClientRect(),
          e.select(".".concat(t, "__actions--right")).boundingClientRect(),
          e.exec(function (t) {
            var e = _slicedToArray(t, 2),
              i = e[0],
              n = e[1];
            s.btnsLeftWidth = i ? i.width : 0,
              s.btnsRightWidth = n ? n.width : 0
          })
      },
      onTap: function (t) {
        var e = t.currentTarget.dataset,
          i = e.index,
          n = e.value,
          s = e.type,
          o = {
            index: i,
            value: n,
            type: s,
            buttons: this.data[s]
          };
        this.data.autoClose && this.onClose(),
          this.triggerEvent("click", o)
      },
      onAcitons: function () {
        this.data.autoClose && this.onClose()
      },
      onOpen: function (t, e, i) {
        this.openedLeft || this.openedRight || this.triggerEvent("open"),
          this.openedLeft = e,
          this.openedRight = i,
          this.setStyle(t)
      },
      onClose: function () {
      (this.openedLeft || this.openedRight) && this.triggerEvent("close"),
        this.openedLeft = !1,
        this.openedRight = !1,
        this.setStyle(0)
      },
      onOpenLeft: function () {
        this.onOpen(this.btnsLeftWidth, !0, !1)
      },
      onOpenRight: function () {
        this.onOpen(- this.btnsRightWidth, !0, !1)
      },
      onTouchStart: function (t) {
        this.data.disabled || 1 < (0, _gestures.getPointsNumber)(t) || (this.start = (0, _gestures.getTouchPoints)(t), this.onCloseSwipe())
      },
      onTouchMove: function (t) {
        if (!(this.data.disabled || 1 < (0, _gestures.getPointsNumber)(t))) {
          this.move = (0, _gestures.getTouchPoints)(t);
          var e = this.move.x - this.start.x,
            i = (0, _gestures.getSwipeDirection)(this.start.x, this.move.x, this.start.y, this.move.y),
            n = "Left" === i,
            s = "Right" === i;
          if (n || s) {
            var o = this.data,
              a = o.left,
              r = o.right,
              h = o.useSlots;
            this.needShowRight = n && (h || 0 < r.length),
              this.needShowLeft = s && (h || 0 < a.length),
              (this.needShowLeft || this.needShowRight) && (this.swiping = !0, this.setData({
                swiping: !0
              }), this.setStyle(e))
          }
        }
      },
      onTouchEnd: function (t) {
        if (!(this.data.disabled || 1 < (0, _gestures.getPointsNumber)(t)) && this.swiping) {
          this.end = (0, _gestures.getTouchPoints)(t);
          var e = this.end.x - this.start.x,
            i = this.needShowRight && Math.abs(e) > this.btnsRightWidth / 2,
            n = this.needShowLeft && Math.abs(e) > this.btnsLeftWidth / 2;
          i ? this.onOpenRight() : n ? this.onOpenLeft() : this.onClose(),
            this.swiping = !1,
            this.setData({
              swiping: !1
            }),
            this.needShowLeft = !1,
            this.needShowRight = !1
        }
      },
      noop: function () { }
    },
    created: function () {
      this.btnsLeftWidth = 0,
        this.btnsRightWidth = 0,
        this.openedLeft = !1,
        this.openedRight = !1,
        this.needShowLeft = !1,
        this.needShowRight = !1
    },
    ready: function () {
      this.updateBtns()
    }
  });
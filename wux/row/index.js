"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames = _interopRequireDefault(require("../helpers/classNames"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default:
      e
  }
} (0, _baseComponent.
  default)({
    relations:
    {
      "../col/index":
      {
        type:
          "child",
        observer: function () {
          this.updateStyle()
        }
      }
    },
    properties: {
      prefixCls: {
        type: String,
        value: "wux-row"
      },
      gutter: {
        value: 0,
        type: Number,
        observer: "updateStyle"
      }
    },
    data: {
      rowStyle: ""
    },
    computed: {
      classes: ["prefixCls",
        function (e) {
          return {
            wrap: (0, _classNames.
              default)(e)
          }
        }]
    },
    methods: {
      updateStyle: function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : this.data.gutter,
          a = this.getRelationNodes("../col/index"),
          r = 0 < t ? "margin-left: ".concat(t / -2, "px; margin-right: ").concat(t / -2, "px") : "",
          n = 0 < t ? "padding-left: ".concat(t / 2, "px; padding-right: ").concat(t / 2, "px") : "";
        0 < a.length && a.forEach(function (e) {
          e.updateStyle(n)
        }),
          this.setData({
            rowStyle: r
          })
      }
    }
  });
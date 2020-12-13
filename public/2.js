(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Check.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Check.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      check: {
        test1: null,
        test2: null,
        test3: null,
        test4: null,
        test5: null
      },
      soal: {
        test1: "Melakukan Kontak dengan orang yang positif Covid-19",
        test2: "Berpergian/Tingal dikota  yang menjadi transmisi lokal virus Corona",
        test3: "Apa anda sedang mengalami demam?",
        test4: "Apakah anda sedang Batuk Filek?",
        test5: "Apakah anda mengalami sesak nafas"
      }
    };
  },
  methods: {
    trueAnswer: function trueAnswer(id) {
      if (id == 1) this.check.test1 = true;
      if (id == 2) this.check.test2 = true;
      if (id == 3) this.check.test3 = true;
      if (id == 4) this.check.test4 = true;
      if (id == 5) this.check.test5 = true;
      if (id < 5) this.$router.push('../check/' + ++id);else this.$router.push('../check/done');
    },
    falseAnswer: function falseAnswer(id) {
      if (id == 1) this.check.test1 = false;
      if (id == 2) this.check.test2 = false;
      if (id == 3) this.check.test3 = false;
      if (id == 4) this.check.test4 = false;
      if (id == 5) this.check.test5 = false;
      if (id < 5) this.$router.push('../check/' + ++id);else this.$router.push('../check/done');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Check.vue?vue&type=template&id=8cb22d62&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Check.vue?vue&type=template&id=8cb22d62& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "nav",
      {
        staticClass:
          "navbar bg-success text-white d-flex justify-content-center"
      },
      [_vm._v("Creatify")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "card mt-5" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header bg-success text-white d-flex justify-content-center"
          },
          [
            !_vm.$route.params.id
              ? _c("h3", [_vm._v("Test Yuk !!")])
              : _c("h3", [_vm._v("Cek Kesehatan")])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "card-body d-flex justify-content-center flex-column align-items-center py-5"
          },
          [
            !_vm.$route.params.id
              ? _c("div", [
                  _c("div", [_vm._v("Periksa Kesehatanmu Secara Mandiri")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-3" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { to: "/home" }
                        },
                        [_vm._v("Kembali")]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success",
                          attrs: { to: "/check/1" }
                        },
                        [_vm._v("Cek Kesehatan")]
                      )
                    ],
                    1
                  )
                ])
              : _c("div", [
                  _vm.$route.params.id <= 5
                    ? _c("span", { staticClass: "text-success mb-3" }, [
                        _vm._v(
                          "\n                      soal ke " +
                            _vm._s(_vm.$route.params.id) +
                            " dari 5 soal\n                  "
                        )
                      ])
                    : _c("div", [
                        _c("p", [
                          _vm._v(
                            "\n                          Anda Kemungkinan terpapar virus Corona                            \n                      "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Penanganan Mandiri :")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("1. Isolasi Mandiri")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("2. Gunakan Masker")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("3. Makan makanan bergizi")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex justify-content-center" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-secondary",
                                attrs: { to: "/home" }
                              },
                              [_vm._v("Kembali")]
                            )
                          ],
                          1
                        )
                      ]),
                  _vm._v(" "),
                  _vm.$route.params.id == 1
                    ? _c("p", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.soal.test1) +
                            "\n                  "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.params.id == 2
                    ? _c("p", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.soal.test2) +
                            "\n                  "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.params.id == 3
                    ? _c("p", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.soal.test3) +
                            "\n                  "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.params.id == 4
                    ? _c("p", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.soal.test4) +
                            "\n                  "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.params.id == 5
                    ? _c("p", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.soal.test5) +
                            "\n                  "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div"),
                  _vm._v(" "),
                  _vm.$route.params.id <= 5
                    ? _c("span", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                return _vm.trueAnswer(_vm.$route.params.id)
                              }
                            }
                          },
                          [_vm._v("Ya")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.falseAnswer(_vm.$route.params.id)
                              }
                            }
                          },
                          [_vm._v("Tidak")]
                        )
                      ])
                    : _vm._e()
                ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/pages/Check.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Check.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Check_vue_vue_type_template_id_8cb22d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Check.vue?vue&type=template&id=8cb22d62& */ "./resources/js/pages/Check.vue?vue&type=template&id=8cb22d62&");
/* harmony import */ var _Check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Check.vue?vue&type=script&lang=js& */ "./resources/js/pages/Check.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Check_vue_vue_type_template_id_8cb22d62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Check_vue_vue_type_template_id_8cb22d62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Check.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Check.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Check.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Check.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Check.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Check.vue?vue&type=template&id=8cb22d62&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Check.vue?vue&type=template&id=8cb22d62& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Check_vue_vue_type_template_id_8cb22d62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Check.vue?vue&type=template&id=8cb22d62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Check.vue?vue&type=template&id=8cb22d62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Check_vue_vue_type_template_id_8cb22d62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Check_vue_vue_type_template_id_8cb22d62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
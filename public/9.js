(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    activeNav: function activeNav() {
      $('.navbar__list').css({
        width: '70%'
      });
    },
    closeNav: function closeNav() {
      $('.navbar__list').css({
        width: 0
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Berita.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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
      paginate: {
        data_berita: [],
        links: []
      }
    };
  },
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    // insialisasi awal data
    paginasiLink: function paginasiLink() {
      var _this = this;

      axios.get('/api/news').then(function (response) {
        _this.paginate.links = response.data.links;
        _this.paginate.data_berita = response.data.data;
        console.log(_this.paginate.data_berita);
      });
    },
    // link yang di click selanjutnya pada paginate
    nextLink: function nextLink(url) {
      var _this2 = this;

      axios.get(url).then(function (response) {
        _this2.paginate.links = response.data.links;
        _this2.paginate.data_berita = response.data.data;
        console.log(_this2.paginate.data_berita);
      });
    }
  },
  created: function created() {
    this.paginasiLink();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-5ffdc4f0] {\n  padding-top: 50px;\n}\n.container .pageTitle[data-v-5ffdc4f0] {\n  font-weight: bold;\n  font-size: 1.8em;\n}\n.container form[data-v-5ffdc4f0] {\n  margin-bottom: 23px;\n  padding-right: 30px;\n}\n.container form input[data-v-5ffdc4f0] {\n  margin-left: 740px;\n  padding-right: 0px;\n}\n.container form input h3[data-v-5ffdc4f0] {\n  font-weight: bold;\n  font-size: 1.7em;\n  display: inline;\n}\n.card[data-v-5ffdc4f0] {\n  box-shadow: 0 4px 8px 0 rgba(19, 58, 77, 0.171);\n  background: #c4f8de;\n  border-radius: 5px;\n  padding: 20px;\n  margin-top: 20px;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 30px;\n}\n#containerBerita[data-v-5ffdc4f0] {\n  overflow: auto;\n  margin: 0px;\n  padding: 0px;\n  height: 500px;\n  margin-bottom: 3rem;\n}\n#containerBerita .flex-row[data-v-5ffdc4f0] {\n  display: flex;\n  flex-direction: row;\n}\n#containerBerita .flex-row .boxBerita[data-v-5ffdc4f0] {\n  background-color: #fff;\n  margin-top: 27px;\n  padding-bottom: 20px;\n  box-shadow: 0px 2px 3px #928e99;\n  border-radius: 5px;\n  margin-left: 0px;\n  margin-right: 59px;\n  cursor: pointer;\n}\n#containerBerita .flex-row .boxBerita .headerCB[data-v-5ffdc4f0] {\n  background: #0c9636;\n  padding-left: 15px;\n  color: whitesmoke;\n  border-radius: 6px;\n}\n#containerBerita .flex-row .boxBerita .headerCB p[data-v-5ffdc4f0] {\n  padding-left: 10px;\n  font-size: 17px;\n  font-weight: bold;\n  padding-bottom: 0px;\n  margin-top: 0px;\n}\n#containerBerita .flex-row .boxBerita .imgBerita[data-v-5ffdc4f0] {\n  background: #d3e2d8;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n#containerBerita .flex-row .boxBerita img[data-v-5ffdc4f0] {\n  width: 300px;\n  margin-top: 0;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 17px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 4px;\n}\n#containerBerita .flex-row .boxBerita .headLineBerita[data-v-5ffdc4f0] {\n  font-weight: 400;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n}\n#containerBerita .flex-row .boxBerita .headLineBerita h5[data-v-5ffdc4f0] {\n  font-weight: bold;\n}\n#containerBerita .flex-row .boxBerita .headLineBerita span[data-v-5ffdc4f0] {\n  font-weight: lighter;\n  color: #0984e3;\n}\n#containerBerita .flex-row .boxBerita .button[data-v-5ffdc4f0] {\n  background-color: #0cabdb;\n  color: whitesmoke;\n  padding: 7px;\n  padding-left: 17px;\n  padding-right: 17px;\n  margin-left: 170px;\n  border-radius: 30px;\n  text-align: center;\n}\nul.pagination .page-item .page-link[data-v-5ffdc4f0] {\n  color: #5CC073;\n}\nul.pagination .page-item.disabled[data-v-5ffdc4f0] {\n  color: #7F8C8D;\n}\nul.pagination .page-item.active .page-link[data-v-5ffdc4f0] {\n  background: #5CC073;\n  border-color: #5CC073;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("nav", { staticClass: "navbar" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "navbar__logo" }, [
        _vm._v("\n            Creatify\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "navbar__menu" }, [
        _c(
          "a",
          {
            staticClass: "navbar__menu--active",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.activeNav()
              }
            }
          },
          [_c("i", { staticClass: "fas fa-align-right" })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "navbar__list" }, [
        _c(
          "a",
          {
            staticClass: "navbar__list--close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.closeNav()
              }
            }
          },
          [_c("i", { staticClass: "fas fa-times" })]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "nav" }, [
          _vm.$route.path === "/"
            ? _c(
                "li",
                [
                  _c(
                    "router-link",
                    { staticClass: "navbar__list__link", attrs: { to: "/" } },
                    [_vm._v("Home")]
                  )
                ],
                1
              )
            : _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "navbar__list__link",
                      attrs: { to: { name: "Home" } }
                    },
                    [_vm._v("Home")]
                  )
                ],
                1
              ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar__list__link",
                  attrs: { to: { name: "Data" } }
                },
                [_vm._v("Data")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar__list__link",
                  attrs: { to: { name: "Berita" } }
                },
                [_vm._v("Berita")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar__list__link",
                  attrs: { to: { name: "FAQ" } }
                },
                [_vm._v("FAQ")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "nav",
          { staticClass: "d-flex justify-content-center" },
          _vm._l(_vm.paginate.links, function(link, i) {
            return _c("ul", { key: i, staticClass: "pagination" }, [
              link.active
                ? _c("li", { staticClass: "page-item active" }, [
                    _c("button", {
                      staticClass: "page-link",
                      attrs: { tabindex: "-1", "aria-disabled": "true" },
                      domProps: { innerHTML: _vm._s(link.label) },
                      on: {
                        click: function($event) {
                          return _vm.nextLink(link.url)
                        }
                      }
                    })
                  ])
                : link.url === null
                ? _c("li", { staticClass: "page-item disabled" }, [
                    _c("button", {
                      staticClass: "page-link",
                      attrs: { tabindex: "-1", "aria-disabled": "true" },
                      domProps: { innerHTML: _vm._s(link.label) },
                      on: {
                        click: function($event) {
                          return _vm.nextLink(link.url)
                        }
                      }
                    })
                  ])
                : _c("li", { staticClass: "page-item" }, [
                    _c("button", {
                      staticClass: "page-link",
                      attrs: { tabindex: "-1", "aria-disabled": "true" },
                      domProps: { innerHTML: _vm._s(link.label) },
                      on: {
                        click: function($event) {
                          return _vm.nextLink(link.url)
                        }
                      }
                    })
                  ])
            ])
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "form-inline pr-0" }, [
      _c("h3", { staticClass: "$textcolor pageTitle" }, [_vm._v("Berita")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control pl-3 pr-2",
        attrs: { type: "search", placeholder: "Search", "aria-label": "Search" }
      }),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-success pr-3", attrs: { type: "submit" } },
        [_c("i", { staticClass: "fas fa-search" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "containerBerita" } }, [
      _c("div", { staticClass: "flex-row" }, [
        _c("div", { staticClass: "boxBerita" }, [
          _c("section", { staticClass: "imgBerita" }, [
            _c("img", { attrs: { src: "img/take1.jpg", height: "193px" } })
          ]),
          _vm._v(" "),
          _c("article", { staticClass: "headLineBerita" }, [
            _c("h5", [
              _vm._v(" Razia Masker Akan Diberlakukan di Kota Bandung ")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(" 9 Desember 2020 ")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
              )
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "button" }, [_vm._v(" Detail ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "boxBerita" }, [
          _c("section", { staticClass: "imgBerita" }, [
            _c("img", { attrs: { src: "img/take2.jpg", height: "193px" } })
          ]),
          _vm._v(" "),
          _c("article", { staticClass: "headLineBerita" }, [
            _c("h5", [
              _vm._v(" Sudah Genap 1 Tahun Pandemi Covid-19 Menghiasi Dunia ")
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(" 9 Desember 2020 ")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
              )
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "button" }, [_vm._v(" Detail ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "boxBerita" }, [
          _c("section", { staticClass: "imgBerita" }, [
            _c("img", { attrs: { src: "img/2019.png", height: "193px" } })
          ]),
          _vm._v(" "),
          _c("article", { staticClass: "headLineBerita" }, [
            _c("h5", [_vm._v(" Corona V.2 akan segera rilis tahun 2022")]),
            _vm._v(" "),
            _c("span", [_vm._v(" 9 Desember 2020 ")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
              )
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "button" }, [_vm._v(" Detail ")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Berita.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Berita.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Berita_vue_vue_type_template_id_5ffdc4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true& */ "./resources/js/pages/Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true&");
/* harmony import */ var _Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Berita.vue?vue&type=script&lang=js& */ "./resources/js/pages/Berita.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Berita_vue_vue_type_style_index_0_id_5ffdc4f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true& */ "./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Berita_vue_vue_type_template_id_5ffdc4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Berita_vue_vue_type_template_id_5ffdc4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ffdc4f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Berita.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Berita.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Berita.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Berita.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_style_index_0_id_5ffdc4f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=style&index=0&id=5ffdc4f0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_style_index_0_id_5ffdc4f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_style_index_0_id_5ffdc4f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_style_index_0_id_5ffdc4f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_style_index_0_id_5ffdc4f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_template_id_5ffdc4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Berita.vue?vue&type=template&id=5ffdc4f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_template_id_5ffdc4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Berita_vue_vue_type_template_id_5ffdc4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Data.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        dataWilayah: [],
        links: [],
        cari: '' // statistik: {total = null , odp = null, sembuh = null, meninggal = null}

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

      axios.get('/api/data').then(function (response) {
        _this.paginate.links = response.data.links;
        _this.paginate.dataWilayah = response.data.data;
      });
    },
    // link yang di click selanjutnya pada paginate
    nextLink: function nextLink(url) {
      var _this2 = this;

      axios.get(url).then(function (response) {
        _this2.paginate.links = response.data.links;
        _this2.paginate.dataWilayah = response.data.data;
      });
    },
    searchWilayah: function searchWilayah() {
      var _this3 = this;

      // backup
      this.dataSearch = this.dataWilayah;
      this.dataWilayah = this.dataWilayah.filter(function (data) {
        return data.wilayah.nama_wilayah == _this3.cari;
      });
    }
  },
  created: function created() {
    this.paginasiLink();
    axios.get('https://api.kawalcorona.com/indonesia').then(function (response) {
      console.log(response);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-2dbab5b3] {\n  padding-top: 50px;\n}\n.container .pageTitle[data-v-2dbab5b3] {\n  margin-bottom: 23px;\n  font-weight: bold;\n}\n.container .pageTitle h3[data-v-2dbab5b3] {\n  font-weight: bold;\n  font-size: 1.7em;\n  display: inline;\n}\n.container .pageTitle span[data-v-2dbab5b3] {\n  font-weight: bold;\n  color: #0984e3;\n  display: block;\n}\n.card[data-v-2dbab5b3] {\n  box-shadow: 0 4px 8px 0 rgba(19, 58, 77, 0.171);\n  background: #c4f8de;\n  border-radius: 5px;\n  padding: 20px;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 30px;\n}\n#containerData1[data-v-2dbab5b3] {\n  overflow: auto;\n  margin: 0px;\n  padding: 0px;\n  height: 277px;\n  color: white;\n}\n#containerData1 .flex-row[data-v-2dbab5b3] {\n  display: flex;\n  flex-direction: row;\n}\n#containerData1 .flex-row .boxData1[data-v-2dbab5b3] {\n  background-color: #5f27cd;\n  margin-top: 27px;\n  padding-top: 11px;\n  padding-right: 23px;\n  padding-left: 23px;\n  box-shadow: -3px 5px 7px 1px #928e99;\n  border-radius: 7px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  cursor: pointer;\n}\n#containerData1 .flex-row .boxData1 article[data-v-2dbab5b3] {\n  font-weight: 400;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n}\n#containerData1 .flex-row .boxData2[data-v-2dbab5b3] {\n  background-color: #0984e3;\n  margin-top: 27px;\n  padding-top: 11px;\n  padding-right: 34px;\n  padding-left: 34px;\n  box-shadow: -3px 5px 7px 1px #928e99;\n  border-radius: 7px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  cursor: pointer;\n}\n#containerData1 .flex-row .boxData2 article[data-v-2dbab5b3] {\n  font-weight: 400;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n}\n#containerData1 .flex-row .boxData3[data-v-2dbab5b3] {\n  background-color: #0c9636;\n  margin-top: 27px;\n  padding-top: 11px;\n  padding-right: 61px;\n  padding-left: 61px;\n  box-shadow: -3px 5px 7px 1px #928e99;\n  border-radius: 7px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  cursor: pointer;\n}\n#containerData1 .flex-row .boxData3 article[data-v-2dbab5b3] {\n  font-weight: 400;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n}\n#containerData1 .flex-row .boxData4[data-v-2dbab5b3] {\n  background-color: #d63031;\n  margin-top: 27px;\n  padding-top: 11px;\n  padding-right: 61px;\n  padding-left: 61px;\n  box-shadow: -3px 5px 7px 1px #928e99;\n  border-radius: 7px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  cursor: pointer;\n}\n#containerData1 .flex-row .boxData4 article[data-v-2dbab5b3] {\n  font-weight: 400;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n}\n#containerData2[data-v-2dbab5b3] {\n  margin-bottom: 50px;\n  padding: 0px;\n  height: 520px;\n  color: #09b34a;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 3px 11px 2px #09b34a;\n}\n#containerData2 .lapisAtas[data-v-2dbab5b3] {\n  background: #09b34a;\n  border-radius: 10px, 3px, 3px, 10px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n#containerData2 header[data-v-2dbab5b3] {\n  background: white;\n  box-shadow: 0px 0px 1px 3px #d4dbd4;\n  float: top;\n  width: 100%;\n  margin-left: 0px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n  overflow: auto;\n}\n#containerData2 header h4[data-v-2dbab5b3] {\n  float: left;\n  width: 70%;\n  padding-left: 23px;\n  margin-top: 23px;\n}\n#containerData2 header form[data-v-2dbab5b3] {\n  float: right;\n  width: 30%;\n}\n#containerData2 header form input[data-v-2dbab5b3] {\n  background: #e6f8ec;\n  padding-left: 13px;\n  padding-right: 13px;\n}\n#containerData2 header form button[data-v-2dbab5b3] {\n  margin: 0;\n}\n#containerData2 article[data-v-2dbab5b3] {\n  margin-left: 0px;\n  float: bottom;\n  width: 100%;\n}\n#containerData2 article .imgMap[data-v-2dbab5b3] {\n  float: left;\n  width: 50%;\n  margin-top: 3px;\n}\n#containerData2 article .imgMap img[data-v-2dbab5b3] {\n  width: 100%;\n}\n#containerData2 article .tabelData[data-v-2dbab5b3] {\n  float: right;\n  width: 50%;\n  margin-top: 3px;\n}\n#containerData2 article .tabelData th[data-v-2dbab5b3] {\n  color: #09b34a;\n  font-size: 1.2em;\n  text-align: center;\n}\n#containerData2 article .tabelData td[data-v-2dbab5b3] {\n  font-size: 1.2em;\n  text-align: center;\n}\n#containerData2 article .tabelData .button[data-v-2dbab5b3] {\n  background-color: #0cabdb;\n  font-size: 1em;\n  color: whitesmoke;\n  padding: 3px;\n  padding-left: 37px;\n  padding-right: 37px;\n  border-radius: 30px;\n  text-align: center;\n}\nul.pagination .page-item .page-link[data-v-2dbab5b3] {\n  color: #5CC073;\n}\nul.pagination .page-item.disabled[data-v-2dbab5b3] {\n  color: #7F8C8D;\n}\nul.pagination .page-item.active .page-link[data-v-2dbab5b3] {\n  background: #5CC073;\n  border-color: #5CC073;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=template&id=2dbab5b3&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Data.vue?vue&type=template&id=2dbab5b3&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        _c("div", { attrs: { id: "containerData2" } }, [
          _c("div", { staticClass: "lapisAtas" }),
          _vm._v(" "),
          _c("header", { staticClass: "form-inline" }, [
            _c("h4", { staticClass: "$textcolor pageTitle" }, [
              _vm._v("Data Wilayah")
            ]),
            _vm._v(" "),
            _c("form", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cari,
                    expression: "cari"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "search",
                  placeholder: "Data Wilayah",
                  "aria-label": "Search"
                },
                domProps: { value: _vm.cari },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.cari = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success pl-3 pr-3",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.searchWilayah()
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-search" })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("article", [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "tabelData" }, [
              _c(
                "table",
                { staticClass: "table md-3" },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._l(_vm.paginate.dataWilayah, function(data, i) {
                    return _c("tbody", { key: i }, [
                      _c("tr", [
                        _c("td", [_vm._v(" " + _vm._s(++i) + " ")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(" " + _vm._s(data.wilayah.nama_wilayah) + " ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "button btn",
                                attrs: { to: "/detail-data/" + data.id_data }
                              },
                              [_vm._v(" Detail ")]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  })
                ],
                2
              ),
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
          ])
        ])
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
    return _c("div", { staticClass: "pageTitle" }, [
      _c("h3", { staticClass: "$textcolor" }, [
        _vm._v("Data Statistik Kasus Covid 19")
      ]),
      _vm._v(" "),
      _c("span", [_vm._v(" Tanggal 9 Desember 2020")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "containerData1" } }, [
      _c("div", { staticClass: "flex-row" }, [
        _c("div", { staticClass: "boxData1" }, [
          _c("article", [
            _c("p", [_vm._v(" TOTAL TERKONFIRMASI ")]),
            _vm._v(" "),
            _c("h5", [_vm._v(" INDONESIA ")]),
            _vm._v(" "),
            _c("h4", [_vm._v(" 10 ")]),
            _vm._v(" "),
            _c("h6", [_vm._v(" +7 ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "boxData2" }, [
          _c("article", [
            _c("p", [_vm._v("  DALAM PERAWATAN ")]),
            _vm._v(" "),
            _c("h5", [_vm._v(" INDONESIA ")]),
            _vm._v(" "),
            _c("h4", [_vm._v(" 10 ")]),
            _vm._v(" "),
            _c("h6", [_vm._v(" +7 ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "boxData3" }, [
          _c("article", [
            _c("p", [_vm._v("  SEMBUH ")]),
            _vm._v(" "),
            _c("h5", [_vm._v(" INDONESIA ")]),
            _vm._v(" "),
            _c("h4", [_vm._v(" 89 ")]),
            _vm._v(" "),
            _c("h6", [_vm._v(" +23 ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "boxData4" }, [
          _c("article", [
            _c("p", [_vm._v("  MENINGGAL ")]),
            _vm._v(" "),
            _c("h5", [_vm._v(" INDONESIA ")]),
            _vm._v(" "),
            _c("h4", [_vm._v(" 7435 ")]),
            _vm._v(" "),
            _c("h6", [_vm._v(" +210 ")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "imgMap" }, [
      _c("img", { attrs: { src: "img/wilayah.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nama Wilayah")]),
        _vm._v(" "),
        _c("th", [_vm._v("Aksi")])
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

/***/ "./resources/js/pages/Data.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Data.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Data_vue_vue_type_template_id_2dbab5b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.vue?vue&type=template&id=2dbab5b3&scoped=true& */ "./resources/js/pages/Data.vue?vue&type=template&id=2dbab5b3&scoped=true&");
/* harmony import */ var _Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.vue?vue&type=script&lang=js& */ "./resources/js/pages/Data.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Data_vue_vue_type_style_index_0_id_2dbab5b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true& */ "./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Data_vue_vue_type_template_id_2dbab5b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Data_vue_vue_type_template_id_2dbab5b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2dbab5b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Data.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Data.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Data.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Data.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_2dbab5b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=style&index=0&id=2dbab5b3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_2dbab5b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_2dbab5b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_2dbab5b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_2dbab5b3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Data.vue?vue&type=template&id=2dbab5b3&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Data.vue?vue&type=template&id=2dbab5b3&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_2dbab5b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Data.vue?vue&type=template&id=2dbab5b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Data.vue?vue&type=template&id=2dbab5b3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_2dbab5b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_2dbab5b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
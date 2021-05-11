webpackJsonp([1],{

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61c8ea73_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
function injectStyle (context) {
  __webpack_require__(53)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61c8ea73"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61c8ea73_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61c8ea73_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__(1);

exports.default = {
  data: function data() {
    return {
      username: '',
      password: '',
      errorMsg: ''
    };
  },

  methods: {
    toApp: function toApp() {
      this.$router.push("/app");
    },
    doSubmit: function doSubmit(e) {
      e.preventDefault();
      this.$router.replace('/app');
    },
    validate: function validate() {
      if (!this.username.trim()) {
        this.errorMsg = '姓名不能为空';
        return false;
      }
      if (!this.password.trim()) {
        this.errorMsg = '密码不能为空';
        return false;
      }
      this.errorMsg = '';
      return true;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("12c01c4e", content, true, {});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".login-form[data-v-61c8ea73]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:350px;margin:0 auto;padding:20px;background-color:#fff}.login-form h1[data-v-61c8ea73]{font-weight:100;color:#3d3d3d}.login-input[data-v-61c8ea73]{padding:0 10px;margin-bottom:20px;border:1px solid #aaa;border-radius:0;-webkit-box-shadow:0 0 0;box-shadow:0 0 0}.login-btn[data-v-61c8ea73],.login-input[data-v-61c8ea73]{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:30px;width:100%}.login-btn[data-v-61c8ea73]{text-align:center;background-color:#0d60c7;color:#eaeaea;cursor:pointer;border-color:#0d60c7;-webkit-transition:all .3s;transition:all .3s}.login-btn[data-v-61c8ea73]:hover{color:#fff;background-color:#0a4997}.error-msg[data-v-61c8ea73]{font-size:12px;color:red}@media screen and (max-width:600px){.login-form[data-v-61c8ea73]{width:90%}.login-input[data-v-61c8ea73]{line-height:40px}}", ""]);

// exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"login-form",on:{"submit":_vm.doSubmit}},[_c('h1',[_c('span',[_vm._v("Login")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errorMsg),expression:"errorMsg"}],staticClass:"error-msg"},[_vm._v(_vm._s(_vm.errorMsg))])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],staticClass:"login-input",attrs:{"type":"text","placeholder":"User Name"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"login-input",attrs:{"type":"password","placeholder":"Password","autocomplete":"new-password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"login-btn",attrs:{"type":"submit"}},[_vm._v("登 录")]),_vm._v(" "),_c('button',{attrs:{"type":"button"},on:{"click":_vm.toApp}},[_vm._v("toApp")])])}
var staticRenderFns = []


/***/ })

});
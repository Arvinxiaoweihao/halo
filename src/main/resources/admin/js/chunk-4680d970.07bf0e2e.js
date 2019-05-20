(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4680d970"],{"0bd6":function(e,t,a){},"0e8e":function(e,t,a){"use strict";var r=a("0bd6"),o=a.n(r);o.a},"7e89":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header-index-wide"},[a("a-row",{attrs:{gutter:12}},[a("a-col",{style:{"padding-bottom":"12px"},attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[a("a-card",{attrs:{title:e.title}},[a("a-form",{attrs:{layout:"horizontal"}},[a("a-form-item",{attrs:{label:"名称：",help:"* 页面上所显示的名称"}},[a("a-input",{model:{value:e.categoryToCreate.name,callback:function(t){e.$set(e.categoryToCreate,"name",t)},expression:"categoryToCreate.name"}})],1),a("a-form-item",{attrs:{label:"路径名称：",help:"* 这是文章路径上显示的名称，最好为英文"}},[a("a-input",{model:{value:e.categoryToCreate.slugName,callback:function(t){e.$set(e.categoryToCreate,"slugName",t)},expression:"categoryToCreate.slugName"}})],1),a("a-form-item",{attrs:{label:"上级目录："}},[a("category-select-tree",{attrs:{categories:e.categories},model:{value:e.categoryToCreate.parentId,callback:function(t){e.$set(e.categoryToCreate,"parentId",t)},expression:"categoryToCreate.parentId"}})],1),a("a-form-item",{attrs:{label:"描述：",help:"* 分类描述，部分主题可显示"}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:3}},model:{value:e.categoryToCreate.description,callback:function(t){e.$set(e.categoryToCreate,"description",t)},expression:"categoryToCreate.description"}})],1),a("a-form-item",["create"===e.formType?a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveClick}},[e._v("保存")]):a("a-button-group",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveClick}},[e._v("更新")]),"update"===e.formType?a("a-button",{attrs:{type:"dashed"},on:{click:e.handleAddCategory}},[e._v("返回添加")]):e._e()],1)],1)],1)],1)],1),a("a-col",{style:{"padding-bottom":"1rem"},attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[a("a-card",{attrs:{title:"分类列表"}},[a("a-table",{attrs:{columns:e.columns,dataSource:e.categories,rowKey:function(e){return e.id},loading:e.loading},scopedSlots:e._u([{key:"name",fn:function(t){return a("ellipsis",{attrs:{length:30,tooltip:""}},[e._v("\n            "+e._s(t)+"\n          ")])}},{key:"action",fn:function(t,r){return a("span",{},[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleEditCategory(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"你确定要删除【"+r.name+"】分类？",okText:"确定",cancelText:"取消"},on:{confirm:function(t){return e.handleDeleteCategory(r.id)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)}}])})],1),a("a-card",{staticClass:"category-tree",attrs:{title:"分类树"}},[a("category-tree",{attrs:{categories:e.categories}})],1)],1)],1)],1)},o=[],n=a("fa25"),c=a("eda3"),i=a("c405"),l=[{title:"名称",dataIndex:"name"},{title:"路径",dataIndex:"slugName"},{title:"描述",dataIndex:"description"},{title:"文章数",dataIndex:"postCount"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],s={components:{CategorySelectTree:n["a"],CategoryTree:c["a"]},data:function(){return{formType:"create",categories:[],categoryToCreate:{},loading:!1,columns:l}},computed:{title:function(){return this.categoryToCreate.id?"修改分类":"添加分类"}},created:function(){this.loadCategories()},methods:{loadCategories:function(){var e=this;this.loading=!0,i["a"].listAll(!0).then(function(t){e.categories=t.data.data,e.loading=!1})},handleSaveClick:function(){this.createOrUpdateCategory()},handleAddCategory:function(){this.formType="create",this.categoryToCreate={}},handleEditCategory:function(e){this.categoryToCreate=e,this.formType="update"},handleDeleteCategory:function(e){var t=this;i["a"].delete(e).then(function(e){t.$message.success("删除成功！"),t.loadCategories()})},createOrUpdateCategory:function(){var e=this;this.categoryToCreate.id?i["a"].update(this.categoryToCreate.id,this.categoryToCreate).then(function(t){e.$message.success("更新成功！"),e.loadCategories(),e.categoryToCreate={}}):i["a"].create(this.categoryToCreate).then(function(t){e.$message.success("保存成功！"),e.loadCategories(),e.categoryToCreate={}}),this.handleAddCategory()}}},d=s,u=(a("0e8e"),a("17cc")),g=Object(u["a"])(d,r,o,!1,null,"23f67544",null);t["default"]=g.exports},c405:function(e,t,a){"use strict";a("3a23"),a("612f");var r=a("9efd"),o="/api/admin/categories",n={};function c(e,t){t.forEach(function(t){e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))}),e.children?e.children.forEach(function(e){return c(e,t)}):e.isLeaf=!0}n.listAll=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:"".concat(o),params:{more:e},method:"get"})},n.listTree=function(){return Object(r["a"])({url:"".concat(o,"/tree_view"),method:"get"})},n.create=function(e){return Object(r["a"])({url:o,data:e,method:"post"})},n.delete=function(e){return Object(r["a"])({url:"".concat(o,"/").concat(e),method:"delete"})},n.get=function(e){return Object(r["a"])({url:"".concat(o,"/").concat(e),method:"get"})},n.update=function(e,t){return Object(r["a"])({url:"".concat(o,"/").concat(e),data:t,method:"put"})},n.concreteTree=function(e){var t={key:0,title:"top",children:[]};return c(t,e),t.children},t["a"]=n},eda3:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree",{attrs:{checkable:"",treeData:e.categoryTree,defaultExpandAll:!0,checkedKeys:e.categoryIds},on:{check:e.onCheck}},[a("span",{staticStyle:{color:"#1890ff"},attrs:{slot:"title0010"},slot:"title0010"},[e._v("sss")])])},o=[],n=a("c405"),c={name:"CategoryTree",model:{prop:"categoryIds",event:"check"},props:{categoryIds:{type:Array,required:!1,default:function(){return[]}},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTree:function(){return n["a"].concreteTree(this.categories)}},methods:{onCheck:function(e,t){this.$log.debug("Chekced keys",e),this.$log.debug("e",t);var a=t.checkedNodes.filter(function(e){return e.data.props.isLeaf}).map(function(e){return e.key});this.$log.debug("Effectively selected category ids",a),this.$emit("check",a)}}},i=c,l=a("17cc"),s=Object(l["a"])(i,r,o,!1,null,null,null);t["a"]=s.exports},fa25:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{attrs:{treeData:e.categoryTreeData,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:"",treeDataSimpleMode:!0,allowClear:!0,value:e.categoryIdString},on:{change:e.handleSelectionChange}})},o=[],n=(a("48fb"),a("3a23"),a("b06f"),{name:"CategorySelectTree",model:{prop:"categoryId",event:"change"},props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTreeData:function(){return this.categories.map(function(e){return{id:e.id,title:e.name,value:e.id.toString(),pId:e.parentId}})},categoryIdString:function(){return this.categoryId.toString()}},methods:{handleSelectionChange:function(e,t,a){this.$log.debug("value: ",e),this.$log.debug("label: ",t),this.$log.debug("extra: ",a),this.$emit("change",e?parseInt(e):0)}}}),c=n,i=a("17cc"),l=Object(i["a"])(c,r,o,!1,null,null,null);t["a"]=l.exports}}]);
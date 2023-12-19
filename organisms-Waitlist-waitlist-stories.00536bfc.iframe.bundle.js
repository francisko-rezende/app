"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[2187],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/organisms/Waitlist/waitlist.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Waitlist:()=>Waitlist,__namedExportsOrder:()=>__namedExportsOrder,default:()=>waitlist_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/fi/index.esm.js"),fa_index_esm=__webpack_require__("./node_modules/react-icons/fa/index.esm.js"),header_logo=__webpack_require__("./components/molecules/HeaderLogo/header-logo.tsx"),Typography_text=__webpack_require__("./components/atoms/Typography/text.tsx"),title=__webpack_require__("./components/atoms/Typography/title.tsx"),Button_button=__webpack_require__("./components/atoms/Button/button.tsx"),avatar_roll=__webpack_require__("./components/molecules/AvatarRoll/avatar-roll.tsx"),component_gradient=__webpack_require__("./components/molecules/ComponentGradient/component-gradient.tsx"),__jsx=react.createElement;const WaitlistComponent=()=>__jsx(component_gradient.Z,null,__jsx("div",{className:"z-10"},__jsx("div",{className:"py-3 flex justify-center"},__jsx(header_logo.Z,{withBg:!1})),__jsx("div",{className:"mt-24"},__jsx("div",{className:"text-center"},__jsx(Typography_text.Z,{className:"!text-2xl !font-semibold !text-dark-orange-9 tracking-tight z-10"},"Thanks for signing up!")),__jsx("div",{className:"max-w-2xl mt-7 px-9 font-semibold"},__jsx(title.Z,{className:"text-center leading-10 !text-light-slate-1",level:1},"You and 32 others are on the Open Sauced waitlist.")),__jsx("div",{className:"flex mt-8 justify-center"},__jsx(avatar_roll.Z,{avatarCount:9})),__jsx("div",{className:"flex mt-8 flex-col items-center"},__jsx(Button_button.Z,{className:"text-lg hover:border-dark-orange-9 focus-visible:ring-dark-orange-3 focus-visible:ring-2 hover:bg-dark-orange-3  bg-dark-orange-2 border-dark-orange-7 font-semibold",variant:"outline"},__jsx(fa_index_esm.hJX,{className:"mr-2"})," Share on Twitter"),__jsx(Button_button.Z,{className:"hover:bg-dark-orange-3  mt-3",variant:"link"},__jsx(index_esm.Ao2,{className:"mr-1 font-bold"})," Go back home")))));WaitlistComponent.displayName="WaitlistComponent";const waitlist=WaitlistComponent;var _Waitlist$parameters,_Waitlist$parameters2,waitlist_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const waitlist_stories={title:"Design System/Organisms/WaitlistComponent"},WaitlistComponentTemplate=args=>waitlist_stories_jsx(waitlist,args);WaitlistComponentTemplate.displayName="WaitlistComponentTemplate";const Waitlist=WaitlistComponentTemplate.bind({});Waitlist.parameters=_objectSpread(_objectSpread({},Waitlist.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Waitlist$parameters=Waitlist.parameters)||void 0===_Waitlist$parameters?void 0:_Waitlist$parameters.docs),{},{source:_objectSpread({originalSource:"args => <WaitlistComponent {...args} />"},null===(_Waitlist$parameters2=Waitlist.parameters)||void 0===_Waitlist$parameters2||null===(_Waitlist$parameters2=_Waitlist$parameters2.docs)||void 0===_Waitlist$parameters2?void 0:_Waitlist$parameters2.source)})});const __namedExportsOrder=["Waitlist"];try{Waitlist.displayName="Waitlist",Waitlist.__docgenInfo={description:"",displayName:"Waitlist",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/Waitlist/waitlist.stories.tsx#Waitlist"]={docgenInfo:Waitlist.__docgenInfo,name:"Waitlist",path:"components/organisms/Waitlist/waitlist.stories.tsx#Waitlist"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Avatar_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const cachedImages=(imageUrl,cloudName)=>cloudName?"https://res.cloudinary.com/".concat(cloudName,"/image/fetch/").concat(imageUrl):imageUrl;var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Avatar_avatar=props=>{let imageSource;try{"string"==typeof props.avatarURL&&props.avatarURL.length>0&&new URL(props.avatarURL),imageSource=props.avatarURL&&props.isCached?cachedImages(props.avatarURL,"dgxgziswe"):props.avatarURL}catch(error){console.error(error)}switch(typeof props.size){case"string":return __jsx(DefaultAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}));case"number":return __jsx(CustomAvatar,(0,esm_extends.Z)({},props,{avatarURL:imageSource}))}},CustomAvatar=_ref=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle,initialsClassName}=_ref;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center w-max h-max overflow-hidden\n\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",width:size,height:size,src:avatarURL}):__jsx("div",{className:"".concat(initialsClassName," flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 "),style:{width:size,height:size}},initials))};CustomAvatar.displayName="CustomAvatar";const DefaultAvatar=_ref2=>{let{className,avatarURL,initials,alt,size,hasBorder,isCircle}=_ref2;return __jsx("div",{className:"inline-flex ".concat(avatarURL?"":"bg-orange-500"," justify-center relative items-center overflow-hidden\n        ").concat(isCircle?"rounded-full ":"rounded-lg ","\n        ").concat(hasBorder?"ring-2 ring-slate-200 ":"","\n        ").concat("sm"===size?"w-6 h-6 ":"base"===size?"w-8 h-8 ":"lg"===size?"w-12 h-12 ":"w-8 h-8 ","\n        ").concat(null!=className?className:" ","\n      ")},avatarURL?__jsx(next_image.Z,{className:"".concat(className||""," object-cover"),alt:alt||"Avatar",fill:!0,src:avatarURL}):__jsx("div",{className:"flex items-center justify-center font-bold leading-none text-slate-50 mb-0.25 ".concat("sm"===size?"text-xs":"base"===size?"text-sm":"lg"===size?"text-lg":"text-sm"),style:{width:size,height:size}},initials))};DefaultAvatar.displayName="DefaultAvatar";try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},avatarURL:{defaultValue:null,description:"",name:"avatarURL",required:!1,type:{name:"string | StaticImageData"}},initials:{defaultValue:null,description:"",name:"initials",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:'number | "base" | "sm" | "lg"'}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},isCached:{defaultValue:null,description:"",name:"isCached",required:!1,type:{name:"boolean"}},initialsClassName:{defaultValue:null,description:"",name:"initialsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar.tsx#avatar"]={docgenInfo:avatar.__docgenInfo,name:"avatar",path:"components/atoms/Avatar/avatar.tsx#avatar"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["className","children","loading","disabled","variant","showLoadingText","onClick","href"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,children,loading,disabled,variant,showLoadingText=!0,onClick,href}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);const styles={primary:"bg-light-orange-9 text-light-orange-2 border-light-orange-9 hover:bg-light-orange-10 ".concat(disabled?"bg-light-orange-7 hover:bg-light-orange-7 border-none  pointer-events-none":""),default:"bg-white border-light-slate-8 text-light-slate-11 hover:bg-light-slate-2 ".concat(disabled?"bg-light-slate-4 text-light-slate-9 pointer-events-none":""),dark:"bg-dark-slate-6 border-dark-slate-8 text-light-orange-2 hover:bg-dark-slate-8 ".concat(disabled?"bg-dark-slate-4 text-dark-slate-9 pointer-events-none":""),outline:"bg-orange-50 border-orange-500 text-orange-600 hover:bg-orange-100 ".concat(disabled?"bg-light-orange-3 pointer-events-none text-light-orange-7 border-light-orange-5":""),link:"text-orange-600 hover:bg-orange-100 border-none ".concat(disabled?"text-orange-400 pointer-events-none":""),destructive:"border-dark-red-8 bg-dark-red-8 text-white hover:border-dark-red-7 hover:bg-dark-red-7",text:""},rootClass=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(styles[variant],disabled&&"cursor-not-allowed",disabled&&"destructive"!==variant&&"bg-light-orange-7 hover:bg-light-orange-7 border-none","items-center inline-flex text-sm font-semibold tracking-tight border py-2 px-4 rounded-md focus-visible:border-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-200 whitespace-nowrap",className),content=loading?__jsx("div",null,__jsx("svg",{"aria-hidden":"true",role:"status",className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("inline w-4 h-4 text-white animate-spin",showLoadingText?"mr-2":""),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})),showLoadingText&&__jsx("span",{className:"text-white"},"Loading...")):children;return href?__jsx("a",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,href,ref},props),content):__jsx("button",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:rootClass,ref,onClick:disabled?void 0:onClick},props),content)}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"dark"'},{value:'"link"'},{value:'"text"'},{value:'"default"'},{value:'"primary"'},{value:'"outline"'},{value:'"destructive"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},showLoadingText:{defaultValue:{value:"true"},description:"",name:"showLoadingText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/atoms/Button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","title","className","type","disabled","mark","code","keyboard","underline","strikethrough","strong","small"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Text=_ref=>{let{children,title,className,type="default",disabled,mark,code,keyboard,underline,strikethrough,strong,small}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TextTag=mark?"mark":code?"code":keyboard?"kbd":strong?"strong":small?"small":"span";return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,disabled&&"cursor-not-allowed select-none text-light-slate-11/50",keyboard&&"bg-light-slate-4/50 rounded px-2 border border-b-2 border-light-slate-8/50",underline&&"underline",strikethrough&&"line-through",(type=>"secondary"===type?"!text-light-slate-5":"success"===type?"!text-dark-grass-10":"warning"===type?"!text-yellow-500":"danger"===type?"!text-dark-red-10":"")(type))},props),__jsx(TextTag,{title},children))};Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=Text;try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},mark:{defaultValue:null,description:"",name:"mark",required:!1,type:{name:"boolean"}},code:{defaultValue:null,description:"",name:"code",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:null,description:"",name:"keyboard",required:!1,type:{name:"boolean"}},underline:{defaultValue:null,description:"",name:"underline",required:!1,type:{name:"boolean"}},strikethrough:{defaultValue:null,description:"",name:"strikethrough",required:!1,type:{name:"boolean"}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/text.tsx#text"]={docgenInfo:text.__docgenInfo,name:"text",path:"components/atoms/Typography/text.tsx#text"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Typography/wrapper.tsx");const _excluded=["children","level","weight","className"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const Title=_ref=>{let{children,level=1,weight="medium",className}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);const TitleTag="h".concat(level);return __jsx(_wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,null,__jsx(TitleTag,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(className,"font-".concat(weight))},props),children))};Title.displayName="Title";const __WEBPACK_DEFAULT_EXPORT__=Title;try{title.displayName="title",title.__docgenInfo={description:"",displayName:"title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"5"},{value:"3"},{value:"4"}]}},weight:{defaultValue:{value:"medium"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"bold"'},{value:'"thin"'},{value:'"extralight"'},{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"extrabold"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/title.tsx#title"]={docgenInfo:title.__docgenInfo,name:"title",path:"components/atoms/Typography/title.tsx#title"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/Typography/wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const _excluded=["children","className","size"];var __jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const TypographyWrapper=_ref=>{let{children,className,size="sm"}=_ref,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("span",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("prose","prose-".concat(size),className)},props),children)};TypographyWrapper.displayName="TypographyWrapper";const __WEBPACK_DEFAULT_EXPORT__=TypographyWrapper;try{wrapper.displayName="wrapper",wrapper.__docgenInfo={description:"",displayName:"wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Typography/wrapper.tsx#wrapper"]={docgenInfo:wrapper.__docgenInfo,name:"wrapper",path:"components/atoms/Typography/wrapper.tsx#wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/AvatarRoll/avatar-roll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/atoms/Avatar/avatar.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const AvatarRoll=_ref=>{let{avatarCount=9}=_ref;const rollCount=Array.apply(null,Array(avatarCount));return __jsx("div",{className:"flex gap-3 items-center"},rollCount.map(((roll,index)=>__jsx("div",{key:index,className:"".concat(0===index||8===index?"opacity-20":1===index||7===index?"opacity-40":2===index||6===index?"opacity-60":3===index||5===index?"opacity-80":"opacity-100")},__jsx(components_atoms_Avatar_avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{size:0===index||8===index?24:1===index||7===index?32:2===index||6===index?40:3===index||5===index?44:48,avatarURL:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"})))))};AvatarRoll.displayName="AvatarRoll";const __WEBPACK_DEFAULT_EXPORT__=AvatarRoll;try{avatarroll.displayName="avatarroll",avatarroll.__docgenInfo={description:"",displayName:"avatarroll",props:{avatarCount:{defaultValue:{value:"9"},description:"",name:"avatarCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/AvatarRoll/avatar-roll.tsx#avatarroll"]={docgenInfo:avatarroll.__docgenInfo,name:"avatarroll",path:"components/molecules/AvatarRoll/avatar-roll.tsx#avatarroll"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ComponentGradient/component-gradient.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var __jsx=__webpack_require__("./node_modules/next/dist/compiled/react/index.js").createElement;const ComponentGradient=_ref=>{let{children,css}=_ref;return __jsx("div",{className:"relative overflow-hidden flex justify-center bg-gradient-to-b h-screen from-gradient-dark-one to-gradient-dark-two"},__jsx("div",{className:"text-white  absolute blur-4xl -bottom-97  w-99 h-98 bg-gradient-radial from-gradient-orange-two to-gradient-orange-one  rounded-full"}),__jsx("section",null,children))};ComponentGradient.displayName="ComponentGradient";const __WEBPACK_DEFAULT_EXPORT__=ComponentGradient;try{componentgradient.displayName="componentgradient",componentgradient.__docgenInfo={description:"",displayName:"componentgradient",props:{css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ComponentGradient/component-gradient.tsx#componentgradient"]={docgenInfo:componentgradient.__docgenInfo,name:"componentgradient",path:"components/molecules/ComponentGradient/component-gradient.tsx#componentgradient"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/HeaderLogo/header-logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_image__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__),_img_openSauced_icon_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./img/openSauced-icon.png"),_img_open_sourced_with_bg_icon_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./img/open-sourced-with-bg-icon.png"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const HeaderLogo=_ref=>{let{textIsBlack,withBg=!1}=_ref;return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default(),{href:"/"},__jsx("div",{className:"flex items-center py-2 gap-2 cursor-pointer"},__jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"rounded",alt:"Open Sauced Logo",width:32,height:32,src:withBg?_img_open_sourced_with_bg_icon_png__WEBPACK_IMPORTED_MODULE_4__.Z:_img_openSauced_icon_png__WEBPACK_IMPORTED_MODULE_3__.Z}),__jsx("p",{className:"font-bold !text-base ".concat(textIsBlack?"!text-black":"!text-white")},"OpenSauced")))};HeaderLogo.displayName="HeaderLogo";const __WEBPACK_DEFAULT_EXPORT__=HeaderLogo;try{headerlogo.displayName="headerlogo",headerlogo.__docgenInfo={description:"",displayName:"headerlogo",props:{textIsBlack:{defaultValue:null,description:"",name:"textIsBlack",required:!1,type:{name:"boolean"}},withBg:{defaultValue:{value:"false"},description:"",name:"withBg",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HeaderLogo/header-logo.tsx#headerlogo"]={docgenInfo:headerlogo.__docgenInfo,name:"headerlogo",path:"components/molecules/HeaderLogo/header-logo.tsx#headerlogo"})}catch(__react_docgen_typescript_loader_error){}},"./img/open-sourced-with-bg-icon.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/open-sourced-with-bg-icon.9a89e34f.png",height:500,width:500,blurDataURL:"static/media/open-sourced-with-bg-icon.9a89e34f.png"}},"./img/openSauced-icon.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/openSauced-icon.e6bb10df.png",height:113,width:112,blurDataURL:"static/media/openSauced-icon.e6bb10df.png"}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{W:()=>clsx,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon,Pd:()=>IconContext});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);
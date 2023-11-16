(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[7736],{"./components/atoms/Card/card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Card=function Card(_ref){var className=_ref.className,children=_ref.children,heading=_ref.heading;return __jsx("article",{className:"".concat(className||""," block ").concat(heading?"":"p-3"," bg-white border rounded-lg shadow-xs")},heading?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"px-3 md:px-6 py-3 rounded-t-lg bg-light-slate-3"},heading),__jsx("div",null,children)):children)};Card.displayName="Card",Card.__docgenInfo={description:"",methods:[],displayName:"Card"},__webpack_exports__.Z=Card;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string | Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Card/card.tsx#card"]={docgenInfo:card.__docgenInfo,name:"card",path:"components/atoms/Card/card.tsx#card"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/HighlightCard/highlight-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return highlight_card}});var react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/go/index.esm.js"),hi_index_esm=__webpack_require__("./node_modules/react-icons/hi/index.esm.js"),hi2_index_esm=__webpack_require__("./node_modules/react-icons/hi2/index.esm.js"),card=__webpack_require__("./components/atoms/Card/card.tsx"),skeleton_wrapper=__webpack_require__("./components/atoms/SkeletonLoader/skeleton-wrapper.tsx"),person_icon=__webpack_require__("./img/icons/person-icon.svg"),metric_arrow_src="static/media/metric-arrow.785914af.svg",stacked_avatar=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx"),__jsx=react.createElement,icons={contributors:{src:person_icon.Z.src,label:"Contributors",color:"bg-blue-100"},participation:{src:"static/media/icon-repo--blue.3027cbd8.svg",label:"Participation",color:"bg-blue-100"},"merged-pr":{src:"static/media/icon-merged-pr--purple.4cc84040.svg",label:"Merged PRs",color:"bg-purple-200"},"unlabeled-pr":{src:"static/media/icon-label--blue.f5e9fc95.svg",label:"Unlabeled PRs",color:"bg-cyan-100"},spam:{src:"static/media/icon-thumbs-down--yellow.6b7da852.svg",label:"Spam",color:"bg-orange-100"},commits:{src:"",label:"Commits",color:"bg-purple-200"},"active-contributors":{src:"",label:"Active Contributors",color:"bg-green-200 text-green-500"},"new-contributors":{src:"",label:"New Contributors",color:"bg-blue-200 text-sky-500"},"alumni-contributors":{src:"",label:"Alumni Contributors",color:"bg-amber-200 text-amber-500"}},HighlightCard=function HighlightCard(_ref){var className=_ref.className,label=_ref.label,icon=_ref.icon,metricIncreases=_ref.metricIncreases,increased=_ref.increased,numChanged=_ref.numChanged,percentage=_ref.percentage,percentageLabel=_ref.percentageLabel,value=_ref.value,valueLabel=_ref.valueLabel,_ref$contributors=_ref.contributors,contributors=void 0===_ref$contributors?[]:_ref$contributors,isLoading=_ref.isLoading;return __jsx(card.Z,{className:"".concat(className||""," flex flex-col w-full sm:max-w-[calc(50%-(1rem/2))] h-auto flex-grow")},__jsx(react.Fragment,null,__jsx("div",{className:"flex justify-between w-full p-1"},__jsx("div",{className:"flex items-center gap-2"},__jsx("div",{className:"w-8 h-8 flex justify-center items-center ".concat(icon?icons[icon].color:"bg-slate-100"," rounded-full")},function getIcon(icon){switch(icon){case"commits":return __jsx(index_esm.D_8,{width:16,height:16});case"active-contributors":return __jsx(hi2_index_esm.$SI,{width:16,height:16});case"new-contributors":return __jsx(hi_index_esm.b9W,{width:16,height:16});case"alumni-contributors":return __jsx(hi_index_esm.Sul,{width:16,height:16});default:return __jsx(next_image.Z,{width:16,height:16,alt:icon?icons[icon].label:"Icon",src:icon?icons[icon].src:"Icon"})}}(icon)),__jsx("div",{className:"text-sm text-slate-600   leading-none"},label||"Label")),__jsx("div",{className:"flex items-center gap-1"},__jsx("div",{className:"text-sm text-slate-600   leading-none"},numChanged||0),__jsx(next_image.Z,{width:14,height:14,alt:(increased?"Increased ":"Decreased ")+label+" by"+numChanged,src:metric_arrow_src,className:"".concat(increased?"":"rotate-180")}))),isLoading?__jsx(skeleton_wrapper.Z,{height:79,count:2}):__jsx("div",{className:"flex flex-col w-full px-6 pb-5 mt-2"},__jsx("div",{className:"flex flex-col items-center"},__jsx("div",{className:"text-4xl"},void 0!==percentage?"".concat(percentage,"%"):__jsx("span",null),void 0!==value?value:""),__jsx("div",{className:"text-base   text-slate-600 mt-0.5"},__jsx("span",null,percentageLabel||"",valueLabel||""," "))),contributors&&contributors.length>0?__jsx("div",{className:"flex items-center justify-center mt-2 h-auto"},__jsx(stacked_avatar.Z,{contributors:contributors,visibleQuantity:5})):__jsx("div",{className:"flex items-center justify-center w-full mt-2 h-8"},__jsx("div",{className:"".concat(metricIncreases?percentage&&percentage>70?"bg-green-500":percentage&&percentage>30?"bg-yellow-500":"bg-purple-500":percentage&&percentage>70?"bg-purple-500":percentage&&percentage>30?"bg-yellow-500":"bg-green-500"," h-3  transition-all duration-500 ease-in-out rounded-l-full"),style:{width:(percentage||0)+"%"}}),__jsx("div",{className:"".concat(void 0!==percentage&&"bg-gray-200"," w-auto flex-auto h-3 ").concat(0===percentage?"rounded-full":"rounded-r-full"," transition-all duration-500 ease-in-out")})))))};HighlightCard.displayName="HighlightCard",HighlightCard.__docgenInfo={description:"",methods:[],displayName:"HighlightCard",props:{contributors:{defaultValue:{value:"[]",computed:!1},required:!1}}};var highlight_card=HighlightCard;try{highlightcard.displayName="highlightcard",highlightcard.__docgenInfo={description:"",displayName:"highlightcard",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"contributors"'},{value:'"participation"'},{value:'"unlabeled-pr"'},{value:'"spam"'},{value:'"merged-pr"'},{value:'"commits"'},{value:'"new-contributors"'},{value:'"active-contributors"'},{value:'"alumni-contributors"'}]}},metricIncreases:{defaultValue:null,description:"",name:"metricIncreases",required:!0,type:{name:"boolean"}},increased:{defaultValue:null,description:"",name:"increased",required:!1,type:{name:"boolean"}},numChanged:{defaultValue:null,description:"",name:"numChanged",required:!1,type:{name:"string | number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!1,type:{name:"number"}},percentageLabel:{defaultValue:null,description:"",name:"percentageLabel",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},valueLabel:{defaultValue:null,description:"",name:"valueLabel",required:!1,type:{name:"string"}},contributors:{defaultValue:{value:"[]"},description:"",name:"contributors",required:!1,type:{name:"Contributor[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HighlightCard/highlight-card.tsx#highlightcard"]={docgenInfo:highlightcard.__docgenInfo,name:"highlightcard",path:"components/molecules/HighlightCard/highlight-card.tsx#highlightcard"})}catch(__react_docgen_typescript_loader_error){}},"./components/organisms/Dashboard/dashboard.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Dashboard_dashboard}});var react=__webpack_require__("./node_modules/react/index.js"),highlight_card=__webpack_require__("./components/molecules/HighlightCard/highlight-card.tsx"),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),next_router=__webpack_require__("./node_modules/next/router.js"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),get_filter_query=__webpack_require__("./lib/utils/get-filter-query.ts"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts"),getInsights=function getInsights(insights){var intervalDay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,currentInsights=insights.find((function(insight){return insight.interval===intervalDay}));if(!currentInsights)return{allPrsTotal:0,allReposTotal:0,spamTotal:0,acceptedTotal:0,spamPercentage:0,acceptedPercentage:0,unlabeledPrsTotal:0,unlabeledPercentage:0,allContributors:0,spamContributors:0,acceptedContributors:0};var spam=(currentInsights.all_prs||0)>0?Math.round(currentInsights.spam_prs/currentInsights.all_prs*100):0,accepted=(currentInsights.all_prs||0)>0?Math.round(currentInsights.accepted_prs/currentInsights.all_prs*100):0,unlabeledPrsTotal=currentInsights.all_prs-(currentInsights.spam_prs+currentInsights.accepted_prs),unlabeled=Math.max(0,(currentInsights.all_prs||0)>0?Math.round(unlabeledPrsTotal/currentInsights.all_prs*100):0);return{allReposTotal:currentInsights.all_repo_total,allPrsTotal:currentInsights.all_prs,spamTotal:currentInsights.spam_prs,acceptedTotal:currentInsights.accepted_prs,unlabeledPrsTotal:unlabeledPrsTotal,spamPercentage:spam,acceptedPercentage:accepted,unlabeledPercentage:unlabeled,allContributors:currentInsights.all_contributors,spamContributors:currentInsights.spam_contributors,acceptedContributors:currentInsights.accepted_contributors}},useContributors=__webpack_require__("./lib/hooks/api/useContributors.ts"),Repositories_repositories=__webpack_require__("./components/organisms/Repositories/repositories.tsx"),__jsx=react.createElement,Dashboard=function Dashboard(_ref){var repositories=_ref.repositories,_useInsights=function useInsights(){var repoIds=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],_router$query=(0,next_router.useRouter)().query,pageId=_router$query.pageId,selectedFilter=_router$query.selectedFilter,topic=pageId,filterQuery=(0,get_filter_query.Z)(selectedFilter),query=new URLSearchParams(filterQuery);topic&&Number.isNaN(Number(topic))&&query.set("topic",topic),(null==repoIds?void 0:repoIds.length)>0&&(query.delete("topic"),query.set("repoIds",repoIds.join(","))),query.get("repo")&&query.delete("topic");var endpointString="".concat("prs/insights","?").concat(query),_useSWR=(0,dist.ZP)(topic?endpointString:null,public_api_fetcher.Z),data=_useSWR.data,error=_useSWR.error;return{data:data||[],isLoading:!error&&!data,isError:!!error,mutate:_useSWR.mutate}}(repositories),insightsData=_useInsights.data,isLoading=_useInsights.isLoading,_useContributors=(0,useContributors.Z)(void 0,repositories),contributorData=_useContributors.data,contributorMeta=_useContributors.meta,compare1=getInsights(insightsData,30),compare2=getInsights(insightsData,60);return __jsx("div",{className:"flex flex-col w-full gap-4"},__jsx("section",{className:"flex flex-wrap items-center max-w-full gap-4 lg:flex-row lg:flex-nowrap"},__jsx(highlight_card.Z,{label:"Contributors",icon:"contributors",metricIncreases:compare1.allPrsTotal-compare2.allPrsTotal>=0,increased:compare1.allPrsTotal-compare2.allPrsTotal>=0,numChanged:(0,humanizeNumber.Z)(Math.abs(compare1.allPrsTotal-compare2.allPrsTotal),"abbreviation"),value:(0,humanizeNumber.Z)(contributorMeta.itemCount,"comma"),contributors:contributorData.map((function(contributor){return{host_login:contributor.author_login}})),isLoading:isLoading}),__jsx(highlight_card.Z,{label:"Spam",icon:"spam",metricIncreases:compare1.spamTotal-compare2.spamTotal>=0,increased:compare1.spamTotal-compare2.spamTotal>=0,numChanged:(0,humanizeNumber.Z)(Math.abs(compare1.spamTotal-compare2.spamTotal),"abbreviation"),percentage:compare1.spamPercentage,percentageLabel:"of ".concat((0,humanizeNumber.Z)(compare1.allPrsTotal,"comma")),isLoading:isLoading}),__jsx(highlight_card.Z,{label:"Merged PRs",icon:"merged-pr",metricIncreases:compare1.acceptedTotal-compare2.acceptedTotal>=0,increased:compare1.acceptedTotal-compare2.acceptedTotal>=0,numChanged:(0,humanizeNumber.Z)(Math.abs(compare1.acceptedTotal-compare2.acceptedTotal),"abbreviation"),percentage:compare1.acceptedPercentage,percentageLabel:"of ".concat((0,humanizeNumber.Z)(compare1.allPrsTotal,"comma")),isLoading:isLoading}),__jsx(highlight_card.Z,{label:"Unlabeled PRs",icon:"unlabeled-pr",metricIncreases:compare1.unlabeledPrsTotal-compare2.unlabeledPrsTotal>=0,increased:compare1.unlabeledPrsTotal-compare2.unlabeledPrsTotal>=0,numChanged:(0,humanizeNumber.Z)(Math.abs(compare1.unlabeledPrsTotal-compare2.unlabeledPrsTotal),"abbreviation"),percentage:compare1.unlabeledPercentage,percentageLabel:"of ".concat((0,humanizeNumber.Z)(compare1.allPrsTotal,"comma")),isLoading:isLoading})),__jsx("section",{className:"flex flex-col max-w-full gap-4 my-6"},__jsx(Repositories_repositories.Z,{repositories:repositories})))};Dashboard.displayName="Dashboard",Dashboard.__docgenInfo={description:"",methods:[],displayName:"Dashboard",props:{repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};var Dashboard_dashboard=Dashboard;try{dashboard.displayName="dashboard",dashboard.__docgenInfo={description:"",displayName:"dashboard",props:{repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/organisms/Dashboard/dashboard.tsx#dashboard"]={docgenInfo:dashboard.__docgenInfo,name:"dashboard",path:"components/organisms/Dashboard/dashboard.tsx#dashboard"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/api/useContributors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),swr__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),next_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/router.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils/get-filter-query.ts");__webpack_exports__.Z=function useContributors(){var _data$data,_data$meta,intialLimit=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,repoIds=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],router=(0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),page=_useState[0],setPage=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(intialLimit),limit=_useState2[0],setLimit=_useState2[1],_router$query=router.query,pageId=_router$query.pageId,selectedFilter=_router$query.selectedFilter,range=_router$query.range,topic=pageId,filterQuery=(0,lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_4__.Z)(selectedFilter),query=new URLSearchParams(filterQuery);Number.isNaN(Number(topic))&&query.set("topic",topic),page&&query.set("page","".concat(page)),limit&&query.set("limit","".concat(limit)),(null==repoIds?void 0:repoIds.length)>0&&(query.delete("topic"),query.set("repoIds",repoIds.join(","))),query.get("repo")&&query.delete("topic"),query.set("range","".concat(null!=range?range:30));var endpointString="".concat("contributors/search","?").concat(query.toString()),_useSWR=(0,swr__WEBPACK_IMPORTED_MODULE_1__.ZP)(endpointString,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_3__.Z),data=_useSWR.data,error=_useSWR.error,mutate=_useSWR.mutate;return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},isLoading:!error&&!data,isError:!!error,mutate:mutate,page:page,setPage:setPage,setLimit:setLimit}}},"./stories/organisms/dashboard.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DashboardOrganism:function(){return DashboardOrganism}});var _DashboardOrganism$pa,_DashboardOrganism$pa2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_organisms_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/organisms/Dashboard/dashboard.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Design System/organisms/Dashboard"};var DashboardOrganism=function DashboardOrganism(){return __jsx(components_organisms_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__.Z,null)};DashboardOrganism.displayName="DashboardOrganism",DashboardOrganism.parameters=_objectSpread(_objectSpread({},DashboardOrganism.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DashboardOrganism$pa=DashboardOrganism.parameters)||void 0===_DashboardOrganism$pa?void 0:_DashboardOrganism$pa.docs),{},{source:_objectSpread({originalSource:"(): JSX.Element => <Dashboard />"},null===(_DashboardOrganism$pa2=DashboardOrganism.parameters)||void 0===_DashboardOrganism$pa2||null===(_DashboardOrganism$pa2=_DashboardOrganism$pa2.docs)||void 0===_DashboardOrganism$pa2?void 0:_DashboardOrganism$pa2.source)})}),DashboardOrganism.__docgenInfo={description:"",methods:[],displayName:"DashboardOrganism"}},"./img/icons/person-icon.svg":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={src:"static/media/person-icon.f2841f1e.svg",height:14,width:12,blurDataURL:"static/media/person-icon.f2841f1e.svg"}},"./node_modules/lodash.debounce/index.js":function(module,__unused_webpack_exports,__webpack_require__){var NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectToString=Object.prototype.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}function toNumber(value){if("number"==typeof value)return value;if(function isSymbol(value){return"symbol"==typeof value||function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&objectToString.call(value)==symbolTag}(value))return NAN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=value.replace(reTrim,"");var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var result=wait-(time-lastCallTime);return maxing?nativeMin(result,maxWait-(time-lastInvokeTime)):result}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/rooks/dist/esm/hooks/useDebounce.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:function(){return useDebounce}});var lodash_debounce=__webpack_require__("./node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),react=__webpack_require__("./node_modules/react/index.js");const useIsomorphicEffect="undefined"==typeof window?react.useEffect:react.useLayoutEffect;function useDebounce(callback,wait,options){const createDebouncedCallback=(0,react.useCallback)((function_=>lodash_debounce_default()(function_,wait,options)),[wait,options]),freshCallback=function useFreshRef(value,preferLayoutEffect=!1){const useEffectToUse=preferLayoutEffect?useIsomorphicEffect:react.useEffect,ref=(0,react.useRef)(value);return useEffectToUse((()=>{ref.current=value})),ref}(callback);const debouncedCallbackRef=(0,react.useRef)(createDebouncedCallback((function tick(...args){var _a;null===(_a=freshCallback.current)||void 0===_a||_a.call(freshCallback,...args)})));return function useWillUnmount(callback){(0,react.useEffect)((()=>callback),[])}((()=>{var _a;return null===(_a=debouncedCallbackRef.current)||void 0===_a?void 0:_a.cancel()})),debouncedCallbackRef.current}}}]);
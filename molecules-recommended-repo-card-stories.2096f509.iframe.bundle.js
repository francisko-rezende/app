"use strict";(self.webpackChunk_open_sauced_insights=self.webpackChunk_open_sauced_insights||[]).push([[3646],{"./components/atoms/Avatar/avatar-hover-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return avatar_hover_card}});var react=__webpack_require__("./node_modules/react/index.js"),index_module=__webpack_require__("./node_modules/@radix-ui/react-hover-card/dist/index.module.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_router=__webpack_require__("./node_modules/next/router.js"),useFetchUser=__webpack_require__("./lib/hooks/useFetchUser.ts"),useContributorPullRequestsChart=__webpack_require__("./lib/hooks/useContributorPullRequestsChart.ts"),github=__webpack_require__("./lib/utils/github.ts"),contributor_hover_card=__webpack_require__("./components/molecules/ContributorHoverCard/contributor-hover-card.tsx"),__jsx=react.createElement,HoverCardWrapper=function HoverCardWrapper(_ref){var username=_ref.username,repositories=_ref.repositories,topic=(0,next_router.useRouter)().query.pageId,contributor=(0,useFetchUser.j)(username).data,repoList=(0,useContributorPullRequestsChart.u)(username,"*",repositories,"30",!0).repoList,profile={githubAvatar:(0,github.cc)(username,40),githubName:username,totalPR:repoList.length},_ref2=null!=contributor?contributor:{},is_maintainer=_ref2.is_maintainer,first_opened_pr_at=_ref2.first_opened_pr_at;return __jsx(react.Fragment,null,__jsx(contributor_hover_card.Z,{dateOfFirstPr:first_opened_pr_at,totalPR:profile.totalPR,githubAvatar:profile.githubAvatar,githubName:profile.githubName,repoList:repoList,topic:topic,repositories:repositories,isMaintainer:!!is_maintainer}))};HoverCardWrapper.__docgenInfo={description:"",methods:[],displayName:"HoverCardWrapper",props:{username:{required:!0,tsType:{name:"string"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};var hover_card_wrapper=HoverCardWrapper;try{hovercardwrapper.displayName="hovercardwrapper",hovercardwrapper.__docgenInfo={description:"",displayName:"hovercardwrapper",props:{username:{defaultValue:null,description:"",name:"username",required:!0,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"]={docgenInfo:hovercardwrapper.__docgenInfo,name:"hovercardwrapper",path:"components/molecules/HoverCardWrapper/hover-card-wrapper.tsx#hovercardwrapper"})}catch(__react_docgen_typescript_loader_error){}var avatar_hover_card_jsx=react.createElement,Avatar=function Avatar(_ref){var contributor=_ref.contributor,_ref$size=_ref.size,width=500,height=500;switch(void 0===_ref$size?"large":_ref$size){case"xsmall":width=24,height=24;break;case"small":width=45,height=45;break;case"medium":width=35,height=35}return avatar_hover_card_jsx(next_image.Z,{alt:contributor,className:"border rounded-full",height:width,src:(0,github.cc)(contributor,40),width:height})};Avatar.displayName="Avatar";var AvatarHoverCard=function AvatarHoverCard(_ref2){var contributor=_ref2.contributor,repositories=_ref2.repositories,_ref2$size=_ref2.size,size=void 0===_ref2$size?"large":_ref2$size;return avatar_hover_card_jsx(index_module.fC,null,avatar_hover_card_jsx(link_default(),{href:"/user/".concat(contributor),as:"/user/".concat(contributor)},avatar_hover_card_jsx(index_module.xz,null,avatar_hover_card_jsx(Avatar,{contributor:contributor,size:size}))),avatar_hover_card_jsx(index_module.h_,null,avatar_hover_card_jsx(index_module.VY,{sideOffset:5},avatar_hover_card_jsx(hover_card_wrapper,{username:contributor,repositories:repositories}))))};AvatarHoverCard.displayName="AvatarHoverCard",AvatarHoverCard.__docgenInfo={description:"",methods:[],displayName:"AvatarHoverCard",props:{size:{defaultValue:{value:'"large"',computed:!1},required:!1}}};var avatar_hover_card=AvatarHoverCard;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:'"large"',computed:!1},required:!1,tsType:{name:"union",raw:'"xsmall" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"xsmall"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},contributor:{required:!0,tsType:{name:"string"},description:""}}};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/atoms/Avatar/avatar-hover-card.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{avatarhovercard.displayName="avatarhovercard",avatarhovercard.__docgenInfo={description:"",displayName:"avatarhovercard",props:{contributor:{defaultValue:null,description:"",name:"contributor",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"xsmall"'},{value:'"large"'}]}},repositories:{defaultValue:null,description:"",name:"repositories",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"]={docgenInfo:avatarhovercard.__docgenInfo,name:"avatarhovercard",path:"components/atoms/Avatar/avatar-hover-card.tsx#avatarhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/atoms/SpinLoader/spin-loader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["className"],_excluded2=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SpinLoader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){_ref.className;var props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref:ref},props,{className:"flex justify-center w-full pt-36 "}),__jsx(Spinner,{className:"mr-2 md:w-16 md:h-16"}))}));SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",methods:[],displayName:"SpinLoader"},__webpack_exports__.Z=SpinLoader;var Spinner=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref:ref},props,{role:"status"}),__jsx("svg",{"aria-hidden":"true",className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("inline w-6 h-6 text-gray-200 animate-spin fill-light-slate-8",className),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),__jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),__jsx("span",{className:"sr-only"},"Loading..."))}));Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner"};try{SpinLoader.displayName="SpinLoader",SpinLoader.__docgenInfo={description:"",displayName:"SpinLoader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"]={docgenInfo:SpinLoader.__docgenInfo,name:"SpinLoader",path:"components/atoms/SpinLoader/spin-loader.tsx#SpinLoader"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/ContributorHoverCard/contributor-hover-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./lib/utils/date-utils.ts"),components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/atoms/Badge/badge.tsx"),_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/molecules/CardProfile/card-profile.tsx"),_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/molecules/CardRepoList/card-repo-list.tsx"),_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./components/molecules/PullRequestTable/pull-request-table.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ContributorHoverCard=function ContributorHoverCard(_ref){var repoList=_ref.repoList,githubName=_ref.githubName,totalPR=_ref.totalPR,dateOfFirstPr=_ref.dateOfFirstPr,githubAvatar=_ref.githubAvatar,repositories=_ref.repositories,isMaintainer=_ref.isMaintainer,topic=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.pageId,calculatedDateFromToday=dateOfFirstPr?(0,lib_utils_date_utils__WEBPACK_IMPORTED_MODULE_6__.wu)(new Date(parseInt(dateOfFirstPr).toString())):"-";return __jsx("div",{className:"w-[364px] bg-white gap-4 p-3 rounded-lg shadow-superlative flex flex-col"},__jsx("div",{className:"flex items-center justify-between"},__jsx(_CardProfile_card_profile__WEBPACK_IMPORTED_MODULE_3__.Z,{dateOfFirstPR:calculatedDateFromToday,githubAvatar:githubAvatar,githubName:githubName,totalPRs:totalPR,isRoundedAvatar:!0}),isMaintainer&&__jsx(components_atoms_Badge_badge__WEBPACK_IMPORTED_MODULE_2__.Z,{text:"maintainer"})),__jsx("div",{className:""},__jsx(_PullRequestTable_pull_request_table__WEBPACK_IMPORTED_MODULE_5__.Z,{isHoverCard:!0,repositories:repositories,limit:5,contributor:githubName,topic:topic})),__jsx("div",null,__jsx(_CardRepoList_card_repo_list__WEBPACK_IMPORTED_MODULE_4__.Z,{repoList:repoList,limit:3})))};ContributorHoverCard.displayName="ContributorHoverCard",ContributorHoverCard.__docgenInfo={description:"",methods:[],displayName:"ContributorHoverCard",props:{repoList:{required:!0,tsType:{name:"Array",elements:[{name:"RepoList"}],raw:"RepoList[]"},description:""},githubAvatar:{required:!0,tsType:{name:"string"},description:""},githubName:{required:!0,tsType:{name:"string"},description:""},totalPR:{required:!0,tsType:{name:"number"},description:""},dateOfFirstPr:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},topic:{required:!1,tsType:{name:"string"},description:""},repositories:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},isMaintainer:{required:!0,tsType:{name:"boolean"},description:""}}},__webpack_exports__.Z=ContributorHoverCard;try{contributorhovercard.displayName="contributorhovercard",contributorhovercard.__docgenInfo={description:"",displayName:"contributorhovercard",props:{repoList:{defaultValue:null,description:"",name:"repoList",required:!0,type:{name:"RepoList[]"}},githubAvatar:{defaultValue:null,description:"",name:"githubAvatar",required:!0,type:{name:"string"}},githubName:{defaultValue:null,description:"",name:"githubName",required:!0,type:{name:"string"}},totalPR:{defaultValue:null,description:"",name:"totalPR",required:!0,type:{name:"number"}},dateOfFirstPr:{defaultValue:null,description:"",name:"dateOfFirstPr",required:!0,type:{name:"string | undefined"}},topic:{defaultValue:null,description:"",name:"topic",required:!1,type:{name:"string"}},repositories:{defaultValue:null,description:"",name:"repositories",required:!1,type:{name:"number[]"}},isMaintainer:{defaultValue:null,description:"",name:"isMaintainer",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"]={docgenInfo:contributorhovercard.__docgenInfo,name:"contributorhovercard",path:"components/molecules/ContributorHoverCard/contributor-hover-card.tsx#contributorhovercard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/RecommendedRepoCard/recommended-repo-card.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return recommended_repo_card}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-icons/bi/index.esm.js"),vsc_index_esm=__webpack_require__("./node_modules/react-icons/vsc/index.esm.js"),ai_index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),github=__webpack_require__("./lib/utils/github.ts"),humanizeNumber=__webpack_require__("./lib/utils/humanizeNumber.ts"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts"),fetchRecommendationByRepo=function useFetchRecommendedRepoByRepoName(owner,repo){var _useSWR=(0,dist.ZP)("repos/".concat(owner,"/").concat(repo),public_api_fetcher.Z),data=_useSWR.data,error=_useSWR.error;return{data:null!=data?data:void 0,isLoading:!data&&!error,isError:!!error,mutate:_useSWR.mutate}},truncate_string=__webpack_require__("./lib/utils/truncate-string.ts"),useRepositoryPullRequests=__webpack_require__("./lib/hooks/api/useRepositoryPullRequests.ts"),get_pr_contributors=__webpack_require__("./lib/utils/get-pr-contributors.ts"),spin_loader=__webpack_require__("./components/atoms/SpinLoader/spin-loader.tsx"),stacked_avatar=__webpack_require__("./components/molecules/StackedAvatar/stacked-avatar.tsx"),__jsx=react.createElement,RecommendedRepoCard=function RecommendedRepoCard(_ref){var fullName=_ref.fullName,className=_ref.className,_fullName$split=fullName.split("/"),_fullName$split2=(0,slicedToArray.Z)(_fullName$split,2),owner=_fullName$split2[0],name=_fullName$split2[1],_useFetchRecommendedR=fetchRecommendationByRepo(owner,name),data=_useFetchRecommendedR.data,isLoading=_useFetchRecommendedR.isLoading,isError=_useFetchRecommendedR.isError,_useRepositoryPullReq=(0,useRepositoryPullRequests.Z)(fullName),repositoryPullRequests=_useRepositoryPullReq.data,meta=(_useRepositoryPullReq.isError,_useRepositoryPullReq.meta),contributorData=(0,get_pr_contributors.Z)(repositoryPullRequests);return __jsx("div",{className:(0,clsx_m.Z)("relative w-full flex flex-col gap-2 p-4  bg-white border rounded-2xl ",className)},isLoading&&__jsx("div",{className:"flex items-center justify-center w-full h-36"},__jsx(spin_loader.$,null)),isError&&__jsx(react.Fragment,null,"An error occured loading ..."),data&&__jsx(react.Fragment,null,__jsx("div",{className:"flex justify-between w-full"},__jsx("a",{target:"_blank",href:"https://github.com/".concat(fullName),className:"flex items-center gap-1.5",rel:"noreferrer"},__jsx("picture",null,__jsx("img",{alt:"Hot Repo Icon",className:"w-4 h-4 overflow-hidden rounded-md",src:(0,github.cc)(owner)})),__jsx("span",{className:"text-sm text-light-slate-11"},owner))),__jsx("div",{className:"flex flex-col gap-2 pb-3"},__jsx("a",{className:"text-xl font-semibold",href:"https://app.opensauced.pizza/hot/repositories/filter/".concat(fullName),rel:"noopener noreferrer",target:"_blank"},name),__jsx("p",{title:data.description,className:"w-5/6 text-sm text-gray-500"},(0,truncate_string.a)(data.description,100))),__jsx("div",{className:"flex flex-wrap items-center justify-between mt-auto text-light-slate-10"},__jsx("div",{className:"flex space-x-3 text-xs"},__jsx("div",{className:"flex items-center justify-center space-x-1 text-sm"},__jsx(vsc_index_esm.gL2,{className:"fill-light-slate-10",size:16}),__jsx("span",{className:"text-lightSlate11"},(0,humanizeNumber.Z)(Number(data.issues),"abbreviation"))),__jsx("div",{className:"flex items-center justify-center space-x-1 text-sm"},__jsx(ai_index_esm.y5j,{className:"fill-lightSlate10",size:16}),__jsx("span",{className:"text-lightSlate11"},(0,humanizeNumber.Z)(Number(data.stars),"abbreviation"))),__jsx("div",{className:"flex items-center justify-center space-x-1 text-sm"},__jsx(index_esm.XeX,{className:"fill-lightSlate10",size:16}),__jsx("span",{className:"text-lightSlate11"},(0,humanizeNumber.Z)(meta.itemCount,"abbreviation")))),__jsx(stacked_avatar.Z,{contributors:contributorData}))))};RecommendedRepoCard.displayName="RecommendedRepoCard",RecommendedRepoCard.__docgenInfo={description:"",methods:[],displayName:"RecommendedRepoCard",props:{fullName:{required:!0,tsType:{name:"string"},description:""}}};var recommended_repo_card=RecommendedRepoCard;try{recommendedrepocard.displayName="recommendedrepocard",recommendedrepocard.__docgenInfo={description:"",displayName:"recommendedrepocard",props:{fullName:{defaultValue:null,description:"",name:"fullName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/RecommendedRepoCard/recommended-repo-card.tsx#recommendedrepocard"]={docgenInfo:recommendedrepocard.__docgenInfo,name:"recommendedrepocard",path:"components/molecules/RecommendedRepoCard/recommended-repo-card.tsx#recommendedrepocard"})}catch(__react_docgen_typescript_loader_error){}},"./components/molecules/StackedAvatar/stacked-avatar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return stacked_avatar}});var react=__webpack_require__("./node_modules/react/index.js"),next_router=__webpack_require__("./node_modules/next/router.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),avatar_hover_card=__webpack_require__("./components/atoms/Avatar/avatar-hover-card.tsx"),dist=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),public_api_fetcher=__webpack_require__("./lib/utils/public-api-fetcher.ts"),hooks_useInsight=function useInsight(id){var baseEndpoint="insights/".concat(id),endpointString="".concat(baseEndpoint),_useSWR=(0,dist.ZP)(id?endpointString:null,public_api_fetcher.Z),data=_useSWR.data,error=_useSWR.error,mutate=_useSWR.mutate;return{data:data,isLoading:!error&&!data,isError:!!error&&Object.keys(error).length>0,mutate:mutate}},console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,StackedAvatar=function StackedAvatar(_ref){var contributors=_ref.contributors,_ref$visibleQuantity=_ref.visibleQuantity,visibleQuantity=void 0===_ref$visibleQuantity?5:_ref$visibleQuantity,classNames=_ref.classNames,pageId=(0,next_router.useRouter)().query.pageId,insightId=Number.isInteger(parseInt(pageId,10))?pageId:"",_useInsight=hooks_useInsight(insightId),insight=_useInsight.data,isError=_useInsight.isError,repositories=insight?insight.repos.map((function(repo){return repo.repo_id})):[];return isError?(console.log("Error fetching insight",isError),__jsx("div",null,"-")):__jsx("div",{className:(0,clsx_m.Z)("flex -space-x-3 transition-all duration-300 hover:-space-x-1",classNames)},contributors&&contributors.slice(0,visibleQuantity).map((function(_ref2){var hostLogin=_ref2.host_login;return __jsx("div",{key:"contributor-avatar-".concat(hostLogin),className:"w-8 h-8 overflow-hidden transition-all duration-300 border-2 border-white border-solid rounded-full"},__jsx(avatar_hover_card.Z,{contributor:hostLogin,repositories:repositories}))})))};StackedAvatar.displayName="StackedAvatar",StackedAvatar.__docgenInfo={description:"",methods:[],displayName:"StackedAvatar",props:{visibleQuantity:{defaultValue:{value:"5",computed:!1},required:!1,tsType:{name:"number"},description:""},contributors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ host_login: string }",signature:{properties:[{key:"host_login",value:{name:"string",required:!0}}]}}],raw:"Contributor[]"},description:""},classNames:{required:!1,tsType:{name:"string"},description:""}}};var stacked_avatar=StackedAvatar;try{stackedavatar.displayName="stackedavatar",stackedavatar.__docgenInfo={description:"",displayName:"stackedavatar",props:{contributors:{defaultValue:null,description:"",name:"contributors",required:!0,type:{name:"Contributor[]"}},visibleQuantity:{defaultValue:{value:"5"},description:"",name:"visibleQuantity",required:!1,type:{name:"number"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"]={docgenInfo:stackedavatar.__docgenInfo,name:"stackedavatar",path:"components/molecules/StackedAvatar/stacked-avatar.tsx#stackedavatar"})}catch(__react_docgen_typescript_loader_error){}},"./lib/hooks/api/useRepositoryPullRequests.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var swr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/swr/core/dist/index.mjs"),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/utils/public-api-fetcher.ts"),lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/utils/get-filter-query.ts");__webpack_exports__.Z=function useRepositoryPullRequests(fullName){var _data$data,_data$meta,limit=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,range=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,_router$query=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query,pageId=_router$query.pageId,selectedFilter=_router$query.selectedFilter,topic=pageId,filterQuery=(0,lib_utils_get_filter_query__WEBPACK_IMPORTED_MODULE_3__.Z)(selectedFilter),query=new URLSearchParams(filterQuery);topic&&Number.isNaN(Number(topic))&&query.set("topic",topic),!query.get("repo")&&fullName&&query.set("repo",fullName),query.get("repo")&&query.delete("topic"),query.set("page","1"),query.set("limit","".concat(limit)),query.set("range","".concat(range));var endpointString="".concat("prs/search","?").concat(query.toString()),_useSWR=(0,swr__WEBPACK_IMPORTED_MODULE_0__.ZP)(fullName?endpointString:null,lib_utils_public_api_fetcher__WEBPACK_IMPORTED_MODULE_2__.Z),data=_useSWR.data,error=_useSWR.error;return{data:null!==(_data$data=null==data?void 0:data.data)&&void 0!==_data$data?_data$data:[],meta:null!==(_data$meta=null==data?void 0:data.meta)&&void 0!==_data$meta?_data$meta:{itemCount:0,limit:0,page:0,hasNextPage:!1,hasPreviousPage:!1,pageCount:0},isLoading:!error&&!data,isError:!!error}}},"./lib/utils/get-pr-contributors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.Z=function getPullRequestsContributors(repositoryPullRequests){return Object.keys(repositoryPullRequests.filter((function(pr){return!pr.author_login.includes("[bot]")})).reduce((function(contributors,pull_request){return _objectSpread(_objectSpread({},contributors),{},(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},pull_request.author_login,!0))}),{})).map((function(author){return{host_login:author}}))}},"./lib/utils/truncate-string.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function truncateString(str,num){return void 0===str||str.length<=num||void 0===str?str:str.slice(0,num)+"..."}__webpack_require__.d(__webpack_exports__,{a:function(){return truncateString}})},"./stories/molecules/recommended-repo-card.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _Default$parameters,_Default$parameters2,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var storyConfig={title:"Design System/Molecules/Recommended Repo Card",component:__webpack_require__("./components/molecules/RecommendedRepoCard/recommended-repo-card.tsx").Z};__webpack_exports__.default=storyConfig;var Default={args:{fullName:"open-sauced/insights"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    fullName: "open-sauced/insights"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})}}]);
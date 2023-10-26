"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4690],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),u=a(6550),i=a(1980),s=a(7392),p=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==u&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},1504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=(a(1839),a(4866)),o=a(5162);const u={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},i=void 0,s={unversionedId:"file-uploads",id:"version-4.1/file-uploads",title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-4.1/file_uploads.mdx",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/4.1/file-uploads",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/file_uploads.mdx",tags:[],version:"4.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698099838,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},sidebar:"version-4.1/docs",previous:{title:"Prefetching records",permalink:"/docs/4.1/prefetch-method"},next:{title:"Pagination",permalink:"/docs/4.1/pagination"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",level:2},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",level:2},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",level:2},{value:"Usage",id:"usage",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"GraphQLite supports this extension through the use of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,r.kt)("p",null,"You must start by installing this package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,r.kt)("h2",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,r.kt)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,r.kt)("h2",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,r.kt)("p",null,"In order to use this, you must first be sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,r.kt)("p",null,"Simply add ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,r.kt)("h2",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,r.kt)("p",null,"Please check the Ecodev/graphql-upload library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,r.kt)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,r.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    #[Mutation]\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")))),(0,r.kt)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."),(0,r.kt)("p",null,"The GraphQL client must send the file using the Upload type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mutation upload($file: Upload!) {\n    upload(file: $file)\n}\n")))}h.isMDXComponent=!0}}]);
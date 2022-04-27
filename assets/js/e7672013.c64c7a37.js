"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[947],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96807:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={id:"authentication_authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization",original_id:"authentication_authorization"},l=void 0,s={unversionedId:"authentication_authorization",id:"version-3.0/authentication_authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields",source:"@site/versioned_docs/version-3.0/authentication_authorization.mdx",sourceDirName:".",slug:"/authentication_authorization",permalink:"/docs/3.0/authentication_authorization",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/authentication_authorization.mdx",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1650920082,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"authentication_authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization",original_id:"authentication_authorization"},sidebar:"version-3.0/docs",previous:{title:"Extending a type",permalink:"/docs/3.0/extend_type"},next:{title:"External type declaration",permalink:"/docs/3.0/external_type_declaration"}},c=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",children:[],level:2},{value:"Constant schemas",id:"constant-schemas",children:[],level:2},{value:"Connecting GraphQLite to your framework&#39;s security module",id:"connecting-graphqlite-to-your-frameworks-security-module",children:[],level:2}],h={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some queries/mutations or fields\nreserved to some users."),(0,a.kt)("p",null,"GraphQLite offers some control over what a user can do with your API based on authentication (whether the user\nis logged or not) or authorization (what rights the user have)."),(0,a.kt)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle, it is up to you to connect this feature to your framework's security mechanism.",(0,a.kt)("br",null),"See ",(0,a.kt)("a",{href:"#connecting-graphqlite-to-your-framework-s-security-module"},"Connecting GraphQLite to your framework's security module"),"."),(0,a.kt)("h2",{id:"logged-and-right-annotations"},(0,a.kt)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,a.kt)("p",null,"GraphQLite exposes two annotations (",(0,a.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,a.kt)("p",null,"In the example above, the query ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,a.kt)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,a.kt)("div",{class:"alert alert--info"},"The query/mutation/field will NOT be part of the GraphQL schema if the current user is not logged or has not the requested right."),(0,a.kt)("h2",{id:"constant-schemas"},"Constant schemas"),(0,a.kt)("p",null,"By default, the schema will vary based on who is connected. This can be a problem with some GraphQL clients as the schema\nis changing from one user to another."),(0,a.kt)("p",null,"If you want to keep a constant schema, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@FailWith")," annotation that contains the value that\nwill be returned for user with insufficient rights."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')),(0,a.kt)("h2",{id:"connecting-graphqlite-to-your-frameworks-security-module"},"Connecting GraphQLite to your framework's security module"),(0,a.kt)("div",{class:"alert alert--info"},"This step is NOT necessary for user using GraphQLite through the Symfony Bundle"),(0,a.kt)("p",null,"GraphQLite needs to know if a user is logged or not, and what rights it has.\nBut this is specific of the framework you use."),(0,a.kt)("p",null,"To plug GraphQLite to your framework's security mechanism, you will have to provide two classes implementing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthenticationServiceInterface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthorizationServiceInterface"))),(0,a.kt)("p",null,"Those two interfaces act as adapters between GraphQLite and your framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthenticationServiceInterface\n{\n    /**\n     * Returns true if the "current" user is logged.\n     *\n     * @return bool\n     */\n    public function isLogged(): bool;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthorizationServiceInterface\n{\n    /**\n     * Returns true if the "current" user has access to the right "$right".\n     *\n     * @param string $right\n     * @return bool\n     */\n    public function isAllowed(string $right): bool;\n}\n')))}p.isMDXComponent=!0}}]);
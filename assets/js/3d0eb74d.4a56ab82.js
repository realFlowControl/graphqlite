"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle"},p=void 0,s={unversionedId:"symfony-bundle",id:"version-4.3/symfony-bundle",title:"Getting started with Symfony",description:"Be advised! This documentation will be removed in a future release.  For current and up-to-date Symfony bundle specific documentation, please see the Github repository.",source:"@site/versioned_docs/version-4.3/symfony-bundle.md",sourceDirName:".",slug:"/symfony-bundle",permalink:"/docs/4.3/symfony-bundle",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/symfony-bundle.md",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1655309228,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle"},sidebar:"version-4.3/docs",previous:{title:"Getting Started",permalink:"/docs/4.3/getting-started"},next:{title:"Laravel package",permalink:"/docs/4.3/laravel-package"}},c={},u=[{value:"Applications that use Symfony Flex",id:"applications-that-use-symfony-flex",level:2},{value:"Applications that don&#39;t use Symfony Flex",id:"applications-that-dont-use-symfony-flex",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"Customizing error handling",id:"customizing-error-handling",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Be advised!")," This documentation will be removed in a future release.  For current and up-to-date Symfony bundle specific documentation, please see the ",(0,o.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite-bundle"},"Github repository"),"."),(0,o.kt)("p",null,"The GraphQLite bundle is compatible with ",(0,o.kt)("strong",{parentName:"p"},"Symfony 4.x")," and ",(0,o.kt)("strong",{parentName:"p"},"Symfony 5.x"),"."),(0,o.kt)("h2",{id:"applications-that-use-symfony-flex"},"Applications that use Symfony Flex"),(0,o.kt)("p",null,"Open a command console, enter your project directory and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,o.kt)("p",null,"Now, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml")," file and edit the namespaces to match your application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/packages/graphqlite.yaml"',title:'"config/packages/graphqlite.yaml"'},"graphqlite:\n  namespace:\n    # The namespace(s) that will store your GraphQLite controllers.\n    # It accept either a string or a list of strings.\n    controllers: App\\GraphQLController\\\n    # The namespace(s) that will store your GraphQL types and factories.\n    # It accept either a string or a list of strings.\n    types:\n    - App\\Types\\\n    - App\\Entity\\\n")),(0,o.kt)("p",null,"More advanced parameters are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"#advanced-configuration"},'"advanced configuration" section')),(0,o.kt)("h2",{id:"applications-that-dont-use-symfony-flex"},"Applications that don't use Symfony Flex"),(0,o.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,o.kt)("p",null,"Enable the library by adding it to the list of registered bundles in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/AppKernel.php")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/AppKernel.php"',title:'"app/AppKernel.php"'},"<?php\n\nclass AppKernel extends Kernel\n{\n    public function registerBundles()\n    {\n        $bundles = array(\n            // other bundles...\n            new TheCodingMachine\\GraphQLite\\Bundle\\GraphQLiteBundle,\n        );\n    }\n}\n")),(0,o.kt)("p",null,'Now, enable the "graphql/" route by editing the ',(0,o.kt)("inlineCode",{parentName:"p"},"config/routes.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/routes.yaml"',title:'"config/routes.yaml"'},"# Add these 2 lines to config/routes.yaml\ngraphqlite_bundle:\n  resource: '@GraphqliteBundle/Resources/config/routes.xml'\n")),(0,o.kt)("p",null,"Last but not least, create the configuration file at ",(0,o.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/packages/graphqlite.yaml"',title:'"config/packages/graphqlite.yaml"'},"graphqlite:\n  namespace:\n    # The namespace(s) that will store your GraphQLite controllers.\n    # It accept either a string or a list of strings.\n    controllers: App\\GraphqlController\\\n    # The namespace(s) that will store your GraphQL types and factories.\n    # It accept either a string or a list of strings.\n    types:\n    - App\\Types\\\n    - App\\Entity\\\n")),(0,o.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,o.kt)("h3",{id:"customizing-error-handling"},"Customizing error handling"),(0,o.kt)("p",null,'You can add a "debug" section in the ',(0,o.kt)("inlineCode",{parentName:"p"},"graphqlite.yaml")," file to customize the way errors are handled.\nBy default, GraphQLite configures the underlying Webonyx GraphQL library this way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All exceptions that implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"ClientAware")," interface are caught by GraphQLite"),(0,o.kt)("li",{parentName:"ul"},"All other exceptions will bubble up and by caught by Symfony error handling mechanism")),(0,o.kt)("p",null,"We found out those settings to be quite convenient but you can override those to your preference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/packages/graphqlite.yaml"',title:'"config/packages/graphqlite.yaml"'},"graphqlite:\n  # ...\n  debug:\n    # Include exception messages in output when an error arises.\n    INCLUDE_DEBUG_MESSAGE: false\n    # Include stacktrace in output when an error arises.\n    INCLUDE_TRACE: false\n    # Exceptions are not caught by the engine and propagated to Symfony.\n    RETHROW_INTERNAL_EXCEPTIONS: false\n    # Exceptions that do not implement ClientAware interface are\n    # not caught by the engine and propagated to Symfony.\n    RETHROW_UNSAFE_EXCEPTIONS: true\n")),(0,o.kt)("p",null,"The debug parameters are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Do not put your GraphQL controllers in the ",(0,o.kt)("code",null,"App\\Controller")," namespace")," Symfony applies a particular compiler pass to classes in the ",(0,o.kt)("code",null,"App\\Controller")," namespace. This compiler pass will prevent you from using input types. Put your controllers in another namespace. We advise using ",(0,o.kt)("code",null,"App\\GraphqlController"),"."),(0,o.kt)("p",null,"The Symfony bundle come with a set of advanced features that are not described in this install documentation (like providing a login/logout mutation out of the box). Jump to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.3/symfony-bundle-advanced"},'"Symfony specific features"')," documentation of GraphQLite if you want to learn more."))}m.isMDXComponent=!0}}]);
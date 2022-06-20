"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5593],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(86010),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(87462),a=t(67294),o=t(86010),i=t(72389),l=t(67392),s=t(7094),p=t(12466),c="tabList__CuJ",u="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,y=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.l)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(n=null!=h?h:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),$=k.tabGroupChoices,S=k.setTabGroupChoices,C=(0,a.useState)(w),N=C[0],x=C[1],T=[],P=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var q=$[f];null!=q&&q!==N&&b.some((function(e){return e.value===q}))&&x(q)}var M=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==N&&(P(n),x(r),null!=f&&S(f,String(r)))},G=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;t=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;t=null!=(o=T[i])?o:T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return T.push(e)},onKeyDown:G,onFocus:M,onClick:M},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function h(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},19508:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return h}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(65488),l=t(85162),s=["components"],p={id:"other-frameworks",title:"Getting started with any framework",sidebar_label:"Other frameworks / No framework",original_id:"other-frameworks"},c=void 0,u={unversionedId:"other-frameworks",id:"version-4.1/other-frameworks",title:"Getting started with any framework",description:"If you are using Symfony 4.x, checkout the Symfony bundle.",source:"@site/versioned_docs/version-4.1/other_frameworks.mdx",sourceDirName:".",slug:"/other-frameworks",permalink:"/docs/4.1/other-frameworks",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/other_frameworks.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1655309228,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"other-frameworks",title:"Getting started with any framework",sidebar_label:"Other frameworks / No framework",original_id:"other-frameworks"},sidebar:"version-4.1/docs",previous:{title:"Universal service providers",permalink:"/docs/4.1/universal_service_providers"},next:{title:"Queries",permalink:"/docs/4.1/queries"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Integration",id:"integration",level:2},{value:"GraphQLite context",id:"graphqlite-context",level:3},{value:"Minimal example",id:"minimal-example",level:2},{value:"PSR-15 Middleware",id:"psr-15-middleware",level:2},{value:"Example",id:"example",level:3}],m={toc:h};function f(e){var n=e.components,p=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("strong",{parentName:"p"},"Symfony 4.x"),", checkout the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/symfony-bundle"},"Symfony bundle"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite\n")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"In order to bootstrap GraphQLite, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A PSR-11 compatible container"),(0,o.kt)("li",{parentName:"ul"},"A PSR-16 cache")),(0,o.kt)("p",null,"Additionally, you will have to route the HTTP requests to the underlying GraphQL library."),(0,o.kt)("p",null,"GraphQLite relies on the ",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/"},"webonyx/graphql-php")," library internally.\nThis library plays well with PSR-7 requests and we also provide a ",(0,o.kt)("a",{parentName:"p",href:"#psr-15-middleware"},"PSR-15 middleware"),"."),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Webonyx/graphql-php library requires a ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/schema/"},"Schema")," in order to resolve\nGraphQL queries. We provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaFactory")," class to create such a schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\SchemaFactory;\n\n// $cache is a PSR-16 compatible cache\n// $container is a PSR-11 compatible container\n$factory = new SchemaFactory($cache, $container);\n$factory->addControllerNamespace('App\\\\Controllers\\\\')\n        ->addTypeNamespace('App\\\\');\n\n$schema = $factory->createSchema();\n")),(0,o.kt)("p",null,"You can now use this schema with ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/getting-started/#hello-world"},"Webonyx GraphQL facade"),"\nor the ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/executing-queries/#using-server"},"StandardServer class"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaFactory")," class also comes with a number of methods that you can use to customize your GraphQLite settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Configure an authentication service (to resolve the @Logged annotations).\n$factory->setAuthenticationService(new VoidAuthenticationService());\n// Configure an authorization service (to resolve the @Right annotations).\n$factory->setAuthorizationService(new VoidAuthorizationService());\n// Change the naming convention of GraphQL types globally.\n$factory->setNamingStrategy(new NamingStrategy());\n// Add a custom type mapper.\n$factory->addTypeMapper($typeMapper);\n// Add a custom type mapper using a factory to create it.\n// Type mapper factories are useful if you need to inject the "recursive type mapper" into your type mapper constructor.\n$factory->addTypeMapperFactory($typeMapperFactory);\n// Add a root type mapper.\n$factory->addRootTypeMapper($rootTypeMapper);\n// Add a parameter mapper.\n$factory->addParameterMapper($parameterMapper);\n// Add a query provider. These are used to find queries and mutations in the application.\n$factory->addQueryProvider($queryProvider);\n// Add a query provider using a factory to create it.\n// Query provider factories are useful if you need to inject the "fields builder" into your query provider constructor.\n$factory->addQueryProviderFactory($queryProviderFactory);\n// Add custom options to the Webonyx underlying Schema.\n$factory->setSchemaConfig($schemaConfig);\n// Configures the time-to-live for the GraphQLite cache. Defaults to 2 seconds in dev mode.\n$factory->setGlobTtl(2);\n// Enables prod-mode (cache settings optimized for best performance).\n// This is a shortcut for `$schemaFactory->setGlobTtl(null)`\n$factory->prodMode();\n// Enables dev-mode (this is the default mode: cache settings optimized for best developer experience).\n// This is a shortcut for `$schemaFactory->setGlobTtl(2)`\n$factory->devMode();\n')),(0,o.kt)("h3",{id:"graphqlite-context"},"GraphQLite context"),(0,o.kt)("p",null,'Webonyx allows you pass a "context" object when running a query.\nFor some GraphQLite features to work (namely: the prefetch feature), GraphQLite needs you to initialize the Webonyx context\nwith an instance of the ',(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Context\\Context")," class."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Context\\Context;\n\n$result = GraphQL::executeQuery($schema, $query, null, new Context(), $variableValues);\n")),(0,o.kt)("h2",{id:"minimal-example"},"Minimal example"),(0,o.kt)("p",null,"The smallest working example using no framework is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse GraphQL\\GraphQL;\nuse GraphQL\\Type\\Schema;\nuse TheCodingMachine\\GraphQLite\\SchemaFactory;\nuse TheCodingMachine\\GraphQLite\\Context\\Context;\n\n// $cache is a PSR-16 compatible cache.\n// $container is a PSR-11 compatible container.\n$factory = new SchemaFactory($cache, $container);\n$factory->addControllerNamespace('App\\\\Controllers\\\\')\n        ->addTypeNamespace('App\\\\');\n\n$schema = $factory->createSchema();\n\n$rawInput = file_get_contents('php://input');\n$input = json_decode($rawInput, true);\n$query = $input['query'];\n$variableValues = isset($input['variables']) ? $input['variables'] : null;\n\n$result = GraphQL::executeQuery($schema, $query, null, new Context(), $variableValues);\n$output = $result->toArray();\n\nheader('Content-Type: application/json');\necho json_encode($output);\n")),(0,o.kt)("h2",{id:"psr-15-middleware"},"PSR-15 Middleware"),(0,o.kt)("p",null,"When using a framework, you will need a way to route your HTTP requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"webonyx/graphql-php")," library."),(0,o.kt)("p",null,"If the framework you are using is compatible with PSR-15 (like Slim PHP or Zend-Expressive / Laminas), GraphQLite\ncomes with a PSR-15 middleware out of the box."),(0,o.kt)("p",null,"In order to get an instance of this middleware, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Psr15GraphQLMiddlewareBuilder")," builder class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// $schema is an instance of the GraphQL schema returned by SchemaFactory::createSchema (see previous chapter)\n$builder = new Psr15GraphQLMiddlewareBuilder($schema);\n\n$middleware = $builder->createMiddleware();\n\n// You can now inject your middleware in your favorite PSR-15 compatible framework.\n// For instance:\n$zendMiddlewarePipe->pipe($middleware);\n")),(0,o.kt)("p",null,"The builder offers a number of setters to modify its behaviour:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$builder->setUrl("/graphql"); // Modify the URL endpoint (defaults to /graphql)\n$config = $builder->getConfig(); // Returns a Webonyx ServerConfig object. Use this object to configure Webonyx in details.\n$builder->setConfig($config);\n\n$builder->setResponseFactory(new ResponseFactory()); // Set a PSR-18 ResponseFactory (not needed if you are using zend-framework/zend-diactoros ^2\n$builder->setStreamFactory(new StreamFactory()); // Set a PSR-18 StreamFactory (not needed if you are using zend-framework/zend-diactoros ^2\n$builder->setHttpCodeDecider(new HttpCodeDecider()); // Set a class in charge of deciding the HTTP status code based on the response.\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, we will focus on getting a working version of GraphQLite using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.zendframework.com/zend-stratigility/"},"Zend Stratigility")," as a PSR-15 server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mouf/picotainer")," (a micro-container) for the PSR-11 container"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"symfony/cache ")," for the PSR-16 cache")),(0,o.kt)("p",null,"The choice of the libraries is really up to you. You can adapt it based on your needs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"composer.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "autoload": {\n    "psr-4": {\n      "App\\\\": "src/"\n    }\n  },\n  "require": {\n    "thecodingmachine/graphqlite": "^4",\n    "zendframework/zend-diactoros": "^2",\n    "zendframework/zend-stratigility": "^3",\n    "zendframework/zend-httphandlerrunner": "^1.0",\n    "mouf/picotainer": "^1.1",\n    "symfony/cache": "^4.2"\n  },\n  "minimum-stability": "dev",\n  "prefer-stable": true\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"index.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Laminas\\Diactoros\\Response;\nuse Laminas\\Diactoros\\ServerRequest;\nuse Laminas\\Diactoros\\ServerRequestFactory;\nuse Zend\\HttpHandlerRunner\\Emitter\\SapiStreamEmitter;\nuse Zend\\Stratigility\\Middleware\\ErrorResponseGenerator;\nuse Zend\\Stratigility\\MiddlewarePipe;\nuse Laminas\\Diactoros\\Server;\nuse Zend\\HttpHandlerRunner\\RequestHandlerRunner;\n\nrequire_once __DIR__ . '/vendor/autoload.php';\n\n$container = require 'config/container.php';\n\n$serverRequestFactory = [ServerRequestFactory::class, 'fromGlobals'];\n\n$errorResponseGenerator = function (Throwable $e) {\n    $generator = new ErrorResponseGenerator();\n    return $generator($e, new ServerRequest(), new Response());\n};\n\n$runner = new RequestHandlerRunner(\n    $container->get(MiddlewarePipe::class),\n    new SapiStreamEmitter(),\n    $serverRequestFactory,\n    $errorResponseGenerator\n);\n$runner->run();\n")),(0,o.kt)("p",null,"Here we are initializing a Zend ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestHandler")," (it receives requests) and we pass it to a Zend Stratigility ",(0,o.kt)("inlineCode",{parentName:"p"},"MiddlewarePipe"),".\nThis ",(0,o.kt)("inlineCode",{parentName:"p"},"MiddlewarePipe")," comes from the container declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/container.php")," file:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/container.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse GraphQL\\Type\\Schema;\nuse Mouf\\Picotainer\\Picotainer;\nuse Psr\\Container\\ContainerInterface;\nuse Psr\\SimpleCache\\CacheInterface;\nuse Symfony\\Component\\Cache\\Simple\\ApcuCache;\nuse TheCodingMachine\\GraphQLite\\Http\\Psr15GraphQLMiddlewareBuilder;\nuse TheCodingMachine\\GraphQLite\\SchemaFactory;\nuse Zend\\Stratigility\\MiddlewarePipe;\n\n// Picotainer is a minimalist PSR-11 container.\nreturn new Picotainer([\n    MiddlewarePipe::class => function(ContainerInterface $container) {\n        $pipe = new MiddlewarePipe();\n        $pipe->pipe($container->get(WebonyxGraphqlMiddleware::class));\n        return $pipe;\n    },\n    // The WebonyxGraphqlMiddleware is a PSR-15 compatible\n    // middleware that exposes Webonyx schemas.\n    WebonyxGraphqlMiddleware::class => function(ContainerInterface $container) {\n        $builder = new Psr15GraphQLMiddlewareBuilder($container->get(Schema::class));\n        return $builder->createMiddleware();\n    },\n    CacheInterface::class => function() {\n        return new ApcuCache();\n    },\n    Schema::class => function(ContainerInterface $container) {\n        // The magic happens here. We create a schema using GraphQLite SchemaFactory.\n        $factory = new SchemaFactory($container->get(CacheInterface::class), $container);\n        $factory->addControllerNamespace('App\\\\Controllers\\\\');\n        $factory->addTypeNamespace('App\\\\');\n        return $factory->createSchema();\n    }\n]);\n")),(0,o.kt)("p",null,"Now, we need to add a first query and therefore create a controller.\nThe application will look into the ",(0,o.kt)("inlineCode",{parentName:"p"},"App\\Controllers")," namespace for GraphQLite controllers."),(0,o.kt)("p",null,"It assumes that the container has an entry whose name is the controller's fully qualified class name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/Controllers/MyController.php")),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controllers;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello '.$name;\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controllers;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello '.$name;\n    }\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/container.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Controllers\\MyController;\n\nreturn new Picotainer([\n    // ...\n\n    // We declare the controller in the container.\n    MyController::class => function() {\n        return new MyController();\n    },\n]);\n")),(0,o.kt)("p",null,"And we are done! You can now test your query using your favorite GraphQL client."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(91410).Z,width:"1132",height:"352"})))}f.isMDXComponent=!0},91410:function(e,n,t){n.Z=t.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);
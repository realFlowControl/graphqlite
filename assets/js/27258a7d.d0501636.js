"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2583],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=i(n),m=r,d=y["".concat(u,".").concat(m)]||y[m]||c[m]||p;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),p="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(p,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),p=n(86010),o=n(72389),l=n(67392),u=n(7094),i=n(12466),s="tabList__CuJ",c="tabItem_LNqP";function y(e){var t,n,o=e.lazy,y=e.block,m=e.defaultValue,d=e.values,h=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==T&&!k.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,u.U)(),N=v.tabGroupChoices,w=v.setTabGroupChoices,$=(0,r.useState)(T),I=$[0],x=$[1],O=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=N[h];null!=M&&M!==I&&k.some((function(e){return e.value===M}))&&x(M)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==I&&(C(t),x(a),null!=h&&w(h,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var p,o=O.indexOf(e.currentTarget)-1;n=null!=(p=O[o])?p:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":y},f)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:P,onClick:P},o,{className:(0,p.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,o.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},88031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),o=n(65488),l=n(85162),u=["components"],i={id:"custom-types",title:"Custom types",sidebar_label:"Custom types"},s=void 0,c={unversionedId:"custom-types",id:"custom-types",title:"Custom types",description:"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.",source:"@site/docs/custom-types.mdx",sourceDirName:".",slug:"/custom-types",permalink:"/docs/next/custom-types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/custom-types.mdx",tags:[],version:"current",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1655309228,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"custom-types",title:"Custom types",sidebar_label:"Custom types"},sidebar:"docs",previous:{title:"Pagination",permalink:"/docs/next/pagination"},next:{title:"Custom annotations",permalink:"/docs/next/field-middlewares"}},y={},m=[{value:"Usage",id:"usage",level:2},{value:"Registering a custom output type (advanced)",id:"registering-a-custom-output-type-advanced",level:2},{value:"Symfony users",id:"symfony-users",level:3},{value:"Other frameworks",id:"other-frameworks",level:3},{value:"Registering a custom scalar type (advanced)",id:"registering-a-custom-scalar-type-advanced",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,p.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite."),(0,p.kt)("p",null,"For instance:"),(0,p.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Type(class: Product::class)]\nclass ProductType\n{\n    #[Field]\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n"))),(0,p.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field\n     */\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n")))),(0,p.kt)("p",null,"In the example above, GraphQLite will generate a GraphQL schema with a field ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," of type ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n    id: String!\n}\n")),(0,p.kt)("p",null,"GraphQL comes with an ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," scalar type. But PHP has no such type. So GraphQLite does not know when a variable\nis an ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," or not."),(0,p.kt)("p",null,"You can help GraphQLite by manually specifying the output type to use:"),(0,p.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'    #[Field(outputType: "ID")]\n'))),(0,p.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'    /**\n     * @Field(name="id", outputType="ID")\n     */\n')))),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"outputType")," attribute will map the return value of the method to the output type passed in parameter."),(0,p.kt)("p",null,"You can use the ",(0,p.kt)("inlineCode",{parentName:"p"},"outputType")," attribute in the following annotations:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"@Query")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"@Mutation")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"@Field")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"@SourceField")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"@MagicField"))),(0,p.kt)("h2",{id:"registering-a-custom-output-type-advanced"},"Registering a custom output type (advanced)"),(0,p.kt)("p",null,"In order to create a custom output type, you need to:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Design a class that extends ",(0,p.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ObjectType"),"."),(0,p.kt)("li",{parentName:"ol"},"Register this class in the GraphQL schema.")),(0,p.kt)("p",null,"You'll find more details on the ",(0,p.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/object-types/"},"Webonyx documentation"),"."),(0,p.kt)("hr",null),(0,p.kt)("p",null,"In order to find existing types, the schema is using ",(0,p.kt)("em",{parentName:"p"},"type mappers")," (classes implementing the ",(0,p.kt)("inlineCode",{parentName:"p"},"TypeMapperInterface")," interface)."),(0,p.kt)("p",null,"You need to make sure that one of these type mappers can return an instance of your type. The way you do this will depend on the framework\nyou use."),(0,p.kt)("h3",{id:"symfony-users"},"Symfony users"),(0,p.kt)("p",null,"Any class extending ",(0,p.kt)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\ObjectType")," (and available in the container) will be automatically detected\nby Symfony and added to the schema."),(0,p.kt)("p",null,"If you want to automatically map the output type to a given PHP class, you will have to explicitly declare the output type\nas a service and use the ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql.output_type")," tag:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"# config/services.yaml\nservices:\n    App\\MyOutputType:\n        tags:\n            - { name: 'graphql.output_type', class: 'App\\MyPhpClass' }\n")),(0,p.kt)("h3",{id:"other-frameworks"},"Other frameworks"),(0,p.kt)("p",null,"The easiest way is to use a ",(0,p.kt)("inlineCode",{parentName:"p"},"StaticTypeMapper"),". Use this class to register custom output types."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"// Sample code:\n$staticTypeMapper = new StaticTypeMapper();\n\n// Let's register a type that maps by default to the \"MyClass\" PHP class\n$staticTypeMapper->setTypes([\n    MyClass::class => new MyCustomOutputType()\n]);\n\n// If you don't want your output type to map to any PHP class by default, use:\n$staticTypeMapper->setNotMappedTypes([\n    new MyCustomOutputType()\n]);\n\n// Register the static type mapper in your application using the SchemaFactory instance\n$schemaFactory->addTypeMapper($staticTypeMapper);\n")),(0,p.kt)("h2",{id:"registering-a-custom-scalar-type-advanced"},"Registering a custom scalar type (advanced)"),(0,p.kt)("p",null,"If you need to add custom scalar types, first, check the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),'.\nIt contains a number of "out-of-the-box" scalar types ready to use and you might find what you need there.'),(0,p.kt)("p",null,"You still need to develop your custom scalar type? Ok, let's get started."),(0,p.kt)("p",null,"In order to add a scalar type in GraphQLite, you need to:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"create a ",(0,p.kt)("a",{parentName:"li",href:"https://webonyx.github.io/graphql-php/type-system/scalar-types/#writing-custom-scalar-types"},"Webonyx custom scalar type"),".\nYou do this by creating a class that extends ",(0,p.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ScalarType"),"."),(0,p.kt)("li",{parentName:"ul"},'create a "type mapper" that will map PHP types to the GraphQL scalar type. You do this by writing a class implementing the ',(0,p.kt)("inlineCode",{parentName:"li"},"RootTypeMapperInterface"),"."),(0,p.kt)("li",{parentName:"ul"},'create a "type mapper factory" that will be in charge of creating your "type mapper".')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"interface RootTypeMapperInterface\n{\n    /**\n     * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n     */\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n    /**\n     * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n     */\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n\n    public function mapNameToType(string $typeName): NamedType;\n}\n")),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"toGraphQLInputType")," are meant to map a return type (for output types) or a parameter type (for input types)\nto your GraphQL scalar type. Return your scalar type if there is a match or ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," if there no match."),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"mapNameToType")," should return your GraphQL scalar type if ",(0,p.kt)("inlineCode",{parentName:"p"},"$typeName")," is the name of your scalar type."),(0,p.kt)("p",null,"RootTypeMapper are organized ",(0,p.kt)("strong",{parentName:"p"},"in a chain")," (they are actually middlewares).\nEach instance of a ",(0,p.kt)("inlineCode",{parentName:"p"},"RootTypeMapper")," holds a reference on the next root type mapper to be called in the chain."),(0,p.kt)("p",null,"For instance:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'class AnyScalarTypeMapper implements RootTypeMapperInterface\n{\n    /** @var RootTypeMapperInterface */\n    private $next;\n\n    public function __construct(RootTypeMapperInterface $next)\n    {\n        $this->next = $next;\n    }\n\n    public function toGraphQLOutputType(Type $type, ?OutputType $subType, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?OutputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLOutputType($type, $subType, $refMethod, $docBlockObj);\n    }\n\n    public function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, ReflectionMethod $refMethod, DocBlock $docBlockObj): ?InputType\n    {\n        if ($type instanceof Scalar) {\n            // AnyScalarType is a class implementing the Webonyx ScalarType type.\n            return AnyScalarType::getInstance();\n        }\n        // If the PHPDoc type is not "Scalar", let\'s pass the control to the next type mapper in the chain\n        return $this->next->toGraphQLInputType($type, $subType, $argumentName, $refMethod, $docBlockObj);\n    }\n\n    /**\n     * Returns a GraphQL type by name.\n     * If this root type mapper can return this type in "toGraphQLOutputType" or "toGraphQLInputType", it should\n     * also map these types by name in the "mapNameToType" method.\n     *\n     * @param string $typeName The name of the GraphQL type\n     * @return NamedType|null\n     */\n    public function mapNameToType(string $typeName): ?NamedType\n    {\n        if ($typeName === AnyScalarType::NAME) {\n            return AnyScalarType::getInstance();\n        }\n        return null;\n    }\n}\n')),(0,p.kt)("p",null,"Now, in order to create an instance of your ",(0,p.kt)("inlineCode",{parentName:"p"},"AnyScalarTypeMapper")," class, you need an instance of the ",(0,p.kt)("inlineCode",{parentName:"p"},"$next")," type mapper in the chain.\nHow do you get the ",(0,p.kt)("inlineCode",{parentName:"p"},"$next")," type mapper? Through a factory:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"class AnyScalarTypeMapperFactory implements RootTypeMapperFactoryInterface\n{\n    public function create(RootTypeMapperInterface $next, RootTypeMapperFactoryContext $context): RootTypeMapperInterface\n    {\n        return new AnyScalarTypeMapper($next);\n    }\n}\n")),(0,p.kt)("p",null,"Now, you need to register this factory in your application, and we are done."),(0,p.kt)("p",null,"You can register your own root mapper factories using the ",(0,p.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addRootTypeMapperFactory()")," method."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addRootTypeMapperFactory(new AnyScalarTypeMapperFactory());\n")),(0,p.kt)("p",null,'If you are using the Symfony bundle, the factory will be automatically registered, you have nothing to do (the service\nis automatically tagged with the "graphql.root_type_mapper_factory" tag).'))}h.isMDXComponent=!0}}]);
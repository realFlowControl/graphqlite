"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2196],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),o=n(67294),r=n(72389),i=n(79443);var u=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(83039),p=n(86010),c="tabItem_vU9c";function s(e){var t,n,a,r=e.lazy,i=e.block,s=e.defaultValue,d=e.values,h=e.groupId,y=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=u(),k=v.tabGroupChoices,P=v.setTabGroupChoices,T=(0,o.useState)(g),$=T[0],I=T[1],w=[],L=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var N=k[h];null!=N&&N!==$&&f.some((function(e){return e.value===N}))&&I(N)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==$&&(L(t),I(a),null!=h&&P(h,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var o=w.indexOf(e.currentTarget)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},y)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:$===t?0:-1,"aria-selected":$===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":$===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},null!=n?n:t)}))),r?(0,o.cloneElement)(m.filter((function(e){return e.props.value===$}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==$})}))))}function d(e){var t=(0,r.Z)();return o.createElement(s,(0,a.Z)({key:String(t)},e))}},81217:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(55064),u=n(58215),l=["components"],p={id:"input-types",title:"Input types",sidebar_label:"Input types",original_id:"input-types"},c=void 0,s={unversionedId:"input-types",id:"version-4.1/input-types",isDocsHomePage:!1,title:"Input types",description:"Let's admit you are developing an API that returns a list of cities around a location.",source:"@site/versioned_docs/version-4.1/input-types.mdx",sourceDirName:".",slug:"/input-types",permalink:"/docs/4.1/input-types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/input-types.mdx",tags:[],version:"4.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1646363239,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"input-types",title:"Input types",sidebar_label:"Input types",original_id:"input-types"},sidebar:"version-4.1/docs",previous:{title:"External type declaration",permalink:"/docs/4.1/external_type_declaration"},next:{title:"Inheritance and interfaces",permalink:"/docs/4.1/inheritance-interfaces"}},d=[{value:"Specifying the input type name",id:"specifying-the-input-type-name",children:[],level:3},{value:"Forcing an input type",id:"forcing-an-input-type",children:[],level:3},{value:"Declaring several input types for the same PHP class",id:"declaring-several-input-types-for-the-same-php-class",children:[],level:3},{value:"Ignoring some parameters",id:"ignoring-some-parameters",children:[],level:3}],h={toc:d};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's admit you are developing an API that returns a list of cities around a location."),(0,r.kt)("p",null,"Your GraphQL query might look like this:"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return City[]\n     */\n    #[Query]\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n"))),(0,r.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return City[]\n     */\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")))),(0,r.kt)("p",null,"If you try to run this code, you will get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CannotMapTypeException: cannot map class "Location" to a known GraphQL input type. Check your TypeMapper configuration.\n')),(0,r.kt)("p",null,"You are running into this error because GraphQLite does not know how to handle the ",(0,r.kt)("inlineCode",{parentName:"p"},"Location")," object."),(0,r.kt)("p",null,"In GraphQL, an object passed in parameter of a query or mutation (or any field) is called an ",(0,r.kt)("strong",{parentName:"p"},"Input Type"),"."),(0,r.kt)("p",null,"In order to declare that type, in GraphQLite, we will declare a ",(0,r.kt)("strong",{parentName:"p"},"Factory"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Factory")," is a method that takes in parameter all the fields of the input type and return an object."),(0,r.kt)("p",null,"Here is an example of factory:"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     */\n    #[Factory]\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n"))),(0,r.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     *\n     * @Factory()\n     */\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n")))),(0,r.kt)("p",null,"and now, you can run query like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mutation {\n  getCities(location: {\n              latitude: 45.0,\n              longitude: 0.0,\n            },\n            radius: 42)\n  {\n    id,\n    name\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Factories must be declared with the ",(0,r.kt)("strong",{parentName:"li"},"@Factory")," annotation."),(0,r.kt)("li",{parentName:"ul"},"The parameters of the factories are the field of the GraphQL input type")),(0,r.kt)("p",null,"A few important things to notice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The container MUST contain the factory class. The identifier of the factory MUST be the fully qualified class name of the class that contains the factory.\nThis is usually already the case if you are using a container with auto-wiring capabilities"),(0,r.kt)("li",{parentName:"ul"},"We recommend that you put the factories in the same directories as the types.")),(0,r.kt)("h3",{id:"specifying-the-input-type-name"},"Specifying the input type name"),(0,r.kt)("p",null,"The GraphQL input type name is derived from the return type of the factory."),(0,r.kt)("p",null,'Given the factory below, the return type is "Location", therefore, the GraphQL input type will be named "LocationInput".'),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/**\n * @Factory()\n */\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n"))),(0,r.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#[Factory]\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n")))),(0,r.kt)("p",null,'In case you want to override the input type name, you can use the "name" attribute of the @Factory annotation:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/**\n * @Factory(name="MyNewInputName", default=true)\n */\n')),(0,r.kt)("p",null,'Note that you need to add the "default" attribute is you want your factory to be used by default (more on this in\nthe next chapter).'),(0,r.kt)("p",null,"Unless you want to have several factories for the same PHP class, the input type name will be completely transparent\nto you, so there is no real reason to customize it."),(0,r.kt)("h3",{id:"forcing-an-input-type"},"Forcing an input type"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseInputType")," annotation to force an input type of a parameter."),(0,r.kt)("p",null,'Let\'s say you want to force a parameter to be of type "ID", you can use this:'),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Factory]\n#[UseInputType(for: "$id", inputType:"ID!")]\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n'))),(0,r.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @UseInputType(for="$id", inputType="ID!")\n */\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n')))),(0,r.kt)("h3",{id:"declaring-several-input-types-for-the-same-php-class"},"Declaring several input types for the same PHP class"),(0,r.kt)("small",null,"Available in GraphQLite 4.0+"),(0,r.kt)("p",null,"There are situations where a given PHP class might use one factory or another depending on the context."),(0,r.kt)("p",null,"This is often the case when your objects map database entities.\nIn these cases, you can use combine the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseInputType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation to achieve your goal."),(0,r.kt)("p",null,"Here is an annotated sample:"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     */\n    #[Factory(name: "ProductRefInput", default: true)]\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     */\n    #[Factory(name: "CreateProductInput", default: false)]\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     */\n    #[Mutation]\n    #[UseInputType(for: "$product", inputType: "CreateProductInput!")]\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @return Color[]\n     */\n    #[Query]\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n'))),(0,r.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     * @Factory(name="ProductRefInput", default=true)\n     */\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     * @Factory(name="CreateProductInput", default=false)\n     */\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     *\n     * @Mutation\n     * @UseInputType(for="$product", inputType="CreateProductInput!")\n     */\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @Query\n     * @return Color[]\n     */\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n')))),(0,r.kt)("h3",{id:"ignoring-some-parameters"},"Ignoring some parameters"),(0,r.kt)("small",null,"Available in GraphQLite 4.0+"),(0,r.kt)("p",null,"GraphQLite will automatically map all your parameters to an input type.\nBut sometimes, you might want to avoid exposing some of those parameters."),(0,r.kt)("p",null,"Image your ",(0,r.kt)("inlineCode",{parentName:"p"},"getProductById")," has an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyLoad")," parameter. This parameter is interesting when you call\ndirectly the function in PHP because you can have some level of optimisation on your code. But it is not something that\nyou want to expose in the GraphQL API. Let's hide it!"),(0,r.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Factory]\npublic function getProductById(\n        string $id,\n        #[HideParameter]\n        bool $lazyLoad = true\n    ): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n"))),(0,r.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @HideParameter(for="$lazyLoad")\n */\npublic function getProductById(string $id, bool $lazyLoad = true): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n')))),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"@HideParameter")," annotation, you can choose to remove from the GraphQL schema any argument."),(0,r.kt)("p",null,"To be able to hide an argument, the argument must have a default value."))}y.isMDXComponent=!0}}]);
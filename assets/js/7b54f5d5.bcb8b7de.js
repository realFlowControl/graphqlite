"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2021],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),l=n(67294),u=n(72389),p=n(79443);var i=function(){var e=(0,l.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(83039),o=n(86010),s="tabItem_vU9c";function d(e){var t,n,a,u=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,r.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),T=k.tabGroupChoices,g=k.setTabGroupChoices,P=(0,l.useState)(b),N=P[0],x=P[1],w=[],C=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=T[m];null!=E&&E!==N&&y.some((function(e){return e.value===E}))&&x(E)}var I=function(e){var t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==N&&(C(t),x(a),null!=m&&g(m,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var l=w.indexOf(e.currentTarget)-1;n=w[l]||w[w.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:Z,onFocus:I,onClick:I},null!=n?n:t)}))),u?(0,l.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,u.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},63746:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(87462),l=n(63366),u=(n(67294),n(3905)),p=n(55064),i=n(58215),r=["components"],o={id:"multiple-output-types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types"},s=void 0,d={unversionedId:"multiple-output-types",id:"version-5.0/multiple-output-types",isDocsHomePage:!1,title:"Mapping multiple output types for the same class",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-5.0/multiple-output-types.mdx",sourceDirName:".",slug:"/multiple-output-types",permalink:"/docs/multiple-output-types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/multiple-output-types.mdx",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1646363239,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"multiple-output-types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types"},sidebar:"version-5.0/docs",previous:{title:"Extending an input type",permalink:"/docs/extend-input-type"},next:{title:"Symfony specific features",permalink:"/docs/symfony-bundle-advanced"}},c=[{value:"Example",id:"example",children:[],level:2},{value:"Extending a non-default type",id:"extending-a-non-default-type",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,l.Z)(e,r);return(0,u.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("small",null,"Available in GraphQLite 4.0+"),(0,u.kt)("p",null,"In most cases, you have one PHP class and you want to map it to one GraphQL output type."),(0,u.kt)("p",null,"But in very specific cases, you may want to use different GraphQL output type for the same class.\nFor instance, depending on the context, you might want to prevent the user from accessing some fields of your object."),(0,u.kt)("p",null,'To do so, you need to create 2 output types for the same PHP class. You typically do this using the "default" attribute of the ',(0,u.kt)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)("p",null,"Here is an example. Say we are manipulating products. When I query a ",(0,u.kt)("inlineCode",{parentName:"p"},"Product")," details, I want to have access to all fields.\nBut for some reason, I don't want to expose the price field of a product if I query the list of all products."),(0,u.kt)(p.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,u.kt)("p",null,"The ",(0,u.kt)("inlineCode",{parentName:"p"},"Product"),' class is declaring a classic GraphQL output type named "Product".'),(0,u.kt)(p.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(class: Product::class, name: "LimitedProduct", default: false)]\n#[SourceField(name: "name")]\nclass LimitedProductType\n{\n    // ...\n}\n'))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(class=Product::class, name="LimitedProduct", default=false)\n * @SourceField(name="name")\n */\nclass LimitedProductType\n{\n    // ...\n}\n')))),(0,u.kt)("p",null,"The ",(0,u.kt)("inlineCode",{parentName:"p"},"LimitedProductType")," also declares an ",(0,u.kt)("a",{parentName:"p",href:"/docs/external-type-declaration"},'"external" type')," mapping the ",(0,u.kt)("inlineCode",{parentName:"p"},"Product")," class.\nBut pay special attention to the ",(0,u.kt)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,u.kt)("p",null,"First of all, we specify ",(0,u.kt)("inlineCode",{parentName:"p"},'name="LimitedProduct"'),'. This is useful to avoid having colliding names with the "Product" GraphQL output type\nthat is already declared.'),(0,u.kt)("p",null,"Then, we specify ",(0,u.kt)("inlineCode",{parentName:"p"},"default=false"),". This means that by default, the ",(0,u.kt)("inlineCode",{parentName:"p"},"Product")," class should not be mapped to the ",(0,u.kt)("inlineCode",{parentName:"p"},"LimitedProductType"),".\nThis type will only be used when we explicitly request it."),(0,u.kt)("p",null,"Finally, we can write our requests:"),(0,u.kt)(p.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'class ProductController\n{\n    /**\n     * This field will use the default type.\n     */\n    #[Field]\n    public function getProduct(int $id): Product { /* ... */ }\n\n    /**\n     * Because we use the "outputType" attribute, this field will use the other type.\n     *\n     * @return Product[]\n     */\n    #[Field(outputType: "[LimitedProduct!]!")]\n    public function getProducts(): array { /* ... */ }\n}\n'))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'class ProductController\n{\n    /**\n     * This field will use the default type.\n     *\n     * @Field\n     */\n    public function getProduct(int $id): Product { /* ... */ }\n\n    /**\n     * Because we use the "outputType" attribute, this field will use the other type.\n     *\n     * @Field(outputType="[LimitedProduct!]!")\n     * @return Product[]\n     */\n    public function getProducts(): array { /* ... */ }\n}\n')))),(0,u.kt)("p",null,'Notice how the "outputType" attribute is used in the ',(0,u.kt)("inlineCode",{parentName:"p"},"@Field")," annotation to force the output type."),(0,u.kt)("p",null,"Is a result, when the end user calls the ",(0,u.kt)("inlineCode",{parentName:"p"},"product")," query, we will have the possibility to fetch the ",(0,u.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"price")," fields,\nbut if he calls the ",(0,u.kt)("inlineCode",{parentName:"p"},"products")," query, each product in the list will have a ",(0,u.kt)("inlineCode",{parentName:"p"},"name")," field but no ",(0,u.kt)("inlineCode",{parentName:"p"},"price")," field. We managed\nto successfully expose a different set of fields based on the query context."),(0,u.kt)("h2",{id:"extending-a-non-default-type"},"Extending a non-default type"),(0,u.kt)("p",null,"If you want to extend a type using the ",(0,u.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation and if this type is declared as non-default,\nyou need to target the type by name instead of by class."),(0,u.kt)("p",null,"So instead of writing:"),(0,u.kt)(p.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"#[ExtendType(class: Product::class)]\n"))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")))),(0,u.kt)("p",null,"you will write:"),(0,u.kt)(p.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'#ExtendType(name: "LimitedProduct")\n'))),(0,u.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @ExtendType(name="LimitedProduct")\n */\n')))),(0,u.kt)("p",null,'Notice how we use the "name" attribute instead of the "class" attribute in the ',(0,u.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation."))}h.isMDXComponent=!0}}]);
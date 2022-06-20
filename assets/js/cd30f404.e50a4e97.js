"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7441],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),p=n(7094),u=n(12466),s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,h=e.defaultValue,m=e.values,g=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,p.U)(),w=P.tabGroupChoices,T=P.setTabGroupChoices,N=(0,r.useState)(b),x=N[0],C=N[1],L=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=w[g];null!=E&&E!==x&&y.some((function(e){return e.value===E}))&&C(E)}var O=function(e){var t=e.currentTarget,n=L.indexOf(t),a=y[n].value;a!==x&&(I(t),C(a),null!=g&&T(g,String(a)))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=L.indexOf(e.currentTarget)+1;n=null!=(a=L[r])?a:L[0];break;case"ArrowLeft":var l,i=L.indexOf(e.currentTarget)-1;n=null!=(l=L[i])?l:L[L.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return L.push(e)},onKeyDown:M,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},41669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),p=["components"],u={id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features",original_id:"laravel-package-advanced"},s=void 0,c={unversionedId:"laravel-package-advanced",id:"version-4.1/laravel-package-advanced",title:"Laravel package: advanced usage",description:"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel.",source:"@site/versioned_docs/version-4.1/laravel-package-advanced.mdx",sourceDirName:".",slug:"/laravel-package-advanced",permalink:"/docs/4.1/laravel-package-advanced",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/laravel-package-advanced.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1655309228,formattedLastUpdatedAt:"6/15/2022",frontMatter:{id:"laravel-package-advanced",title:"Laravel package: advanced usage",sidebar_label:"Laravel specific features",original_id:"laravel-package-advanced"},sidebar:"version-4.1/docs",previous:{title:"Symfony specific features",permalink:"/docs/4.1/symfony-bundle-advanced"},next:{title:"Internals",permalink:"/docs/4.1/internals"}},d={},h=[{value:"Support for Laravel validation rules",id:"support-for-laravel-validation-rules",level:2},{value:"Support for pagination",id:"support-for-pagination",level:2},{value:"Simple paginator",id:"simple-paginator",level:3},{value:"Using GraphQLite with Eloquent efficiently",id:"using-graphqlite-with-eloquent-efficiently",level:2},{value:"Pitfalls to avoid with Eloquent",id:"pitfalls-to-avoid-with-eloquent",level:3}],m={toc:h};function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Laravel package comes with a number of features to ease the integration of GraphQLite in Laravel."),(0,l.kt)("h2",{id:"support-for-laravel-validation-rules"},"Support for Laravel validation rules"),(0,l.kt)("p",null,"The GraphQLite Laravel package comes with a special ",(0,l.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation to use Laravel validation rules in your\ninput types."),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    #[Mutation]\n    public function createUser(\n            #[Validate("email|unique:users")]\n            string $email,\n            #[Validate("gte:8")]\n            string $password\n        ): User\n    {\n        // ...\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Laravel\\Annotations\\Validate;\n\nclass MyController\n{\n    /**\n     * @Mutation\n     * @Validate(for="$email", rule="email|unique:users")\n     * @Validate(for="$password", rule="gte:8")\n     */\n    public function createUser(string $email, string $password): User\n    {\n        // ...\n    }\n}\n')))),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Validate")," annotation in any query / mutation / field / factory / decorator."),(0,l.kt)("p",null,'If a validation fails to pass, the message will be printed in the "errors" section and you will get a HTTP 400 status code:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "message": "The email must be a valid email address.",\n            "extensions": {\n                "argument": "email",\n                "category": "Validate"\n            }\n        },\n        {\n            "message": "The password must be greater than or equal 8 characters.",\n            "extensions": {\n                "argument": "password",\n                "category": "Validate"\n            }\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"You can use any validation rule described in ",(0,l.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/validation#available-validation-rules"},"the Laravel documentation")),(0,l.kt)("h2",{id:"support-for-pagination"},"Support for pagination"),(0,l.kt)("p",null,"In your query, if you explicitly return an object that extends the ",(0,l.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),' class,\nthe query result will be wrapped in a "paginator" type.'),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\LengthAwarePaginator\n    {\n        return Product::paginate(15);\n    }\n}\n")))),(0,l.kt)("p",null,"Notice that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,l.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")," or a class extending ",(0,l.kt)("inlineCode",{parentName:"li"},"Illuminate\\Pagination\\LengthAwarePaginator")),(0,l.kt)("li",{parentName:"ul"},"you MUST add a ",(0,l.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,l.kt)("p",null,"Once this is done, you can get plenty of useful information about this page:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'products {\n    items {      # The items for the selected page\n        id\n        name\n    }\n    totalCount   # The total count of items.\n    lastPage     # Get the page number of the last available page.\n    firstItem    # Get the "index" of the first item being paginated.\n    lastItem     # Get the "index" of the last item being paginated.\n    hasMorePages # Determine if there are more items in the data source.\n    perPage      # Get the number of items shown per page.\n    hasPages     # Determine if there are enough items to split into multiple pages.\n    currentPage  # Determine the current page being paginated.\n    isEmpty      # Determine if the list of items is empty or not.\n    isNotEmpty   # Determine if the list of items is not empty.\n}\n')),(0,l.kt)("div",{class:"alert alert--warning"},"Be sure to type hint on the class (",(0,l.kt)("code",null,"Illuminate\\Pagination\\LengthAwarePaginator"),") and not on the interface (",(0,l.kt)("code",null,"Illuminate\\Contracts\\Pagination\\LengthAwarePaginator"),"). The interface itself is not iterable (it does not extend ",(0,l.kt)("code",null,"Traversable"),") and therefore, GraphQLite will refuse to iterate over it."),(0,l.kt)("h3",{id:"simple-paginator"},"Simple paginator"),(0,l.kt)("p",null,"Note: if you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"simplePaginate")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"paginate"),", you can type hint on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\Paginator")," class."),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Illuminate\\Pagination\\Paginator\n    {\n        return Product::simplePaginate(15);\n    }\n}\n")))),(0,l.kt)("p",null,"The behaviour will be exactly the same except you will be missing the ",(0,l.kt)("inlineCode",{parentName:"p"},"totalCount")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"lastPage")," fields."),(0,l.kt)("h2",{id:"using-graphqlite-with-eloquent-efficiently"},"Using GraphQLite with Eloquent efficiently"),(0,l.kt)("p",null,"In GraphQLite, you are supposed to put a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on each getter."),(0,l.kt)("p",null,"Eloquent uses PHP magic properties to expose your database records.\nBecause Eloquent relies on magic properties, it is quite rare for an Eloquent model to have proper getters and setters."),(0,l.kt)("p",null,"So we need to find a workaround. GraphQLite comes with a ",(0,l.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation to help you\nworking with magic properties."),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\n#[MagicField(name: "id", outputType: "ID!")]\n#[MagicField(name: "name", phpType: "string")]\n#[MagicField(name: "categories", phpType: "Category[]")]\nclass Product extends Model\n{\n}\n'))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type()\n * @MagicField(name="id", outputType="ID!")\n * @MagicField(name="name", phpType="string")\n * @MagicField(name="categories", phpType="Category[]")\n */\nclass Product extends Model\n{\n}\n')))),(0,l.kt)("p",null,'Please note that since the properties are "magic", they don\'t have a type. Therefore,\nyou need to pass either the "outputType" attribute with the GraphQL type matching the property,\nor the "phpType" attribute with the PHP type matching the property.'),(0,l.kt)("h3",{id:"pitfalls-to-avoid-with-eloquent"},"Pitfalls to avoid with Eloquent"),(0,l.kt)("p",null,"When designing relationships in Eloquent, you write a method to expose that relationship this way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    /**\n     * Get the phone record associated with the user.\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n")),(0,l.kt)("p",null,"It would be tempting to put a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation on the ",(0,l.kt)("inlineCode",{parentName:"p"},"phone()")," method, but this will not work. Indeed,\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"phone()")," method does not return a ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Phone")," object. It is the ",(0,l.kt)("inlineCode",{parentName:"p"},"phone")," magic property that returns it."),(0,l.kt)("p",null,"In short:"),(0,l.kt)("div",{class:"alert alert--danger"},"This does not work:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```php\nclass User extends Model\n{\n    /**\n     * @Field\n     */\n    public function phone()\n    {\n        return $this->hasOne('App\\Phone');\n    }\n}\n```\n"))),(0,l.kt)("div",{class:"alert alert--success"},"This works:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'```php\n/**\n * @MagicField(name="phone", phpType="App\\\\Phone")\n */\nclass User extends Model\n{\n    public function phone()\n    {\n        return $this->hasOne(\'App\\Phone\');\n    }\n}\n```\n'))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1326],{68941:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"external_type_declaration",title:"External type declaration",sidebar_label:"External type declaration",original_id:"external_type_declaration"},s=void 0,d={unversionedId:"external_type_declaration",id:"version-3.0/external_type_declaration",isDocsHomePage:!1,title:"External type declaration",description:"In some cases, you cannot or do not want to put an annotation on a domain class.",source:"@site/versioned_docs/version-3.0/external_type_declaration.mdx",sourceDirName:".",slug:"/external_type_declaration",permalink:"/docs/3.0/external_type_declaration",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/external_type_declaration.mdx",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1646363239,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"external_type_declaration",title:"External type declaration",sidebar_label:"External type declaration",original_id:"external_type_declaration"},sidebar:"version-3.0/docs",previous:{title:"Authentication and authorization",permalink:"/docs/3.0/authentication_authorization"},next:{title:"Input types",permalink:"/docs/3.0/input-types"}},c=[{value:"<code>@Type</code> annotation with the <code>class</code> attribute",id:"type-annotation-with-the-class-attribute",children:[],level:2},{value:"<code>@SourceField</code> annotation",id:"sourcefield-annotation",children:[{value:"Authentication and authorization",id:"authentication-and-authorization",children:[],level:3}],level:2},{value:"Declaring fields dynamically (without annotations)",id:"declaring-fields-dynamically-without-annotations",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In some cases, you cannot or do not want to put an annotation on a domain class."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The class you want to annotate is part of a third party library and you cannot modify it"),(0,o.kt)("li",{parentName:"ul"},"You are doing domain-driven design and don't want to clutter your domain object with annotations from the view layer"),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("h2",{id:"type-annotation-with-the-class-attribute"},(0,o.kt)("inlineCode",{parentName:"h2"},"@Type")," annotation with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"class")," attribute"),(0,o.kt)("p",null,"GraphQLite allows you to use a ",(0,o.kt)("em",{parentName:"p"},"proxy")," class thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Type")," annotation with the ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field()\n     */\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductType")," class must be in the ",(0,o.kt)("em",{parentName:"p"},"types")," namespace. You configured this namespace when you installed GraphQLite."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductType")," class is actually a ",(0,o.kt)("strong",{parentName:"p"},"service"),". You can therefore inject dependencies in it."),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Heads up!")," The ",(0,o.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,o.kt)("p",null,"In methods with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Field")," annotaiton, the first parameter is the ",(0,o.kt)("em",{parentName:"p"},"resolved object")," we are working on. Any additional parameters are used as arguments."),(0,o.kt)("h2",{id:"sourcefield-annotation"},(0,o.kt)("inlineCode",{parentName:"h2"},"@SourceField")," annotation"),(0,o.kt)("p",null,"If you don't want to rewrite all ",(0,o.kt)("em",{parentName:"p"},"getters")," of your base class, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price")\n */\nclass ProductType\n{\n}\n')),(0,o.kt)("p",null,"By doing so, you let GraphQLite know that the type exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"getName")," method of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,o.kt)("p",null,"Internally, GraphQLite will look for methods named ",(0,o.kt)("inlineCode",{parentName:"p"},"name()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getName()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"isName()"),")."),(0,o.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,o.kt)("p",null,"You may also check for logged users or users with a specific right using the ",(0,o.kt)("inlineCode",{parentName:"p"},"logged")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," properties of the annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price", logged=true, right=@Right(name="CAN_ACCESS_Price"))\n */\nclass ProductType extends AbstractAnnotatedObjectType\n{\n}\n')),(0,o.kt)("p",null,"Just like the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@Right")," annotations for regular fields, you can define a default value to use\nin case the user has insufficient permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @SourceField(name="status", logged=true, right=@Right(name="CAN_ACCESS_STATUS"), failWith=null)\n */\n')),(0,o.kt)("h2",{id:"declaring-fields-dynamically-without-annotations"},"Declaring fields dynamically (without annotations)"),(0,o.kt)("p",null,"In some very particular cases, you might not know exactly the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotations at development time.\nIf you need to decide the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField")," at runtime, you can implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"FromSourceFieldsInterface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2888],{25530:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return h}});var a=o(87462),i=o(63366),n=(o(67294),o(3905)),r=["components"],l={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},p=void 0,u={unversionedId:"file-uploads",id:"version-4.0/file-uploads",isDocsHomePage:!1,title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-4.0/file_uploads.md",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/4.0/file-uploads",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/file_uploads.md",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1640042352,formattedLastUpdatedAt:"12/20/2021",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},sidebar:"version-4.0/docs",previous:{title:"Prefetching records",permalink:"/docs/4.0/prefetch-method"},next:{title:"Pagination",permalink:"/docs/4.0/pagination"}},s=[{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",children:[],level:2},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",children:[],level:2},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:s};function h(e){var t=e.components,o=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,n.kt)("p",null,"GraphQLite supports this extension through the use of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,n.kt)("h2",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,n.kt)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,n.kt)("h2",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,n.kt)("p",null,"In order to use this, you must first be sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,n.kt)("p",null,"Simply add ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,n.kt)("h2",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,n.kt)("p",null,"Please check the Ecodev/graphql-upload library ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,n.kt)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")),(0,n.kt)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."))}h.isMDXComponent=!0}}]);
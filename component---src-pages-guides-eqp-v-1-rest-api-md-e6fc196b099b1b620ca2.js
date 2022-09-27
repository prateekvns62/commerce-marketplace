"use strict";(self.webpackChunkcommerce_marketplace=self.webpackChunkcommerce_marketplace||[]).push([[5114],{83708:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return c}});var n,r=a(87462),l=a(63366),m=(a(15007),a(64983)),d=a(91515),s=["components"],i={},o=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:i},u=d.Z;function c(e){var t=e.components,a=(0,l.Z)(e,s);return(0,m.mdx)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"rest-api"},"REST API"),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("strong",{parentName:"p"},"Marketplace EQP REST API")," is completely separate from APIs provided with Magento 2."),(0,m.mdx)("br",null),"There is no corresponding GraphQL or SOAP API.",(0,m.mdx)("p",null,"The ",(0,m.mdx)("strong",{parentName:"p"},"Marketplace EQP API")," gives you access to your ",(0,m.mdx)("strong",{parentName:"p"},"Marketplace Developer Portal")," resources.\nThese resources are managed by a set of REST API endpoints."),(0,m.mdx)("h2",{id:"overview-of-resources"},"Overview of resources"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Resource"),(0,m.mdx)("th",{parentName:"tr",align:null},"Purpose"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"authentication"),(0,m.mdx)("td",{parentName:"tr",align:null},"Obtain a session token")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"users"),(0,m.mdx)("td",{parentName:"tr",align:null},"Manage your profile")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"files"),(0,m.mdx)("td",{parentName:"tr",align:null},"Manage your profile avatar, ZIP files, image files, PDF documents")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"packages"),(0,m.mdx)("td",{parentName:"tr",align:null},"Initiate and manage your submissions")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"test results"),(0,m.mdx)("td",{parentName:"tr",align:null},"Receive information about automated and manual reviews")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"reports"),(0,m.mdx)("td",{parentName:"tr",align:null},"Get information about your sales, as well as your Commerce Marketplace web pages")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"API callbacks"),(0,m.mdx)("td",{parentName:"tr",align:null},"Request notification as specific workflow activities happen")))),(0,m.mdx)("h2",{id:"general-concepts"},"General concepts"),(0,m.mdx)("h3",{id:"base-urls"},"Base URLs"),(0,m.mdx)("p",null,"The API endpoints only accept encrypted communications using HTTPS at the following base URLs:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Environment"),(0,m.mdx)("th",{parentName:"tr",align:null},"Base Url"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"sandbox"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"https://developer-stg-api.magento.com"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"production"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"https://developer-api.magento.com"))))),(0,m.mdx)("h3",{id:"rest-http-verbs"},"REST HTTP verbs"),(0,m.mdx)("p",null,"The Marketplace EQP API is based on REST concepts and uses standard HTTP verbs:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"HTTP Verb"),(0,m.mdx)("th",{parentName:"tr",align:null},"Usage"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"GET"),(0,m.mdx)("td",{parentName:"tr",align:null},"Retrieves a resource, or retrieves a collection of that resource")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"POST"),(0,m.mdx)("td",{parentName:"tr",align:null},"Creates a resource")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"PUT"),(0,m.mdx)("td",{parentName:"tr",align:null},"Updates the entire resource, or updates part of a resource (when acting like a PATCH)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"DELETE"),(0,m.mdx)("td",{parentName:"tr",align:null},"Removes a resource")))),(0,m.mdx)("h3",{id:"api-versioning"},"API versioning"),(0,m.mdx)("p",null,"All endpoints start with ",(0,m.mdx)("strong",{parentName:"p"},"/rest/v1"),", which supports versioning. The initial release is version 1 (v1)."),(0,m.mdx)("h3",{id:"json"},"JSON"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Except when creating the ",(0,m.mdx)("a",{parentName:"li",href:"files.md"},"file")," resource, all requests are formatted using JSON."),(0,m.mdx)("li",{parentName:"ul"},"All responses are formatted using JSON.")),(0,m.mdx)("h3",{id:"utc-timestamps"},"UTC timestamps"),(0,m.mdx)("p",null,"All timestamps are in UTC (",(0,m.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Coordinated_Universal_Time"},"universal time coordinated"),")."),(0,m.mdx)("h2",{id:"batch-processing"},"Batch processing"),(0,m.mdx)("p",null,"Some endpoints can handle a ",(0,m.mdx)("strong",{parentName:"p"},"batch request"),", such as the following:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-html"},"POST /rest/v1/products/packages\nPUT /rest/v1/products/packages   // used when updating multiple packages in one request\n")),(0,m.mdx)("h3",{id:"batch-response"},"Batch response"),(0,m.mdx)("p",null,"Endpoints that are batch requests return responses as follows.\nSee specific examples in the section about ",(0,m.mdx)("a",{parentName:"p",href:"handling-errors.md"},"handling errors"),"."),(0,m.mdx)("h4",{id:"complete-processing-failure"},"Complete processing failure"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"If an error occurs with the entire payload (for example, the user is not authorized to make the request) the appropriate HTTP 4xx code will be returned."),(0,m.mdx)("li",{parentName:"ul"},"No additional processing of the batch request was attempted, and therefore there will ",(0,m.mdx)("strong",{parentName:"li"},"not")," be any itemized response.")),(0,m.mdx)("h4",{id:"typical-processing"},"Typical processing"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"If the batch request can be processed, the overall HTTP code of the batch response will always be ",(0,m.mdx)("strong",{parentName:"li"},"HTTP 200 OK")," regardless of the pass/fail status of the items in the batch."),(0,m.mdx)("li",{parentName:"ul"},"The batch response contains information about every item in the batch request."),(0,m.mdx)("li",{parentName:"ul"},"The order of these items matches the order in the batch request."),(0,m.mdx)("li",{parentName:"ul"},"Every item in the batch response includes two additional fields that indicate the pass/fail status of the operation on that item:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"code")," - Contains an integer status code related to the operation. Failure of an operation is indicated by a non-200 value"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"message")," - Contains a human readable message that describes the reason for the code."))),(0,m.mdx)("li",{parentName:"ul"},"Items in a batch that can be completed successfully will be completed, regardless of the pass/fail status of other items in the batch.")),(0,m.mdx)("h2",{id:"special-topics"},"Special topics"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Some of the ",(0,m.mdx)("inlineCode",{parentName:"li"},"GET")," endpoints offer ",(0,m.mdx)("a",{parentName:"li",href:"filtering.md"},"filtering"),".  Use filtering to narrow the search results."),(0,m.mdx)("li",{parentName:"ul"},"See details about ",(0,m.mdx)("a",{parentName:"li",href:"handling-errors.md"},"handling error responses"),".")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-eqp-v-1-rest-api-md-e6fc196b099b1b620ca2.js.map
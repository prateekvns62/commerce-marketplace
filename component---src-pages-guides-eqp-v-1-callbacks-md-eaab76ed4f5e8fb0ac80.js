"use strict";(self.webpackChunkcommerce_marketplace=self.webpackChunkcommerce_marketplace||[]).push([[3334],{3872:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return h}});var n=t(87462),r=t(63366),l=(t(15007),t(64983)),d=t(91515),s=["components"],o={},i=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",a)}},m=i("InlineAlert"),p=i("CodeBlock"),c={_frontmatter:o},u=d.Z;function h(e){var a=e.components,t=(0,r.Z)(e,s);return(0,l.mdx)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"api-callbacks"},"API callbacks"),(0,l.mdx)("p",null,"The multiple steps of the EQP process take time to complete. The results of these steps can impact the availability or status of data that was previously submitted.\nRather than having to continuously poll for updates, you can register an API callback URL in the user profile."),(0,l.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"API Callback URLs can only be registered through the API."),(0,l.mdx)("p",null,"Whenever an update occurs to a product or a file, a JSON API request will be sent -- via a POST -- to the registered callback URL."),(0,l.mdx)("h2",{id:"register-a-callback"},"Register a callback"),(0,l.mdx)("p",null,"Callbacks are registered using the ",(0,l.mdx)("a",{parentName:"p",href:"users.md"},"User Profile")," API."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"name")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional: name for this callback")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"url")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"URL that will receive callback JSON requests")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"username")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Basic authorization username")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"password")),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Basic authorization password - never returned in the GET response")))),(0,l.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL, JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h3",{id:"request"},"Request"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-curl"},'curl -X PUT \\\n     -H \'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{"api_callbacks": [{"name": "My 1st EQP Callback","url": "https://developer.example.com/rest/v1/callback","username": "key","password": "secret"}]}\' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789\n')),(0,l.mdx)("h3",{id:"response"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "api_callbacks": [\n        {\n            "name": "My 1st EQP Callback",\n            "url": "https://developer.example.com/rest/v1/callback",\n            "username": "key"\n        }\n    ],\n    ...\n}\n')),(0,l.mdx)("h2",{id:"authentication"},"Authentication"),(0,l.mdx)("p",null,"API callbacks are authenticated using a Basic Authorization header.\nCallbacks are only sent using HTTPS to ensure the security and integrity of the request."),(0,l.mdx)("p",null,"For the callback registered in the example above, the following\nheader will be constructed and sent in every callback request:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-http"},"Authorization: Basic a2V5OnNlY3JldA==\n")),(0,l.mdx)("h2",{id:"callback-structures"},"Callback structures"),(0,l.mdx)("p",null,"Each event has a unique code provided in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"callback_event")," field.\nThe ",(0,l.mdx)("inlineCode",{parentName:"p"},"update_info")," object has a different structure, depending on the event code.\nResource IDs are provided in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"update_info")," structure so that additional\ninformation can be requested using the API endpoints for those resources."),(0,l.mdx)("h3",{id:"file-upload-callbacks"},"File upload callbacks"),(0,l.mdx)("p",null,"Malware scan results are sent out for ",(0,l.mdx)("a",{parentName:"p",href:"files.md"},"File")," resources when the asynchronous scan completes."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "callback_event": "malware_scan_complete",\n    "update_info": {\n        "file_upload_id": "2309480238.238475.0",\n        "tool_result": "passed",\n        "modified_at": "2022-08-25 19:20:21"\n    }\n}\n')),(0,l.mdx)("h3",{id:"package-callbacks"},"Package callbacks"),(0,l.mdx)("p",null,"EQP status updates are sent out for ",(0,l.mdx)("a",{parentName:"p",href:"packages.md"},"Package")," resources when the product's EQP state is modified."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "callback_event": "eqp_status_update",\n    "update_info": {\n        "submission_id": "s5w9k703ru",\n        "item_id": "user_upload_version_1",\n        "eqp_flow": "marketing",\n        "current_status": "approved",\n        "eqp_status": {\n            "overall": "in_progress",\n            "technical": "draft",\n            "marketing": "approved"\n        },\n        "modified_at": "2022-08-25 19:20:21"\n    }\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-eqp-v-1-callbacks-md-eaab76ed4f5e8fb0ac80.js.map
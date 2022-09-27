"use strict";(self.webpackChunkcommerce_marketplace=self.webpackChunkcommerce_marketplace||[]).push([[9853],{55659:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return x}});var t=a(87462),r=a(63366),s=(a(15007),a(64983)),d=a(91515),l=["components"],o={},m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",n)}},i=m("InlineAlert"),p=m("CodeBlock"),u={_frontmatter:o},c=d.Z;function x(e){var n=e.components,a=(0,r.Z)(e,l);return(0,s.mdx)(c,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"users"},"Users"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"users")," resource accesses and updates your user profile. You can also access your sales reports."),(0,s.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You cannot use this resource to create a new profile.\nYou must create a new profile on the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.magento.com"},"Marketplace Developer Portal"),".\nIf you use the ",(0,s.mdx)("a",{parentName:"p",href:"sandbox.md"},"sandbox")," environment, you must also create a new profile on the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer-stg.magento.com"},"Sandbox Marketplace Developer Portal"),"."),(0,s.mdx)("h2",{id:"profile"},"Profile"),(0,s.mdx)("p",null,"You must use your ",(0,s.mdx)("inlineCode",{parentName:"p"},"mage_id")," for these endpoints.\nOne way you can get your ",(0,s.mdx)("inlineCode",{parentName:"p"},"mage_id")," is when you obtain a ",(0,s.mdx)("a",{parentName:"p",href:"auth.md#how-to-use-a-session-token"},"session token"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"GET /rest/v1/users/:mage_id\nGET /rest/v1/users/:mage_id?style=summary\n")),(0,s.mdx)("h3",{id:"get-profile-data"},"Get profile data"),(0,s.mdx)("p",null,"By default, requests for profile data return all fields.\nYou can limit the amount of data that the request returns by using the ",(0,s.mdx)("inlineCode",{parentName:"p"},"style=summary")," option."),(0,s.mdx)("p",null,"The following example shows the request/response body for retrieving all profile data."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Selected Fields"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"send_newsletter")),(0,s.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,s.mdx)("td",{parentName:"tr",align:null},"Whether to receive emails about policies and announcements")))),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789\n")),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n        "mage_id": "MAG123456789",\n        "adobe_user_id": "ABC1234@AdobeID",\n        "first_name": "John",\n        "last_name": "Smith",\n        "email": "jsmith@example.com",\n        "screen_name": "Agent Smith",\n        "has_completed_profile": true,\n        "has_accepted_tos": true,\n        "profile_image_artifact": {\n            "file_upload_id": "5c119a03b4ddf6.75124444.0",\n            "filename": "portrait.png",\n            "content_type": "image/png",\n            "url": "https://mp-stg-static.magento.com/user/68/f3/68f360d3516f594fc957c4179ed4a7a872911f07/pub/d9/c2/d9c23dd795a5faaab603b6b5965eca8a6d9430f2/portrait.png",\n            "size": 1234,\n            "file_hash": "d5db29cd03a2ed055086cef9c31c252b4587ffff",\n            "malware_status": "pass"\n        },\n\n        "send_newsletter": true,\n        "tos_accepted_version": "1.0",\n        "tos_accepted_date": "2018-11-16 01:23:45",\n        "is_company": false,\n        "vendor_name": "johnsmith",\n        "partner_level": 4,\n        "locale": "en-US",\n        "timezone": "UTC",\n        "payment_type": 1,\n        "payment_info": "{\\"paypal_email\\" : \\"jsmith@example.com\\"}",\n        "taxpayer_type": 2,\n        "tax_review_status": 3,\n        "tax_withhold_percent": 25,\n        "extension_share_percent": 85,\n        "theme_share_percent": 85,\n        "install_share_percent": 100,\n        "support_share_percent": 100,\n        "privacy_policy_url": "https://www.example.com/privacy",\n        "api_callbacks": [\n            {\n                "name": "My 1st EQP Callback",\n                "url": "https://developer.example.com/rest/v1/callback",\n                "username": "key"\n            }\n        ],\n   \n        "personal_profile": {\n            "bio": "Writes extensions that pass review first time. Blindfolded.",\n            "last_logged_in": "2020-07-21 8:09:10",\n            "created_at": "2018-10-01 14:04:59",\n            "modified_at": "2020-03-14 01:23:45",\n            "social_media_info": {\n                "twitter": "@johnsmith",\n                "stackexchange_url": "",\n                "facebook_url": "",\n                "linkedin_url": "",\n                "github_username": ""\n            },\n            "addresses": [\n                {\n                    "address_key": 1,\n                    "address_line_1": "123 Magento Way",\n                    "state": "Texas",\n                    "country": "USA",\n                    "postal_code": "77777",\n                    "phone": "555-123-4567",\n                    "country_code": "+1",\n                    "is_primary": true\n                }\n            ]\n        },\n\n        "company_profile": {\n            "name": "Agent Smith Inc.",\n            "bio": "Vendors of bespoke Magento Extensions.",\n            "website_url": "https://www.example.com/",\n            "primary_email": "jsmith@example.com",\n            "support_email": "support@example.com",\n            "created_at": "2018-10-01 14:04:59",\n            "modified_at": "2019-12-25 01:23:45",\n            "social_media_info": {\n                "twitter": "@johnsmithinc",\n                "stackexchange_url": "",\n                "facebook_url": "",\n                "linkedin_url": "",\n                "github_username": ""\n            },\n            "addresses": [\n                {\n                    "address_key": 1,\n                    "address_line_1": "123 Magento Way",\n                    "state": "Texas",\n                    "country": "USA",\n                    "postal_code": "77777",\n                    "phone": "555-123-4567",\n                    "country_code": "+1",\n                    "is_primary": true\n                }\n            ]\n        },\n   \n        "organizations": [\n           {\n              "org_id": "000CBA111DCB222@AdobeOrg",\n              "org_name": "My Fulfillment Service"\n           }\n        ]\n}\n')),(0,s.mdx)("p",null,"The following example shows the request/response body for retrieving a subset of profile data:"),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-1"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789?style=summary\n")),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n        "mage_id": "MAG123456789",\n        "adobe_user_id": "ABC1234@AdobeID",\n        "first_name": "John",\n        "last_name": "Smith",\n        "email": "jsmith@example.com",\n        "screen_name": "Agent Smith",\n        "has_completed_profile": true,\n        "has_accepted_tos": true,\n        "profile_image_artifact": {\n            "file_upload_id": "5c119a03b4ddf6.75124444.0",\n            "filename": "portrait.png",\n            "content_type": "image.png",\n            "url": "https://mp-stg-static.magento.com/user/68/f3/68f360d3516f594fc957c4179ed4a7a872911f07/pub/d9/c2/d9c23dd795a5faaab603b6b5965eca8a6d9430f2/portrait.png",\n            "size": 1234,\n            "file_hash": "d5db29cd03a2ed055086cef9c31c252b4587ffff",\n            "malware_status": "pass"\n        }\n}\n')),(0,s.mdx)("h3",{id:"update-profile-data"},"Update profile data"),(0,s.mdx)("p",null,"You can update most of your profile data fields, but you only need to include the fields you want to modify in the request body."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"PUT /rest/v1/users/:mage_id\n")),(0,s.mdx)("p",null,"The following example shows a request to update the personal profile bio field:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "action" : "submit",\n  "personal_profile" : {\n     "bio" : "My extensions have won Nobel Prizes in both literature and physics."\n  }\n}\n')),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"action")," field specifies which update operation to perform:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"submit")," --- Once your profile is complete, publishes the profile to the Commerce Marketplace ",(0,s.mdx)("a",{parentName:"li",href:"https://marketplace.magento.com/partners"},"partners page"),"."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"draft")," --- The update is saved on the Marketplace Developer Portal, but not published to the Commerce Marketplace.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT \\\n     -H \'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{ "action" : "submit", "personal_profile" : { "bio" : "My extensions have won Nobel Prizes in both literature and physics." } }\' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("p",null,"A 200 OK HTTP response code indicates a successful update."),(0,s.mdx)("h2",{id:"magento-2-package-access-keys"},"Magento 2 package access keys"),(0,s.mdx)("p",null,"Use these endpoints to manage your Magento 2 package access keys.  (These keys are ",(0,s.mdx)("strong",{parentName:"p"},"not")," your ",(0,s.mdx)("a",{parentName:"p",href:"access-keys.md"},"API access keys"),".)"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"GET     /rest/v1/users/:mage_id/keys\nPOST    /rest/v1/users/:mage_id/keys\nPUT     /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key\nDELETE  /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key\n")),(0,s.mdx)("h3",{id:"get-keys"},"Get keys"),(0,s.mdx)("p",null,"Use this endpoint to return the keys associated with the specified ",(0,s.mdx)("inlineCode",{parentName:"p"},"mage_id"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"GET /rest/v1/users/:mage_id/keys\n")),(0,s.mdx)("p",null,"The following table lists available query parameters, all of which are optional:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,s.mdx)("th",{parentName:"tr",align:null},"Type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Required"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"type"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"no"),(0,s.mdx)("td",{parentName:"tr",align:null},"Type of keys requested:",(0,s.mdx)("br",null),(0,s.mdx)("inlineCode",{parentName:"td"},"m1")," --- Magento 1 product keys",(0,s.mdx)("br",null),(0,s.mdx)("inlineCode",{parentName:"td"},"m2")," --- Magento 2 composer repo keys",(0,s.mdx)("br",null),(0,s.mdx)("inlineCode",{parentName:"td"},"all")," --- Both M1 and M2 keys (default)")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"label"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"no"),(0,s.mdx)("td",{parentName:"tr",align:null},"The url encoded value of the key label; only valid for ",(0,s.mdx)("inlineCode",{parentName:"td"},"m2")," type.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"uid"),(0,s.mdx)("td",{parentName:"tr",align:null},"string"),(0,s.mdx)("td",{parentName:"tr",align:null},"no"),(0,s.mdx)("td",{parentName:"tr",align:null},"Your ",(0,s.mdx)("inlineCode",{parentName:"td"},"mage_id"),", current Adobe ",(0,s.mdx)("inlineCode",{parentName:"td"},"org_id"),", or the special token ",(0,s.mdx)("inlineCode",{parentName:"td"},"all"),".  Defaults to ",(0,s.mdx)("inlineCode",{parentName:"td"},"all"),".")))),(0,s.mdx)("p",null,"The following example shows the request/response body for retrieving keys without any query parameters:"),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-2"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-curl"},"curl -X GET \\\n     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys?uid=all\n")),(0,s.mdx)("h4",{id:"response-2"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "m2": [\n            {\n                "label": "main_key",\n                "user_key": "d41d8cd98f00b204e9800998ecf8427e",\n                "password_key": "12cbdcd3332eb8f166f62ee1a9bd33d0",\n                "is_enabled": true,\n                "uid": "MAG123456789"\n            },\n            {\n                "label": "key_for_bob",\n                "user_key": "4b335b25f8eb3449e7e222e8f9e052b0",\n                "password_key": "9ca8abe7376f451bde40513474c13c3c",\n                "is_enabled": false,\n                "uid": "MAG123456789"\n            },\n            {\n                "label": "Key for My Organization",\n                "user_key": "784d67a640d0cc0e6381c7a24dc4132c",\n                "password_key": "ae6569fd0e64a72b7f9f8e0396c372f0",\n                "is_enabled": true,\n                "uid": "000CBA111DCB222@AdobeOrg"\n            }\n        ],\n\n    "m1": [\n            {\n                "product_name" : "acme/one-click-checkout-1.0.0",\n                "product_key" : "https://connect20.magentocommerce.com/e8c258702e443c509b42fc44a49b83b0/acme+one-click-checkout-1.0.0"\n            }\n        ]\n}\n')),(0,s.mdx)("h4",{id:"magento-2-keys"},"Magento 2 keys"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Each Composer key-pair has unique ",(0,s.mdx)("inlineCode",{parentName:"li"},"label")," and ",(0,s.mdx)("inlineCode",{parentName:"li"},"is_enabled")," flags to indicate whether the key is enabled."),(0,s.mdx)("li",{parentName:"ul"},"A Composer key-pair is identified by ",(0,s.mdx)("inlineCode",{parentName:"li"},"user_key")," (username) and\n",(0,s.mdx)("inlineCode",{parentName:"li"},"password_key")," (password) when prompted for Composer credentials."),(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"uid")," indicates whether the key is to be associated with a specific ",(0,s.mdx)("inlineCode",{parentName:"li"},"mage_id")," or a specific Adobe ",(0,s.mdx)("inlineCode",{parentName:"li"},"org_id"),".\nIf this field is absent, then the ",(0,s.mdx)("inlineCode",{parentName:"li"},"mage_id")," is used.")),(0,s.mdx)("h3",{id:"create-keys"},"Create keys"),(0,s.mdx)("p",null,"Use this endpoint to create new Magento 2 Composer key-pairs. You must specify a unique label for each key.\nYou can create multiple key-pairs in a single request."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"POST /rest/v1/users/:mage_id/keys\n")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "m2": [\n        {\n            "label": "key_for_alice"\n        },\n        {\n            "label": "key_for_charlie",\n            "uid": "MAG123456789"\n        },\n        {\n            "label": "key_for_my_org",\n            "uid": "000CBA111DCB222@AdobeOrg"\n        }\n    ]\n}\n')),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-3"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-curl"},'curl -X POST \\\n     -H \'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{ "m2": [ {"label":"key_for_alice"}, {"label":"key_for_charlie", "uid":"MAG123456789"}, {"label":"key_for_my_org", "uid":"000CBA111DCB222@AdobeOrg"} ] }\' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys\n')),(0,s.mdx)("h4",{id:"response-3"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "m2": [\n            {\n                "label": "key_for_alice",\n                "user_key": "5c75f32248bdd335dc8d8d5a3e5cb52e",\n                "password_key": "44db283cbb5fdf2c25cbc9352c2a75eb",\n                "is_enabled": true,\n                "uid": "MAG123456789",\n                "code" : 200,\n                "message" : "Success"\n            },\n            {\n                "label": "key_for_charlie",\n                "user_key": "19ba9488ff99a9346bdeb39ad4ab1a26",\n                "password_key": "82167d38238911d212cc02a96f3f66f9",\n                "is_enabled": true,\n                "uid": "MAG123456789",\n                "code" : 200,\n                "message" : "Success"\n            },\n            {\n                "label": "key_for_my_org",\n                "user_key": "584d67a640d0cc0e6381c7a24dc4444d",\n                "password_key": "5e6569fd0e64a72b7f9f8e0396c37222",\n                "is_enabled": true,\n                "uid": "000CBA111DCB222@AdobeOrg",\n                "code" : 200,\n                "message" : "Success"\n            }\n        ]\n}\n')),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The API returns a batch response for each label."),(0,s.mdx)("li",{parentName:"ul"},"A 200 OK HTTP response code indicates a successful update."),(0,s.mdx)("li",{parentName:"ul"},"Any non-200 HTTP response code indicates an error. See the ",(0,s.mdx)("inlineCode",{parentName:"li"},"message")," field for details.")),(0,s.mdx)("h3",{id:"update-keys"},"Update keys"),(0,s.mdx)("p",null,"Use this endpoint to enable or disable a Magento 2 Composer key-pair.\nYou must specify the key-pair in the request using a URL-encoded string."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"uid")," indicates whether the label refers to a key associated with a specific ",(0,s.mdx)("inlineCode",{parentName:"li"},"mage_id")," or to a specific Adobe ",(0,s.mdx)("inlineCode",{parentName:"li"},"org_id"),".\nIf this field is absent, then the ",(0,s.mdx)("inlineCode",{parentName:"li"},"mage_id")," is used.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"PUT /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key\n")),(0,s.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL, JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-4"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-curl"},'curl -X PUT \\\n     -H \'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7\' \\\n     -H \'Content-Type: application/json\' \\\n     -d \'{ "m2" : [ { "is_enabled" : true, "uid" : "MAG123456789" } ] }\' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys/key_for_bob\n')),(0,s.mdx)("h4",{id:"response-4"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "m2": [\n            {\n                "label": "key_for_bob",\n                "user_key": "4b335b25f8eb3449e7e222e8f9e052b0",\n                "password_key": "9ca8abe7376f451bde40513474c13c3c",\n                "is_enabled": true,\n                "uid": "MAG123456789"\n            }\n     ]\n}\n')),(0,s.mdx)("h3",{id:"delete-keys"},"Delete keys"),(0,s.mdx)("p",null,"This endpoint can be used to remove a Magento 2 composer key-pair identified by the given url-encoded label."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"uid")," indicates whether the label refers to a key associated with a specific ",(0,s.mdx)("inlineCode",{parentName:"li"},"mage_id")," or to a specific Adobe ",(0,s.mdx)("inlineCode",{parentName:"li"},"org_id"),".\nIf this field is absent, then the ",(0,s.mdx)("inlineCode",{parentName:"li"},"mage_id")," is used.")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"DELETE /rest/v1/users/:mage_id/keys/:url_encoded_label_of_m2_key?uid=:mage_id\n")),(0,s.mdx)("p",null,"The following curl example illustrates the call to be made:"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Request:")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE \\\n     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \\\n     https://developer-stg-api.magento.com/rest/v1/users/MAG123456789/keys/key_for_charlie?uid=MAG123456789\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Response:")),(0,s.mdx)("p",null,"A 204 No Content HTTP response code indicates a successful update."),(0,s.mdx)("h2",{id:"user-reports"},"User reports"),(0,s.mdx)("p",null,"Use these endpoints to retrieve reports owned by a specific user.\nReports contain information about extension sales, payout status, aggregate sales, refund data, and more."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"GET /rest/v1/users/:mage_id/reports/pageviews\nGET /rest/v1/users/:mage_id/reports/totals\nGET /rest/v1/users/:mage_id/reports/sales\nGET /rest/v1/users/:mage_id/reports/refunds\n")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-eqp-v-1-users-md-0cdad162894053fa45b1.js.map
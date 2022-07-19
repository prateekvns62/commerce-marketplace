"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6230],{84973:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a,i=n(87462),o=n(63366),s=(n(15007),n(64983)),r=n(91515),d=["components"],l={},m=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),u={_frontmatter:l},p=r.Z;function c(e){var t=e.components,n=(0,o.Z)(e,d);return(0,s.mdx)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"mftf-commerce-supplied-tests"},"MFTF Commerce-supplied tests"),(0,s.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"At this stage, the MFTF Commerce-supplied check is not required to pass technical review. The pass/fail status of this check is ignored. We are still observing the behavior of this set of tests and will start requiring these tests at a later time, with sufficient notice."),(0,s.mdx)("p",null,"The Magento Functional Testing Framework (MFTF) is a browser-based acceptance testing framework used to validate the functionality of a Magento site. Running Magento-supplied MFTF tests aids Extension Quality Program (EQP) QA efforts in assessing critical functionality of a Magento instance with the extension installed."),(0,s.mdx)("p",null,"Magento supplied MFTF tests are not required to pass for technical review. The outcome of this testing is used to assist with QA efforts and provide feedback on functional quality."),(0,s.mdx)("p",null,"For information on how to setup, create and modify MFTF tests, see ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/mftf/docs/introduction.html"},"Introduction to the Magento Functional Testing Framework"),"."),(0,s.mdx)("h2",{id:"what-testing-is-for"},"What testing is for"),(0,s.mdx)("p",null,"Magento-supplied MFTF tests validate critical user flows via browser-based testing against an operational Magento instance."),(0,s.mdx)("p",null,"MFTF runs tests in a browser, using Selenium and Codeception, to emulate user behavior. MFTF tests are designed to be extensible and can be used in conjunction with other Magento-developed MFTF code coverage or your own vendor-supplied tests. The results of this testing will inform QA about the state of the extension and allow them to prioritize manual testing."),(0,s.mdx)("h2",{id:"when-testing-is-done"},"When testing is done"),(0,s.mdx)("p",null,"MFTF Magento supplied tests will be run for all Marketplace extension submissions for:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Magento 2.3 and 2.4 release lines"),(0,s.mdx)("li",{parentName:"ul"},"Open Source and Commerce editions")),(0,s.mdx)("p",null,"The MFTF tests executed are:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"StorefrontGuestCheckoutTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateCustomerWithCountryUSATest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateNewCustomerOnStorefrontTest"),(0,s.mdx)("li",{parentName:"ul"},"StorefrontCustomerCheckoutTest"),(0,s.mdx)("li",{parentName:"ul"},"AddConfigurableProductToOrderFromShoppingCartTest"),(0,s.mdx)("li",{parentName:"ul"},"StorefrontReorderAsGuestTest"),(0,s.mdx)("li",{parentName:"ul"},"StorefrontUpdateWishlistTest"),(0,s.mdx)("li",{parentName:"ul"},"StorefrontClearAllCompareProductsTest"),(0,s.mdx)("li",{parentName:"ul"},"MoveConfigurableProductsInComparedOnOrderPageTest"),(0,s.mdx)("li",{parentName:"ul"},"CreateInvoiceWithZeroSubtotalCheckoutTest"),(0,s.mdx)("li",{parentName:"ul"},"CreateInvoiceWithShipmentAndCheckInvoicedOrderTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateCreditMemoPartialRefundTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateOrderWithSimpleProductTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateSimpleProductTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminConfigurableProductCreateTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateCategoryTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateAndEditBundleProductSettingsTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateAndEditConfigurableProductSettingsTest"),(0,s.mdx)("li",{parentName:"ul"},"AdminCreateAndEditVirtualGiftCardProductSettingsTest")),(0,s.mdx)("h2",{id:"what-is-being-checked"},"What is being checked"),(0,s.mdx)("p",null,"MFTF tests verify the proper functioning of basic Magento workflows. They are meant to mimic the same code paths that the end user would take, by automating the clicks and data entry that the user would do. The Magento codebase contains thousands of MFTF tests."),(0,s.mdx)("h2",{id:"tools-and-environments-used"},"Tools and environments used"),(0,s.mdx)("p",null,"The Magento test infrastructure executes Magento-supplied MFTF tests in the most up-to-date version of Magento in the 2.4.x and 2.3.x release lines, as well as the most up-to-date software compatible with that release. The test infrastructure follows the recommended setup for a Magento installation, MFTF setup, and system configuration. You can use ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento-cloud-docker"},"Magento Cloud Docker")," to create a similar environment."),(0,s.mdx)("h2",{id:"reading-the-error-report"},"Reading the error report"),(0,s.mdx)("p",null,"MFTF returns two types of results, displayed as ",(0,s.mdx)("inlineCode",{parentName:"p"},"MFTF Magento")," within the developer portal:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Simplified results showing the status of each test executed"),(0,s.mdx)("li",{parentName:"ul"},"Allure XML results")),(0,s.mdx)("p",null,"See ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/mftf/docs/reporting.html"},"MFTF Reporting")," for further information."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Test failures are generally due to:",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"The MFTF test flow being breaking due to changes to Magento user flows as intended by the extension under test. These can be fixed by using vendor-supplied MFTF Tests."),(0,s.mdx)("li",{parentName:"ul"},"A failure in the Magento user flow due to an unintended side-effect of the extension under test. This may be a type of regression bug and will be tested and verified by manual QA as part of EQP technical review."))),(0,s.mdx)("li",{parentName:"ul"},"The Allure results returned to Marketplace can be downloaded and displayed as an Allure report for simple consumption and identification of failure points.")),(0,s.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Ensure that your tests generate, execute and pass in the specified environment configuration"),(0,s.mdx)("li",{parentName:"ul"},"Tests must be in the ",(0,s.mdx)("inlineCode",{parentName:"li"},"Test/Mftf")," directory within the extension"),(0,s.mdx)("li",{parentName:"ul"},"MFTF tests within this directory must follow the standard directory structure, separating ActionGroups, Tests, Pages, Sections, etc into their own directories"),(0,s.mdx)("li",{parentName:"ul"},"Ensure that tests names do not clash with existing Magento tests"),(0,s.mdx)("li",{parentName:"ul"},"If you are extending from, or merging into, an existing Magento test (or relying upon its entities), it must be required as a Composer prerequisite"),(0,s.mdx)("li",{parentName:"ul"},"The MFTF tests will be part of the final package that is made available to your customers. Do not include any sensitive or confidential data in test comments or code"),(0,s.mdx)("li",{parentName:"ul"},"If necessary, include a README, or other instructions, within the ",(0,s.mdx)("inlineCode",{parentName:"li"},"Test")," directory, to explain any setup steps or caveats for running your MFTF tests"),(0,s.mdx)("li",{parentName:"ul"},"Ensure that any necessary credentials or user authorization (for example, to communicate via API key to your backend) is explained and supported via credential management in tests"),(0,s.mdx)("li",{parentName:"ul"},"Always follow the ",(0,s.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/mftf/docs/best-practices.html"},"MFTF Best Practices")," and use the ",(0,s.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/mftf/docs/tips-tricks.html"},"MFTF Tips & Tricks"),".")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-sellers-mftf-magento-md-02c0ec41e14dd4bd10ff.js.map
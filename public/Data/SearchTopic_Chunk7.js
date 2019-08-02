define({"600":{i:0.00202565593654652,u:"../industry_partners/payment/amazonpay/amazon-pay-api.htm",a:" So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay - API"},"601":{i:0.00202565593654652,u:"../industry_partners/payment/amazonpay/amazon-pay-simulations.htm",a:" In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with a red star on payment widget. It allows reproducing different cases of \"decline\" payment workflow.  But there are more edge cases like expired ...",t:"Amazon Pay - Sandbox Simulations"},"602":{i:0.00165749548567607,u:"../industry_partners/payment/amazonpay/amazon-pay-order-ref-info.htm",a:"Amazon Pay - Order Reference and Information about Shipping Addresses  After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about ...",t:"Amazon Pay - Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"603":{i:0.00202565593654652,u:"../industry_partners/payment/amazonpay/amazon-pay-rendering-pay.htm",a:" Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Amazon Pay - Rendering a \"Pay with Amazon\" Button on the Cart Page"},"604":{i:0.00178826847038424,u:"../industry_partners/payment/amazonpay/amazon-pay-support-bundled-products.htm",a:" Bundled products are optional in the shop, thus support of those should be configured. First, you have to extend AmazonPayFactory: namespace Pyz\\Yves\\AmazonPay;\n \nuse Spryker\\Yves\\ProductBundle\\Grouper\\ProductBundleGrouper;\nuse SprykerEco\\Yves\\AmazonPay\\AmazonPayFactory as EcoAmazonPayFactory;\n ...",t:"Amazon Pay - Support of Bundled Products"},"605":{i:0.000298954137281694,u:"../industry_partners/payment/afterpay/afterpay.htm",a:"Payment Integration - AfterPay  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Payment Integration - AfterPay  "},"606":{i:0.000268286202841053,u:"../industry_partners/payment/afterpay/afterpay-installation-and-configuration.htm",a:"This article describes the process of installing and configuring of AfterPay — a payment partner of Spryker.",t:"Afterpay Installation and Configuration | Spryker"},"607":{i:0.000862960493067385,u:"../industry_partners/payment/arvato/arvato.htm",a:"Risk Solution Services Integration - Arvato  Partner Information   See also: Arvato Risk Solution Services Integration  Arvato Risk Check\n            \n Arvato Store Order Arvato partners with e-commerce platform Spryker   Last review date: Jul. 5th, 2017   ",t:"Risk Solution Services Integration - Arvato"},"608":{i:0.00257767433398239,u:"../industry_partners/payment/arvato/v2_0/arvato-2-0.htm",a:" The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato 2.0   "},"609":{i:0.00268644793428163,u:"../industry_partners/payment/arvato/v2_0/arvato-risk-check-2-0.htm",a:" \n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Arvato  2.0 - Risk Check"},"610":{i:0.00256829220721888,u:"../industry_partners/payment/arvato/v2_0/arvato-store-order-2-0.htm",a:" \n    As soon as the order is activated in the eShop it has to be directly delivered by the service call StoreOrder in risk solution services. Based on the transmitted data a limit check is processed again. The result and action codes returned by StoreOrder should be analyzed and the order process ...",t:"Arvato  2.0 - Store Order"},"611":{i:0.00113189587063004,u:"../industry_partners/payment/braintree/braintree.htm",a:"Payment Integration — Braintree  Braintree provides two methods of payment: Credit Card PayPal In order to integrate Braintree payments, a Braintree merchant account should be created and configuration data then could be obtained from Braintree. There are two types of accounts for the integration: ...",t:"Payment Integration - Braintree"},"612":{i:0.000268286202841053,u:"../industry_partners/payment/braintree/legacy_demoshop_integration/braintree-legacy-demoshop.htm",a:"Braintree module provided in Spryker Commerce OS can be integrated into the Legacy Demoshop by adjusting the necessary configurations.",t:"Braintree - Legacy Demoshop | Spryker"},"613":{i:0.000989176078542533,u:"../industry_partners/payment/braintree/legacy_demoshop_integration/braintree-configuration-legacy-demoshop.htm",a:"To configure Braintree module for Legacy Demoshop, use credentials that have been received after registering the Braintree account.Also, Checkout,OMS and Payment configuration needs to be added",t:"Braintree — Configuration for Legacy Demoshop | Spryker"},"614":{i:0.000989176078542533,u:"../industry_partners/payment/braintree/legacy_demoshop_integration/braintree-requests-legacy-demoshop.htm",a:"To perform the Braintree requests in the Legacy Demoshop, it is necessary to use the implemented state machine commands and conditions.",t:"Braintree — Performing Requests for the Legacy Demoshop | Spryker"},"615":{i:0.000989176078542533,u:"../industry_partners/payment/braintree/legacy_demoshop_integration/braintree-workflow-legacy-demoshop.htm",a:"Braintree - Workflow for Legacy Demoshop Both credit card and PayPal utilize the same request flow. It basically consists of the following requests: Pre-check: to check the user information in order to make sure that all the needed information is correct before doing the actual pre-authorization. ...",t:"Braintree — Workflow for Legacy Demoshop | Spryker"},"616":{i:0.000268286202841053,u:"../industry_partners/payment/braintree/scos_integration/braintree-scos.htm",a:"Braintree module provided in Spryker Commerce OS can be integrated into the SCOS by adjusting the necessary configurations.",t:"Braintree - SCOS | Spryker"},"617":{i:0.000428639207687969,u:"../industry_partners/payment/braintree/scos_integration/braintree-configuration-scos.htm",a:"To configure Braintree module for SCOS, use credentials that have been received after registering the Braintree account.Also, Checkout,OMS and Payment configuration needs to be added.",t:"Braintree Configuration for SCOS | Spryker"},"618":{i:0.000428639207687969,u:"../industry_partners/payment/braintree/scos_integration/braintree-performing-requests-scos.htm",a:"To perform the Braintree requests in the SCOS, it is necessary to use the implemented state machine commands and conditions.",t:"Braintree - Performing Requests for SCOS | Spryker"},"619":{i:0.000428639207687969,u:"../industry_partners/payment/braintree/scos_integration/braintree-workflow-scos.htm",a:"Braintree module operates according to the established workflow: pre-check, authorize, revert, capture, refund.",t:"Braintree Workflow for SCOS | Spryker"},"620":{i:0.000843144211147316,u:"../industry_partners/payment/payone/payone-v1-1.htm",a:"Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit Online Transfer Paypal\n ...",t:"Payment Integration - BS Payone - 1.1"},"621":{i:0.00090428102763507,u:"../industry_partners/payment/payone/legacy_demoshop/v1_1/payone-integration-with-project-example.htm",a:" Objectives: Place order with PayPal express checkout. Be redirected to summary page of standard checkout. Have shipping a method selector on summary page. First of all we need to provide a URL to Payone module, which will be used to redirect user when the quote is filled with data obtained from ...",t:"PayOne - Integration With Project"},"622":{i:0.000268286202841053,u:"../industry_partners/payment/payone/scos/payone-integration_with_project_scos.htm",a:" Objectives: Place order with PayPal express checkout. Be redirected to summary page of standard checkout. Have shipping a method selector on summary page.   Frontend Update To make JavaScript and CSS styles enabled in the Suite, please update: \u003croot\u003e/tsconfig.json in section \"include\": ...",t:"Integration With Project - Payone "},"623":{i:0.000524499710027832,u:"../industry_partners/payment/payone/scos/payone-paypal-express-checkout-scos.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, they have to authorize and after that either cancel or validate the transaction. A concern regarding payment flows that require redirection to third party website pages is that you ...",t:"PayPal Express Checkout Payment Through Payone "},"624":{i:0.000268286202841053,u:"../industry_partners/payment/payone/scos/payone-risk-check-address-check-scos.htm",a:" Risk Check and Address Check - Payone  On the project level, you should override execute and postCondition methods of SprykerShop\\Yves\\CheckoutPage\\Process\\Steps\\AddressStep. src/Pyz/Yves/CheckoutPage/Process/Steps/AddressStep.php\n                 \n\u003c?php\n \nnamespace ...",t:"PayOne - Risk Check and Address Check"},"625":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-state-machine-cmd-cond-evnt.htm",a:"PayOne - State Machine Commands, Conditions and Events ",t:"PayOne - State Machine Commands, Conditions and Events"},"626":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-authorization-and-preauthorization-capture-flows.htm",a:" Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"PayOne - Authorization and Preauthorization-Capture Flows"},"627":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-facade.htm",a:"PayOne - Facade   ",t:"PayOne - Facade"},"628":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-direct-debit.htm",a:"Payone - Direct Debit Payment  Front-End Integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"PayOne - Direct Debit Payment"},"629":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-invoice.htm",a:" Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"PayOne - Invoice Payment"},"630":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-paypal.htm",a:" PayOne - Paypal Payment  The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on ...",t:"PayOne - Paypal Payment"},"631":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-credit-card.htm",a:" PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"PayOne - Credit Card Payment"},"632":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-prepayment.htm",a:"Payone - Pre-payment  Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the ...",t:"PayOne - Prepayment"},"633":{i:0.000353355243857294,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-online-trans.htm",a:" Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL, Przelewy24, and Bancontact. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method ...",t:"PayOne - Online Transfer Payment"},"634":{i:0.000846852923114593,u:"../industry_partners/payment/payone/legacy_demoshop/v1_1/payone-integration-security-invoice.htm",a:"Front-End Integration\n\t\t To adjust the frontend appearance, provide the following templates in your theme directory:\n\t\tsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/security_invoice.twig State Machine Integration\n\t\t Payone module provides a demo state machine for the Security Invoice ...",t:"Security Invoice Payment - Payone"},"635":{i:0.000601411573210287,u:"../industry_partners/payment/payone/legacy_demoshop/v1_1/payone-paypal-express-checkout.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayOne - PayPal Express Checkout Payment"},"636":{i:0.000268286202841053,u:"../industry_partners/payment/payone/scos/payone-cash-on-delivery.htm",a:"Payone - Cash on Delivery Frontend Integration Extending Checkout Page src/Pyz/Yves/CheckoutPage/CheckoutPageDependencyProvider.php \u003c?php\n \nnamespace Pyz\\Yves\\CheckoutPage;\n \nuse Generated\\Shared\\Transfer\\PaymentTransfer;\nuse Spryker\\Yves\\Kernel\\Container;\nuse ...",t:"Payone - Cash on Delivery | Spryker"},"637":{i:0.00122428368927121,u:"../industry_partners/payment/computop/computop.htm",a:" Partner Information \n            General Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n         The SprykerEco.Computop spryker-eco/computop bundle provides ...",t:"Payment Integration - Computop"},"638":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-api-details.htm",a:"Computop API  Authorization Call: \n        Authorize money.\n     \n        There is no partial authorization. Please make one API call to make authorization for all items in the order.\n     \n        It is not possible to Authorize a higher amount than in the ORDER.\n     Inquire Call: Status inquiries ...",t:"Computop - API details"},"639":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-credit-card.htm",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/credit_card.twig State Machine Integration The Computop provides a demo state machine for the ...",t:"Computop - Credit Card  "},"640":{i:0.00118729896976512,u:"../industry_partners/payment/computop/computop-direct-debit.htm",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/direct_debit.twig State Machine Integration The Computop provides a demo state machine for Direct ...",t:"Computop - Direct Debit  "},"641":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-easy-credit.htm",a:" Computop - Easy Credit  Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/easy_credit.twig State Machine Integration The Computop provides a demo ...",t:" Computop - Easy Credit  "},"642":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-ideal.htm",a:" Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/ideal.twig State Machine Integration The Computop provides a demo state machine for iDeal payment ...",t:"Computop - iDeal  "},"643":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-oms-details.htm",a:" The following plugins are used for performing calls to Paygate during OMS operation. Authorize Plugin: \n        Make an Authorize call to Computop.\n     Cancel Plugin: Follow these steps to cancel the item in the order in case all the items or the last possible one got canceled: Inquire a call to ...",t:"Computop - OMS  "},"644":{i:0.00110213298471399,u:"../industry_partners/payment/computop/computop-paydirekt.htm",a:" Computop - Paydirekt  Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paydirekt.twig State Machine Integration The Computop provides a demo state ...",t:" Computop - Paydirekt  "},"645":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-paynow.htm",a:" Example State Machine Front-end Integration To adjust the frontend appearance, provide the following templates in your theme directory: src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paynow.twig   State Machine Integration The Computop provides a demo state machine for the PayNow ...",t:"Computop - PayNow"},"646":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-paypal.htm",a:" Computop - PayPal  Example State Machine Front-End Integration \n    To adjust frontend appearance, provide following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paypal.twig State Machine Integration The Computop provides a demo state machine for ...",t:" Computop - PayPal  "},"647":{i:0.00119581556827023,u:"../industry_partners/payment/computop/computop-sofort.htm",a:" Example State Machine: Front-End Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/sofort.twig State Machine Integration The Computop provides a demo state machine for Sofort ...",t:"Computop - Sofort  "},"648":{i:0.00128822078698504,u:"../industry_partners/payment/computop/computop-crif.htm",a:" General Information About CRIF Popular with customers, risky for the merchant: Payment methods such as direct debit or purchase on account involve a high level of default risk. Computop Paycontrol, an automated credit rating with all standard credit agencies, combines flexibility and payment ...",t:"Computop - CRIF"},"649":{i:0.00108680370549523,u:"../industry_partners/payment/crefopay/crefopay.htm",a:"The Spryker CrefoPay bundle provides integration of Spryker e-commerce system with CrefoPay industry partner through API calls. Integration with checkout process and OMS (Order Management System) is provided.",t:"Payment Integration - CrefoPay | Spryker"},"650":{i:0.00108680370549523,u:"../industry_partners/payment/crefopay/crefopay-configuration.htm",a:"Configure your shop to use CrefoPay payment. All the payment methods are included.",t:"CrefoPay - Provided Payment Methods | Spryker"},"651":{i:0.00108680370549523,u:"../industry_partners/payment/crefopay/crefopay-integration.htm",a:"Learn how to integrate Adyen payment provider into your Spryker project.",t:"CrefoPay - Integration | Spryker"},"652":{i:0.0011920790465081,u:"../industry_partners/payment/crefopay/crefopay-provided-payment-methods.htm",a:"Spryker CrefoPay integration provides the following payment methods: Bill, Cash on Delivery, Credit Card, Credit, Card 3D, Direct Debit, PayPal, Cash in advance, SofortÜberweisung.",t:"CrefoPay - Provided Payment Methods | Spryker"},"653":{i:0.00266372069841071,u:"../industry_partners/payment/heidelpay/heidelpay.htm",a:"To use Heidelpay with Spryker, install Heidelpay, integrate Heidelpay into your project, configure selected payment methods (Paypal Authorize, Payal Debit, Credit Card, iDeal, Sofort, Easy Credit, Sofort), and build your own workflow by creating a new OMS which will use Hidelpay.\r\n",t:"Industry Partner Payment Integration - Heidelpay | Spryker"},"654":{i:0.0024986446021828,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-installation.htm",a:" To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and run the following console command: composer require spryker-eco/heidelpay   See ...",t:"Heidelpay - Installation  "},"655":{i:0.0024986446021828,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-integration.htm",a:"Heidelpay - Integration to Your Project\n  Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n       The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n "},"656":{i:0.000268286202841053,u:"../industry_partners/payment/heidelpay/scos/heidelpai-integration-scos.htm",a:"Heidelpay Integration into SCOS contains two steps: back-end and front-end integration. To integrate Heidelpay into SCOs, follow the steps described in the article.",t:"Heidelpay - Integration into SCOS | Spryker"},"657":{i:0.000268286202841053,u:"../industry_partners/payment/heidelpay/scos/heidelpay-configuration-scos.htm",a:"Heidelpay Configuration for SCOS contains instructions necessary for configuration of Heidelpay module into SCOS. The configuration consists of several steps: the configuration of the base settings, the configuration of store sensitive settings, and ",t:"Heidelpay Configuration for SCOS | Spryker"},"658":{i:0.000551305421567416,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-authorize.htm",a:"Integrate Paypal Authorize payment through Heidelpay into Spryker Legacy Demoshop",t:"Heidelpay Partner Integration - Paypal Authorize | Spryker"},"659":{i:0.000603373064251813,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-easy-credit.htm",a:"Integrate Easy Credit payment through Heidelpay into Spryker Legacy Demoshop.",t:"Heidelpay Partner Integration - Easy Credit | Spryker"},"660":{i:0.000268286202841053,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-split-payment-marketplace.htm",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example: // Heidelpay Split-payment marketplace logic\n$config[HeidelpayConstants::CONFIG_IS_SPLIT_PAYMENT_ENABLED_KEY] = true; Project Implementation A project level should set quote ...",t:"Heidelpay - Split-payment Marketplace"},"661":{i:0.002688028367625,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-credit-card.htm",a:"Integrate Credit Card Secure payment through Heidelpay into Spryker Legacy Demoshop.",t:"Heidelpay Partner Integration - Credit Card Secure | Spryker"},"662":{i:0.002688028367625,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-paypal-debit.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027; This value should be taken from HEIDELPAY ...",t:"Heidelpay - Paypal Debit Workflow  "},"663":{i:0.00214459517052516,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-error-workflow.htm",a:"Workflow for Errors article describes",t:"Heidelpay Partner Integration - Workflow for Errors | Spryker"},"664":{i:0.00239696912529656,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-sofort.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027; \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)  "},"665":{i:0.00239696912529656,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-ideal.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027; This value should be taken from HEIDELPAY. ...",t:"Hedelpay - iDeal  "},"666":{i:0.000298954137281694,u:"../industry_partners/payment/klarna/klarna.htm",a:" Partner Information Klarna Invoice The option to pay after delivery makes buying quicker and easier for customers. With Klarna’s Pay Later, shoppers do not need to fill out lengthy personal details or enter card numbers at the online point of sale. The transaction can be completed with only name, ...",t:"Payment Integration  - Klarna"},"667":{i:0.00179435425722813,u:"../industry_partners/payment/payolution/payolution.htm",a:"Payment Integration - Payolution  Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and configuration data then could be obtained from Payolution. There are two types of ...",t:"Payment Integration — Payolution"},"668":{i:0.00176814235440071,u:"../industry_partners/payment/payolution/payolution-configuration.htm",a:" \n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution - Configuration  "},"669":{i:0.00176814235440071,u:"../industry_partners/payment/payolution/payolution-installment.htm",a:" Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution - Installment Payment  "},"670":{i:0.00176814235440071,u:"../industry_partners/payment/payolution/payolution-invoice.htm",a:" Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Integrating Payolution Invoice Payment To integrate invoice payments, two simple steps are needed: setting Payolution invoice payment ...",t:"Payolution - Invoice Payment  "},"671":{i:0.00176814235440071,u:"../industry_partners/payment/payolution/payolution-requests.htm",a:" In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and ...",t:"Payolution - Performing Requests  "},"672":{i:0.00206872533617623,u:"../industry_partners/payment/payolution/payolution-workflow.htm",a:" Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution - Workflow  "},});
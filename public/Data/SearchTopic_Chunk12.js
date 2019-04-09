define({"977":{i:0.000367703186811254,u:"../capabilities/development/zed_api/zed-api-project-implementation.htm",a:" For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API    "},"978":{i:0.000328693543599523,u:"../capabilities/development/sequence-number.htm",a:" \n    Sometimes it should be ensured for a project that the just generated number is not used for the same purpose twice.\n    Spryker provides Sequence Number module which handles the unique number generation.\n General Usage The sequence number facade contains ::generate() method which provides a ...",t:"Sequence Number    "},"979":{i:0.00040923357760061,u:"../capabilities/search_and_filter/search-configure-elasticsearch.htm",a:" Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch    "},"980":{i:0.000400175810860511,u:"../capabilities/product_management/product_reviews/product-review-feature-configuration.htm",a:" Configuring the Maximum Rating To change the maximum allowed rating, alter the Client configuration by extending the \\Spryker\\Client\\ProductReview\\ProductReviewConfig class in your project directory. Override getMaximumRating method to return the desired selectable maximum rating value. \n        ...",t:"Feature Configuration - Product Reviews  "},"981":{i:0.00228226514787974,u:"../capabilities/development/queue/queue-engine.htm",a:" The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI for Demoshop: Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg ...",t:"Default Queue Engine   "},"982":{i:0.00207876546017555,u:"../capabilities/product_management/product_options/product-option-module-1.htm",a:" ML Multi-language MS Multi-store MC Multi-currency This module manages the product options. The product options are product additions that can be sold with the actual product. Each product abstract can have multiple product option groups attached. Each product option value has a price, which ...",t:"Product Option Module - Version 1    "},"983":{i:0.00289857062556834,u:"../capabilities/development/collector/collector-types.htm",a:" Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types "},"984":{i:0.000425894932419065,u:"../capabilities/payment/how_to_implement_prepayment/ht-implement-prepayment.htm",a:" Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment   "},"985":{i:0.000341266270919175,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-paypal-express-checkout.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayOne - PayPal Express Checkout Payment"},"986":{i:0.00297359724205637,u:"../capabilities/order_management/state_machine/state-machine-patterns.htm",a:"This topic provides an overview of the state machine patterns and the additional useful information.",t:"State Machine Patterns | Spryker"},"987":{i:0.000637004053085664,u:"../capabilities/development/event/event-asynch.htm",a:"Asynchronous Events  An asynchronous event can be created by using the addListenerQueued method instead of addListener. The difference is that it queues the event to be processed later by another process/consumer. You must have queue configured before using this feature, see bellow.",t:"Asynchronous Events  "},"988":{i:0.00238280444040245,u:"../capabilities/order_management/state_machine/state-machine-persistence.htm",a:"To persist the state of the item and make the connection with the state machine, you need to store related data into the database.",t:"Persistence - State Machine | Spryker"},"989":{i:0.000554721639347591,u:"../feature_integration_guides/product_lists/product-lists-catalog-integration-201903.htm",a:"Product Lists: Catalog Feature Integration  Install Feature Core Prerequisites To start feature integration, overview and install the necessary features:",t:"Product Lists: Catalog Feature Integration | Spryker"},"990":{i:0.000637004053085664,u:"../capabilities/development/event/event-priority.htm",a:" The Event Collector \\Spryker\\Service\\Event\\Dependency\\EventCollectionInterface uses a priority queue store events so each that event can have different priority and will be executed in correct order when triggered. For example: \u003c?php\n$eventCollection\n    ...",t:"Listener Priority  "},"991":{i:0.00060606956889072,u:"../resources/gluepublicspec/swagger-ui/oauth2-redirect.html",a:"\r\n    \u0027use strict\u0027;\r\n    function run () {\r\n        var oauth2 = window.opener.swaggerUIRedirectOauth2;\r\n        var sentState = oauth2.state;\r\n        var redirectUrl = oauth2.redirectUrl;\r\n        var isValid, qp, arr;\r\n        if (/code|token|error/.test(window.location.hash)) {\r\n            qp = window.location.hash.substring(1);\r\n        } else {\r\n            qp = location.search.substring(1);\r\n        }\r\n        arr = qp.split(\"\u0026\")\r\n        arr.forEach(function (v,i,_arr) { _arr[i] = \u0027\"\u0027 + v.replace(\u0027=\u0027, \u0027\":\"\u0027) + \u0027\"\u0027;})\r\n        qp = qp ? JSON.parse(\u0027{\u0027 + arr.join() + \u0027}\u0027,\r\n                function (key, value) {\r\n                    return key === \"\" ? value : decodeURIComponent(value)\r\n                }\r\n        ) : {}\r\n        isValid = qp.state === sentState\r\n        if ((\r\n          oauth2.auth.schema.get(\"flow\") === \"accessCode\"||\r\n          oauth2.auth.schema.get(\"flow\") === \"authorizationCode\"\r\n        ) \u0026\u0026 !oauth2.auth.code) {\r\n            if (!isValid) {\r\n                oauth2.errCb({\r\n                    authId: oauth2.auth.name,\r\n                    source: \"auth\",\r\n                    level: \"warning\",\r\n                    message: \"Authorization may be unsafe, passed state was changed in server Passed state wasn\u0027t returned from auth server\"\r\n                });\r\n            }\r\n            if (qp.code) {\r\n                delete oauth2.state;\r\n                oauth2.auth.code = qp.code;\r\n                oauth2.callback({auth: oauth2.auth, redirectUrl: redirectUrl});\r\n            } else {\r\n                let oauthErrorMsg\r\n                if (qp.error) {\r\n                    oauthErrorMsg = \"[\"+qp.error+\"]: \" +\r\n                        (qp.error_description ? qp.error_description+ \". \" : \"no accessCode received from the server. \") +\r\n                        (qp.error_uri ? \"More info: \"+qp.error_uri : \"\");\r\n                }\r\n                oauth2.errCb({\r\n                    authId: oauth2.auth.name,\r\n                    source: \"auth\",\r\n                    level: \"error\",\r\n                    message: oauthErrorMsg || \"[Authorization failed]: no accessCode received from the server\"\r\n                });\r\n            }\r\n        } else {\r\n            oauth2.callback({auth: oauth2.auth, token: qp, isValid: isValid, redirectUrl: redirectUrl});\r\n        }\r\n        window.close();\r\n    }\r\n",t:"oauth2-redirect"},"992":{i:0.00333213154955009,u:"../capabilities/checkout/multi-step_checkout/checkout-stepengine.htm",a:" The latest version of this feature can be found at  Checkout StepEngine    Yves Step Processing Checkout in Spryker  demoshop  uses a StepEngine step process to navigate customer step by step through checkout. The checkout process creates a generic approach for step processing; each step knows how ...",t:"Checkout StepEngine   "},"993":{i:0.00207876546017555,u:"../feature_integration_guides/multiple_carts_+_quick_order/multiple-carts-quick-order-integration-201811.htm",a:"The Quick Order Feature allows ordering products by entering SKU and quantity in one page. The guide describes how to integrate the feature into your project. ",t:"Multiple Carts Add to Cart Feature Integration | Spryker"},"994":{i:0.000948436068394348,u:"../capabilities/cart/quick_order/quick-order.htm",a:"The Quick Order feature enables customers to buy their commonly ordered products in just a few clicks, encouraging them to come back and buy more.",t:"Quick Order | Spryker"},"995":{i:0.00207876546017555,u:"../feature_integration_guides/company_account/business-on-behalf-feature-integration.htm",a:"The Business on Behalf feature allows you to have multiple company users per customer account as well as to select one company user as a default company user. This guide will walk you through the process of integrating the Business on Behalf feature into your project.",t:"Business on Behalf feature Integration | Spryker "},"996":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_prepayment/ht-prepayment-checkout.htm",a:" The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout   "},"997":{i:0.000637004053085664,u:"../capabilities/development/event/event-adding.htm",a:" When adding an event, make sure you first decide what kind of events you want to trigger in your code. Events are stored in a class for later use, by adding its literal string value (ModuleName.subject.action). This value uniquely identifies an event in the event module, and all listeners attached ...",t:"Adding Events  "},"998":{i:0.00365150303597936,u:"../capabilities/navigation/module-navigation-1-0.htm",a:" Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation Module Version 1.*  "},"999":{i:0.00207876546017555,u:"../feature_integration_guides/multiple_carts/multiple-carts-feature-integration-201811.htm",a:"Multiple Carts allows customers to manage multiple shopping carts in one account. The guide describes how to integrate the feature into your project.",t:"Multiple Carts Feature Integration | Spryker"},"1000":{i:0.000544447725535114,u:"../capabilities/development/event/event-listen.htm",a:" There are two ways to listen to events, using direct listeners or subscribers. The difference between these two is that a subscriber allows the module providing the subscriber to wire up the handlers in the module that owns it without touching the EventDependencyProvider exception’s initial ...",t:"Listening to Events  "},"1001":{i:0.000606900647639794,u:"../capabilities/mailing_and_notifications/mail.htm",a:"There are many cases where an action triggers email to be sent. Such actions can be newsletter subscriptions, order placement, account registration, etc.",t:"Mail | Spryker"},"1002":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_prepayment/ht-prepayment-shared.htm",a:" As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared   "},"1003":{i:0.00219121648350844,u:"../capabilities/development/install-tool.htm",a:" Spryker offers an install tool which can be used to install the system as described in the install recipe file(s). Installation Install the module with composer by running the following command: \n        composer require spryker/install\n         After the installation you can run the command with ...",t:"Install Tool    "},"1004":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_prepayment/ht-prepayment-be.htm",a:" To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End   "},"1005":{i:0.00238280444040245,u:"../capabilities/order_management/state_machine/state-machine-events.htm",a:"This topic describes the use of event triggers and the GET requests that are used.",t:"Triggering Events - State Machine | Spryker"},"1006":{i:0.000493092130269636,u:"../capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-fe.htm",a:" Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End   "},"1007":{i:0.000364835557712895,u:"../capabilities/product_management/product/product-lifecycle.htm",a:" The touch tables are able create the snapshot of what’s currently loaded into the Yves data storages ( both key-value and search data storages) If a product was added into the Zed database after the last export, then there’s no corresponding entry in the touch table for that product. Once it’s ...",t:"Product Lifecycle    "},"1008":{i:0.0015023254882958,u:"../capabilities/development/file_system/filesystem-api.htm",a:" Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API  "},"1009":{i:0.000857277694755403,u:"../feature_integration_guides/merchant_product_restrictions/merchant-product-restrictions-feature-integration-201811.htm",a:"Merchant Product Restrictions allows setting access to particular products. This guide describes the process of integrating the feature into a project.",t:"Merchant Product Restrictions Feature Integration | Spryker"},"1010":{i:0.000493092130269636,u:"../capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-be.htm",a:" Checkout Plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End   "},"1011":{i:0.00302900325690557,u:"../capabilities/product_management/product-store_relation/product-store-relation-under-the-hood.htm",a:" Database Schema \n            The Product module introduces a new table: spy_product_abstract_store. The table stores all abstract product-store relations. An abstract product is available in a store when it has a\n            spy_product_abstract_store row for the given abstract product and store ...",t:"Under the Hood - Multi-Store Products  "},"1012":{i:0.00085135968377627,u:"../capabilities/order_management/url-handling-new-entity.htm",a:" The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs "},"1013":{i:0.00207876546017555,u:"../feature_integration_guides/product_label/product-label-feature-integration.htm",a:"Product Label Feature Integration  Prerequisites To prepare your project for using Product Labels: Require the Product Label module in your composer.json by running composer require spryker/product-label spryker/product-label-collector spryker/product-label-gui Install the required changes to the ...",t:"Product Label Feature Integration | Spryker"},"1014":{i:0.000381001564480157,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-v1-0.htm",a:" Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n Online Transfer Paypal ...",t:"Payment Integration - BS PayOne - 1.0"},"1015":{i:0.00289857062556834,u:"../capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"1016":{i:0.00319584562234501,u:"../capabilities/product_management/product-store_relation/product-store-relation.htm",a:" \n            In a multi-store environment it might be necessary to configure the abstract product appearance per store (by default, all abstract products are available in all stores).\n            A dedicated partial form in Zed Admin UI allows to manage abstract product-store relations.\n            ...",t:"Product-Store Relation  "},"1017":{i:0.00353118159774625,u:"../capabilities/cart/quick_order/quick-order-feature-overview.htm",a:"On the Quick Order form in the web-shop, a customer can enter product SKU and Quantity and proceed by adding it to cart or by creating an order right away.",t:"Quick Order Feature Overview | Spryker"},"1018":{i:0.00207876546017555,u:"../capabilities/checkout/multi-step_checkout/checkout-process.htm",a:"In order to use checkout in Yves it should be correctly configured and dependencies should be provided.",t:"Checkout Process | Spryker"},"1019":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_direct_debit/dd-shared-implementation.htm",a:" \nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation   "},"1020":{i:0.00266774555423691,u:"../capabilities/product_management/product_reviews/product-review-under-the-hood.htm",a:" Database Schema The Product Review module adds a new table: spy_product_review. The table stores all product review related information such as description, rating, locale, customer, product, etc. Product Reviews in Search product-review type is defined under the already existing index in Search. ...",t:"Under the Hood - Product Reviews  "},"1021":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_direct_debit/dd-fe-implementation.htm",a:" Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation   "},"1022":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_prepayment/ht-prepayment-fe.htm",a:" Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End   "},"1023":{i:0.000562963317938947,u:"../capabilities/company_account/product_restrictions_from_merchant_to_buyer/product-restrictions-from-merchant-to-buyer.htm",a:"Product Restrictions from Merchant to Buyer provides clients with access to the products and information without overwhelming them with non-essential data.",t:"Product Restrictions from Merchant to Buyer | Spryker"},"1024":{i:0.00082513907291565,u:"../capabilities/navigation/t-add-navigation-zed.htm",a:" This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{moduleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed  "},"1025":{i:0.00040923357760061,u:"../capabilities/search_and_filter/dynamic-filters-functionality.htm",a:" ML Multi-language In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio ...",t:"Dynamic Filters Functionality"},"1026":{i:0.000384227464079761,u:"../capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-checkout.htm",a:" The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the invoice form and handler into the Checkout module:\n Click here to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Invoice Payment into Checkout"},"1027":{i:0.000329495304565278,u:"../tutorials/howtos/ht-mvp-project-structuring.htm",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"1028":{i:0.00207876546017555,u:"../feature_integration_guides/product_measurement_unit/product-measurement-units-feature-integration-201811.htm",a:"The Measurement Units feature allows defining specific units of measure for products. The guide describes how to integrate the feature into your project.",t:"Feature Integration - Product Measurement Unit | Spryker"},"1029":{i:0.000367703186811254,u:"../capabilities/development/zed_api/zed-api-processor-stack.htm",a:" Request and Pre Processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API    "},});
define({"lug":{"getcurrencypostchangeplugins":[174,774],"rebuildcartoncurrencychangeplugin":[174,774],"conditionplugin":[181],"reservationhandlerplugininterface":[181,789,923,1144],"reservationversionhandlerplugin":[181],"getreservationhandlerplugins":[181,789,923,1144],"reservationexportplugin":[181],"mailtypeplugin":[188,986,1027,1028],"mailproviderplugin":[188],"hydrateorderplugininterface":[208,745,922,923,1144,1206],"discountorderhydrateplugin":[208,745],"shipmentorderhydrateplugin":[208,845],"getcommandplugins":[209,511,512,707,716,723,984,1104,1115],"command_plugins":[209,499,603,607,608,611,618,625,629,632,649,663,667,668,680,908,983,984],"exampleplugin":[209],"getconditionplugins":[209,511,512,723,984,1104,1115],"checkoutplugins":[225],"refundplugin":[225,603,618,625,626,629,630,649,662,663,680,683],"paymentorderhydrateplugin":[227,791],"getorderhydrationplugins":[227,745,791,922,923,1144,1206],"payment_hydration_plugins":[227],"injectpaymentplugin":[227],"paymenthydratorplugincollectioninterface":[227],"$plugincollection":[227,625,632,667,680,908,1045,1051,1057],"paymentprovidersalesorderpaymenthydrationplugin":[227],"paymenthydratorplugininterface":[227],"refundcalculatorplugininterface":[228,1082],"expandbundleitemsplugin":[247,940],"productnewlabelupdaterplugin":[248],"productlabelrelationupdaterplugininterface":[248,891,953],"getproductlabelrelationupdaterplugins":[248,891,953],"productrelationcollectorplugin":[252],"storage_plugins":[252,753,819,942,943,946,947,950,953,954,955,1112,1131,1182,1204],"shipmentcarrierdecisionruleplugin":[297,301],"shipmentmethoddecisionruleplugin":[297,301],"shipmentpricedecisionruleplugin":[297,301],"itembyshipmentcarrierplugin":[297,301],"itembyshipmentmethodplugin":[297,301],"itembyshipmentpriceplugin":[297,301],"decisionruleplugininterface":[297,301,953,1112],"getdecisionruleplugins":[297,301,908,949,953,1112],"collectorplugininterface":[297,301,953,1112],"getcollectorplugins":[297,301,953,1112],"shipmentcheckoutprecheckplugin":[297],"shipmentmethodavailabilityplugininterface":[300,977],"dhlexpressplugin":[300],"shipmentmethodpriceplugininterface":[300,977],"shipmentmethoddeliverytimeplugininterface":[300,845,977],"getavailabilityplugins":[300],"youravailabilityplugin":[300],"getpriceplugins":[300],"yourpriceplugin":[300],"getdeliverytimeplugins":[300],"yourdeliverytimeplugin":[300],"productitemtaxcalculatorsplugin":[315],"productioptiontaxcalculatorsplugin":[315],"shipmenttaxcalculatorsplugin":[315],"flattaxratecalculatorplugin":[315],"newtaxratecalculatorplugin":[315],"calculator_plugin":[456],"availability_plugin":[461],"price_plugin":[461],"delivery_time_plugin":[461],"pluginpimple":[496],"configurationprofileplugininterface":[499,698],"proccessconfigurationplugininterface":[499],"akeneopimconfigurationprofileplugin":[499,698],"processconfigurationplugininterface":[499],"getprocessconfigurationplugins":[499],"translatorfunctionplugininterface":[499],"gettranslatorfunctionplugins":[499],"validatorplugininterface":[499],"getvalidatorplugins":[499],"getinputstreamplugin":[499],"getoutputstreamplugin":[499],"getiteratorplugin":[499],"getstageplugins":[499],"getloggerplugin":[499],"getpreprocessorhookplugins":[499],"getpostprocessorhookplugins":[499],"getpreprocesshookplugins":[499],"categoryimportconfigurationplugin":[499],"inputstreamplugininterface":[499],"getcategoryimportinputstreamplugin":[499],"outputstreamplugininterface":[499],"getcategoryimportoutputstreamplugin":[499],"processiteratorplugininterface":[499],"getcategoryimportiteratorplugin":[499],"stageplugininterface":[499],"getcategoryimportstagepluginsstack":[499],"middlewareloggerconfigplugininterface":[499],"getakeneopimloggerconfigplugin":[499],"preprocessorhookplugininterface":[499],"getcategoryimportpreprocessorpluginsstack":[499],"postprocessorhookplugininterface":[499],"getcategoryimportpostprocessorpluginsstack":[499],"getconfigurationprofilepluginsstack":[499,698],"pimconfigurationprofileplugin":[499],"defaultconfigurationprofileplugin":[499,698],"reportpostprocessorhookplugin":[499],"orderreadstreamplugin":[499],"orderexportprocessconfigurationplugin":[499],"abstractgenericvalidatorplugin":[499],"abstractgenerictranslatorfunctionplugin":[499],"categorydataimporterplugin":[499,698],"addcategorydataimporterplugin":[499],"my_module_category_importer_plugin":[499],"dataimporterplugininterface":[499,698],"$dataimporterplugin":[499],"dataimporterplugin":[499],"categoryimporterplugin":[499],"addcategoryimportprocessplugins":[499],"category_import_output_stream_plugin":[499],"categorywritestreamplugin":[499],"slugan":[501],"pluginomsconditionpaymentiscompleted":[511],"pluginomscommandsendpaymentrequest":[511],"isrefundapprovedplugin":[512,625,626,629,630,680,683],"createinvoiceplugin":[512],"sendinvoiceplugin":[512],"updatepaymentstatusplugin":[512],"updateorderplugin":[512],"refundpaymentplugin":[512,694],"cancelorderplugin":[512],"youreventlistenerplugin":[517],"consolelogplugin":[517,1108],"getdataimporterplugins":[521,795,888,898,909,910,911,912,913,918,921,922,923,936,937,938,1100,1105,1113,1117,1129,1138,1144,1155,1159,1170,1180,1183,1190,1206],"companydataimportplugin":[521],"dataimportplugininterface":[521],"adddataimporterplugins":[521],"datasetwriterplugininterface":[521,698],"createproductabstractwriterplugins":[521],"productabstractbulkpdowriterplugin":[521],"productabstractpropelwriterplugin":[521,698],"my_plugins":[523],"aplugin":[523],"bplugin":[523],"itemtaxcalculatorplugin":[528,854],"anotherbundleplugininterface":[528],"groupplugin":[529],"useragentformexpanderplugin":[529,887,1156],"useragenttableconfigexpanderplugin":[529,887,1156],"usertableactionexpanderplugin":[529],"useragenttabledataexpanderplugin":[529,887,1156],"synchronizationstoragequeuemessageprocessorplugin":[531,738,988,989],"synchronizationsearchqueuemessageprocessorplugin":[531],"shopapplicationeventdispatcherplugin":[539],"eventdispatcherplugininterface":[539],"geteventdispatcherplugins":[539],"widgettagtwigplugin":[539],"resourcerouteplugininterface":[558,559,732,859,860,861,862,863,867,869,871,872,873,875,876,877,878,879,880,882,883,884,885,886,994,998,1084,1085,1096,1097,1110,1118,1124,1130,1134,1179,1198],"getresourcerouteplugins":[558,732,859,860,861,862,863,867,869,871,872,873,875,876,877,878,879,880,882,883,884,885,886,994,998,1084,1085,1096,1097,1110,1118,1124,1130,1134,1179,1198],"cartsresourcerouteplugin":[558,732,861],"cartitemsresourcerouteplugin":[558,732,861],"wishlistsresourcerouteplugin":[558,886,994,1198],"featureresourcerelationshipplugin":[558],"featureresourcerouterplugin":[558],"resourcewithparentplugininterface":[558],"resourcerelationshipplugininterface":[558],"concreteproductbyskuresourcerelationshipplugin":[558,861],"myresourcerouteplugin":[559],"getuserproviderplugins":[559,859],"oauthuserproviderplugininterface":[559,859],"getscopeproviderplugins":[559,859],"oauthscopeproviderplugininterface":[559,859],"subformplugincollection":[603,625,629,632,648,649,657,663,667,668,671,680,685,1044,1050,1056],"adyenpaymenthandlerplugin":[603],"adyencreditcardsubformplugin":[603],"adyendirectdebitsubformplugin":[603],"adyenidealsubformplugin":[603],"adyenklarnainvoicesubformplugin":[603],"adyensofortsubformplugin":[603],"adyenprepaymentsubformplugin":[603],"adyenpaypalsubformplugin":[603],"adyenalipaysubformplugin":[603],"adyenwechatpaysubformplugin":[603],"extendsubformplugincollection":[603,649,663],"stephandlerplugincollection":[603,625,629,632,633,634,636,648,649,657,660,663,667,668,671,680,685,1044,1050,1056],"$subformplugincollection":[603,649,668,671,685],"adyendosaveorderplugin":[603],"adyenpostsavehookplugin":[603],"$plugins":[603,618,629,649,663,668,912,1159],"authorizeplugin":[603,618,625,626,629,630,649,667,668],"cancelplugin":[603,618,649,663],"cancelorrefundplugin":[603],"captureplugin":[603,618,625,626,629,630,649,662,663,667,668,670,673,677,680,683],"isauthorizedplugin":[603,649],"isauthorizedandcapturedplugin":[603],"iscanceledplugin":[603],"iscancellationfailedplugin":[603],"iscancellationreceivedplugin":[603],"iscapturedplugin":[603,649],"iscapturefailedplugin":[603],"iscapturereceivedplugin":[603],"isrefundedplugin":[603,649,694],"isrefundfailedplugin":[603],"isrefundreceivedplugin":[603],"extendcommandplugins":[603,649,663,908,949,983],"extendconditionplugins":[603,649,663,908,949,983],"condition_plugins":[603,607,608,611,618,625,629,632,649,663,667,668,680,685,908,983,984],"adyenpaymentmethodfilterplugin":[604],"paymentmethodfilterplugininterface":[604,636,649,663,908],"getpaymentmethodfilterplugins":[604,636,649,663,908,949],"getcustomerpagewidgetplugins":[605,649,976],"cancelordercommandplugin":[607,608,611],"closeordercommandplugin":[607,608,611],"refundordercommandplugin":[607,608,611],"reauthorizeexpiredordercommandplugin":[607,608,611],"capturecommandplugin":[607,608,611,632,638],"updatesuspendedordercommandplugin":[607,608,611],"updateauthorizationstatuscommandplugin":[607,608,611],"updatecapturestatuscommandplugin":[607,608,611],"updaterefundstatuscommandplugin":[607,608,611],"isclosedconditionplugin":[607,608,611],"iscloseallowedconditionplugin":[607,608,611],"iscancelledconditionplugin":[607,608,611],"iscancelnotallowedconditionplugin":[607,608,611],"iscancelledorderconditionplugin":[607,608,611],"isopenconditionplugin":[607,608,611],"isdeclinedconditionplugin":[607,608,611],"ispendingconditionplugin":[607,608,611],"issuspendedconditionplugin":[607,608,611],"isauthexpiredconditionplugin":[607,608,611],"isauthtransactiontimedoutconditionplugin":[607,608,611],"iscompletedconditionplugin":[607,608,611],"plug":[607,632,1043,1049,1055],"amazonpayconfirmorderpreconditionplugin":[607],"amazonpaysaveorderplugin":[607],"afterpaysaveorderplugin":[618],"isauthorizationcompletedplugin":[618,667,668],"iscancellationcompletedplugin":[618],"iscapturecompletedplugin":[618],"isrefundcompletedplugin":[618],"addcommandplugins":[618,668],"sendorderconfirmationplugin":[618,668,723],"sendordershippedplugin":[618,668,723],"addconditionplugins":[618,668],"storeorderplugin":[622],"isstoreordersuccessfulplugin":[622],"$paymenthandlerplugins":[625,680],"braintreehandlerplugin":[625,629],"$paymentsubformplugins":[625,680],"braintreecreditcardsubformplugin":[625,629],"braintreepaypalsubformplugin":[625,629],"revertplugin":[625,626,629,630,680,683],"isauthorizationapprovedplugin":[625,626,629,630],"isreversalapprovedplugin":[625,626,629,630,680,683],"iscaptureapprovedplugin":[625,629,667,668,680],"checkout_plugins":[625,632,667,680,908,1045,1051,1057],"checkoutplugincollection":[625,632,667,680,1045,1051,1057],"braintreeprecheckplugin":[625,629],"checkout_pre_check_plugins":[625,632,680,908,949,1045,1051,1057],"braintreesaveorderplugin":[625,629],"checkout_order_saver_plugins":[625,632,667,680,908,949,1045,1051,1057],"braintreepostsaveplugin":[625,629],"checkout_post_save_plugins":[625,632,667,680],"addsubformplugincollection":[629,668,671,685],"$paymentsubformplugincollection":[629,663],"addpaymentmethodhandlerplugincollection":[629,668,671,685],"itemscaptureplugin":[629],"ordercaptureplugin":[629],"itemsrefundplugin":[629],"orderrefundplugin":[629],"seeorderplacesubmitpermissionplugin":[629,649,671,685,906],"payonehandlerplugin":[632,648],"$paymentsubformplugin":[632,648,657,667],"payoneinvoicesubformplugin":[632],"payonesecurityinvoicesubformplugin":[632],"payonecreditcardsubformplugin":[632],"payonedirectdebitsubformplugin":[632],"payoneewalletsubformplugin":[632],"payoneepsonlinetransfersubformplugin":[632],"payoneprepaymentsubformplugin":[632],"payoneprecheckplugin":[632],"payonesaveorderplugin":[632],"payonepostsavehookplugin":[632],"preauthorizationisapprovedconditionplugin":[632,638],"authorizationisapprovedconditionplugin":[632,638],"captureisapprovedconditionplugin":[632,638],"refundisapprovedconditionplugin":[632],"refundispossibleconditionplugin":[632],"preauthorizationiserrorconditionplugin":[632,638],"authorizationiserrorconditionplugin":[632,638],"preauthorizationisredirectconditionplugin":[632,638],"authorizationisredirectconditionplugin":[632,638],"paymentisappointedconditionplugin":[632],"paymentiscaptureconditionplugin":[632],"paymentispaidconditionplugin":[632],"paymentisunderpaidconditionplugin":[632],"paymentisoverpaidconditionplugin":[632],"paymentisrefundconditionplugin":[632],"preauthorizecommandplugin":[632,638],"authorizecommandplugin":[632,638],"cancelcommandplugin":[632],"capturewithsettlementcommandplugin":[632],"refundcommandplugin":[632],"getshipmentformdataproviderplugin":[633,634],"$shipmentplugins":[633,634,636,649,660,685],"shipmentplugins":[633,634,663],"plugin_shipment_step_handler":[633,634],"plugin_shipment_handler":[636,663],"payonepaymentmethodfilterplugin":[636],"preauthorizationisapprovedplugin":[637],"preauthorizationiserrorplugin":[637],"preauthorizationisredirectplugin":[637],"captureisapprovedplugin":[637],"authorizationisapprovedplugin":[637],"authorizationiserrorplugin":[637],"authorizationisredirectplugin":[637],"refundisapprovedplugin":[637],"refundispossibleplugin":[637],"preauthorizawithsettlementcommandplugin":[638],"captureiserrorconditionplugin":[638],"payonecashondeliverysubformplugin":[648],"computoppaymenthandlerplugin":[649,657],"creditcardsubformplugin":[649],"directdebitsubformplugin":[649,1043,1044],"easycreditsubformplugin":[649,685],"idealsubformplugin":[649],"paydirektsubformplugin":[649],"paynowsubformplugin":[649,657],"paypalsubformplugin":[649],"sofortsubformplugin":[649],"getshipmentplugins":[649,660,663,685],"cartnotequoteitemnotewidgetplugin":[649,671,685],"cartnotequotenotewidgetplugin":[649,671,685],"checkoutvoucherformwidgetplugin":[649,671,685],"computopdosaveorderplugin":[649],"computoppostsavehookplugin":[649],"easycreditauthorizeplugin":[649],"iscancelledplugin":[649],"isinitializedplugin":[649],"computoppaymentmethodfilterplugin":[649],"capturesplitplugin":[662,663],"refundsplitplugin":[662,663],"nopaymenthandlerplugin":[663,949],"paymentformfilterplugin":[663,949],"crefopaypaymentexpanderplugin":[663],"crefopayquoteexpanderplugin":[663],"crefopaybillsubformplugin":[663],"crefopaycashondeliverysubformplugin":[663],"crefopaycreditcard3dsubformplugin":[663],"crefopaycreditcardsubformplugin":[663],"crefopaydirectdebitsubformplugin":[663],"crefopaypaypalsubformplugin":[663],"crefopayprepaidsubformplugin":[663],"crefopaysofortsubformplugin":[663],"salesorderthresholdwidgetplugin":[663],"plugin_crefo_pay_shipment_step":[663],"extendshipmenthandlerplugincollection":[663],"$shipmenthandlerplugins":[663],"$crefopayplugin":[663],"crefopaydosaveorderplugin":[663],"crefopaypostsavehookplugin":[663],"finishplugin":[663],"isacknowledgependingreceivedplugin":[663],"iscanceledreceivedplugin":[663],"iscancelcallsuccessfulplugin":[663],"isciapendingreceivedplugin":[663],"ispaidreceivedplugin":[663],"iscapturecallsuccessfulplugin":[663],"isdonereceivedplugin":[663],"isexpiredreceivedplugin":[663],"isfinishcallsuccessfulplugin":[663],"ischargebackreceivedplugin":[663],"isrefundcallsuccessfulplugin":[663],"isreservecallsuccessfulplugin":[663],"ismerchantpendingreceivedplugin":[663],"crefopaypaymentmethodfilterplugin":[663],"provideplugins":[667,941,1192],"$pimpleplugin":[667],"heidelpaysofortsubformplugin":[667,668],"heidelpaypaypalauthorizesubformplugin":[667,668],"heidelpaypaypaldebitsubformplugin":[667,668],"heidelpayidealsubformplugin":[667,668],"heidelpayeasycreditsubformplugin":[667,671],"heidelpaycreditcardsecuresubformplugin":[667,668],"heidelpayhandlerplugin":[667,668,671],"isdebitcompletedplugin":[667,668],"debitplugin":[667,668],"heidelpaysaveorderplugin":[667,668],"heidelpaypostsaveplugin":[667,668,670,673,674,676],"$stephandlerplugincollection":[668,671,685],"heidelpaycreditcardhandlerplugin":[668],"baseabstractplugin":[670,673,674,676],"checkoutpostcheckplugininterface":[670,673,674,676],"finalizeplugin":[671],"payolutionhandlerplugin":[680],"payolutioninstallmentsubformplugin":[680],"payolutioninvoicesubformplugin":[680],"preauthorizeplugin":[680,683],"reauthorizeplugin":[680,683],"ispreauthorizationapprovedplugin":[680,683],"isreauthorizationapprovedplugin":[680,683],"payolutionprecheckplugin":[680],"payolutionsaveorderplugin":[680],"payolutionpostcheckplugin":[680],"subformplugin":[685],"stephandlerplugin":[685],"easycredithandlerplugin":[685],"isorderconfirmedplugin":[685],"easycreditorderidentifierplugin":[685],"productcategorywidgetplugin":[685],"productalternativewidgetplugin":[685],"productreplacementforwidgetplugin":[685],"productreviewwidgetplugin":[685],"similarproductswidgetplugin":[685],"productcmsblockwidgetplugin":[685],"confirmdeliveryplugin":[694],"confirmpaymentplugin":[694],"cancelpaymentplugin":[694],"ispaymentconfirmedplugin":[694],"isdeliveryconfirmedplugin":[694],"iscancellationconfirmedplugin":[694],"configurationplugins":[698],"defaultakeneopimconfigurationprofileplugin":[698],"attributedataimporterplugin":[698],"productabstractdataimporterplugin":[698],"productdataimporterplugin":[698],"$writerplugins":[698],"datasetwriterplugininterface|array":[698],"writerplugins":[698],"$writerplugin":[698],"product_abstract_propel_writer_plugins":[698],"addproductabstractpropelwriterplugins":[698],"productabstractstorepropelwriterplugin":[698],"copywebpackplugin":[705],"customerregistrationmailtypeplugin":[707,986,1028],"customerrestoredpasswordconfirmationmailtypeplugin":[707],"episervercustomermailplugin":[707],"episervernewslettersubscriptionmailplugin":[707],"newslettersubscribedmailtypeplugin":[707],"newsletterunsubscribedmailtypeplugin":[707],"customerchangeprofilemailtypeplugin":[707],"getpostcustomerregistrationplugins":[707,716],"mailtypeplugininterface":[707,716,986,1027],"episerverneworderplugin":[707],"episerverordercanceledplugin":[707],"episerverpaymentnotreceivedplugin":[707],"episervershippingconfirmationplugin":[707],"getcheckoutbreadcrumbplugin":[711,940],"getproductpromotionmapperplugin":[711,941],"inxmailpostcustomerregistrationplugin":[716],"postcustomerregistrationplugininterface":[716],"inxmailcustomerrestorepasswordmailtypeplugin":[716],"inxmailneworderplugin":[716],"inxmailordercanceledplugin":[716],"inxmailpaymentnotreceivedplugin":[716],"inxmailshippingconfirmationplugin":[716],"logglyloggerqueuemessageprocessorplugin":[717],"addfilesystembuilderplugincollection":[720],"plugin_collection_filesystem_builder":[720],"newrelicmonitoringextensionplugin":[721,781],"sevensendersorderplugin":[723],"sevensendersshipmentplugin":[723],"sevenordersorderplugin":[723],"sevenordersshipmentplugin":[723],"issuccessfulpreviousorderresponseconditionplugin":[723],"issuccessfulpreviousshipmentresponseconditionplugin":[723],"tidewaysmonitoringextensionplugin":[725],"getrestuserexpanderplugins":[731,786],"companyuserrestusermapperplugin":[731,786],"cartquotecollectionreaderplugin":[732],"singlequotecreatorplugin":[732],"quotecollectionreaderplugininterface":[732],"quotecreatorplugininterface":[732,861,868],"getquotecollectionreaderplugin":[732],"getquotecreatorplugin":[732,861,868],"getcustomerpostcreateplugins":[732,861],"getcustomerpostregisterplugins":[732],"updatecartcreatecustomerreferenceplugin":[732,861],"quotecreatorplugin":[732,861,868],"getquotevalidatorplugins":[732],"quotecurrencyvalidatorplugin":[732],"quotepricemodevalidatorplugin":[732],"quotestorevalidatorplugin":[732],"quotevalidatorplugininterface":[732],"updatecartcustomerreferenceplugin":[732],"customerpostregisterplugininterface":[732],"guestcartitemsresourcerouteplugin":[732,861],"guestcartsresourcerouteplugin":[732,861],"getvalidaterestrequestplugins":[732,859,861],"anonymouscustomeruniqueidvalidatorplugin":[732,861],"getcontrollerbeforeactionplugins":[732,859,861,866,883,885,1124],"setanonymouscustomeridcontrollerbeforeactionplugin":[732,861],"getresourcerelationshipplugins":[732,738,861,862,867,871,872,873,874,875,876,878,879,880,883,884,886,1110,1118,1124,1130,1193,1198],"cartitemsproductsrelationshipplugin":[732],"validaterestrequestplugininterface":[732,859,861],"controllerbeforeactionplugininterface":[732,859,861,866,883,885,1124],"producttaxsetbyproductabstractskuresourcerelationshipplugin":[738],"producttaxsetsresourcerouteplugin":[738,878,1110],"taxproductsynchronizationdataplugin":[738],"taxsynchronizationdataplugin":[738],"itemswithproductoptionsanddiscountsgrosspricecalculatorplugin":[745,854],"itemswithproductoptionsanddiscountstaxcalculatorplugin":[745,854],"expensetaxcalculatorplugin":[745,854],"itemsubtotalaggregatorplugin":[745,841],"ordertaxtotalcalculationplugin":[745,841],"calculatebundlepriceplugin":[745],"gethydrateorderplugins":[745],"discounttotalamountwithproductoptionsaggregatorplugin":[745,841],"itemswithproductoptionsanddiscountstaxaggregatorplugin":[745,841],"orderdiscountswithproductoptionsaggregatorplugin":[745,841],"ordertaxamountwithproductoptionsanddiscountsaggregatorplugin":[745,841],"productoptiondiscountsaggregatorplugin":[745,841],"expensetotalaggregatorplugin":[745,841],"grandtotalaggregatorplugin":[745,841],"itemgrosspriceaggregatorplugin":[745,841],"itemtaxamountaggregatorplugin":[745,841],"orderexpensetaxamountaggregatorplugin":[745,841],"subtotalorderaggregatorplugin":[745,841],"productoptionsgrosspriceaggregatorplugin":[745,841],"subtotalwithproductoptionsaggregatorplugin":[745,810],"discounttotalamountaggregatorplugin":[745,841],"itemdiscountsorderaggregatorplugin":[745,841],"orderdiscountsaggregatorplugin":[745,841],"orderexpenseswithdiscountsaggregatorplugin":[745,841],"orderexpensetaxwithdiscountsaggregatorplugin":[745,841],"ordergrandtotalwithdiscountsaggregatorplugin":[745,841],"sessionquotestoragestrategyplugin":[746],"omspostsavehookplugin":[751],"productbundleordersaverplugin":[751],"customerordersaveplugin":[751],"paymentsaverplugin":[751],"paymentordersaverplugin":[751],"cmsversionpostsaveplugininterface":[753],"cmsversiontransferexpanderplugininterface":[753],"cmsversionpagecollectorsearchplugin":[753],"cmsversionpagecollectorstorageplugin":[753],"search_plugins":[753,954,955,1131],"usercmsversionpostsaveplugin":[753],"usercmsversiontransferexpanderplugin":[753],"gettransferexpanderplugins":[753],"storerelationtoggleformtypeplugin":[754,759,774,807,898],"getstorerelationformtypeplugin":[754,774,898],"createstorerelationformtypeplugin":[759,807],"cmspagecollectorparametermapexpanderplugin":[760],"cmspagecollectordataexpanderplugininterface":[760],"bannertermexecutorplugin":[767],"customerunsubscribeplugin":[773],"getcustomeranonymizerplugins":[773,919],"storequotetransferexpanderplugin":[774],"getquotetransferexpanderplugins":[774,913,1183],"quotetransferexpanderplugininterface":[774,913,1183],"setdiscountconfigurationexpanderplugins":[774],"setdiscountpostcreateplugins":[774],"setdiscountpostupdateplugins":[774],"filterbycalculatorplugin":[774],"plugin_calculator_fixed":[774],"expensetaxwithdiscountscalculatorplugin":[777,854],"monitoringextensionplugininterface":[781],"cartlistpermissiongroupwidgetplugininterface":[782],"productbundleitemcounterwidgetplugininterface":[782],"cartdeletecompanyuserslistwidgetplugininterface":[782],"carttoshoppinglistwidgetplugininterface":[782],"zedrequestmetadataproviderplugin":[783],"availabilityhandlerplugin":[789],"priceproductabstractaftercreateplugin":[793,799],"priceproductabstractafterupdateplugin":[793,799],"priceproductabstractreadplugin":[793,799],"priceproductconcreteaftercreateplugin":[793,799],"priceproductconcreteafterupdateplugin":[793,799],"priceproductconcretereadplugin":[793,799],"priceproductdataimportplugin":[795,918,1100,1113],"getpricedimensionstoragereaderplugins":[795,910,1138],"priceproductfilterplugininterface":[795,910,918,1100,1113,1138],"pricedimensionabstractsaverplugininterface":[795,910,1138],"pricedimensionconcretesaverplugininterface":[795,910,1138],"pricedimensionquerycriteriaplugininterface":[795,910,1138],"priceproductdimensionexpanderstrategyplugininterface":[795,910,1138],"priceproductstoragepricedimensionplugininterface":[795,910,1138],"pricedimensionabstractsaverplugin":[795],"pricedimensionconcretesaverplugin":[795],"priceproductstoragepricedimensionplugin":[795],"productpricequeryexpanderplugin":[799,981],"facetqueryexpanderplugin":[799,981,1119,1122,1136,1146],"productabstractaftercreateplugin":[799],"imagesetproductabstractaftercreateplugin":[799],"productabstractafterupdateplugin":[799],"imagesetproductabstractafterupdateplugin":[799],"productabstractreadplugin":[799],"imagesetproductabstractreadplugin":[799],"productconcreteaftercreateplugin":[799],"imagesetproductconcreteaftercreateplugin":[799],"productconcreteafterupdateplugin":[799],"imagesetproductconcreteafterupdateplugin":[799],"productconcretereadplugin":[799],"imagesetproductconcretereadplugin":[799],"productsearchproductconcreteaftercreateplugin":[799],"productsearchproductconcreteafterupdateplugin":[799],"productsearchproductconcretereadplugin":[799],"stockproductconcreteaftercreateplugin":[799],"stockproductconcreteafterupdateplugin":[799],"stockproductconcretereadplugin":[799],"taxsetproductabstractaftercreateplugin":[799],"taxsetproductabstractafterupdateplugin":[799],"taxsetproductabstractreadplugin":[799],"productabstractplugincreateinterface":[799],"getproductabstractbeforecreateplugins":[799],"getproductabstractaftercreateplugins":[799],"productabstractpluginreadinterface":[799],"getproductabstractreadplugins":[799],"productabstractpluginupdateinterface":[799],"getproductabstractbeforeupdateplugins":[799],"getproductabstractafterupdateplugins":[799],"productconcreteplugincreateinterface":[799],"getproductconcretebeforecreateplugins":[799],"getproductconcreteaftercreateplugins":[799],"productconcretepluginreadinterface":[799],"getproductconcretereadplugins":[799,821],"productconcretepluginupdateinterface":[799,888],"getproductconcretebeforeupdateplugins":[799,888],"getproductconcreteafterupdateplugins":[799,821],"cartbundleitemsprereloadplugin":[800],"getprereloadplugins":[800,912,921,1159],"productbundlepriceaggregatorplugin":[800,841],"productconcretepagemapexpanderplugininterface":[806,921],"getconcreteproductpagemapexpanderplugins":[806,921],"productconcreteproductlistpagemapexpanderplugin":[806,921],"productconcretepagedataexpanderplugininterface":[806,921],"getproductconcretepagedataexpanderplugins":[806,921],"productconcreteproductlistpagedataexpanderplugin":[806,921],"priceformtypeplugin":[807],"moneyformtypeplugin":[807],"createmoneyformtypeplugin":[807],"moneycollectionformtypeplugin":[810,845],"createmoneycollectionformtypeplugin":[810,845],"productoptionvaluepriceexistscartprecheckplugin":[811],"cartprecheckplugin":[811],"cartprecheckplugininterface":[811,921,923,1144],"productsearchconfigextensioncollectorplugin":[819,1204],"createsearchconfigexpanderplugins":[819,842,1204],"productvalidityreadplugin":[821],"productvalidityupdateplugin":[821],"routeproviderplugin":[837],"abstractrouteproviderplugin":[837,969],"localeprefixurlroutemanipulatorplugin":[837],"shoppinglistwidgetrouteproviderplugin":[837],"backwardscompatibleurlrouterenhancerplugin":[837],"getrouterenhancerplugins":[837],"getcalculatorplugins":[841],"searchconfigexpanderplugininterface":[842,1204],"moneycollectiontypeplugin":[845],"discounttotalswithproductoptionscalculatorplugin":[854],"taxtotalamountwithproductoptionsanddiscountscalculatorplugin":[854],"glueserviceproviderplugin":[859,866,885,1168],"formatresponseheadersplugininterface":[859,885],"getformatresponseheadersplugins":[859,885],"accesstokensresourcerouteplugin":[859],"accesstokenvalidatorplugin":[859],"formatauthenticationerrorresponseheadersplugin":[859],"refreshtokensresourcerouteplugin":[859],"customeroauthscopeproviderplugin":[859],"customeroauthuserproviderplugin":[859],"abstractalternativeproductsresourcerouteplugin":[860,1134],"concretealternativeproductsresourcerouteplugin":[860,1134],"customerpostcreateplugininterface":[861],"catalogsearchabstractproductsresourcerelationshipplugin":[862,1179],"catalogsearchsuggestionsabstractproductsresourcerelationshipplugin":[862,1179],"catalogsearchresourcerouteplugin":[862,1179],"catalogsearchsuggestionsresourcerouteplugin":[862,1179],"categoriesresourcerouteplugin":[863,869,1096,1179],"categoryresourcerouteplugin":[863,869,1096,1179],"productdiscontinuedconcreteproductsresourceexpanderplugin":[864],"concreteproductsresourceexpanderplugininterface":[864],"getconcreteproductsresourceexpanderplugins":[864],"resourceroutepluginsproviderplugin":[865,1142],"resourcerelationshipcollectionproviderplugin":[865,1142],"resourceroutepluginsproviderplugininterface":[865,1142],"getresourceroutepluginproviderplugins":[865,1142],"resourcerelationshipcollectionproviderplugininterface":[865,1142],"getresourcerelationshipcollectionproviderplugins":[865,1142],"setstorecurrentlocalebeforeactionplugin":[866,885],"abstractproductavailabilitiesrouteplugin":[867,873],"concreteproductavailabilitiesrouteplugin":[867,873],"abstractproductavailabilitiesresourcerelationshipplugin":[867,873],"concreteproductavailabilitiesresourcerelationshipplugin":[867,873],"navigationsresourcerouteplugin":[869],"salespaymentmethodtypeinstallerplugin":[870],"installerplugininterface":[870,891,894,906,912,922,923,937,938,1105,1116,1117,1129,1144,1155,1159,1206],"getinstallerplugins":[870,891,894,906,912,922,923,937,938,1105,1116,1117,1129,1144,1155,1159,1206],"abstractproductpricesrouteplugin":[871,875,1130],"concreteproductpricesrouteplugin":[871,875,1130],"abstractproductsproductpricesresourcerelationshipplugin":[871,1130],"concreteproductsproductpricesresourcerelationshipplugin":[871,1130],"abstractproductsresourcerouteplugin":[872,875,1084,1134],"concreteproductsresourcerouteplugin":[872,875,1084,1134],"abstractproductsproductimagesetsresourcerelationshipplugin":[872,875,876],"concreteproductsproductimagesetsresourcerelationshipplugin":[872,875,876],"abstractproductimagesetsrouteplugin":[872,875,876],"concreteproductimagesetsrouteplugin":[872,875,876],}});
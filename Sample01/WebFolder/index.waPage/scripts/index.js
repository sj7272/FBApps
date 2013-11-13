
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var result1 = {};	// @richText
	var button1 = {};	// @button
	var dgFBAppKeys = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	result1.click = function result1_click (event)// @startlock
	{// @endlock
		//set to $$
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
console.info("click successful");
	};// @lock

	dgFBAppKeys.onRowClick = function dgFBAppKeys_onRowClick (event)// @startlock
	{// @endlock
		var appName;
        appName      = $$("dgFBAppKeys").column("App_Name").getValueForInput(); 
        var appNameSpace;
        appNameSpace = $$("dgFBAppKeys").column("App_NameSpace").getValueForInput();    
        var appSecret;
        appSecret    = $$("dgFBAppKeys").column("App_Secret").getValueForInput(); 
        var appID;
        appID        = $$("dgFBAppKeys").column("App_ID").getValueForInput(); 
        console.info("Update successful2", appSecret);

        
        // In initialise SDK with current App data
		//MyFBapp = new app object (id1,id2,id3,id4)
		//init fb SDK
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("result1", "click", result1.click, "WAF");
	WAF.addListener("dgFBAppKeys", "onRowClick", dgFBAppKeys.onRowClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock

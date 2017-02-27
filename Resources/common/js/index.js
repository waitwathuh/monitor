class AppIndex
{
	constructor()
	{
		this.initializeObjects();
		this.initializeMainContent();
	}

	initializeObjects()
	{
		this.connectionUtil = new AppConnectionUtil();
		this.pageUtil = new AppPageUtil();
	}

	initializeMainContent()
	{
		this.connectionUtil.httpGet( "/mainContent", this.processMainContent, this );
	}

	processMainContent( httpStatusCode, data, caller )
	{
		var jsonData = JSON.parse( data );

		caller.pageUtil.setTotalAmmountOfRes( 3 );
		caller.pageUtil.processCss( divInternalStyles, jsonData.css, caller.connectionUtil, divLoader );
		caller.pageUtil.processHtml( divMainContent, jsonData.html, caller.connectionUtil, divLoader );
		caller.pageUtil.processJs( divInternalScripts, jsonData.js, caller.connectionUtil, divLoader );
	}
}

new AppIndex();
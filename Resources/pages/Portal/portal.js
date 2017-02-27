class AppPortal
{
	constructor()
	{
		this.initializeObjects();
		this.initializeHtml();
	}

	initializeObjects()
	{
		this.connectionUtil = new AppConnectionUtil();
		this.pageUtil = new AppPageUtil();
		this.hostOverview = new AppHostOverview( this.connectionUtil, this.pageUtil );
	}

	initializeHtml()
	{
		this.pageUtil.setTotalAmmountOfRes( 1 );
		this.pageUtil.processHtml( divMenu, "/pages/Portal/portal.html", this.connectionUtil, divLoader );
	}
}

new AppPortal();
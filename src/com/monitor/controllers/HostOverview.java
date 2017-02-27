package com.monitor.controllers;

import com.cs.annotations.RequestMapping;
import com.cs.enums.HttpStatusCode;
import com.cs.http.BasicHttpRequest;
import com.cs.http.BasicHttpResponse;
import com.cs.interfaces.Config;
import com.cs.interfaces.Logger;

public class HostOverview
{
	// @RequestMapping( value = "/mainContent", method = "GET" )
	@RequestMapping( value = "/hostOverview", method = "GET" )
	public void hostOverview( BasicHttpRequest request, BasicHttpResponse response, Config config, Logger log )
	{
		response.setStatusCode( HttpStatusCode.OK );
		response.setBody( new HostOverviewPage().toJson() );
	}
}
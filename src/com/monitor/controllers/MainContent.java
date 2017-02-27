package com.monitor.controllers;

import com.cs.annotations.RequestMapping;
import com.cs.enums.HttpStatusCode;
import com.cs.http.BasicHttpRequest;
import com.cs.http.BasicHttpResponse;
import com.cs.interfaces.Config;
import com.cs.interfaces.Logger;

public class MainContent
{
	@RequestMapping( value = "/mainContent", method = "GET" )
	public void mainContent( BasicHttpRequest request, BasicHttpResponse response, Config config, Logger log )
	{
		String str = request.getHeaders().get( "Cookie" );
		boolean validSession = ( str == null ) ? false : true;
		
		if ( validSession )
		{
			response.setStatusCode( HttpStatusCode.OK );
			response.setBody( new HostOverviewPage().toJson() );
		}
		else
		{
			response.setStatusCode( HttpStatusCode.OK );
			response.setBody( new Login().toJson() );
		}
	}
}
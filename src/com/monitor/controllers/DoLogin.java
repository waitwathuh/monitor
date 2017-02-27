package com.monitor.controllers;

import java.io.UnsupportedEncodingException;
import java.util.Map;

import com.cs.annotations.RequestMapping;
import com.cs.enums.HttpStatusCode;
import com.cs.http.BasicHttpRequest;
import com.cs.http.BasicHttpResponse;
import com.cs.interfaces.Config;
import com.cs.interfaces.Logger;
import com.google.gson.Gson;
import com.monitor.Credentials;

public class DoLogin
{
	@RequestMapping( value = "/doLogin", method = "POST" )
	public void index( BasicHttpRequest request, BasicHttpResponse response, Config config, Logger log )
	{
		try
		{
			String requestData = new String( request.getBody(), "UTF-8" );
			Credentials credentials = new Gson().fromJson( requestData, Credentials.class );

			if ( validCredentials( credentials ) )
			{
				Map< String, String > headers = request.getHeaders();
				headers.put( "Set-Cookie", "sessionId=fr1a83c4eaaa95d506af401d9d8010fc8ffc6cf0;" );
				response.setHeaders( headers );

				response.setStatusCode( HttpStatusCode.OK );
			}
			else
			{
				response.setStatusCode( HttpStatusCode.UNAUTHORIZED );
			}
		}
		catch ( UnsupportedEncodingException e )
		{
			e.printStackTrace();
			response.setStatusCode( HttpStatusCode.INTERNAL_SERVER_ERROR );
		}
	}

	private boolean validCredentials( Credentials credentials )
	{
		if ( credentials.user.equals( "email" ) && credentials.pass.equals( "pass" ) )
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}
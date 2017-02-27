package com.monitor.controllers;

import java.util.ArrayList;

import com.google.gson.Gson;

public class Portal
{
	private ArrayList< String > html;
	private ArrayList< String > css;
	private ArrayList< String > js;

	public Portal()
	{
		initializeHtml();
		initializeCss();
		initializeJs();
	}

	public void initializeHtml()
	{
		html = new ArrayList< String >();
		// html.add( "/pages/Portal/portal.html" );
	}

	public void initializeCss()
	{
		css = new ArrayList< String >();
		css.add( "/pages/Portal/portal.css" );
	}

	public void initializeJs()
	{
		js = new ArrayList< String >();
		js.add( "/pages/HostOverview/hostOverview.js" );
		js.add( "/pages/Portal/portal.js" );
	}

	public String toJson()
	{
		return new Gson().toJson( this );
	}
}
package com.monitor.controllers;

import java.util.ArrayList;

import com.google.gson.Gson;

public class HostOverviewPage
{
	private ArrayList< String > html;
	private ArrayList< String > css;
	private ArrayList< String > js;

	public HostOverviewPage()
	{
		initializeHtml();
		initializeCss();
		initializeJs();
	}

	public void initializeHtml()
	{
		html = new ArrayList< String >();
		html.add( "/pages/HostOverview/hostOverview.html" );
	}

	public void initializeCss()
	{
		css = new ArrayList< String >();
		css.add( "/pages/HostOverview/hostOverview.css" );
	}

	public void initializeJs()
	{
		js = new ArrayList< String >();
		js.add( "/common/js/jquery.js" );
		js.add( "/common/js/raphael-min.js" );
		js.add( "/components/Checkbox/checkbox.js" );
		js.add( "/pages/HostOverview/hostOverview.js" );
	}

	public String toJson()
	{
		return new Gson().toJson( this );
	}
}
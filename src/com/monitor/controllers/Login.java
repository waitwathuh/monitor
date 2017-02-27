package com.monitor.controllers;

import java.util.ArrayList;

import com.google.gson.Gson;

public class Login
{
	private ArrayList< String > html;
	private ArrayList< String > css;
	private ArrayList< String > js;

	public Login()
	{
		initializeHtml();
		initializeCss();
		initializeJs();
	}

	public void initializeHtml()
	{
		html = new ArrayList< String >();
		html.add( "/pages/Login/login.html" );
	}

	public void initializeCss()
	{
		css = new ArrayList< String >();
		css.add( "/components/Input/input.css" );
		css.add( "/pages/Login/login.css" );
	}

	public void initializeJs()
	{
		js = new ArrayList< String >();
		js.add( "/components/Input/input.js" );
		js.add( "/pages/Login/login.js" );
	}

	public String toJson()
	{
		return new Gson().toJson( this );
	}
}
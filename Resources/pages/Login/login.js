class AppLogin
{
	constructor()
	{
		var appLogin = this;
		setTimeout(function()
		{
			appLogin.initializeObjects();
			appLogin.eventHandlers();
		}, 50);
	}

	initializeObjects()
	{
		this.connectionUtil = new AppConnectionUtil();
		this.pageUtil = new AppPageUtil();

		this.btnLogin = document.getElementById( "btnLogin" );

		this.txtUser = new AppInput( document.getElementById( "txtUser" ), "Email Address" );
		this.txtUser.setKeyUpHandler( this.onEnter_keyPress, this );
		
		this.txtPass = new AppInput( document.getElementById( "txtPass" ), "Password" );
		this.txtPass.setKeyUpHandler( this.onEnter_keyPress, this );
		this.txtPass.setType( "password" );

		this.btnForgotPassword = document.getElementById( "btnForgotPassword" );
	}

	onEnter_keyPress( event, caller )
	{
		if ( event.which == 13 ) 
		{
			caller.doLogin();
		}
	}

	doLogin()
	{
		var credentials = JSON.stringify( { user : this.txtUser.getInputValue(), pass : this.txtPass.getInputValue() } );
		this.connectionUtil.httpPost( "/doLogin", this.loginHandler, credentials, this );
		
		console.log( credentials );
	}

	eventHandlers()
	{
		var appLogin = this;
		this.btnLogin.onclick = function( event ){ appLogin.divInput_onClick( event ) };
	}

	divInput_onClick( event )
	{
		this.doLogin();
	}

	loginHandler( httpStatusCode, data, caller )
	{
		if ( httpStatusCode == 200 )
		{
			caller.loadDashboardScreen();
		}
		else
		{
			// either server error or incorrect credentials (depending on status code)
		}
	}

	loadDashboardScreen()
	{
		this.pageUtil.clearMainContent();
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

new AppLogin();






/*
var login = (function()
{
	var txtEmail;
	var txtPass;
	var processing = false;
	
    /**
     * Self calling initialize function.
     * /
    (function init()
    {
		console.log( "asdfdfsg" );
		
		txtEmail = new Input( "txtUser", "Email Address" );
		txtEmail.setKeyUpHandler( onEnter_keyPress );
		
		txtPass = new Input( "txtPass", "Password" );
		txtPass.setType("password");
		txtPass.setKeyUpHandler( onEnter_keyPress );
		
        initHandlers();
    }());
	
	/**
	 * Function initializes event handlers for page.
	 * /
	function initHandlers()
	{
		// When pressing enter key for sign in 
        // onEnter_keyPress();
		
		// Log in button click handler
		// $( "#login" ).click( function() { doLogin(); } );
		$( "#btnLogin" ).click( function() { doLogin(); } );
	}
	
    /**
    * On enter key press check values
    * /        
    function onEnter_keyPress()
    {
        $( document ).keypress(function( event ) 
        {
            if ( event.which == 13 && processing == false ) 
            {
				processing = true;
                doLogin();
            }
        });
    }
    
	/**
	 *
	 * /
	function doLogin()
	{
		var credentials = JSON.stringify( { user : txtEmail.getInputValue(), pass : txtPass.getInputValue() } );
		
		connectionUtil.httpPost( "doLogin", credentials, loginHandler );
	}
	
	/**
	 *
	 * /
	function loginHandler( data, responseObject )
	{
		processing = false;
		
		if ( responseObject.getResponseHeader( "Login-Status" ) == "Successful" )
		{
			loadDashboardScreen();
		}
		else if ( responseObject.getResponseHeader( "Login-Status" ) == "Failure" )
		{
			log( "Show incorrect login" );
			jsUtil.removeAllCookies();
			pageUtil.hideLoader();
		}
		else
		{
			log( "Show server error" );
			jsUtil.removeAllCookies();
		}
	}
	
	/**
	 *
	 * /
	function loadDashboardScreen()
	{
		// pageUtil.loadPage( pageUtil.getDashboardPage() );
		pageUtil.loadPage( pageUtil.getSearchPage() );
		pageUtil.showMenu();
		pageUtil.removePage( pageUtil.getLoginPage() );
	}
	
    return(
    {
        
    });
	
	function log( message )
	{
		var style = "color:#00ff00";
		
		console.log( "%c" + message + " - login.js", style );
	}
}());
*/
class AppInput
{
	constructor( container, labelText )
	{
		this.initializeObjects( container );
		this.initializeHtml();

		var appInput = this;
		setTimeout(function()
		{
			appInput.initializeComponentObjects();
			appInput.setLabel( labelText );
			appInput.setEventHandlers( appInput );
		}, 100);
	}

	initializeObjects( container )
	{
		this.container = container;
		this.connectionUtil = new AppConnectionUtil();
		this.pageUtil = new AppPageUtil();
	}

	initializeHtml()
	{
		this.pageUtil.processHtml( this.container, "components/Input/input.html", this.connectionUtil );
	}

	initializeComponentObjects()
	{
		this.divLabel = this.container.getElementsByClassName( "divLabel" )[0];
		this.divInput = this.container.getElementsByClassName( "divInput" )[0];
		this.divLine = this.container.getElementsByClassName( "divLine" )[0];
	}

	setLabel( labelText )
	{
		this.divLabel.innerHTML = labelText;
	}

	setEventHandlers( appInput )
	{
		this.divInput.onfocus = function(){ appInput.divInput_onFocus() };
		this.divInput.onblur = function(){ appInput.divInput_onBlur() };
		this.divInput.onkeyup = function( event ){ appInput.divInput_onKeyUp( event ) };
	}

	divInput_onFocus()
    {
		this.divLabel.className = "divLabelFocus";

		if( typeof this.focusHandler != "undefined" )
        {
            this.focusHandler();
        }

        this.showLine();
    }

	divInput_onBlur()
	{
		if( this.divInput.value == "" )
        {
			this.divLabel.className = "divLabel";
        }

        this.hideLine();

        if( typeof this.blurHandler != "undefined" )
        {
            this.blurHandler();
        }
	}

	divInput_onKeyUp( event )
    {
        if( typeof this.keyUpHandler != "undefined" )
        {
            this.keyUpHandler( event, this.caller );
        }
    }

	showLine()
    {
		this.divLine.className = "divLineShow";
    }

	hideLine()
    {
		this.divLine.className = "divLine";
    }

	setBlurHandler( blurHandlerParam )
    {
        this.blurHandler = blurHandlerParam;
    }

    setKeyUpHandler( keyUpHandlerParam, caller )
    {
        this.keyUpHandler = keyUpHandlerParam;
		this.caller = caller;
    }

	setType( type )
	{
		var appInput = this;
		
		setTimeout(function()
		{
			appInput.divInput.setAttribute( "type", type );
		}, 50);
	}

	getInputValue()
	{
		return this.divInput.value;
	}
}
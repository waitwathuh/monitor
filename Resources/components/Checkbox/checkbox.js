class AppCheckbox
{
	constructor( container, isChecked )
	{
		this.initVariables( container, isChecked );
		this.initComponent();
		this.processTick();
	}

	initVariables( container, isChecked )
	{
		this.container = container;
		this.isChecked = isChecked;
	}

	initComponent()
	{
		this.loadComponent();
		this.createClickHandler();
	}

	loadComponent()
	{
		$( this.container ).load( "components/Checkbox/checkbox.html", function() {} );
	}

	createClickHandler()
	{
		var component = this;
		this.container.onclick = function( event ){ event.stopPropagation(); component.containerClickHandler( event, component ); };
	}

	containerClickHandler( event, component )
	{
		if ( component.isChecked )
		{
			component.hideTick( component );
		}
		else
		{
			component.showTick( component );
		}
	}

	hideTick( component )
	{
		component.container.getElementsByClassName( "boxInnerContainer" )[0].className = "boxInnerContainer";
		component.container.getElementsByClassName( "boxContainer" )[0].className = "boxContainer";
		component.isChecked = false;
	}

	showTick( component )
	{
		component.container.getElementsByClassName( "boxInnerContainer" )[0].className = "boxInnerContainer showTick";
		component.container.getElementsByClassName( "boxContainer" )[0].className = "boxContainer showBackground";
		component.isChecked = true;
	}

	processTick()
	{
		var component = this;
		setTimeout(function()
		{debugger;
			if ( component.isChecked )
			{
				component.showTick( component );
			}
			else
			{
				component.hideTick( component );
			}
		}, 100);
	}

	getState()
	{
		return this.isChecked;
	}
}
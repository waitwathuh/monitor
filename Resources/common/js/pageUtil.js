class AppPageUtil
{
	setTotalAmmountOfRes( total )
	{
		this.resTotal = total;
		this.resCurrent = 1;
	}

	processHtml( htmlObject, htmlContentUrl, connectionUtil, loader )
	{
		this.htmlObject = htmlObject;
		this.loader = loader;

		if ( typeof htmlContentUrl == "string" )
		{
			connectionUtil.httpGet( htmlContentUrl, this.renderHtml, this );
		}
		else
		{
			for ( var i = 0; i < htmlContentUrl.length; i++ )
			{
				connectionUtil.httpGet( htmlContentUrl[ i ], this.renderHtml, this );
			}
		}
	}

	renderHtml( httpStatusCode, data, caller )
	{
		caller.htmlObject.innerHTML += data;
		caller.validateResCount( caller.resTotal, (caller.resCurrent++), caller.loader );
	}

	processCss( cssObject, cssContentUrl, connectionUtil, loader )
	{
		this.cssObject = cssObject;
		this.loader = loader;

		if ( typeof cssContentUrl == "string" )
		{
			connectionUtil.httpGet( cssContentUrl, this.renderCss, this );
		}
		else
		{
			for ( var i = 0; i < cssContentUrl.length; i++ )
			{
				connectionUtil.httpGet( cssContentUrl[ i ], this.renderCss, this );
			}
		}
	}

	renderCss( httpStatusCode, data, caller )
	{
		var cssStyle = document.createElement( "style" );
		cssStyle.className = "cssStyle";
		cssStyle.innerHTML = data;
		caller.cssObject.appendChild( cssStyle );
		caller.validateResCount( caller.resTotal, (caller.resCurrent++), caller.loader );
	}

	processJs( jsObject, jsContentUrl, connectionUtil, loader )
	{
		this.jsObject = jsObject;
		this.loader = loader;

		if ( typeof jsContentUrl == "string" )
		{
			connectionUtil.httpGet( jsContentUrl, this.renderJs, this );
		}
		else
		{
			for ( var i = 0; i < jsContentUrl.length; i++ )
			{
				connectionUtil.httpGet( jsContentUrl[ i ], this.renderJs, this );
			}
		}
	}

	renderJs( httpStatusCode, data, caller )
	{
		var jsStyle = document.createElement( "script" );
		jsStyle.className = "jsStyle";
		jsStyle.innerHTML = data;
		caller.jsObject.appendChild( jsStyle );
		caller.validateResCount( caller.resTotal, (caller.resCurrent++), caller.loader );
	}

	validateResCount( resTotal, resCurrent, loader )
	{
		if ( resTotal == resCurrent )
		{
			loader.style.opacity = 0;

			setTimeout(function()
			{
				loader.style.display = "none";
			}, 500)
		}
	}

	clearMainContent()
	{
		document.getElementById( "divMainContent" ).innerHTML = "";
	}
}
class AppConnectionUtil
{
	httpGet( service, handler, caller )
	{
		var _xmlhttpReadyState = this.xmlhttpReadyState;
		var xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function() { _xmlhttpReadyState( this, handler, caller ) };
		xmlhttp.open( "GET", service, true );
		xmlhttp.send();
	}

	httpPost( service, handler, data, caller )
    {
		var _xmlhttpReadyState = this.xmlhttpReadyState;
		var xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function() { _xmlhttpReadyState( this, handler, caller ) };
		xmlhttp.open( "POST", service, true );
		xmlhttp.send( data );
	}

	xmlhttpReadyState( xmlhttp, handler, caller )
	{
		if ( xmlhttp.readyState == XMLHttpRequest.DONE ) 
        {
			if ( xmlhttp.responseText )
			{
				handler( xmlhttp.status, xmlhttp.responseText, caller );
			}
			else
			{
				handler( xmlhttp.status, "", caller );
			}
			
			
			
			/*
			if( xmlhttp.status == 200 )
			{
				if ( xmlhttp.responseText )
				{
					handler( xmlhttp.responseText, caller );
				}
				else
				{
					handler( "", caller );
				}
			}
			else
			{
				alert( "Error" );
			}
			*/
		}
	}
}
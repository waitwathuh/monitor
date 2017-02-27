class AppHostOverview
{
	constructor()
	{
		var appHostOverview = this;
		setTimeout(function()
		{
			appHostOverview.initializeObjects();
			appHostOverview.eventHandlers();
			appHostOverview.initializeGraph();
		}, 50);
	}

	initializeObjects()
	{
		this.connectionUtil = new AppConnectionUtil();
		this.pageUtil = new AppPageUtil();
		
		// var chkCategory = new AppCheckbox( document.getElementById( "chkCategory" ), true );
		// var chkStatus = new AppCheckbox( document.getElementById( "chkStatus" ), true );
		
		
		
		
		
		
	}

	eventHandlers()
	{
		
	}

	initializeGraph()
	{
		// Custom Arc Attribute, position x&y, value portion of total, total value, Radius
		var archtype = Raphael("dailOnline", 208, 208);
		archtype.customAttributes.arc = function (xloc, yloc, value, total, R)
		{
			var alpha = 360 / total * value;
			var a = (90 - alpha) * Math.PI / 180;
			var x = xloc + R * Math.cos(a);
			var y = yloc - R * Math.sin(a);
			var path;

			if (total == value)
			{
				path = [
					["M", xloc, yloc - R],
					["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
				];
			}
			else
			{
				path = [
					["M", xloc, yloc - R],
					["A", R, R, 0, +(alpha > 180), 1, x, y]
				];
			}
			
			return {
				path: path
			};
		};
		
		var pattern = '<linearGradient id="grad1" width="30" height="30" patternUnits="userSpaceOnUse">\
			<stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:.5" />\
			<stop offset="100%" style="stop-color:rgb(0,255,0);stop-opacity:.5" />\
			</linearGradient>';
		pattern = $.parseHTML('<svg>'+pattern+'</svg>')[0].firstChild; //or childNodes
		$('svg defs').append(pattern);

		//make an arc at 50,50 with a radius of 30 that grows from 0 to 40 of 100 with a bounce
		var my_arc = archtype.path().attr({
			"stroke": "url(#grad1)",
			"stroke-width": 14,
			arc: [104, 104, 0, 100, 85]
		});

		my_arc.node.setAttribute("class","track");

		my_arc.animate({
			arc: [104, 104, 75, 100, 85]
		}, 1500, "bounce");
		
		var outerArc = archtype.path().attr({
			"stroke": "#f00",
			"stroke-width": 2,
			arc: [104, 104, 100, 100, 102]
		});
		
		
		
		
		
		
		
		
		
		// var pattern = ' <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\
			// <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:.5" />\
			// <stop offset="100%" style="stop-color:rgb(0,255,0);stop-opacity:.5" />\
			// </linearGradient>';
		// pattern = $.parseHTML('<svg>'+pattern+'</svg>')[0].firstChild; //or childNodes
		// $('svg defs').append(pattern);
		
	}
}

new AppHostOverview();
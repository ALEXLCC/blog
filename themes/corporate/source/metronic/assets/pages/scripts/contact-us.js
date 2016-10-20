var ContactUs = function () {
    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	                        lat: 31.1554702830,
				lng: 121.3495228423,
			  });
			   var marker = map.addMarker({
		            lat: 31.1554702830,
					lng: 121.3495228423,
		            title: 'FK.Tech, Inc.',
		            infoWindow: {
		                content: "<b>FK.Tech, Inc.</b> QiBao,MinHang,Shanghai,China"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();

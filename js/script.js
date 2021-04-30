function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.835117, -87.627130);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
	
	var marker = new google.maps.Marker({
      position: {lat: 53.98779, lng: 27.52468},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Minsk"
      
  });

	

}

google.maps.event.addDomListener(window, 'load', initMap);
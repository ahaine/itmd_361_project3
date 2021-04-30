function initMap(){
	var map1 = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(42.089711, -86.491190);
	var mapOptions = {
			center: myLocation,
			zoom: 14.75,
			mapTypeId: google.maps.MapTypeId.roadmap,
			mapTypeControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(map1, mapOptions);
	
	var marker = new google.maps.Marker({
      position: myLocation,
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "St. Joseph High School"
	});
	
	var marker = new google.maps.Marker({
		position: {lat: 42.09888, lng: -86.48998},
		map: myMap,
		animation: google.maps.Animation.DROP,
		title: "Dairy Korner"
	});
}

google.maps.event.addDomListener(window, 'load', initMap);
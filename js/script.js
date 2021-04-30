function initMap(){
	var map1 = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(42.089711, -86.491190);
	var mapOptions = {
			center: myLocation,
			zoom: 14.50,
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
	
	var marker1 = new google.maps.Marker({
		position: {lat: 42.09888, lng: -86.48998},
		map: myMap,
		animation: google.maps.Animation.DROP,
		title: "Dairy Korner"
	});
	
	var locationStringOne = '<h1>St. Joseph High School</h1><p>This is where St. Joseph High School is located.</p>'
	
	var infowindow = new google.maps.InfoWindow({
      content: locationStringOne  
  	});
	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
	
	var locationStringTwo = '<h1>Dairy Korner</h1><p>This is a local hot spot known to St. Joseph locals. Dairy Korner is a grill and ice cream joint.  This place gets packed during the summer because who doesnt love ice cream on a hot summer day.  Fun fact: Dairy Korner was first established in the 50s</p>'
	
	var infowindow2 = new google.maps.InfoWindow({
		content: locationStringTwo
	});
	
	google.maps.event.addListener(marker1, 'mouseover', function() {
		infowindow2.open(myMap, marker1);
	});
}

google.maps.event.addDomListener(window, 'load', initMap);
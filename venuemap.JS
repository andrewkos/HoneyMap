var map;
function initialize() {
  var InvernessStation = new google.maps.LatLng(57.480480, -4.223259);
  var RoyalHotelUllapool = new google.maps.LatLng(57.897387, -5.153698);
  var AubergeCarnish = new google.maps.LatLng(58.180640, -7.047421);
  var Luskentyre = new google.maps.LatLng(57.888842, -6.947713);
  var HeronPoint = new google.maps.LatLng(57.163649, -7.339340);
  var Oban = new google.maps.LatLng(56.411699, -5.477175);
  var KnockderryHouse = new google.maps.LatLng(56.013848, -4.864865);
  var LochLomond = new google.maps.LatLng(56.118222, -4.629400);
  var HideawayExperience = new google.maps.LatLng(56.530669, -3.023484);
  var EdinburghAirport = new google.maps.LatLng(55.958010, -3.358538);
  
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(56.942284, -4.304773),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var InvernessStationString = 'Inverness Station - Arrive Monday 14/4/14';
  var RoyalHotelUllapoolString = 'Royal Hotel Ullapool - One Night Mon 14/4/14';
  var AubergeCarnishString = 'Auberge Carnish - 2 Nights - Tues 15/4/14 - Wed 16/4/14';
  var LuskentyreString = 'Luskentyre - Ferry to Uist'; 
  var HeronPointString = 'Heron Point - 1 Night - Thurs 17/4/14';
  var ObanString = 'Oban - Ferry from Hebrides on  Fri 18/4/14'; 
  var KnockderryHouseString = 'Knockderry House - 3 Nights - Fri 18/4/14 - Sun 20/4/14'; 
  var LochLomondString = 'Loch Lomond (Kayaking?)'; 
  var HideawayExperienceString = 'Hideaway Experience - 4 Nights - Mon 21/4/14 - Thursday 24/4/14'; 
  var EdinburghAirportString = 'Edinburgh Airport - Fly to London Friday 25/4/14'; 

  var InvernessStationWindow = new google.maps.InfoWindow({
      content: InvernessStationString
  });

  var RoyalHotelUllapoolWindow = new google.maps.InfoWindow({
      content: RoyalHotelUllapoolString
  });
  
  var AubergeCarnishWindow = new google.maps.InfoWindow({
      content: AubergeCarnishString
  });
  
  var LuskentyreWindow = new google.maps.InfoWindow({
      content: LuskentyreString
  });

  var HeronPointWindow = new google.maps.InfoWindow({
      content: HeronPointString
  });

  var ObanWindow = new google.maps.InfoWindow({
      content: ObanString
  });
  
  var KnockderryHouseWindow = new google.maps.InfoWindow({
      content: KnockderryHouseString
  });

  var LochLomondWindow = new google.maps.InfoWindow({
      content: LochLomondString
  });

  var HideawayExperienceWindow = new google.maps.InfoWindow({
      content: HideawayExperienceString
  });

  var EdinburghAirportWindow = new google.maps.InfoWindow({
      content: EdinburghAirportString
  });
  

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var InvernessStationMarker = new google.maps.Marker({
      position: InvernessStation,
      map: map,
      title: 'Inverness Station'
  });
  
  var RoyalHotelUllapoolMarker = new google.maps.Marker({
      position: RoyalHotelUllapool,
      map: map,
      title: 'Royal Hotel Ullapool'
  });
  
  var AubergeCarnishMarker = new google.maps.Marker({
      position: AubergeCarnish,
      map: map,
      title: 'Auberge Carnish'
  });
  
  var LuskentyreMarker = new google.maps.Marker({
      position: Luskentyre,
      map: map,
      title: 'Luskentyre'
  });
  
  var HeronPointMarker = new google.maps.Marker({
      position: HeronPoint,
      map: map,
      title: 'Heron Point'
  });

  var ObanMarker = new google.maps.Marker({
      position: Oban,
      map: map,
      title: 'Oban'
  });
  
  var KnockderryHouseMarker = new google.maps.Marker({
      position: KnockderryHouse,
      map: map,
      title: 'Knockderry House'
  });
  
  var LochLomondMarker = new google.maps.Marker({
      position: LochLomond,
      map: map,
      title: 'Loch Lomond'
  });
  
  var HideawayExperienceMarker = new google.maps.Marker({
      position: HideawayExperience,
      map: map,
      title: 'Hideaway Experience'
  });
  
  var EdinburghAirportMarker = new google.maps.Marker({
      position: EdinburghAirport,
      map: map,
      title: 'Edinburgh Airport'
  });
  
  google.maps.event.addListener(InvernessStationMarker, 'mouseover', function () {
      InvernessStationWindow.open(map, InvernessStationMarker);
  });

  google.maps.event.addListener(RoyalHotelUllapoolMarker, 'mouseover', function () {
      RoyalHotelUllapoolWindow.open(map, RoyalHotelUllapoolMarker);
  });

  google.maps.event.addListener(AubergeCarnishMarker, 'mouseover', function () {
      AubergeCarnishWindow.open(map, AubergeCarnishMarker);
  });

  google.maps.event.addListener(LuskentyreMarker, 'mouseover', function () {
      LuskentyreWindow.open(map, LuskentyreMarker);
  });

  google.maps.event.addListener(HeronPointMarker, 'mouseover', function () {
      HeronPointWindow.open(map, HeronPointMarker);
  });

  google.maps.event.addListener(ObanMarker, 'mouseover', function () {
      ObanWindow.open(map, ObanMarker);
  });
  
  google.maps.event.addListener(KnockderryHouseMarker, 'mouseover', function () {
      KnockderryHouseWindow.open(map, KnockderryHouseMarker);
  });

  google.maps.event.addListener(LochLomondMarker, 'mouseover', function () {
      LochLomondWindow.open(map, LochLomondMarker);
  });

  google.maps.event.addListener(HideawayExperienceMarker, 'mouseover', function () {
      HideawayExperienceWindow.open(map, HideawayExperienceMarker);
  });
  
  google.maps.event.addListener(EdinburghAirportMarker, 'mouseover', function () {
      EdinburghAirportWindow.open(map, EdinburghAirportMarker);
  });
  
  google.maps.event.addListener(InvernessStationMarker, 'mouseout', function () {
      InvernessStationWindow.close();
  });

  google.maps.event.addListener(RoyalHotelUllapoolMarker, 'mouseout', function () {
      RoyalHotelUllapoolWindow.close();
  });
  
  google.maps.event.addListener(AubergeCarnishMarker, 'mouseout', function () {
      AubergeCarnishWindow.close();
  });

  google.maps.event.addListener(LuskentyreMarker, 'mouseout', function () {
      LuskentyreWindow.close();
  });
  
  google.maps.event.addListener(HeronPointMarker, 'mouseout', function () {
      HeronPointWindow.close();
  });
  
  google.maps.event.addListener(ObanMarker, 'mouseout', function () {
      ObanWindow.close();
  });
  
  google.maps.event.addListener(KnockderryHouseMarker, 'mouseout', function () {
      KnockderryHouseWindow.close();
  });
  
  google.maps.event.addListener(LochLomondMarker, 'mouseout', function () {
      LochLomondWindow.close();
  });

  google.maps.event.addListener(HideawayExperienceMarker, 'mouseout', function () {
      HideawayExperienceWindow.close();
  });
  
  google.maps.event.addListener(EdinburghAirportMarker, 'mouseout', function () {
      EdinburghAirportWindow.close();
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);
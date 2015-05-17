var lat1 =  27.9 ; var lat2 =  62 ;
var lng1 =   -10 ; var lng2 =  52 ;
var rlat = 1 ;
var rlng = 2 ;

var mapOptions = {
  center: new google.maps.LatLng(0.32*(lat1+2*lat2), 0.5*(lng1+lng2)),
  zoom: 4,
  disableDoubleClickZoom: true,
  minZoom: 4,
  maxZoom: 8
} ;

var map        = null ;
var map_small  = null ;
var lineSymbol = null ;
function make_map(){
  map = new google.maps.Map(Get('map-canvas'), mapOptions) ;
  var lastValidCenter = map.getCenter() ;
  google.maps.event.addListener(map, 'click', map_click) ;
  
  google.maps.event.addListener(map, 'center_changed', function(){
    var current_bounds = map.getBounds() ;
    var SW = current_bounds.getSouthWest() ;
    var NE = current_bounds.getNorthEast() ;
    var latlow  = SW.lat() ;
    var lathigh = NE.lat() ;
    var lnglow  = SW.lng() ;
    var lnghigh = NE.lng() ;
    
    if(allowedBounds.contains(map.getCenter())){
      lastValidCenter = map.getCenter() ;
      return ;
    }
    // not valid anymore => return to last valid position
    map.panTo(lastValidCenter) ;
    var dlat = 0 ;
    var dlng = 0 ;
    if(latlow<lat1){
      dlat = lat1-latlow ;
    }
    else if(lathigh>lat2){
      dlat = lat2-lathigh ;
    }
    if(lnglow<lng1){
      dlng = lng1-lnglow ;
    }
    else if(lnghigh>lng2){
      dlat = lng2-lnghigh ;
    }
  }) ;
}

function make_small_map(){
  var smallMapOptions = {
    center: new google.maps.LatLng(0.5*(lat1+lat2), 0.5*(lng1+lng2)),
    zoom: 6,
    disableDoubleClickZoom: true,
    draggable: false
  } ;
  map_small = new google.maps.Map(Get('map-small-canvas'), smallMapOptions) ;
  google.maps.event.addListener(map_small, 'mousedown', map_small_mouseDown) ;
  google.maps.event.addListener(map_small, 'mouseup'  , map_small_mouseUp  ) ;
}

// bounds of the desired area
// Taken from http://stackoverflow.com/questions/3125065/how-do-i-limit-panning-in-google-maps-api-v3
var allowedBounds = new google.maps.LatLngBounds(
     new google.maps.LatLng(lat1, lng1),
     new google.maps.LatLng(lat2, lng2)
) ;
var lastValidCenter = null ;







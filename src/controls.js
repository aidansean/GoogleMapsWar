function keydown(evt){
  var keyDownID = window.event ? event.keyCode : (evt.keyCode != 0 ? evt.keyCode : evt.which) ;
  
  switch(keyDownID){
    case 37: // left
      //evt.preventDefault() ;
      break ;
    case 38: // up
      //evt.preventDefault() ;
      break ;
    case 39: // right
      //evt.preventDefault() ;
      break ;
    case 40: // down
      //evt.preventDefault() ;
      break ;
    case 32: // space
      //evt.preventDefault() ;
  }
}
function map_click(evt){
  var latLng = evt.latLng ;
  var h = get_hex_from_latlng(latLng) ;
  if(0==h) return ;
  h.draw_connections() ;
  map_small.panTo(new google.maps.LatLng(h.clat, h.clng)) ;
}
function map_small_mouseDown(evt){
}
function map_small_mouseUp(evt){
  make_xml() ;
}

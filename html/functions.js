var pi = Math.PI ;

var selected_connection = 'none' ;

function change_connection_type(evt){
  var id = evt.target.id ;
  selected_connection = id.split('_')[1] ;
}

function start(){
  make_map() ;
  make_small_map() ;
  make_hexes_from_xml() ;
  //make_hexes() ;
  draw_hex_grid() ;
  
  document.addEventListener('keydown',keydown) ;
  
  for(var i=0 ; i<hex_fields.length ; i++){
    var k = hex_fields[i] ;
    if(Get('input_hex_'+k)) Get('input_hex_'+k).addEventListener('change',update_current_hex) ;
  }
  for(var i=0 ; i<dirs.length ; i++){
    Get('dir_'+dirs[i]+'_land').addEventListener('change',update_current_hex) ;
    Get('dir_'+dirs[i]+'_sea' ).addEventListener('change',update_current_hex) ;
    Get('dir_'+dirs[i]+'_air' ).addEventListener('change',update_current_hex) ;
  }
  Get('dir_all_land').addEventListener('change',update_current_hex) ;
  Get('dir_all_sea' ).addEventListener('change',update_current_hex) ;
  Get('dir_all_air' ).addEventListener('change',update_current_hex) ;
  
  if(false){
    var latLng = new google.maps.LatLng(51.41666049839545, -1.19) ;
    var marker = new MarkerWithLabel({
       position: latLng,
       map: map,
       draggable: false,
       labelContent: 'London',
       icon: 'FU',
       labelClass: 'labels', // the CSS class for the label
       labelInBackground: false
    }) ;
  }
}

function update_map(){
}

function draw_hex_grid(){
  for(var i=0 ; i<hexes.length ; i++){
    hexes[i].draw() ;
  }
}

function sqrt(x){ return Math.sqrt(x) ; }
function  sin(x){ return Math.sin(x)  ; }
function  cos(x){ return Math.cos(x)  ; }
function  abs(x){ return Math.abs(x)  ; }
function Get(id){ return document.getElementById(id) ; }


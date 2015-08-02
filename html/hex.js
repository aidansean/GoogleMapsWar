var hexes = [] ;
var hexes_columns = [] ;

var colors    = [] ;
colors[0] = 'rgb(255,  0,  0)' ;
colors[1] = 'rgb(  0,200,255)' ;
colors[2] = 'rgb(255,  0,200)' ;

var dirs = ['SE','S','SW','NW','N','NE'] ;
var connection_opacity = 0.5 ;
var stripe_opacity = 0.0 ;
var n_players      = 3 ;
var last_hex       = 0 ;
var current_hex    = 0 ;

function get_hex_from_latlng(latLng){
  if(null==latLng || undefined==latLng) return 0 ;
  var lat = latLng.lat() ;
  var lng = latLng.lng() ;
  var shortlist = [] ;
  var best_dr2 = 1e6 ;
  var best_hex = 0 ;
  for(var i=0 ; i<hexes.length ; i++){
    var h = hexes[i] ;
    var dr2 = (h.fields['clat']-lat)*(h.fields['clat']-lat) + (h.fields['clng']-lng)*(h.fields['clng']-lng) ;
    if(abs(h.fields['clat']-lat)>rlat) continue ;
    if(abs(h.fields['clng']-lng)>rlng) continue ;
    if(dr2<best_dr2){
      best_dr2 = dr2 ;
      best_hex = h ;
    }
  }
  return best_hex ;
}

function make_stripes(points, start_index, color){
  return [null,null] ;
  var p = points ;
  var n = points.length-1 ;
  var i = start_index ;
  var d = 3 ;
  var p1 = [ p[(i+0  )%n] , p[(i+1  )%n] , p[(i+2  )%n] , p[(i+0  )%n] ] ;
  var p2 = [ p[(i+0+d)%n] , p[(i+1+d)%n] , p[(i+2+d)%n] , p[(i+0+d)%n] ] ;
  var stripe_1 = new google.maps.Polygon({ path: p1 }) ;
  var stripe_2 = new google.maps.Polygon({ path: p2 }) ;
  var stripes = [stripe_1,stripe_2] ;
  for(var j=0 ; j<stripes.length ; j++){
    stripes[j].setOptions({fillOpacity   : 0.0   }) ;
    stripes[j].setOptions({strokeOpacity : 0.0   }) ;
    stripes[j].setOptions({fillColor     : color }) ;
    stripes[j].setOptions({geodesic      : true  }) ;
  }
  return stripes ;
}

var hex_fields = [ 'index' , 'player' ,
                   'clat' , 'clng' , 'col' , 'row' ,
                   'name' ,
                   'population' , 'wealth' , 'fuel' ,
                   'minerals' , 'industry' , 'agriculture' ] ;
function hex(clat,clng){
  this.fields = [] ;
  this.fields['index'] = hexes.length ;
  this.fields['clat'] = clat ;
  this.fields['clng'] = clng ;
  this.points        = [] ;
  this.access_points = [] ;
  this.border_points = [] ;
  
  this.fields['name'       ] = 'Hex ' + this.fields['index'] ;
  this.fields['population' ] = 10000 + Math.floor(50000*Math.random()) ;
  this.fields['wealth'     ] = 1000  + Math.floor( 5000*Math.random()) ;
  this.fields['fuel'       ] = 1000  + Math.floor( 5000*Math.random()) ;
  this.fields['minerals'   ] = 1000  + Math.floor( 5000*Math.random()) ;
  this.fields['industry'   ] = 1000  + Math.floor( 5000*Math.random()) ;
  this.fields['agriculture'] = 1000  + Math.floor( 5000*Math.random()) ;
  
  this.hex_fill         = null ;
  this.hex_fill_small   = null ;
  this.hex_border       = null ;
  this.hex_border_small = null ;
  
  this.fields['col'] = Math.floor((this.fields['clng']-lng1)/(      1.5*rlng))+1 ;
  this.fields['row'] = Math.floor((this.fields['clat']-lat1)/(1*sqrt(3)*rlat))+0 ;
  if(hexes_columns[this.fields['col']]){ hexes_columns[this.fields['col']][this.fields['row']] = this ; }
  else{ alert(hexes_columns.length + ' ' + hexes_columns[this.fields['col']] + ' ' + this.fields['col'] + ' ' +(this.fields['col']+0)) ; }
  
  // Stripes to identify players
  this.fields['player'] = 0 ;
  if     (this.fields['clat']+this.fields['clng']>75 && this.fields['clat']<60){ this.fields['player'] = 1 ; }
  else if(this.fields['clat']+this.fields['clng']<75 && this.fields['clat']<45){ this.fields['player'] = 2 ; }
  else if(this.fields['clat']+this.fields['clng']<75 && this.fields['clat']>45){ this.fields['player'] = 3 ; }
  //this.player = Math.floor(4*Math.random()) ;
  
  this.adjacent_hexes   = [] ;
  this.land_connections = [] ;
  this.sea_connections  = [] ;
  this.air_connections  = [] ;
  for(var i=0 ; i<dirs.length ; i++){
    this.adjacent_hexes  [dirs[i]] = false ;
    this.land_connections[dirs[i]] = false ;
    this.sea_connections [dirs[i]] = false ;
    this.air_connections [dirs[i]] = false ;
  }
  
  this.clat_land = this.fields['clat'] - 0.1*rlat ;
  this.clat_sea  = this.fields['clat'] + 0.1*rlat ;
  
  var n = 6 ;
  var offset = pi/n ;
  for(var i=0 ; i<=n ; i++){
    var t = offset+i*2*pi/n ;
    var lat  = this.fields['clat'] + 0.98*rlat*cos(t) ;
    var lata = this.fields['clat'] + 0.50*rlat*cos(t) ;
    var latb = this.fields['clat'] + 0.98*rlat*cos(t) ;
    var lng  = this.fields['clng'] + 0.98*rlng*sin(t) ;
    var lnga = this.fields['clng'] + 0.50*rlng*sin(t) ;
    var lngb = this.fields['clng'] + 0.98*rlng*sin(t) ;
    this.points       .push(new google.maps.LatLng(lat ,lng )) ;
    this.access_points.push(new google.maps.LatLng(lata,lnga)) ;
    this.border_points.push(new google.maps.LatLng(latb,lngb)) ;
  }
  this.transport_latlng_land = [] ;
  this.transport_latlng_sea  = [] ;
  this.transport_latlng_air  = [] ;
  this.transport_circles_land = [] ;
  this.transport_circles_sea  = [] ;
  this.transport_circles_air  = [] ;
  var transportLandOptions = { strokeOpacity: 0.0, fillOpacity: 0.0, fillColor: '#00dd00', map: map, radius: 10e3 } ;
  var transportSeaOptions  = { strokeOpacity: 0.0, fillOpacity: 0.0, fillColor: '#0000ff', map: map, radius: 10e3 } ;
  var transportAirOptions  = { strokeOpacity: 0.0, fillOpacity: 0.0, fillColor: '#ff0000', map: map, radius: 10e3 } ;
  for(var i=0 ; i<=n ; i++){
    var t1 = offset+(i+1)*2*pi/n ;
    var t2 = offset+(i+2)*2*pi/n ;
    var latLSA1 = this.fields['clat'] + rlat*cos(t1) ;
    var latLSA2 = this.fields['clat'] + rlat*cos(t2) ;
    var lngLSA1 = this.fields['clng'] + rlng*sin(t1) ;
    var lngLSA2 = this.fields['clng'] + rlng*sin(t2) ;
    var latL = (1*latLSA1+4*latLSA2)/5 ; var lngL = (1*lngLSA1+4*lngLSA2)/5 ;
    var latS = (1*latLSA1+1*latLSA2)/2 ; var lngS = (1*lngLSA1+1*lngLSA2)/2 ;
    var latA = (4*latLSA1+1*latLSA2)/5 ; var lngA = (4*lngLSA1+1*lngLSA2)/5 ;
    var d = dirs[i] ;
    this.transport_circles_land[d] = new google.maps.Circle(transportLandOptions) ;
    this.transport_circles_sea [d] = new google.maps.Circle(transportSeaOptions ) ;
    this.transport_circles_air [d] = new google.maps.Circle(transportAirOptions ) ;
    this.transport_circles_land[d].setOptions({center: new google.maps.LatLng(latL, lngL) }) ;
    this.transport_circles_sea [d].setOptions({center: new google.maps.LatLng(latS, lngS) }) ;
    this.transport_circles_air [d].setOptions({center: new google.maps.LatLng(latA, lngA) }) ;
  }
  
  this.borders = [] ;
  var bp = this.border_points ;
  for(var i=0 ; i<n ; i++){
    var pol = new google.maps.Polyline({
      path: [ bp[(i+0)%n] , bp[(i+1)%n] ],
      geodesic: true,
      strokeColor: colors[this.fields['player']-1],
      strokeOpacity: 1.0,
      strokeWeight: Math.max(1,20/map.getZoom())
      }) ;
    pol.setMap(map) ;
    this.borders.push(pol) ;
  }
  
  this.make_polyline = function(){
    var pol = new google.maps.Polyline({
      path: this.points,
      geodesic: true,
      strokeColor: '#000000',
      strokeOpacity: 0.5,
      strokeWeight: 1
      }) ;
    return pol ;
  }
  this.make_polygon = function(){
    var pol = new google.maps.Polygon({
      path: this.points,
      geodesic: true,
      strokeOpacity: 0.0
    });
    pol.setOptions({fillOpacity : 0.0}) ;
    pol.parent = this ;
    return pol ;
  }
  
  // Access hex, shown when a player can move to a hex
  this.access_hex = new google.maps.Polyline({
    path: this.access_points,
    geodesic: true,
    strokeColor: 'gold',
    strokeOpacity: 0.0,
    strokeWeight: Math.max(1,20/map.getZoom())
  }) ;
  this.access_hex.setMap(map) ;
  
  this.hex_fill = this.make_polygon() ;
  this.hex_fill.click = function(){
    var h = this.parent ;
    h.click() ;
    h.draw_fill() ;
  }
  this.hex_fill.setMap(map) ;
  this.hex_fill.setOptions({zIndex:1000000+this.fields['index']}) ;
  google.maps.event.addListener(this.hex_fill, 'click', this.hex_fill.click) ;
  
  this.hex_fill_small = this.make_polygon() ;
  this.hex_fill_small.setMap(map_small) ;
  
  var opacities      = [] ;
  this.stripes       = [] ;
  this.stripes_small = [] ;
  for(var i=0 ; i<n_players ; i++){
    opacities[i] = (this.fields['player']==(i+1)) ? stripe_opacity : 0.0 ;
    this.stripes      [i] = make_stripes(this.points, i+0, colors[i]) ;
    this.stripes_small[i] = make_stripes(this.points, i+0, colors[i]) ;
  }
  
  for(var i=0 ; i<this.stripes.length ; i++){
    for(var j=0 ; j<this.stripes[i].length ; j++){
      break ;
      this.stripes      [i][j].setOptions({ fillOpacity : opacities[i] }) ;
      this.stripes_small[i][j].setOptions({ fillOpacity : opacities[i] }) ;
      this.stripes      [i][j].setMap(map) ;
      this.stripes_small[i][j].setMap(map_small) ;
    }
  }
  
  this.draw = function(){
    var n = dirs.length ;
    for(var i=0 ; i<n ; i++){
      var dir = dirs[i] ;
      if(this.neighbours[dir]){
        var opacity = (this.neighbours[dir].fields['player']!=this.fields['player']) ? 0.5 : 0 ;
        this.borders[(i+1)%n].setOptions({ strokeOpacity : opacity }) ;
      }
    }
    
    this.hex_border = this.make_polyline() ;
    this.hex_border.setMap(map) ;
    
    this.hex_border_small = this.make_polyline() ;
    this.hex_border_small.setMap(map_small) ;
    
    google.maps.event.addListener(this.hex_border_small, 'mousedown', map_small_mouseDown) ;
    google.maps.event.addListener(this.hex_border_small, 'mouseup'  , map_small_mouseUp  ) ;
    
    this.update_connections() ;
    
    this.draw_fill() ;
  }
  this.update_connections = function(){
    for(var i=0 ; i<dirs.length ; i++){
      var d = dirs[i] ;
      if(i>=3) break ;
      var fillL = (this.land_connections[d]) ? connection_opacity : 0.0 ;
      var fillS = (this. sea_connections[d]) ? connection_opacity : 0.0 ;
      var fillA = (this. air_connections[d]) ? connection_opacity : 0.0 ;
      this.transport_circles_land[d].setOptions({fillOpacity: fillL }) ;
      this.transport_circles_sea [d].setOptions({fillOpacity: fillS }) ;
      this.transport_circles_air [d].setOptions({fillOpacity: fillA }) ;
    }
  }
  this.draw_connections = function(){
    for(var i=0 ; i<dirs.length ; i++){
      var d = dirs[i] ;
      if(this.air_connections[d]){
        if(this.neighbours[d]){
          this.neighbours[d].access_hex.setOptions({ strokeOpacity  : 1.0}) ;
        }
      }
    }
  }
  
  this.draw_fill = function(){
    this.hex_fill.setOptions({}) ;
  }
  
  this.click = function(){
    if(last_hex){
      for(var i=0 ; i<dirs.length ; i++){
        if(last_hex.land_connections[dirs[i]] || last_hex.sea_connections[dirs[i]] || last_hex.air_connections[dirs[i]]){
          if(last_hex.neighbours[dirs[i]]){
            last_hex.neighbours[dirs[i]].access_hex.setOptions({ strokeOpacity  : 0.0}) ;
          }
        }
      }
    }
    current_hex = this ;
    last_hex    = this ;
    this.update_html() ;
    make_xml() ;
    
    this.draw_fill() ;
    map_small.panTo(new google.maps.LatLng(this.fields['clat'], this.fields['clng'])) ;
    this.draw_connections() ;
    
    Get('dir_all_land').checked = false ;
    Get('dir_all_sea' ).checked = false ;
    Get('dir_all_air' ).checked = false ;
  }
  
  this.neighbours = [] ;
  for(var i=0 ; i<dirs.length ; i++){
    this.neighbours[dirs[i]] = 0 ;
  }
  
  this.join_adjacent_hexes = function(){
    var dr = this.fields['col']%2 ;
    var c  = this.fields['col'] ;
    var r  = this.fields['row'] ;
    var hc = hexes_columns ;
    var ah = this.adjacent_hexes ;
    if(hc[c][r-1]){
      ah.push([c,r-1]) ;
      this.neighbours['S'] = hexes_columns[c][r-1] ;
    }
    if(hc[c][r+1]){
      ah.push([c,r+1]) ;
      this.neighbours['N'] = hexes_columns[c][r+1] ;
    }
    if(hc[c-1]){
      if(hc[c-1][r-1+dr]){
        ah.push([c-1,r-1+dr]) ;
        this.neighbours['SW'] = hexes_columns[c-1][r-1+dr] ;
      }
      if(hc[c-1][r  +dr]){
        ah.push([c-1,r  +dr]) ;
        this.neighbours['NW'] = hexes_columns[c-1][r  +dr] ;
      }
    }
    if(hc[c+1]){
      if(hc[c+1][r-1+dr]){
        ah.push([c+1,r-1+dr]) ;
        this.neighbours['SE'] = hexes_columns[c+1][r-1+dr] ;
      }
      if(hc[c+1][r  +dr]){
        ah.push([c+1,r  +dr]) ;
        this.neighbours['NE'] = hexes_columns[c+1][r  +dr] ;
      }
    }
  }
  
  this.make_xml = function(){
    var node = xmlDoc.createElement('hex') ;
    for(var i=0 ; i<hex_fields.length ; i++){
      node.setAttribute(hex_fields[i], this.fields[hex_fields[i]]) ;
    }
    for(var i=0 ; i<dirs.length ; i++){
      node.setAttribute(dirs[i]+'_land', this.land_connections[dirs[i]]) ; 
      node.setAttribute(dirs[i]+'_sea' , this. sea_connections[dirs[i]]) ; 
      node.setAttribute(dirs[i]+'_air' , this. air_connections[dirs[i]]) ; 
    }
    return node ;
  }
  
  this.update_html = function(){
    for(var i=0 ; i<hex_fields.length ; i++){
      var k = hex_fields[i] ;
      if     (Get( 'span_hex_'+k)) Get( 'span_hex_'+k).innerHTML = this.fields[k] ;
      else if(Get('input_hex_'+k)) Get('input_hex_'+k).value     = this.fields[k] ;
    }
    for(var i=0 ; i<dirs.length ; i++){
      Get('dir_'+dirs[i]+'_land').checked = this.land_connections[dirs[i]] ;
      Get('dir_'+dirs[i]+'_sea' ).checked = this. sea_connections[dirs[i]] ;
      Get('dir_'+dirs[i]+'_air' ).checked = this. air_connections[dirs[i]] ;
    }
  }
}

function hex_from_xml(node){
  var clat = parseFloat(node.getAttribute('clat')) ;
  var clng = parseFloat(node.getAttribute('clng')) ;
  var h = new hex(clat,clng) ;
  for(var i=0 ; i<hex_fields.length ; i++){
    var k = hex_fields[i] ;
    if(k=='name')                  { h.fields[k] =            node.getAttribute(k)  ; }
    else if(k=='fuel' || k=='minerals'){ h.fields[k] = 1000 + Math.floor(Math.random()*1000) ; }    
    else if(k=='clat' || k=='clng'){ h.fields[k] = parseFloat(node.getAttribute(k)) ; }
    else                           { h.fields[k] =   parseInt(node.getAttribute(k)) ; }
  }
  for(var i=0 ; i<dirs.length ; i++){
    h.land_connections[dirs[i]] = (node.getAttribute(dirs[i]+'_land')=='true') ; 
    h. sea_connections[dirs[i]] = (node.getAttribute(dirs[i]+'_sea' )=='true') ; 
    h. air_connections[dirs[i]] = (node.getAttribute(dirs[i]+'_air' )=='true') ; 
  }
  return h ;
}

function update_current_hex(){
  var h = current_hex ;
  for(var i=0 ; i<hex_fields.length ; i++){
    var k = hex_fields[i] ;
    if(k=='name'){
      h.fields[k] = Get('input_hex_'+k).value ;
    }
    else if(Get('input_hex_'+k)){
      h.fields[k] = parseInt(Get('input_hex_'+k).value) ;
    }
  }
  for(var i=0 ; i<dirs.length ; i++){
    var d1 = dirs[i] ;
    h.land_connections[d1] = Get('dir_'+d1+'_land').checked ;
    h. sea_connections[d1] = Get('dir_'+d1+'_sea' ).checked ;
    h. air_connections[d1] = Get('dir_'+d1+'_air' ).checked ;
  }
  if(Get('dir_all_land').checked){
    for(var i=0 ; i<dirs.length ; i++){
      var d1 = dirs[i] ;
      h.land_connections[d1] = true ;
      Get('dir_'+d1+'_land').checked = true ;
    }
  }
  if(Get('dir_all_sea').checked){
    for(var i=0 ; i<dirs.length ; i++){
      var d1 = dirs[i] ;
      h.sea_connections[d1] = true ;
      Get('dir_'+d1+'_sea').checked = true ;
    }
  }
  if(Get('dir_all_air').checked){
    for(var i=0 ; i<dirs.length ; i++){
      var d1 = dirs[i] ;
      h.air_connections[d1] = true ;
      Get('dir_'+d1+'_air').checked = true ;
    }
  }
  for(var i=0 ; i<dirs.length ; i++){
    var d1 = dirs[i] ;
    var d2 = dirs[(i+3)%6] ;
    if(h.neighbours[d1]){
      h.neighbours[d1].land_connections[d2] = Get('dir_'+d1+'_land').checked ;
      h.neighbours[d1]. sea_connections[d2] = Get('dir_'+d1+'_sea' ).checked ;
      h.neighbours[d1]. air_connections[d2] = Get('dir_'+d1+'_air' ).checked ;
      h.neighbours[d1].update_connections() ;
    }
  }
  
  h.update_connections() ;
  make_xml() ;
}

function make_hexes_from_xml(){
  hexes         = [] ;
  hexes_columns = [] ;
  for(var i=-10 ; i<=50 ; i++){
    hexes_columns.push([]) ;
  }
  var top_node = loadXMLDoc('hexes.xml') ;
  for(var i=0 ; i<top_node.childNodes.length ; i++){
    if(top_node.childNodes[i].nodeName!='playboard') continue ;
    var pNode = top_node.childNodes[i] ;
    for(var j=0 ; j<pNode.childNodes.length ; j++){
      var hNode = pNode.childNodes[j] ;
      if(hNode.nodeName!='hex') continue ;
      var h = hex_from_xml(hNode) ;
      hexes.push(h) ;
    }
  }
  
  for(var i=0 ; i<hexes.length ; i++){
    hexes_columns[hexes[i].fields['col']].push(hexes[i]) ;
  }
  for(var i=0 ; i<hexes.length ; i++){
    hexes[i].join_adjacent_hexes() ;
  }
}

function make_hexes(){
  var lat0 =     1 ;
  var lng0 = -0.19 ;
  var dlng_counter = 1 ;
  var dlng = [rlng*1.5,0] ;
  
  var ncols = 10+(lat2-lat1)/(2.25*rlat) ;
  for(var i=-10 ; i<=ncols ; i++){
    hexes_columns.push([]) ;
  }
  for(var lat=lat1 ; lat<lat2 ; lat+=0.5*sqrt(3)*rlat){
    dlng_counter = 1-dlng_counter ;
    for(var lng=lng1 ; lng<lng2 ; lng+=3*rlng){
      hexes.push(new hex(lat0+lat,lng0+lng+dlng[dlng_counter],rlat,rlng)) ;
    }
  }
  for(var i=0 ; i<hexes.length ; i++){
    hexes[i].join_adjacent_hexes() ;
  }
}

function make_xml(){
  var node = xmlDoc.createElement('playboard') ;
  for(var i=0 ; i<hexes.length ; i++){
    var hex_node = hexes[i].make_xml() ;
    node.appendChild(hex_node) ;
  }
  var xml_text = print_xml(node,0) ;
  Get('textarea_xml').value = xml_text ;
}

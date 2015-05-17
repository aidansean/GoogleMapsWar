<?php $title = 'Google Maps Wars' ;
$stylesheets = array('style.css') ;
$js_scripts  = array() ;
$js_scripts[] = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD92hg1tP-8tcUZFm7M56vqk0TZayfo-l0&sensor=false' ;
$js_scripts[] = 'xml.js' ;
$js_scripts[] = 'map.js' ;
$js_scripts[] = 'hex.js' ;
$js_scripts[] = 'controls.js' ;
$js_scripts[] = 'functions.js' ;
$js_scripts[] = 'markerwithlabel.js' ;
// Taken from http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.8/docs/examples.html
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
  <div class="right">
    <h3>About this page</h3>
    <div class="blurb">
      <p>This page will draw hexagons on a Google map in an attempt to make a war game.</p>
      <table id="table_small_map">
        <thead>
          <tr>
            <th id="th_small_map_data">Data</th>
            <th id="th_small_map">Map</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="td_small_map_data">
              <table>
                <tbody>
                  <tr>
                    <td class="hex_data_left">Id:         </td>
                    <td><span id="span_hex_index">-</span></td>
                    <td class="dir"></td>
                    <td class="dir">Land</td>
                    <td class="dir">Sea</td>
                    <td class="dir">Air</td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Column, Row:   </td>
                    <td><span id="span_hex_col">-</span>, <span id="span_hex_row">-</span></td>
                    <td colspan="4" style="text-align:center;background:#dddddd">Connections</td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Name:        </td>
                    <td><input id="input_hex_name" class="text" type="text" width="300px"/></td>
                    <td class="dir">NW</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_NW_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_NW_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_NW_air"/></td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Population:  </td>
                    <td><input id="input_hex_population" class="text" type="text" width="300px"/></td>
                    <td class="dir">N</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_N_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_N_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_N_air"/></td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Wealth:      </td>
                    <td><input id="input_hex_wealth" class="text" type="text" width="300px"/></td>
                    <td class="dir">NE</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_NE_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_NE_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_NE_air"/></td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Fuel:      </td>
                    <td><input id="input_hex_fuel" class="text" type="text" width="300px"/></td>
                    <td class="dir">SE</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_SE_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_SE_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_SE_air"/></td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Minerals:   </td>
                    <td><input id="input_hex_minerals" class="text" type="text" width="300px"/></td>
                    <td class="dir">S</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_S_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_S_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_S_air"/></td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Industry:    </td>
                    <td><input id="input_hex_industry" class="text" type="text" width="300px"/></td>
                    <td class="dir">SW</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_SW_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_SW_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_SW_air"/></td>
                  </tr>
                  <tr>
                    <td class="hex_data_left">Agriculture: </td>
                    <td><input id="input_hex_agriculture" class="text" type="text" width="300px"/></td>
                    <td class="dir">All</td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_all_land"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_all_sea"/></td>
                    <td class="dir"><input type="checkbox" class="dir" id="dir_all_air"/></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td id="td_small_map">
              <div id="map-small-canvas" style="width:300px; height:300px"></div>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="map-canvas" style="width:750px; height:600px"></div>
      <!--<div id="map-canvas-overview" style="width:375px; height:300px; background:white"></div>-->
      
      <textarea id="textarea_xml" rows="20" cols="95"></textarea>
    </div>
  </div>

<?php foot() ; ?>

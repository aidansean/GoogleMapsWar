<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/GoogleMapsWar" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=GoogleMapsWar" ;
$project = new project_object("GoogleMapsWar", "Google Maps War", "https://github.com/aidansean/GoogleMapsWar", "http://aidansean.com/projects/?tag=GoogleMapsWar", "GoogleMapsWar/images/project.jpg", "GoogleMapsWar/images/project_bw.jpg", "This project was made partly to combine the <a href=\"http://aidansean.com/projects/?p=605\">Hexagonal civ</a> game with Google Maps, and partly to push the Google maps API to its limits.  It turns out that Google Maps is not suited to this heavy use.", "Games", "canvas,HTML,JavaScript,GoogleMaps") ;
?>
from project_module import project_object, image_object, link_object, challenge_object

p = project_object('GoogleMapsWar', 'Google Maps War')
p.domain = 'http://www.aidansean.com/'
p.path = 'GoogleMapsWar'
p.preview_image_ = image_object('http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 408, 287)
p.folder_name = 'aidansean'
p.github_repo_name = 'GoogleMapsWar'
p.mathjax = False
p.links.append(link_object(p.domain, p.path, 'Live page'))
p.introduction = 'This project was made partly to combine the <a href="http://aidansean.com/projects/?p=605">Hexagonal civ</a> game with Google Maps, and partly to push the Google maps API to its limits.  It turns out that Google Maps is not suited to this heavy use.'
p.overview = '''This project is intended to be a Risk style conquest game based on a map of Europe.  The maps would be split into hexagons with rules for how the different unit (land, air, sea) could move from place to place.  The map is split into equal areas of latitude and longitude with values chosen to best suit the arrangement of cities.  Ideally the economic value of each hexagon would be taken into account, although this would require quite a bit of research.  The connections between the hexagons is already defined, so in principle this could lead to a rather simple game by randomising the economic and defensive values of each hexagon (or giving them all equal value.)'''

p.challenges.append(challenge_object('The hexagons should be arranged in equal latitude and longitude, which isn\'t necesarily equal area on the page.', 'The hexagons are not equal in area, so I had to draw them from the centre of each hexagon and find their vertices using polar coordinates around the centre of the hexagon.  This was the first time I had drawn the hexagons this way and it turned out easier to make the drawing functions if I did it like this, given that I had already solved the coordinate problem in the hexagonal civ project.', 'Resolved'))

p.challenges.append(challenge_object('The game requires quite a bit of data entry.', 'Finding the economic values of each hexagon is very difficult and time consuming, so this has been put off indefinitely.  The connections for the land, sea and air units have already been determined.', 'To be revisited'))

p.challenges.append(challenge_object('Drawing the hexagons requires drawing many polygons.', 'Using geometrical experience from the <a href="http://aidansean.com/projects/?p=608">Skyline project</a>, I found a reasonable way to label the hexagons with hatching in a colourblind friendly way.  However the sheer number of polygons means that the performance is quite poor.  It might be prefereable to draw the large map without Google Maps, and only underlay Google Maps when the user requests it.', 'Resolved, to be revisited'))

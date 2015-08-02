function railway_ticket(date, from, to, price, type){
  this.date  = date  ;
  this.from  = from  ;
  this.to    = to    ;
  this.price = price ;
  this.type  = type  ;
  this.index = tickets.length ;
}
function station_object(name,lat,lng){
  this.name = name ;
  this.lat  = lat  ;
  this.lng  = lng  ;
}

var tickets  = [] ;
var stations = [] ;
tickets.push(new railway_ticket('2014/04/13', 'Crewe'               , 'London'             ,  0.00, 'STD,SGL')) ;
tickets.push(new railway_ticket('2014/04/11', 'Manchester'          , 'Crewe'              , 16.70, 'STD,RTN')) ;
tickets.push(new railway_ticket('2014/04/11', 'Crewe'               , 'Manchester'         , 16.70, 'STD,OUT')) ;
tickets.push(new railway_ticket('2014/04/10', 'Manchester'          , 'Crewe'              , 11.00, 'STD,RTN')) ;
tickets.push(new railway_ticket('2014/04/10', 'Crewe'               , 'Manchester'         , 11.00, 'STD,OUT')) ;
tickets.push(new railway_ticket('2014/04/09', 'Sandwell and Dudley' , 'Crewe'              , 25.50, 'STD,OUT')) ;
tickets.push(new railway_ticket('2014/04/06', 'Peterborough'        , 'Birmingham'         , 35.70, 'STD,SGL')) ;
tickets.push(new railway_ticket('2014/04/05', 'London'              , 'Cambridge'          , 16.00, 'STD,OUT')) ;

tickets.push(new railway_ticket('2012/12/22', 'Stafford'            , 'Crewe'              , 10.90, 'STD,RTN')) ;
tickets.push(new railway_ticket('2013/02/08', 'London'              , 'Long Buckby'        , 30.40, 'STD,SGL')) ;
tickets.push(new railway_ticket('2012/12/24', 'Crewe'               , 'Cradley Heath'      , 27.90, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/12/24', 'Cradley Heath'       , 'Crewe'              , 27.90, 'STD,RTN')) ;
tickets.push(new railway_ticket('2012/12/22', 'Crewe'               , 'Stafford'           , 10.90, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/12/30', 'Sevenoaks'           , 'Woking'             , 27.40, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/12/22', 'Crewe'               , 'Manchester'         ,  9.10, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/12/18', 'Manchester Airport'  , 'Crewe'              , 15.20, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/12/22', 'Manchester'          , 'Crewe'              ,  9.10, 'STD,RTN')) ;
tickets.push(new railway_ticket('2012/12/28', 'London'              , 'Birmingham'         , 27.50, 'STD,RTN')) ;

tickets.push(new railway_ticket('2012/12/30', 'Woking'              , 'Sevenoaks'          , 27.40, 'STD,RTN')) ;
tickets.push(new railway_ticket('2012/12/22', 'Stafford'            , 'Manchester'         , 19.70, 'STD,OUT')) ;
tickets.push(new railway_ticket('2013/01/01', 'Old Hill'            , 'Birmingham'         ,  2.20, 'STD,RTN')) ;
tickets.push(new railway_ticket('2012/12/18', 'Crewe'               , 'Manchester'         , 15.20, 'STD,RTN')) ;
tickets.push(new railway_ticket('2012/12/28', 'Birmingham'          , 'London'             , 27.50, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/12/28', 'Cradley Heath'       , 'Birmingham'         ,  3.60, 'STD,SGL')) ;
tickets.push(new railway_ticket('2012/12/28', 'London'              , 'Sevenoaks'          ,  7.05, 'STD,SGL')) ;
tickets.push(new railway_ticket('2011/08/30', 'Stafford'            , 'Manchester'         , 18.90, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/12/22', 'Southampton Central' , 'Swindon'            , 33.00, 'STD,SGL')) ;
tickets.push(new railway_ticket('2013/12/30', 'London'              , 'Leeds'              , 98.00, 'STD,OUT')) ;

tickets.push(new railway_ticket('2013/12/24', 'Birmingham'          , 'London'             , 28.00, 'STD,RTN')) ;
tickets.push(new railway_ticket('2013/12/21', 'St Neot\'s'          , 'London'             , 31.90, 'STD,RTN')) ;
tickets.push(new railway_ticket('2013/12/28', 'Stroud'              , 'London'             , 42.50, 'STD,RTN')) ;
tickets.push(new railway_ticket('2013/12/21', 'London'              , 'St Neot\'s'         , 31.90, 'STD,OUT')) ;
tickets.push(new railway_ticket('2013/12/30', 'Leeds'               , 'London'             , 98.00, 'STD,RTN')) ;
tickets.push(new railway_ticket('2013/12/28', 'London'              , 'Stroud'             , 42.50, 'STD,OUT')) ;
tickets.push(new railway_ticket('2013/12/30', 'Leeds'               , 'Cross Gates'        ,  2.10, 'STD,SGL')) ;
tickets.push(new railway_ticket('2013/12/24', 'London'              , 'Birmingham'         , 28.00, 'STD,OUT')) ;
tickets.push(new railway_ticket('2013/12/24', 'Birmingham Int'      , 'Wolverhampton'      ,  6.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2013/12/24', 'Wolverhampton'       , 'Birmingham Int'     ,  6.80, 'STD,RTN')) ;

tickets.push(new railway_ticket('2006/04/12', 'Oxford'              , 'Crewe'              , 30.95, 'Y-P,OUT')) ;
tickets.push(new railway_ticket('2007/02/18', 'Birmingham'          , 'Old Hill'           ,  1.70, 'Y-P,OUT')) ;
tickets.push(new railway_ticket('2007/02/18', 'Old Hill'            , 'Birmingham'         ,  1.70, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2007/02/16', 'Birmingham'          , 'London'             , 24.90, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2006/08/19', 'Liverpool'           , 'London'             , 37.75, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2006/08/19', 'London'              , 'Liverpool'          , 37.75, 'Y-P,OUT')) ;
tickets.push(new railway_ticket('2012/01/01', 'Stroud'              , 'Swindon'            ,  6.70, 'STD,SGL')) ;
tickets.push(new railway_ticket('2011/12/21', 'Woking'              , 'Southampton Central', 21.30, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/09/03', 'Birmingham'          , 'Crewe'              , 21.60, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/09/02', 'Fiskerton'           , 'Nottingham'         ,  4.80, 'STD,SGL')) ;

tickets.push(new railway_ticket('2011/09/02', 'Cradley Heath'       , 'Malvern Link'       , 12.20, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/00/02', 'Malvern Link'        , 'Cradley Heath'      , 12.20, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/09/01', 'Nottingham'          , 'Cradley Heath'      , 25.80, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/09/01', 'Nottingham'          , 'Fiskerton'          ,  4.80, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/08/31', 'Birmingham'          , 'Cradley Heath'      ,  0.50, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/08/30', 'Manchester'          , 'Stafford'           , 18.90, 'STD,OUT')) ;
tickets.push(new railway_ticket('2012/08/31', 'Cradley Heath'       , 'Birmingham'         ,  3.40, 'STD,SGL')) ;
tickets.push(new railway_ticket('2011/08/29', 'Crewe'               , 'Manchester'         , 14.60, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/08/29', 'Manchester'          , 'Crewe'              , 14.60, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/07/29', 'Bristol Temple Meads', 'Cheltenham Spa'     ,  7.70, 'STD,SGL')) ;

tickets.push(new railway_ticket('2011/07/01', 'Gatwick Airport'     , 'London Victoria'    , 17.90, 'STD,SGL')) ;
tickets.push(new railway_ticket('2011/04/17', 'Oxford'              , 'Crewe'              , 57.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/04/02', 'Oxford'              , 'Crewe'              , 57.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/04/11', 'Stratford Upon Avon' , 'Oxford'             , 15.80, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2011/04/01', 'Oxford'              , 'Stratford Upon Avon', 15.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/03/31', 'Birmingham'          , 'Oxford'             , 31.20, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/03/29', 'Didcot Parkway'      , 'Oxford'             ,  5.30, 'STD,RTN')) ;
tickets.push(new railway_ticket('2011/03/29', 'Oxford'              , 'Didcot Parkway'     ,  5.30, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/03/31', 'Oxford'              , 'Birmingham'         , 31.20, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/01/02', 'Stafford'            , 'London'             , 52.80, 'STD,RTN')) ;

tickets.push(new railway_ticket('2011/01/02', 'London'              , 'Stafford'           , 52.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2011/04/17', 'Stroud'              , 'London'             , 29.00, 'STD,SGL')) ;
tickets.push(new railway_ticket('2010/12/31', 'Oxford'              , 'Crewe'              , 57.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2010/12/29', 'Leamington'          , 'Stroud'             , 24.30, 'STD,SGL')) ;
tickets.push(new railway_ticket('2010/12/23', 'London'              , 'Liverpool'          , 66.20, 'STD,OUT')) ;
tickets.push(new railway_ticket('2010/09/24', 'Gatwick Airport'     , 'London Victoria'    , 16.90, 'STD,SGL')) ;
tickets.push(new railway_ticket('2010/08/01', 'Birmingham'          , 'London'             , 41.90, 'STD,RTN')) ;
tickets.push(new railway_ticket('2010/03/07', 'London'              , 'Stafford'           , 17.00, 'STD,RTN')) ;
tickets.push(new railway_ticket('2010/03/07', 'Stafford'            , 'London'             , 17.00, 'STD,OUT')) ;
tickets.push(new railway_ticket('2010/03/06', 'Crewe'               , 'Stafford'           ,  8.20, 'STD,SGL')) ;

tickets.push(new railway_ticket('2010/03/05', 'Crewe'               , 'Manchester'         , 11.80, 'STD,OUT')) ;
tickets.push(new railway_ticket('2010/03/05', 'London'              , 'Crewe'              , 16.00, 'STD,SGL')) ;
tickets.push(new railway_ticket('2010/03/05', 'Manchester'          , 'Crewe'              , 11.00, 'STD,RTN')) ;
tickets.push(new railway_ticket('2009/01/12', 'Oxford'              , 'Twyford'            ,  9.90, 'STD,SGL')) ;
tickets.push(new railway_ticket('2010/12/23', 'London'              , 'Liverpool'          , 66.20, 'STD,OUT')) ;
tickets.push(new railway_ticket('2007/05/27', 'Reading'             , 'Twyford'            ,  1.80, 'Y-P,SGL')) ;
tickets.push(new railway_ticket('2007/05/26', 'Oxford'              , 'Twyford'            ,  7.70, 'Y-P,SGL')) ;
tickets.push(new railway_ticket('2007/05/17', 'Didcot Parkway'      , 'West Drayton'       , 16.70, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2007/04/29', 'Birmingham'          , 'London'             , 10.50, 'STD,SGL')) ;
tickets.push(new railway_ticket('2007/04/28', 'Crewe'               , 'Stafford'           ,  2.65, 'Y-P,SGL')) ;

tickets.push(new railway_ticket('2007/04/28', 'Stafford'            , 'London'             , 20.15, '1ST,Y-P,SGL')) ;
tickets.push(new railway_ticket('2007/04/26', 'London'              , 'Crewe'              , 35.20, 'Y-P,SGL')) ;
tickets.push(new railway_ticket('2007/04/26', 'London'              , 'Crewe'              , 16.50, 'Y-P,SGL')) ;
tickets.push(new railway_ticket('2007/04/15', 'Stevenage'           , 'London'             ,  8.25, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2007/05/27', 'Twyford'             , 'West Drayton'       ,  4.15, 'SGL,OUT')) ;
tickets.push(new railway_ticket('2007/04/11', 'Durham'              , 'London'             , 62.90, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2007/04/11', 'London'              , 'Durham'             , 62.90, 'Y-P,OUT')) ;
tickets.push(new railway_ticket('2007/02/07', 'London'              , 'Birmingham'         , 24.90, 'Y-P,OUT')) ;
tickets.push(new railway_ticket('2006/11/18', 'Cramlington'         , 'Newcastle'          ,  2.75, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2006/11/18', 'Newcastle'           , 'Cramlington'        ,  2.75, 'Y-P,OUT')) ;

tickets.push(new railway_ticket('2006/11/18', 'Newcastle'           , 'London'             , 60.35, 'Y-P,RTN')) ;
tickets.push(new railway_ticket('2006/11/18', 'London'              , 'Newcastle'          , 60.35, 'Y-P,OUT')) ;

stations.push(new station_object('Oxford'               , 51.7534, -1.2703)) ;
stations.push(new station_object('Crewe'                , 53.0890, -2.4330)) ;
stations.push(new station_object('Liverpool'            , 53.4075, -2.9784)) ;
stations.push(new station_object('London'               , 51.5284, -0.1331)) ;
stations.push(new station_object('Cramlington'          , 55.0880, -1.5990)) ;
stations.push(new station_object('Newcastle'            , 54.9686, -1.6171)) ;
stations.push(new station_object('Birmingham'           , 52.4778, -1.8989)) ;
stations.push(new station_object('Old Hill'             , 52.4710, -2.0560)) ;
stations.push(new station_object('Durham'               , 54.7798, -1.5815)) ;
stations.push(new station_object('Stevenage'            , 51.9020, -0.2070)) ;
stations.push(new station_object('Stafford'             , 52.8036, -2.1231)) ;
stations.push(new station_object('Didcot Parkway'       , 51.6120, -1.2435)) ;
stations.push(new station_object('West Drayton'         , 51.5099, -0.4723)) ;
stations.push(new station_object('Twyford'              , 51.4760, -0.8630)) ;
stations.push(new station_object('Reading'              , 51.4590, -0.9722)) ;
stations.push(new station_object('Manchester'           , 53.4770, -2.2300)) ;
stations.push(new station_object('Gatwick Airport'      , 51.1565,  0.1609)) ;
stations.push(new station_object('London Victoria'      , 51.4966, -0.1448)) ;
stations.push(new station_object('Leamington'           , 52.2846, -1.5363)) ;
stations.push(new station_object('Stroud'               , 51.7450, -2.2190)) ;
stations.push(new station_object('Malvern Link'         , 52.1252, -2.3194)) ;
stations.push(new station_object('Cradley Heath'        , 52.4700, -2.0900)) ;
stations.push(new station_object('Stratford Upon Avon'  , 52.1940, -1.7160)) ;
stations.push(new station_object('Bristol Temple Meads' , 51.4490, -2.5800)) ;
stations.push(new station_object('Cheltenham Spa'       , 51.8970, -2.1000)) ;
stations.push(new station_object('Nottingham'           , 52.9470, -1.1460)) ;
stations.push(new station_object('Fiskerton'            , 53.0606, -0.9119)) ;
stations.push(new station_object('Woking'               , 51.3180, -0.5570)) ;
stations.push(new station_object('Southampton Central'  , 50.9075, -1.4141)) ;
stations.push(new station_object('Swindon'              , 51.5656, -1.7854)) ;
stations.push(new station_object('Manchester Airport'   , 53.3650, -2.2731)) ;
stations.push(new station_object('Sevenoaks'            , 51.2764,  0.1817)) ;
stations.push(new station_object('Long Buckby'          , 52.2950, -1.0860)) ;
stations.push(new station_object('St Neot\'s'           , 52.2320, -0.2470)) ;
stations.push(new station_object('Birmingham Int'       , 52.4510, -1.7250)) ;
stations.push(new station_object('Wolverhampton'        , 52.5875, -2.1200)) ;
stations.push(new station_object('Leeds'                , 53.7940, -1.5470)) ;
stations.push(new station_object('Cross Gates'          , 53.8050, -1.4500)) ;
stations.push(new station_object('Sandwell and Dudley'  , 52.5086, -2.0118)) ;
stations.push(new station_object('Cambridge'            , 52.194 ,  0.138 )) ;
stations.push(new station_object('Peterborough'         , 52.5748, -0.2502)) ;

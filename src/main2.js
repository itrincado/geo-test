window.onload = loadmap();
   var locationlng;
   var locationlat;
   var boundsCirc;
   var radius =300;
   var radius2 = 60;
   var radius3 = 60;
   var radius4 = 50;
   var accuracyCirc;
   var cirLat=43.07790859834721;
   var cirLng=-89.37177476473153;
   var coord;
   var circle;
   var circleMove;
   var locationMarker;
   var markerMove;
   var fistTime = true;
   var markerNotOnMap =true;
   var latFound;
   var lngFound;
   var modo = "nada";
   var monedas = 250;
   var tiempo = 500;
   var llevo = false;
   var sabiduria = 0;
   var flor = false;
   var diario = false;
   var arbol = false;
   var numero = false;

   var uno = false;
   var dos = false;
   var tres = false;
   var cuatro = false;
   var cinco = false;
   var seis = false;
   var siete = false;

   alert ("Esto es GeoMarrakech!</br>El juego que te hará descubrir la ciudad de otra manera</br>Pulsa en los iconos de la pantalla para obtener más información");
   $('#cero').css('background', 'white');
   $('#cero').click(function(){
     var win =  L.control.window(map,{title:'Estas segur@ que quiere salir?',maxWidth:400,modal: true, position: 'topLeft'})
     .content('volver al juego o salir')
     .prompt({callback:function(){
      //  window.location.href = '../index.php';
     }})

     .show();
    //  confirm ("segur@?");
   });

   $('#uno').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>La Flor de la Vida</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('Es el origen de la geometria sagrada, la repeticion de este patron genera todos las demas formas geometricas de la Naturaleza.<br>Si ya has comprendido el significado de la Flor de la Vida pulsa OK para resolver el enigma.<br><IMG SRC="images/flor.gif">')
     .prompt({callback:function(){
       if (uno==false){
        L.control.window(map,{title:'Enigma:<br>Cual es el numero sagrado que se asocia a la Flor de la Vida?</br>',maxWidth:400,modal: true,position: 'topLeft'})
           .content('</br></br></br></br></br>Donde encontrarlo:<br>Busca cerca del Jardin Harti, donde el agua no deja de fluir...<br><br>Pulsa OK para resolver.')
           .prompt({callback:function(){
             var sol1 = prompt("Cual es el numero sagrado que se asocia a la Flor de la Vida?");
             if (sol1==7){
               alert ("CORRECTO! ganas 100 en sabiduria");
               sabiduria=sabiduria+100;
               $('#uno').css('background', 'yellow');
               $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
               uno=true;
             }
             else { alert ("INCORRECTO!! sigue investigando...")}
           }
         })
           .show()

       } else {
        L.control.window(map,{title:'Ya posees la sabiduria de la Flor de la Vida.',maxWidth:400,modal: true,position: 'topLeft'})
                .content('')
                .show()
       }
      }})
     .show();
   });
   $('#uno').css('background', 'white');

   $('#dos').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>Liber Abaci</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('El Liber Abaci contiene la sucesion numerica a partir de la cual se construye Naturaleza. El crecimiento del Reino Vegetal, la formación de conchas espirales en el Reino Animal y el resto de formas que encontramos en cualquier lugar donde miremos.<br><IMG SRC="images/libro.gif"><br><br>')
     .prompt({callback:function(){
       if (dos==false){
         L.control.window(map,{title:'Enigma:',maxWidth:400,modal: true,position: 'topLeft'})
            .content('Que nombre recibe el animal que presenta una espiral formada segun la sucesion numerica del Liber Abaci?<br>Donde encontrarlo:<br>Busca cerca de la Estacion de tren, donde el arte se representa en tres paredes...<br><br>Pulsa OK para resolver.')
            .prompt({callback:function(){
              var sol2 = prompt("Que nombre recibe el animal que confirmo la presencia de una espiral formada segun la sucesion numerica presente en el Liber Abaci?");
              if (sol2=="nautilus pompilus"){
                alert("CORRECTO! ganas 100 en sabiduria");
                sabiduria=sabiduria+100;
                $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
                dos=true;
              }
              else {alert("INCORRECTO!! sigue investigando...")}
            }
            })
           .show()

       } else {
         L.control.window(map,{title:'Ya posees la sabiduria del Liber Abaci.',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('')
                 .show()
       }
      }})
     .show();
   });
   $('#dos').css('background', 'white');

   $('#tres').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>El arbol de la Vida</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('La flor de la Vida genera el Arbol de la Vida, cuya simbologia representa los estados de consciencia de nuestro cerebro<br>Si ya has comprendido el significado de el Arbol de la Vida pulsa OK para resolver el enigma.<br><IMG SRC="images/arbol.gif"><br>')
     .prompt({callback:function(){
       if (tres==false && sabiduria==200){
         L.control.window(map,{title:'Enigma:',maxWidth:400,modal: true,position: 'topLeft'})
            .content('Que otro nombre recibe el Arbol de la Vida en la cultura hebraica?<br>Donde encontrarlo:<br>De camino a la Kutubia deberas entrar en el jardin del futuro, donde las palabras se hacen ondas...<br><br>Pulsa OK para resolver.')
            .prompt({callback:function(){
              var sol3 = prompt("Que otro nombre recibe el Arbol de la Vida en la cultura hebraica?");
              if (sol3=="kabala"){
                alert("CORRECTO! ganas 100 en sabiduria");
                sabiduria=sabiduria+100;
                $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
                tres=true;
              }
              else {alert("INCORRECTO!! sigue investigando...")}
              }
              })
           .show()

       } else if(sabiduria<200){
           L.control.window(map,{title:'</br>Todavia no tienes la sabiduria necesaria, necesitas la Flor de la Vida y el Liber Abaci.',maxWidth:400,modal: true,position: 'topLeft'})
                   .content('')
                   .show()

       } else {
         L.control.window(map,{title:'</br>Ya posees la sabiduria de El Arbol de la Vida.',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('')
                 .show()
       }

        }})
       .show();
     });

   $('#tres').css('background', 'white');

   $('#cuatro').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>El Numero de Oro</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('Se encuentra en todas las formas de la Naturaleza, es un número oculto en la geometria de la materia que permite comprender y crear el Micro y Macro cosmos.<br>Si ya has comprendido el significado de el Numero de Oro pulsa OK para resolver el enigma.<br><IMG SRC="images/phi.gif">')
     .prompt({callback:function(){
       if (cuatro==false && sabiduria==300){
         L.control.window(map,{title:'Enigma:',maxWidth:400,modal: true,position: 'topLeft'})
            .content('Cuales son los primeros 5 digitos del numero de oro?</br>Donde encontrarlo:<br>En el lugar donde Lalla Hasna solia ir a leer los libros clasicos...<br><br>Pulsa OK para resolver.')
            .prompt({callback:function(){
              var sol4 = prompt("Cuales son los primeros 5 digitos del numero de oro?");
              if (sol4=="11111"){
                alert("CORRECTO! ganas 100 en sabiduria");
                sabiduria=sabiduria+100;
                $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
                cuatro=true;
              }
              else {alert("INCORRECTO!! sigue investigando...")}
              }
              })
           .show()

       } else if(sabiduria<300){
           L.control.window(map,{title:'</br>Todavia no tienes la sabiduria necesaria, necesitas el Arbol de la Vida.',maxWidth:400,modal: true,position: 'topLeft'})
                   .content('')
                   .show()

       } else {
         L.control.window(map,{title:'</br>Ya posees la sabiduria de El Numero de Oro.',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('')
                 .show()
       }

        }})
       .show();
     });

   $('#cuatro').css('background', 'white');

   $('#cinco').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>Lampara Magica</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('Para contener el eter o quintaesencia debes comprar la Lampara Magica en el barrio donde la estrella de David es sagrada.<br>Si ya has comprendido donde ir a comprarla pulsa OK para resolver el enigma.<br><IMG SRC="images/lampara.gif">')
     .prompt({callback:function(){
       if (cinco==false && sabiduria==400){
         L.control.window(map,{title:'Enigma:',maxWidth:400,modal: true,position: 'topLeft'})
            .content('Que nombre recibe el barrio donde has comprado la Lampara Magica?<br>Donde encontrarlo:<br>Una plaza de artesanos ferrajeros con entrada a un gran palacio donde se hacen espectaculos...<br><br>Pulsa OK para resolver.')
            .prompt({callback:function(){
              var sol5 = prompt("Que nombre recibe el barrio donde has comprado la Lampara Magica?");
              if (sol5=="mellah"){
                alert("CORRECTO! ganas 100 en sabiduria");
                sabiduria=sabiduria+100;
                $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
                cinco=true;
              }
              else {alert("INCORRECTO!! sigue investigando...")}
              }
              })
           .show()

       } else if(sabiduria<400){
           L.control.window(map,{title:'</br>Todavia no tienes la sabiduria necesaria para comprar la Lampara Magica. Necesitas El Numero de Oro.',maxWidth:400,modal: true,position: 'topLeft'})
                   .content('')
                   .show()

       } else {
         L.control.window(map,{title:'</br>Ya posees la sabiduria para contener el Eter en la Lampara Magica.',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('')
                 .show()
       }

        }})
       .show();
     });


   $('#cinco').css('background', 'white');

   $('#seis').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>El Eter</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('Ademas de los cuatro elementos aire, tierra, fuego y agua, hay un quinto elemento que da sentido a todos los demas y que posee virtudes magicas para la geometria.<br>Si ya has comprendido el significado de el Eter pulsa OK para resolver el enigma.<br><IMG SRC="images/eter.jpg">')
     .prompt({callback:function(){
       if (seis==false && sabiduria==500){
         L.control.window(map,{title:'Enigma:',maxWidth:400,modal: true,position: 'topLeft'})
            .content('Cual es el solido pitagorico que representa a la quintaesencia?')
            .prompt({callback:function(){
              var sol6 = prompt("Respuesta:");
              if (sol6=="dodecaedro"){
                alert("CORRECTO! ganas 100 en sabiduria");
                sabiduria=sabiduria+100;
                $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
                seis=true;
              }
              else {alert("INCORRECTO!! sigue investigando...")}
              }
              })
           .show()

       } else if(sabiduria<500){
           L.control.window(map,{title:'</br>Todavia no tienes la sabiduria necesaria ni la Lampara Magica para responder el enigma.',maxWidth:400,modal: true,position: 'topLeft'})
                   .content('')
                   .show()

       } else {
         L.control.window(map,{title:'</br>Ya posees la sabiduria del Eter.',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('')
                 .show()
       }

        }})
       .show();
     });

   $('#seis').css('background', 'white');

   $('#siete').click(function(){
     var win =  L.control.window(map,{title:'<MARQUEE scrolldelay=180 direction=right>Khatam</MARQUEE>',maxWidth:400,modal: true,position: 'topLeft'})
     .content('Es una forma geometrica que permite la creacion de mosaicos maravillosos vistos en Marrakech.Esta pieza es la clave que te llevara al enigma final.<br>Si ya has comprendido el significado de el Khatam pulsa OK para resolver el enigma.<br><IMG SRC="images/khatam.gif">')
     .prompt({callback:function(){
       if (siete==false && sabiduria==600){
         L.control.window(map,{title:'Enigma:',maxWidth:400,modal: true,position: 'topLeft'})
            .content('Ahora que ya tienes la sabiduria suficiente para resolver el enigma final, dirigete a la Madrassa Ben Youssef.<br>Pero antes dime, en que siglo fue creada el Khatam?')
            .prompt({callback:function(){
              var sol7 = prompt("En que siglo fue creada el Khatam?");
              if (sol7=="7"){
                alert("BIEN HECHO!! Ahora que posees la sabiduria necesaria para descifrar la geometria sagrada, dirigete a la Madrassa Ben Youssef para el enigma final.<br>Ten cuidado en el camino, la medina está llena de sorpresas buenas y malas...");
                sabiduria=sabiduria+100;
                $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Sabiduria:..'"+sabiduria+"'...</MARQUEE>");
                siete=true;
              }
              else {alert("INCORRECTO!! sigue investigando...")}
              }
              })
           .show()

       } else if(sabiduria<600){
           L.control.window(map,{title:'</br>Todavia no tienes la sabiduria necesaria para responder el enigma, busca El Eter.',maxWidth:400,modal: true,position: 'topLeft'})
                   .content('')
                   .show()

       } else {
         L.control.window(map,{title:'</br>Ya posees la sabiduria del Khatam.<br>Dirigete a la Madrassa Ben Youssef.',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('')
                 .show()
       }

        }})
       .show();
     });

   $('#siete').css('background', 'white');

   $('#info').click(function(){
      var win =  L.control.window(map,{title:'Como Jugar:',maxWidth:400,modal: true,position: 'topLeft'})
      .content('Recoge los 7 objetos</br>Responde los 7 enigmas</br>Descubre la ciudad</br>Tienes que recoger los siete objetos ocultos por la ciudad de Marrakech yendo fisicamente a los lugares. Sigue las pistas.<br>Debes responder todos los enigmas para llegar al punto final de la aventura que te abrira las puertas del entendimiento de la geometria sagrada.')
      // .prompt({callback:function(){prompt()}})
      .show();
   });
   $('#info').css('background', 'white');

   $('#ocho').click(function(){
      var win =  L.control.window(map,{title:'</br>Programacion y Grafismo:<br>Nacho Trincado<br>',maxWidth:400,modal: true,position: 'topLeft'})
      .content('<br><br><br><br><br><br>Si quieres alegrar al creador de la aventura, puedes enviar un sms como recompensa por el buen momento que has pasado.')
      .prompt({callback:function(){prompt("Introduzca su numero de telefono para enviar un sms al productor")}})
      .show();
   });
   $('#ocho').css('background', 'white');

  function loadmap(){

   var map = L.map('map');
   L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {
    //  attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);


  //  L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
   // 	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>,<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   // 	subdomains: 'abcd',
   // 	minZoom: 1,
   // 	maxZoom: 16,
   // 	ext: 'png'
  // }).addTo(map);
  //  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  //    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  //    }).addTo(map);
  //  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{key}/{z}/{x}/{y}.png', {
  //        key: 'lrqdo.me2bng9n',
  //        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="http://mapbox.com">Mapbox</a>'
  //    }).addTo(map);

  //  L.tileLayer('https://{s}.tiles.mapbox.com/v3/rashauna.hb2aepgd/{z}/{x}/{y}.png', {
      //  attribution: 'Map data &copy; <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> <a href="http://http://leafletjs.com"> Leaflet </a> Tiles <a href="http://mapbox.com">Mapbox</a>',
      //  maxZoom: 18
  //  }).addTo(map);

   map.locate({setView:true, watch:true, zoom:1} );

   function onLocationFound(e) {
     var locationMarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
     var circle = L.circle([e.latlng.lat,e.latlng.lng], 40,{color:'red',fillOpacity: 0.5}).addTo(map);
    //      if(fistTime){
    //        map.locate({ setView: false} );
    //        fistTime=false;
    //      }
      //remove markers and circles that will be updated
      map.removeLayer(locationMarker);
      map.removeLayer(circle);

      updateMarkers(e);


   }

   function updateMarkers(e){
     //updates the current location marker
     locationMarker = L.marker(e.latlng).addTo(map)
     locationMarker.on('click',function(){
         var win =  L.control.window(map,{title:'Estado de la Aventura',maxWidth:400,modal: true,position: 'topLeft'})
                 .content('<IMG SRC="images/hombre.png"></br>Monedas:'+monedas+'Tiempo:'+tiempo+'Sabiduria:'+sabiduria+'<br>Tienes que buscar los objetos para ir aumentando tu sabiduria en Geometria Sagrada.</br>')
                 .prompt({callback:function(){
                   if (sabiduria==900){
                   L.control.window(map,{title:'Enigma Final:',maxWidth:400,modal: true,position: 'topLeft'})
                           .content('El ultimo de los enigmas consiste en adivinar la palabra de la forma de energia cosmica que emana de los lugares sagrados y que da sentido a la geometria sagrada<br><form id="frm1">Solucion:<input type="text" name="fname"><br><input type="button" onclick="myFunction()" value="Validar"></form><script>function myFunction() {    document.getElementById("frm1").submit();}</script>')
                           .show()
                 } else {
                    L.control.window(map,{title:'</br>No puedes responder al enigma hasta que consigas la suficiente sabiduría para resolverlo.',maxWidth:400,modal: true,position: 'topLeft'})
                            .content('')
                            .show()
                  }


                  //  prompt("Introduzca su numero de telefono para enviar un sms al productor")

                          }})
                 .show()

     });
    //  .bindPopup(modo);
     // circle = L.circle(e.latlng, radiusA,{color:'red',fillOpacity: 0.1}).addTo(map);
     tiempo=tiempo-1;

    //  $('#tiempo').css('background', 'white');
     $("#tiempo").html(tiempo);
     $("#monedas").html(monedas);
     $("#actions").html("");

     //adds circle that acts as the geofence that is centered around moveable marker
    //  barrera2 = L.circle([31.632174, -8.011236], radius2,{color:'blue',fillOpacity: 0}).addTo(map);
    //  hanout = L.circle([31.632949, -8.011587], radius3,{color:'blue',fillOpacity: 0}).addTo(map);
     kutubia = L.circle([31.624113, -7.993079], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     ciber1 = L.circle([31.626775, -7.996460], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     biblioteca = L.circle([31.622984, -7.996350], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     fuentebiblioteca = L.circle([31.623210, -7.994926], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     instituto1 = L.circle([31.624574, -7.990015], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     harti = L.circle([31.629453, -8.009974], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     fuenteharti = L.circle([31.631604, -8.008861], radius2,{color:'white',fillOpacity: 0}).addTo(map);
     ladronharti = L.circle([31.629953, -8.012000], radius3,{color:'white',fillOpacity: 0}).addTo(map);
    //  ladronteatro = L.circle([31.630181, -8.013622], radius2,{color:'white',fillOpacity: 0}).addTo(map);
     teatro = L.circle([31.629823, -8.015307], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     estaciontren = L.circle([31.630656, -8.017056], radius3,{color:'white',fillOpacity: 0}).addTo(map);
     // Gets bounds of "geofence" circle.  This is where the break down of the geofence happens. The bounds are a square around the circle.
     // This means a point could be inside the square and outside the circle and register as in the cicle.
    //  var barrera2Bounds = barrera2.getBounds();
    //  var hanoutBounds = hanout.getBounds();
     var kutubiaB = kutubia.getBounds();
     var ciber1B = ciber1.getBounds();
     var bibliotecaB = biblioteca.getBounds();
     var fuentebibliotecaB = fuentebiblioteca.getBounds();
     var instituto1B = instituto1.getBounds();
     var hartiB = harti.getBounds();
     var fuentehartiB = fuenteharti.getBounds();
     var ladronhartiB = ladronharti.getBounds();
    //  var ladronteatroB = ladronteatro.getBounds();
     var teatroB = teatro.getBounds();
     var estaciontrenB = estaciontren.getBounds();

     //if then that checks if location marker is inside the bounds of "geofence" circle
     if(estaciontrenB.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){
       L.control.window(map,{title:'Hola amigo, soy el oraculo de Gueliz. Cada vez que me visites te dare mas tiempo para completar tu aventura.',maxWidth:400,modal: true,position: 'topLeft'})
               .content('')
               .show()
       tiempo = 500;
       monedas = monedas + 250;
   } else if(ladronhartiB.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){
          if(flor==false){
          $('#actions').css('background', '#7eeaab');
          $("#actions").html("Busca al ermitaño dentro del Harti, el te dara la flor de la vida.");
        } else {
          $('#actions').css('background', '#7eeaab');
          $("#actions").html("Ah! la flor de la vida, el precio a pagar ha sido elevado pero te llevara hasta el enigma final");
          }

   } else if(hartiB.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){
           if(flor==false && monedas>149){

             L.control.window(map,{title:'Soy el ermitaño, aqui te entrego la flor de la vida, guarda el secreto pues hay espias que pueden acabar contigo.Son 150 monedas.',maxWidth:400,modal: true,position: 'topLeft'})
                     .content('')
                     .show()
           monedas = monedas-150;
           flor = true;
           llevo = true;
          //  modo = "..llevando la flor de la vida..";
           $('#uno').css('background', '#7eeaab');
           $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>..llevando la flor de la vida..");

         } else {

           $('#actions').css('background', '#7eeaab');
           $("#actions").html("la flor de la vida, es la clave que te llevara hasta el enigma final");

           }
   } else if(fuentehartiB.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){
           if(flor==false){

             L.control.window(map,{title:'Extranjero, cada vez que pases por mi fuente pagaras 20 monedas.',maxWidth:400,modal: true,position: 'topLeft'})
                     .content('')
                     .show()
           monedas = monedas - 20;
           $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>..sal rapido de la plaza..");

         } else {

           $('#actions').css('background', '#7eeaab');
           $("#actions").html("Un espia esta sentado en la fuente vigilandote. Date prisa.");
           $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>..espia siguiendote..");

           }
   } else if(ciber1B.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){
           if(flor==true && diario==true && arbol==false){

             L.control.window(map,{title:'Bienvenido al parque del futuro, la flor de la vida y la sucesion de Fibonacci engendran el Arbol de la Vida. Tomalo y sigue tu aventura.',maxWidth:400,modal: true,position: 'topLeft'})
                     .content('')
                     .show()
           $("#tres").css('background', '#7eeaab');
           monedas = monedas - 100;
           arbol = true;
           llevo = true;
           $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>..este bosque no es lo mas seguro, sal rapido..");

         } else {

           $('#actions').css('background', '#7eeaab');
           $("#actions").html("Este sitio no es muy seguro, hay ladrones de objetos.");
           $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>..ladrones vigilandote, vete..");

           }

   } else if(kutubiaB.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){

             L.control.window(map,{title:'La Koutoubia o zona de libreros:',maxWidth:400,modal: true,position: 'topLeft'})
                     .content('El minarete es como una aguja de acupuntura para la Naturaleza, hay un vortice de energia sanadora alrededor de ella, sientes la energia...?')
                     .show()
             tiempo = tiempo +100;


   } else if(teatroB.contains([locationMarker._latlng.lat,locationMarker._latlng.lng])){
          if(diario==false){

            L.control.window(map,{title:'Aqui tienes el Liber Abaci, estudialo en profundidad para resolver el enigma, buena suerte!',maxWidth:400,modal: true,position: 'topLeft'})
                    .content('')
                    .show()
          diario = true;
          llevo = true;
          $("#dos").css('background', '#7eeaab');
          monedas = monedas-100;
          modo = "Has conseguido el Liber Abaci";
          $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>...Liber Abaci encontrado, sigue la aventura...");

        } else {

          $('#actions').css('background', '#7eeaab');
          $("#actions").html("Ya tienes todo lo que puedo darte. Largate de aqui ya! YA!! (te golpea repetidamente)");
          tiempo=tiempo-50;
          }

   } else {
          if(llevo==false){


          // $('#actions').css('background', '#DE6060');
          // $("#actions").html("Busca aventuras y secretos en Marrakech, aprende la geometria sagrada");
          $("#eventos").html("<MARQUEE scrolldelay=100 direction=right>Busca tu próximo enigma</MARQUEE>");
          modo = "nada";
          // $('#uno').css('background', '#7eeaab');

        } else {
          if(llevo==true){
          $("#eventos").html("<MARQUEE scrolldelay=180 direction=right>..Cuida bien lo que llevas, la ciudad esta LLENA de PELIGROS, NO TE FIES!!..");

                 }
               }
          }


// fin de updateMarkers:
   }

   function onLocationError(e) {
       alert(e.message);
     }
     //calls onfound functions
   map.on('locationfound', onLocationFound);
    // map.on('locationerror', onLocationError)
// fin de loadmap():
 }

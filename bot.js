console.log('El bot está listo para bardear');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setActivity('Pokémon Go');
});

bot.on("guildMemberAdd", (member) => {
    setTimeout(() => { 
        member.guild.channels.find("name","yo-te-elijo").send("Hola " + member.user + ", bienvenido al grupo de 'GO QRO'.\nPuedes elegir tu color escribiendo alguno de los comandos sin espacios: \n`.valor` -> si eres de color rojo\n`.sabiduria` -> si eres de color azul \n`.instinto` -> si eres de color amarillo\n```Ejemplo: \n.valor```");
    }, 1000);   
});

bot.on('message', (message) => {
    
     setTimeout(() => { 
    
        if (message.content == '.hola'){
                const embed = new Discord.RichEmbed().setImage('https://goo.gl/zmLJ65');
                message.channel.send("!" + message.member.user + "a", {embed});
        }
        if (message.content == '.oak'){
               message.channel.sendMessage('https://cdn.discordapp.com/attachments/416329673631334429/420420381384638465/tumblr_lj4xh4rZOY1qduaebo1_500.jpg');
        }
         
        var silph = message.content.substr(0,8);
        
        try{
        
         if (('.tarjeta' == silph || '.Tarjeta' == silph) && message.channel.id == 419649054021255168){ 
            
           var palabra =  message.content.substr(9);
           var url = 'https://sil.ph/' + palabra +'.json';  
           var request = require('request');
            request(url, function (error, response, body) {    
            
              var check = body.substr(0,8);
                
              if(check != '{\"data\":'){
                 message.channel.send('Entrenador \"' + palabra + '\" no encontrado');
              }
              else{ 
                  try{
                  //var card_id = JSON.stringify(texto.data.card_id);
                  const texto = JSON.parse(body)
                  var username = JSON.stringify(texto.data.in_game_username).replace(/"/g,"");
                  var discord = JSON.stringify(texto.data.socials[0].username).replace(/"/g,"");
                  var level = JSON.stringify(texto.data.trainer_level);
                  var home_region = JSON.stringify(texto.data.home_region).replace(/"/g,"");
                  var pokedex = JSON.stringify(texto.data.pokedex_count).replace(/"/g,"");
                  var imagen_perfil = JSON.stringify(texto.data.avatar).replace(/"/g,"");
                  var badges = texto.data.badges.length;  
                  var checkins = texto.data.checkins.length;  
                  var raids = JSON.stringify(texto.data.raid_average).replace(/"/g,"");
                  var joined = JSON.stringify(texto.data.joined).replace(/"/g,"").split(" ", 1);
                  var nests = JSON.stringify(texto.data.nest_migrations).replace(/"/g,"");
                  var handshakes = JSON.stringify(texto.data.handshakes);
                  var team = JSON.stringify(texto.data.team).replace(/"/g,"");
                  if(team == 'Mystic') team = 'Sabiduría';
                  else if(team == 'Instinct') team = 'Instinto';             

                  console.log('error:', error); // Print the error if one occurred
                  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                  //console.log('body:', body); // Print the HTML for the Google homepage. 

                  const embed = new Discord.RichEmbed()
                    .setThumbnail(imagen_perfil)
                    .setTitle('Nombre usuario: ' + username)
                    .setDescription('Cuenta de Discord: ' + discord)
                    .addField('Ubicación: ', home_region)
                    .addField('Estadísticas en Juego', 'Nombre: ' + username + '\nEquipo: ' + team + '\nNivel: ' + level + '\nPokedex: ' + pokedex + '\nRaids: ' + raids, true)
                    .addField('Estadisticas SilphRoad', 'Fecha de Ingreso: ' + joined + '\nMedallas: ' + badges + '\nEventos: ' + checkins + '\nHandshakes: ' + handshakes + '\nNidos registrados: ' + nests , true);
                  message.channel.send({embed});
                  }
                  catch (e) {
                    console.error(e);
                  }
              }
            });            
          }
        
        } catch (e) {
            console.error(e);
        }
         
        var comando = message.content.substr(0,7);         
        if(comando == '.willow' && message.channel.id == 444637291227512842){
            var frase =  message.content.substr(8);
            message.member.guild.channels.find("name","anuncios").send(frase);
        }
         
        if (message.content == '.sasugo'){
               message.author.send('Felicidades ' + message.member.user +  ', el servidor de PokémonGO-Querétaro te felicita en especial los administradores. Eres una gran persona para esta comunidad y para la amistad de tantos años. Te mandamos un fuerte abrazo y esperamos que sigan pasando los años.');
        }
        if(message.channel.id == 415945665282048002){ //
            var palabra = message.content.substr(-40,40);
            if(palabra == 'https://www.apkmirror.com/apk/gotracker/'){
                message.delete()
            }
        }
        if(message.channel.id == 415945849605062656){ //incursiones
            var palabra = message.content.substr(-40,40);
            if(palabra == 'https://www.apkmirror.com/apk/gotracker/'){
                message.delete()
            }
        }
        if(message.channel.id == 421040186718420992){ //carrillo
            var palabra = message.content.substr(-40,40);
            if(palabra == 'https://www.apkmirror.com/apk/gotracker/'){
                message.delete()
            }
        }
    
    
    
        try {

            if(message.member.roles.some(r=>["Valor","Sabiduria","Instinto"].includes(r.name)) ) {
                //Pues no se me ocurrio nada mas
            } else {

                var reglamento = message.member.guild.channels.find('name','reglamento');

                if (message.content == '.valor' || message.content == '.Valor' || message.content == '. valor' || message.content == '. Valor'){
                        var role = message.member.guild.roles.find('name','Valor');    
                        message.member.addRole(role);
                        message.member.guild.channels.find("name","chat-general").send("!Bienvenido " + message.member.user + " al chat general!. Conoce otras personas que juegan Pokémon Go. Recuerda leer el " + reglamento + " para evitar sanciones.");                
                }        
                 if (message.content == '.instinto' || message.content == '. instinto' || message.content == '. Instinto' || message.content == '.Instinto'){
                        var role = message.member.guild.roles.find('name','Instinto');
                        message.member.addRole(role).catch(console.error);
                        message.member.guild.channels.find("name","chat-general").send("!Bienvenido " + message.member.user + " al chat general!. Conoce otras personas que juegan Pokémon Go. Recuerda leer el " + reglamento + " para evitar sanciones.");

                }
                if (message.content == '.sabiduria' || message.content == '.Sabiduria' || message.content == '. sabiduria' || message.content == '. Sabiduria' || message.content == '.sabiduría' || message.content == '. sabiduría' || message.content == '. Sabiduría'){
                        var role = message.member.guild.roles.find('name','Sabiduria');
                        message.member.addRole(role).catch(console.error);
                        message.member.guild.channels.find("name","chat-general").send("!Bienvenido " + message.member.user + " al chat general!. Conoce otras personas que juegan Pokémon Go. Recuerda leer el " + reglamento + " para evitar sanciones.");   
                }
                /*if (message.content == '.soySuicune'){
                        var role = message.member.guild.roles.find('name','Suicune');
                        message.member.addRole(role).catch(console.error);
                        message.member.guild.channels.find("name","3-colores-ho-oh").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera presencial. Recuerda leer el " + reglamento + " para evitar sanciones.");    
                        const embed = new Discord.RichEmbed().setImage('https://goo.gl/6XqcBy');
                        message.member.guild.channels.find("name","suicune").send("!" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.", {embed});
                    
                }
                if (message.content == '.soyRaikou'){
                        var role = message.member.guild.roles.find('name','Raikou');
                        message.member.addRole(role).catch(console.error);
                        message.member.guild.channels.find("name","3-colores-ho-oh").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera presencial. Recuerda leer el " + reglamento + " para evitar sanciones.");   
                        const embed = new Discord.RichEmbed().setImage('https://goo.gl/ADA4Px');
                        message.member.guild.channels.find("name","raikou").send("!" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.", {embed});
                    
                }
                if (message.content == '.soyEntei'){
                        var role = message.member.guild.roles.find('name','Entei');
                        message.member.addRole(role).catch(console.error);
                        message.member.guild.channels.find("name","3-colores-ho-oh").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera presencial. Recuerda leer el " + reglamento + " para evitar sanciones.");     
                        const embed = new Discord.RichEmbed().setImage('https://goo.gl/xSnLrx');
                        message.member.guild.channels.find("name","entei").send("!" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.", {embed});

                }*/
            }


                /*if(message.content == ".exParqueAra" && !message.member.roles.some(r=>["ex-Ara"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-parque-ara');
                    var role = message.member.guild.roles.find('name','ex-Ara');    
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exAlamedaNorte" && !message.member.roles.some(r=>["ex-AlamedaNte"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-alameda-norte');
                    var role = message.member.guild.roles.find('name','ex-AlamedaNte');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exAlfalfares" && !message.member.roles.some(r=>["ex-Alfalfares"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-alfalfares');
                    var role = message.member.guild.roles.find('name','ex-Alfalfares');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exAstaBandera" && !message.member.roles.some(r=>["ex-Asta"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-asta-bandera');
                    var role = message.member.guild.roles.find('name','ex-Asta');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exDamianCarmona" && !message.member.roles.some(r=>["ex-DamianC"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-Damian-Carmona');
                    var role = message.member.guild.roles.find('name','ex-DamianC');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exEuphoriaSymmetrica" && !message.member.roles.some(r=>["ex-Euphoria"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-euphoria-simmetryca');
                    var role = message.member.guild.roles.find('name','ex-Euphoria');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exFelipeCarrillo" && !message.member.roles.some(r=>["ex-Carrillo"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-felipe-carrillo');
                    var role = message.member.guild.roles.find('name','ex-Carrillo');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exFuenteAzul" && !message.member.roles.some(r=>["ex-FuenteAzul"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-fuente-azul');
                    var role = message.member.guild.roles.find('name','ex-FuenteAzul');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exFuenteBarco" && !message.member.roles.some(r=>["ex-FuenteBarco"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-fuente-del-barco');
                    var role = message.member.guild.roles.find('name','ex-FuenteBarco');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exMuralEspacial" && !message.member.roles.some(r=>["ex-MuralEsp"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-mural-espacial');
                    var role = message.member.guild.roles.find('name','ex-MuralEsp');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exPlaygroud" && !message.member.roles.some(r=>["ex-Playgroud"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-playgroud');
                    var role = message.member.guild.roles.find('name','ex-Playgroud');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exSantaMaría" && !message.member.roles.some(r=>["ex-SantaMaria"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-santa-maria');
                    var role = message.member.guild.roles.find('name','ex-SantaMaria');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }
                if(message.content == ".exSantaRosa" && !message.member.roles.some(r=>["ex-SantaRosa"].includes(r.name) )){
                    var grupo = message.member.guild.channels.find('name','ex-santa-rosa');
                    var role = message.member.guild.roles.find('name','ex-SantaRosa');
                    message.member.addRole(role);
                    message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
                }*/



        } catch (e) {
            console.error(e);
        }

    }, 500);   
});

bot.login(process.env.BOT_TOKEN);
 
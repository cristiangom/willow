console.log('El bot está listo para bardear');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setActivity('Pokémon Go');
});

bot.on("guildMemberAdd", (member) => {
    setTimeout(() => { 
        member.guild.channels.find("name","yo-te-elijo").send("Hola " + member.user + ", bienvenido al servidor de PokémonGO-Querétaro.\nAntes de empezar necesitas elegir a qué facción perteneces de acuerdo a tu forma de juego para ver los demás canales y así empezar tu aventura. Es importante que decidas bien para que puedas aprovechar al máximo el grupo.\nEscribe: \n`.soyArticuno` si eres del equipo __Sabiduría__ y juegas de forma __aérea__. \n`.soyZapdos` si eres del equipo __Instinto__ y juegas de forma __aérea__. \n`.soyMoltres` si eres del equipo __Valor__ y juegas de forma __aérea__. \n`.soySuicune` si eres del equipo __Sabiduría__ y juegas de forma __presencial__. \n`.soyRaikou` si eres del equipo __Instinto__ y juegas de forma __presencial__. \n`.soyEntei` si eres del equipo __Valor__ y juegas de forma __presencial__.");
    }, 1000);   
});

bot.on('message', (message) => {
    
    if (message.content == '.hola'){
            message.channel.sendMessage('Hola! :D');
    }
    if (message.content == 'muestrate'){       
            message.channel.sendMessage('https://gph.is/1UORtsw');           
    }
    if (message.content == '.oak'){
           message.channel.sendMessage('https://cdn.discordapp.com/attachments/416329673631334429/420420381384638465/tumblr_lj4xh4rZOY1qduaebo1_500.jpg');
    }
    
    
    try {
    
        if(message.member.roles.some(r=>["Articuno", "Zapdos","Moltres","Suicune","Raikou","Entei"].includes(r.name)) ) {
            //Pues no se me ocurrio nada mas
        } else {
            
             var reglamento = message.member.guild.channels.find('name','reglamento');
            
            if (message.content == '.soyArticuno'){
                    var role = message.member.guild.roles.find('name','Articuno');    
                    message.member.addRole(role);
                    message.member.guild.channels.find("name","3-colores-lugia").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera aérea. Recuerda leer el " + reglamento + " para evitar sanciones.");   message.member.guild.channels.find("name","articuno").send("https://cdn.discordapp.com/attachments/416329673631334429/420041376881836033/Team_Mystic2.png \n ¡" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.");
                
            }        
             if (message.content == '.soyZapdos'){
                    var role = message.member.guild.roles.find('name','Zapdos');
                    message.member.addRole(role).catch(console.error);
                    message.member.guild.channels.find("name","3-colores-lugia").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera aérea. Recuerda leer el " + reglamento + " para evitar sanciones.");   message.member.guild.channels.find("name","zapdos").send("https://cdn.discordapp.com/attachments/416329673631334429/420041305188466689/Team_Instinct2.png \n ¡" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.");                   
                    
            }
            if (message.content == '.soyMoltres'){
                    var role = message.member.guild.roles.find('name','Moltres');
                    message.member.addRole(role).catch(console.error);
                    message.member.guild.channels.find("name","3-colores-lugia").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera aérea. Recuerda leer el " + reglamento + " para evitar sanciones.");                 message.member.guild.channels.find("name","moltres").send("https://cdn.discordapp.com/attachments/416329673631334429/420041466019184640/Team_Valor2.png \n ¡" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo."); 
                
            }
            if (message.content == '.soySuicune'){
                    var role = message.member.guild.roles.find('name','Suicune');
                    message.member.addRole(role).catch(console.error);
                    message.member.guild.channels.find("name","3-colores-ho-oh").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera presencial. Recuerda leer el " + reglamento + " para evitar sanciones.");               message.member.guild.channels.find("name","suicune").send("https://cdn.discordapp.com/attachments/416329673631334429/420041433362333706/Team_Suicune2.png \n ¡" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo."); 
            }
            if (message.content == '.soyRaikou'){
                    var role = message.member.guild.roles.find('name','Raikou');
                    message.member.addRole(role).catch(console.error);
                    message.member.guild.channels.find("name","3-colores-ho-oh").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera presencial. Recuerda leer el " + reglamento + " para evitar sanciones.");   message.member.guild.channels.find("name","raikou").send("https://cdn.discordapp.com/attachments/416329673631334429/420041398486827010/Team_Raikou2.png \n ¡" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.");
                
            }
            if (message.content == '.soyEntei'){
                    var role = message.member.guild.roles.find('name','Entei');
                    message.member.addRole(role).catch(console.error);
                    message.member.guild.channels.find("name","3-colores-ho-oh").send("!Bienvenido " + message.member.user + " al chat general 3 colores!. Conoce otras personas que juegan de manera presencial. Recuerda leer el " + reglamento + " para evitar sanciones.");                   message.member.guild.channels.find("name","entei").send("https://cdn.discordapp.com/attachments/416329673631334429/420041235626065920/Team_Entei2.png \n ¡" + message.member.user + " pone los <:cebos:420281307621490688>!, saluda a los demás miembros de tu equipo.");
            }
        }
        
        
        if(message.content == ".exParqueAra" && !message.member.roles.some(r=>["ex-Ara"].includes(r.name) )){
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
            var grupo = message.member.guild.channels.find('name','ex-damian-carmona');
            var role = message.member.guild.roles.find('name','ex-DamianC');
            message.member.addRole(role);
            message.author.send("Felicidades por tu pase ex " + message.member.user + ", revisa el grupo de la incursión " + grupo);
        }
        if(message.content == ".exEuphoriaSymmetrica" && !message.member.roles.some(r=>["ex-Euphoria"].includes(r.name) )){
            var grupo = message.member.guild.channels.find('name','ex-euphoria-symmetrica');
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
        if(message.content == ".exSantaMaria" && !message.member.roles.some(r=>["ex-SantaMaria"].includes(r.name) )){
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
        }
        
 
    
    } catch (e) {
        console.error(e);
    }
   
    
});


bot.login(process.env.BOT_TOKEN);
 




client.on("voiceStateUpdate", async (oldState, newState) => {
  
  const publicsesegircikyapincalogtutulcakkanal = "909547766114558033"

 const mustkanal = "909544229552930826"
      let mustchannel = oldState.guild.channels.cache.get(mustkanal);
 
  if(newState.member.user.bot) return;
  if(oldState.member.user.bot) return;
  
  if ((oldState.channelID && !newState.channelID) || (oldState.channelID && newState.channelID && oldState.channelID === newState.channelID)) return;
  
  if(newState.channelID === "786562164567441418"){
  newState.guild.channels.create( `🏠| ${newState.member.nickname}`.replace("🏠| null","🏠| İsimsiz Kullanıcı"), 
      {
        type: "voice",
        id: newState.member.id,
        parent: mustkanal,
         permissionOverwrites: mustchannel.permissionOverwrites.clone().set(newState.member.id, {
                id: newState.member.id,
                allow: ["MANAGE_CHANNELS"]
            })
      } 
                                 
    ).then(kanal=> {    
  
  
   const embed = new Discord.MessageEmbed()
  .setAuthor(`${newState.member.nickname} (${newState.member.id})`)
  .setColor('RANDOM')
  .setThumbnail(newState.avatarURL)
  .setDescription(`<@${newState.member.id}>, Kullanıcıya özel kanal açıldı 👍`)

  
  client.channels.cache.get(publicsesegircikyapincalogtutulcakkanal).send(embed)

           newState.member.voice.setChannel(kanal.id)
    
   client.on("voiceStateUpdate", async (oldState, newState) => {
  
  if ((kanal.id && !oldState.channelID) || (kanal.id !== oldState.channelID)) return;
  
  
  if(oldState.guild.channels.cache.get(kanal.id).members.size <= 0){


  oldState.guild.channels.cache.get(kanal.id).delete()
     
  
  }
})
   
   
   
  
   })
  }
  
})


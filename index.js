import { Client, GatewayIntentBits , Routes , REST } from 'discord.js';
import { joinVoiceChannel , getVoiceConnection } from '@discordjs/voice';
import mmdrezabia from './command/mmdreza.js';
import noor from './command/noor.js';


let TOKEN = "MTE5NDkxMTA3OTE3Njg2Mzc1NA.GjoCPM.YUpabFqUYJgDsD7jYOTfiCoKip5Ff4bOkgNfi4"
let CLIENT_ID = "1194911079176863754";
let GUILD_ID = "964442218846892072";

const client = new Client(
    { 
        intents: [
         GatewayIntentBits.Guilds , 
         GatewayIntentBits.GuildMembers ,
         GatewayIntentBits.GuildMessages , 
         GatewayIntentBits.MessageContent
        ] 
    });


client.on('ready' , () => {console.log("MMDREZA ROSHAN SHOD")})

client.on('interactionCreate' , (interaction) => {

    if(interaction.commandName === "noor") {
      const voiceChannel = interaction.options.getChannel('channel')
      const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        interaction.reply("Noor Gereftam")

    }

    if (interaction.commandName === "mmderzabia") {
        if(interaction.isChatInputCommand()) {
            console.log("OOMAD")
            interaction.reply({content: "<@491644094360191009> mmdreza bia"})
        }
    }

})

async function main() {
    console.log(mmdrezabia)
    const commands = [mmdrezabia , noor];

    const rest = new REST({ version: '10' }).setToken(TOKEN);

    try {
      console.log('Started refreshing application (/) commands.');
    
      await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    
      client.login(TOKEN)
    } catch (error) {
      console.error(error);
    }

}

main();


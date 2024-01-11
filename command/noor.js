import { SlashCommandBuilder } from "@discordjs/builders";
import {ChannelType} from "discord.js"

const noor = new SlashCommandBuilder()
.setName('noor')
.setDescription('noor be che maenast?')
.addChannelOption((option) => option.setName('channel').setDescription("noor ro dar koja migirad?").setRequired(true).addChannelTypes(ChannelType.GuildVoice))

export default noor.toJSON() 
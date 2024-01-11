import { SlashCommandBuilder } from "@discordjs/builders";

const mmdrezabia = new SlashCommandBuilder()
.setName('mmderzabia')
.setDescription('mmderza ro seda bezan')
.addStringOption((option) => option.setName("tedad").setDescription("chand bar mmdreza biad?").setRequired(true).setChoices(
    {
        name: '5',
        value: '5'
    },
    {
        name: '10',
        value: '10',
    }
));


export default mmdrezabia.toJSON() 
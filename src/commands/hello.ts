import {CommandInteraction, Client, SlashCommandBuilder} from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Dit bonjour"),
    run: async (client: Client, interaction: CommandInteraction) => {

        await interaction.reply({
            ephemeral: false,
            content: "Hello there!"
        });
    }
};
import {CommandInteraction, Client, Interaction, Events} from "discord.js";
import {Commands} from "../Commands";

export default onInteractionCreate;

async function onInteractionCreate(client: Client): Promise<void> {
    client.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
}

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    // handle slash command here
    const slashCommand = Commands.find(c => c.data.name === interaction.commandName);
    if (!slashCommand) {
        await interaction.reply({ content: "An error has occurred" });
        return;
    }

    await slashCommand.run(client, interaction);
};
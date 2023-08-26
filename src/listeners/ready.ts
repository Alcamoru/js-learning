import { Client } from "discord.js";
import {Commands} from "../Commands";

export default onReady;


function onReady(client: Client): void {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        const commandData = Commands.map((command) => command.data.toJSON());
        await client.application.commands.set(commandData)

        console.log(`${client.user.username} is online`);
    });
}
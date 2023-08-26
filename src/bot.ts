import {Client} from "discord.js"
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import { token } from './config.json'

console.log("Le bot démarre...")

const client = new Client({intents: []})

ready(client)
interactionCreate(client).then(r => undefined)

client.login(token)


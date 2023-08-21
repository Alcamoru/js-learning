const fs = require("fs")

module.exports = async () => {
    fs.readdirSync("./Commandes").filter(f => f.endsWith(".js"));
}
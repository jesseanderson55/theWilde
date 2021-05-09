const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban someone."); //does the user have permission
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("My role does not have the ban permission"); //bot can not ban. 

    //Variables:
    let reasonForBan = args.slice(1).join(" ");
    const memberSelected = message.mentions.members.first();

    //Input Checking:
    if (!reasonForBan) reasonForBan = 'No reason given.';
    if(!args[0]) return message.channel.send(`Member to ban must be selected. \'-ban @user reason\'`)
    if (!memberSelected) return message.channel.send('The member doesnt exist on this server.');
    if(!memberSelected.bannable) return message.channel.send('I cannot ban that member.')
    //Executing:
  }
}
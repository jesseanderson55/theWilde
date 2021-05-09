const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Permission to use command not given.");

    //Variables:
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given";
    const kickEmbed = new Discord.MessageEmbed()
    .setTitle(`You were kicked from ${message.guild.name}`)
    .setDescription(`Reason: ${reason}`)
    .setColor("#2E4057")
    .setTimestamp()
    .setFooter(client.user.tag, client.user.displayAvatarURL());


    //Input Checking:
    if (!args[0]) return message.channel.send("Please state a user. \'-kick @user reason\'");
    if (!mentionedMember) return message.channel.send("Not a valid member.");
    if (!memberSelected.kickable) return message.channel.send('I cannot kick that member.');

    //Executing:

    // //kick @user reason 
    // eg. //kick @user dm ads

    try {
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log(err);
      console.log("Command to message member failed.");
    }

    try {
      await mentionedMember.kick(reason);
    } catch (err) {
      console.log(err);
      message.channel.send("Member kick failed.");
    }
  }
}
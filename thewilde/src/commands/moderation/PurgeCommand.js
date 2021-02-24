const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Permission not aquired.');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bot does not have permission to /'MANAGE_MESSAGES/'.");
    
    //Variables:
    const amountToDelete;

    //Input Checking:
    if (!args[0]) return message.channel.send("Select number of messages to purge. /'-purge number/'");
    amountToDelete = Number(args[0], 10);
    if (isNaN(amountToDelete)) return message.channel.send("Please use a valid number.");
    if (!Number.isInteger(amountToDelete)) return message.channel.send("Please use an integer.");
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('Please select a number between 2 and 100');

    //Executing:
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
      });
    try {
      await message.channel.bulkDelete(fetched)
        .then(messages => message.channel.send(`Deleted ${messages.size} messages!`));
    } catch (err) {
      console.log(err);
      message.channel.send('Messages 14 days old are not able to be deleted.');
    }
  }
}
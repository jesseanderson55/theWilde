// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const { MessageAttachment } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const role = member.guild.roles.cashe.get('798691831432216576');
    await member.roles.add(role.id).catch(err => console.Log(err));

  }
}
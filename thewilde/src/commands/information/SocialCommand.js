const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  run(client, message, args) {
    message.channel.send('social command works');
  }
}
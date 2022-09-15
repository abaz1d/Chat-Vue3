const Chat = require('./models/chat');
const User = require('./models/user');

Chat.find((err, result) => {
  if (err) throw err;

  this.messages = result;
});
/* abstract */ 
class MessageStore {
  saveMessage(message) {}
  findMessagesForUser(userID) {}
}

class InMemoryMessageStore extends MessageStore {
  constructor() {
    super();
    this.messages = [];
  }

  saveMessage(message) {
    try {
      Chat.create(message)
      this.messages.push(message);
      console.log('msg tersimpan')
    } catch (e) {
      console.log('gagal save msg', e)
    }
  }

  deleteMessage(id) {
    try {
      Chat.deleteOne({id: id}).exec();
      this.messages = this.messages.filter(item => {
        if(item.id != id) {
        return item  
        } 
      })
      console.log('msg terhapus')
    } catch (e) {
      console.log('gagal hapus msg', e)
    }
  } 

  findMessagesForUser(userID) {
    return this.messages.filter(
      ({ from, to }) => from === userID || to === userID
    );
  }
}

module.exports = {
  InMemoryMessageStore,
};

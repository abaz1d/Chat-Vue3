/* abstract */ class MessageStore {
  saveMessage(message) {}
  findMessagesForUser(userID) {}
}

class InMemoryMessageStore extends MessageStore {
  constructor() {
    super();
    this.messages = [];
  }

  saveMessage(message) {
    this.messages.push(message);
    console.log('savethis.messages',this.messages)
  }

  updMessage(id) {
  this.messages = this.messages.filter(item => {
    if(item.id != id) {
    return item  
    } else {
      console.log('errmesaage')
    }
  }) 
  console.log('hapus',this.messages)
  console.log('id',id)
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

import socket from "../socket";
import { defineStore } from 'pinia'

export const useChatStore = defineStore({
    id: 'chat',
    state: () => ({
        rawItems: [],
    }),
    getters: {
        items: (state) =>
            state.rawItems,
    },
    actions: {
        addChat( id, content, to ) {
            // axios
            socket.emit("private message", {
            id,
            content,
            to,
            });
            this.rawItems.push({
                id,
                content,
                fromSelf: true,
            });
            console.log('this.rawItems',this.rawItems)
        },

        removeChat(msgdelid, to, msgindx) {
            socket.emit("update message", {msgdelid, to, msgindx});
            this.rawItems = this.rawItems.filter((item, index) => {
                if(item.id != msgdelid) {
                    console.log('item',item)
                  return item
                } 
            })
            // this.rawItems = this.rawItems.filter(item => item.id === id)
        },

        updateItem(todo) {
            this.rawItems = this.rawItems.map(item => {
                if (item.id === todo.id) {
                    return todo
                }
                return item
            })
        }
    },
})
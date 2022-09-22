import { io } from "socket.io-client";

const URL = "http://54.169.229.212:3000/";
const socket = io(URL, { autoConnect: true });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;

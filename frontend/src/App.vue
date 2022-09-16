<template>
  <div id="app">
    <select-username
      v-if="!usernameAlreadySelected"
      @input="onUsernameSelection"
    />
    <chat v-else 
      @logOut="logOut"
    />
    <!-- <button class="btn-logout" @click="onLogout">LOG OUT</button> -->
  </div>
</template>

<script>
import SelectUsername from "./components/SelectUsername.vue";
import Chat from "./components/Chat.vue";
import socket from "./socket";

export default {
  name: "App",
  components: {
    Chat,
    SelectUsername,
  },
  data() {
    return {
      usernameAlreadySelected: false,
    };
  },
  methods: {
    onUsernameSelection(username) {
      console.log("username", username);
      this.usernameAlreadySelected = true;
      socket.auth = { username };
      socket.connect();
    },
    logOut() {
      //localStorage.removeItem("sessionID");
      //localStorage.removeItem("userID");
      socket.on("disconnect");
      this.usernameAlreadySelected = false;
      //window.location.href = "/";
    },
  },
  created() {
    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      this.usernameAlreadySelected = true;
      socket.auth = { sessionID };
      socket.connect();
    }

    socket.on("session", ({ sessionID, userID }) => {
      // attach the session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      socket.userID = userID;
    });

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        this.usernameAlreadySelected = false;
        console.log("ini error Login");
      }
    });
  },
  unmounted() {
    socket.off("connect_error");
    socket.off("disconnect");
  },
};
</script>

<style>
/* body {
  margin: 0;
}

@font-face {
  font-family: Lato;
  src: url("/fonts/Lato-Regular.ttf");
}

#app {
  font-family: Lato, Arial, sans-serif;
  font-size: 14px;
} */
</style>

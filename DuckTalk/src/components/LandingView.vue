<template>
  <div class="container bg-dark">
    <div class="row">
      <div class="position-relative" id="chat_background">
        <div class="card bg-secondary h-100" id="card_bg_secondary">
          <div class="card-header">
            <h4 class="text-light">Contacts</h4>
          </div>
          <div class="card-body p-0 m-0" style="width: 100%; height: 100%;">
            <ul class="list-group h-100">
              <li class="list-group-item">
                <div class="contact">
                  <div class="contact-details">
                    <h5 class="text-light">Contact 1</h5>
                    <p class="text-muted">Last message from Contact 1</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="contact">
                  <div class="contact-details">
                    <h5 class="text-light">Contact 2</h5>
                    <p class="text-muted">Last message from Contact 2</p>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="contact">
                  <div class="contact-details">
                    <h5 class="text-light">Contact 3</h5>
                    <p class="text-muted">Last message from Contact 3</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md align-text-bottom">
        <div class="card bg-secondary" id="chatbox">
          <div class="card-header">
            <h4 class="text-light">Chat with Contact 1</h4>
          </div>
          <div class="card-body">
            <ul class="chat">
              <li class="chat-message incoming">
                <div class="chat-message-content">
                  <p>Hello!</p>
                </div>
              </li>
              <li class="chat-message outgoing">
                <div class="chat-message-content">
                  <p>Hi, how are you?</p>
                </div>
              </li>
              <li class="chat-message incoming">
                <div class="chat-message-content">
                  <p>I'm good, thanks! How about you?</p>
                </div>
              </li>
            </ul>
            <form class="chat-form">
              <input type="text" class="form-control" v-model="newMessage">
              <button type="button" class="btn btn-success" @click="sendMessage">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
    message: 'Type your message...',
    messages: {
      user1: [] as { id: number; text: string }[],
      user2: [] as { id: number; text: string }[]
    },
    newMessage: ''
  };
  },
  methods: {

  async sendMessage() {
    var json_obj_1 = null;
    var json_obj_2 = null;
    try {
      const extra_option = {
        method: 'GET',
        //mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json'
        }
      }

      const usr_1 = await fetch('http://ableytner.ddns.net:2006/api/user/thetestuser1@mail.com',extra_option);
      const usr_2 = await fetch('http://ableytner.ddns.net:2006/api/user/thetestuser2@mail.com',extra_option);
      json_obj_1 = await usr_1.json();
      json_obj_2 = await usr_2.json();
      console.log(json_obj_1);
      console.log(json_obj_2);

    } catch (error) {
      console.error('Error occoured', error);
    }




    const extra_option_post = {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({data: {
        sender_id: json_obj_1["data"]["user_id"],
        receiver: {
          type: "user",
          user_id: json_obj_2["data"]["user_id"]
        },
        content: this.newMessage

      }})
      }
      const new_message = await fetch('http://ableytner.ddns.net:2006/api/message',extra_option_post);
      console.log(new_message.json())
  }
  }
};
</script>

<style>
#chat_background {
  background-color: grey;
  position: relative;
}


body {
  background-color: #1c1c1c;
  color: #fff;
}

.card-header {
  background-color: #1c1c1c;
  color: #00ff00;
}

.card .card-body {
  background-color: #2b2b2b;
  color: #fff;
  width: 100%;

}

.list-group-item {
  background-color: #2b2b2b;
  color: #fff;
}

.list-group-item:hover {
  background-color: #3d3d3d;
}

.chat {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chat-message {
  margin-bottom: 20px;
}

.chat-message-content {
  max-width: 80%;
  padding: 10px 20px;
  border-radius: 20px;
}

.incoming .chat-message-content {
  background-color: #2b2b2b;
  color: #fff;
  float: left;
}

.outgoing .chat-message-content {
  background-color: #00ff00;
  color: #000;
  float: right;
}

.chat-form {
  margin-top: 650px;
  display: flex;
}

.chat-form input[type="text"] {
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #2b2b2b;
  color: #fff;
}

.chat-form button {
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: #00ff00;
  color: #000;
  margin-left: 10px;
  cursor: pointer;
}

.chat-form button:hover {
  background-color: #009900;
}

#card_bg_secondary {
  margin-right: 50px;
}

.form-control {
  min-width: 400px;
}

#chatbox {
  margin-left: 0px;
}
</style>
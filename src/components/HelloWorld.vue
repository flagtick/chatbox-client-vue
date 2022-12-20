<template>
  <div class="chat">
   <div class="message-box">
      <div class="wp-block-search__inside-wrapper " style="width: 50%">
        <input type="search" id="wp-block-search__input-4" v-model="msg" class="wp-block-search__input wp-block-search__input" name="s" placeholder="" required="">
        <button type="submit" @click.prevent="addMessage" class="wp-block-search__button has-icon wp-element-button" aria-label="Search">
          <svg class="search-icon" viewBox="0 0 24 24" width="24" height="24">
              <path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
          </svg>
        </button>
      </div>
   </div>
  
</div>
</template>

<script>
window.axios = require('axios');
import SocketioService from '../services/socketio.service.js';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    async addMessage() {
      const response = await window.axios.post(`${process.env.VUE_APP_ROOT_ENDPOINT}/api/message/addMessage`,
        {
          message: this.msg,
          date_created: new Date().toISOString(),
        }
      );
      if (response.data.success) {
        console.log('Success');
        SocketioService.setupChannelClient('technical-issue');
      } else {
        console.log('Failure');
      }
    }
  }
}
</script>
<style scoped>
.wp-block-search__inside-wrapper {
  margin: auto;
}
.wp-block-search__inside-wrapper {
    display: flex;
    flex: auto;
    flex-wrap: nowrap;
    max-width: 100%;
}
#wp-block-search__input-4 {
  width: 100%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

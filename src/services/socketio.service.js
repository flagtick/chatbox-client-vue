import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() {}
  
    setupSocketConnection() {
      this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, { transports : ['websocket'] });
    }

    sendMessage(channel, message) {
      this.socket.emit(channel, message);
    }

    async setupChannelClient(channel) {
      let res = await new Promise((resolve) => {
        this.socket.on(channel, (data) => {
          resolve(data);
        });
      });
      console.log(res);
    }
}

export default new SocketioService();
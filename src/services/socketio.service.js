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

    setupChannelClient(channel) {
      this.socket.on(channel, (data) => {
        console.log(data);
      });
    }
}

export default new SocketioService();
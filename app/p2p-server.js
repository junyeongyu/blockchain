const Websocket = require('ws');

const P2P_PORT = process.evn.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    listen() {
        const server = new Websocket.Server({ port: P2P_PORT });
        server.on('connection', socket => this.connectSocket(socket));
        console.log(`Listening for peer-to-peer connection on: ${P2P_PORT}`)
    }

    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');
    }
}

// $ HTTP_PORT=3002 P2P_PORT=5003 PEERS=ws://localhost:5001, ws://localhost:5002
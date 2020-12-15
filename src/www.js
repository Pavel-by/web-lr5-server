import http from "http";
import app from './app';

let appSettings = {
    port: 3000,
    host: 'lr5.test'
};

let server = http.createServer(app);
server.listen(appSettings.port);

server.on('listening', () => {
    console.log(`Listening on ${appSettings.port}`);
});

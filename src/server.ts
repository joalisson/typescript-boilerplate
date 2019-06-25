import app from './app';

if (process.env.NODE_ENV !== 'test') {
  app.dataBaseConnection();
}

const APP_PORT = process.env.APP_PORT || 3000;

const server = app.app.listen(APP_PORT, () => { console.log(`Server running on PORT ${APP_PORT}`)});

server.setTimeout(5000);

export default server;
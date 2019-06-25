import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';

import Database from './database';
import UserRoutes from './modules/users/routes/users.routes';

dotenv.config();

class App {
  public app: express.Application;

  private morgan: morgan.Morgan;

  private bodyParser;

  private database: Database;

  private DB_URI: string;

  constructor() {
    this.DB_URI = `mongodb://mongodb:27017/meensina-users`
    this.app = express();
    this.middleware();
    this.routes();
    this.database = new Database(this.DB_URI);
  }

  async dataBaseConnection(mongoUri = this.DB_URI) {
    await this.database.createConnection(mongoUri);
  }

  async closeDataBaseConnection() {
    await this.database.closeConnection();
  }

  middleware() {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/users', UserRoutes);
    this.app.get('/', async (req, res) => {
      res.status(200).json({ message: 'Auth API OK'});
    });
  }
}

export default new App();

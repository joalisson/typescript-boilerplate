import * as mongoose from 'mongoose';

class Database {
  private DB_URI;

  private DB_CONNECTION;

  constructor(DB_URI: string) {
    this.DB_URI = DB_URI;
  }

  async createConnection(mongoUri: string = this.DB_URI) {
    await mongoose.connect(mongoUri, { useNewUrlParser: true });
    this.DB_CONNECTION = mongoose.connection;
  }

  async closeConnection() {
    this.DB_CONNECTION.close();
  }
}

export default Database;

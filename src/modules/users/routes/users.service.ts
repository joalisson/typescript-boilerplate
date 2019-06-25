import * as bcrypt from 'bcryptjs';
import MUser, { IUser } from '../interfaces/users.interface';
import UserModel from '../model/users.model';

class UserService {
  async create(userData: MUser): Promise<MUser> {
    userData.password = bcrypt.hashSync(userData.password, 10);
    const findUser = await UserModel.findOne({ email: userData.email });
    if (findUser) {
      return null;
    }
    return UserModel.create(userData);
  }

  async find(
    skip = 0,
    limit = 0,
    where: IUser = {},
    order: IUser = {},
  ): Promise<MUser[]> {
    return UserModel.find({ ...where }, null, {
      skip,
      limit,
    }).sort(order);
  }
}

export default new UserService();

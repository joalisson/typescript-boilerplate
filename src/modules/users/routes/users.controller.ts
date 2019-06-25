import * as httpStatus from 'http-status';
import { Request, Response } from 'express';

import usersService from './users.service';
import { IUser } from '../../users/interfaces/users.interface';

class UserController {
  async create(req: Request, res: Response) {
    const userData = req.body;
    const user = await usersService.create(userData);

    if (!user) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: 'BAD_REQUEST' });
    }

    return res
      .status(httpStatus.OK)
      .json({ data: { user }});
  }

  async find(req: Request, res: Response) {
    const skip: number = parseInt(req.query.skip, 10) || null;
    const limit: number = parseInt(req.query.limit, 10) || null;
    const where: IUser = (req.query.where && JSON.parse(req.query.where)) || null;
    const order: IUser = (req.query.order && JSON.parse(req.query.order)) || null;

    const users = await usersService.find(
      skip,
      limit,
      where,
      order,
    );

    return res
      .status(httpStatus.OK)
      .json({
        data: {
          users,
          count: users.length,
        }
      });
  }
}

export default new UserController();

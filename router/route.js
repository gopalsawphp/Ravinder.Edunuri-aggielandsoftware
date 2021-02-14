import express from 'express';
import * as UserController from '../controller/user.controller';

  const Router = express.Router();

  Router.route('/user').get(UserController.userGetData)
                       .post(UserController.userAdd);
  export default Router;
/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-28 09:58:19
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-28 11:21:52
 * @Description: In User Settings Edit
 */
import { Application } from 'egg';
import userside from "./router/userside";

export default (app: Application) => {
  userside(app);
};

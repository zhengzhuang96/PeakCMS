/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-28 11:19:57
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-28 11:23:13
 * @Description: In User Settings Edit
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.userside.home.index);
};

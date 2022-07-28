/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-28 09:58:19
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-28 10:44:26
 * @Description: In User Settings Edit
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {

  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}

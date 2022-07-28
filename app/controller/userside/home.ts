/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-28 11:22:54
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-28 11:47:51
 * @Description: In User Settings Edit
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {

  public async index() {
    console.log('userside/home/index');
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    return ctx.request.body = {
      name: 'zhengzhuang',
      age: 18,
    };
  }
}

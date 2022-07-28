// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUsersideHome from '../../../app/controller/userside/home';

declare module 'egg' {
  interface IController {
    userside: {
      home: ExportUsersideHome;
    }
  }
}

import { Request } from "express"
export interface IGetUserAuthInfoRequest extends Request {
  user_email: string // or any other type
}
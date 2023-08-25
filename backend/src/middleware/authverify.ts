import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { IGetUserAuthInfoRequest } from '../../custom';

export default function authverify(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string | string[] | undefined = req.headers['token'];
    const jwtSecret: Secret = process.env.JWT_SECRET as string;
    const decodedToken: any = jwt.verify(token as string, jwtSecret);
    const useremail: string = decodedToken.email;

    if (token) {
      (req as IGetUserAuthInfoRequest).user_email = useremail; // Cast req to IGetUserAuthInfoRequest
      next();
    } else {
      res.status(401).json({
        msg: "Unauthorized",
        success: false
      });
    }
  } catch (err) {
    res.status(401).json({
      msg: "Unauthorized",
      success: false
    });
  }
};


// controllers/UserController.ts

import { Request, Response } from 'express';

export class UserController {
    static getUser(req: Request, res: Response) {
        // 사용자 정보를 데이터베이스에서 가져와 응답 처리
        res.send('Get user details');
    }

    static updateUser(req: Request, res: Response) {
        // 사용자 정보 업데이트 로직을 처리하고 응답 처리
        res.send('Update user details');
    }

    static helloUser(req: Request, res: Response) {
        res.send("hello")
    }
}

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { UserService } from '../services/userService';

const createToken = (userId: number): string => {
    return jwt.sign({ userId }, 'secret_key');
}
 const register = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;
    try {
        const user = await UserService.getUserByEmail(email);
        if (user?.email) {
            return res.send({
                message: 'Bu email kullanılamaz !'
            });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User();
            newUser.name = name;
            newUser.email = email;
            newUser.password = hashedPassword;
            UserService.saveUser(newUser);
            res.send({
                message: 'successful !',
            })
        }
    } catch (err) {
        console.log(err);
    }
}

 const login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    try {
        const user = await UserService.getUserByEmail(email);
        if (user.email) {
            const comparedPassword = await bcrypt.compare(password, <string>user.password);
            if (comparedPassword) {
                const token: string = createToken(<number>user.id);
                const userId: number = <number>user.id;
                res.send({ token, userId })
            } else {
                return res.send({
                    message: 'password yanlış !'
                })
            }
        } else {
            return res.send({
                message: 'Bu email kayıtlı değildir !'
            })
        }
    } catch (err) {
        console.log(err);
    }
}
export default {login,register};
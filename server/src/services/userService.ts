import { Pool } from 'mysql2/promise';
import connection from '../db/db'
import { User } from '../models/user';

interface romanType {
    [key: number]: any;
}

export class UserService {

    static async getUserByEmail(email: string): Promise<User> {
        const user: romanType = await connection.query('SELECT * FROM users WHERE users.email=?', [email]);
        return user[0][0];
    }
    static saveUser(user: User):Promise<any> {
        return connection.query('INSERT INTO users(name,email,password) VALUES(?,?,?)', [user.name, user.email, user.password]);
    }
}
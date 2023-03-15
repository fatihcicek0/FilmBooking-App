const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cerateToken = (userId) => {
    return jwt.sign({ userId }, 'secret_key');
}

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const result = await User.getUserByEmail(email);
        const user = result[0][0];
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
            const response = await newUser.saveUser();
            res.send({
                message: 'successful !',
            })
        }
    } catch (err) {
        console.log(err);
    }

}

exports.login = async (req, res) => {

    const { email, password } = req.body;
    try {
        const result = await User.getUserByEmail(email);
        const user = result[0][0];
        if (user.email) {
            const comparedPassword = await bcrypt.compare(password, user.password);
            if (comparedPassword) {
                token = cerateToken(user.id);
                userId=user.id;
                res.send({
                    token,
                    userId
                })
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
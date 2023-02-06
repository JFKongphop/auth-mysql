const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const myDb = require('../database');

/*
    1. Check user is exist in database if true cannot register
    2. User is not register, hashing password and register to database
*/
exports.register = (req, res) => {
    const sql = 'SELECT * FROM users WHERE username = ?';

    myDb.query(sql, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length) return res.status(409).json('User already exists');

        const salt = bcrypt.genSaltSync(10);
        console.log('salt', salt);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const sql = 'INSERT INTO users (username, email, password, name) VALUE(?, ?, ?, ?)';

        const values = [
            req.body.username, 
            req.body.email,
            hashedPassword, 
            req.body.name
        ];

        myDb.query(sql, values, (err, data) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json('User has been created.');
        })
    })
}


/*
    1. Check user is exist in database if true can check your account
    2. User is already exist that check password is matching 
    3. Send user data except password and token to client side 
*/
exports.login = (req, res) => {
    const sql = 'SELECT * FROM users WHERE username = ?';

    myDb.query(sql, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) return res.status(404).json('Not found');

        const comparePassword = bcrypt.compareSync(
            req.body.password, data[0].password
        );

        if (!comparePassword) return res.status(400).json('Wrong username or password');

        const token = jwt.sign({ id: data[0].id }, 'auth-mysql');

        const { password, ...others} = data[0];

        return res.status(200).json({ user: others, token })
    })
}
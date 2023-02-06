// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const myDb = require('../database');

exports.register = (req, res) => {

    console.log(req.body.username);

    return res.send('hello');

    // // Check exist user to register
    // const sql = 'SELECT * FROM users WHERE username = ?';

    // myDb.query(sql, [req.body.username], (err, data) => {
    //     if (err) return res.status(500).json(err);

    //     // Exist user
    //     if (data.length) return res.status(409).json('User already exists');

    //     // Create new user then passing all the catching error 
    //     // Hash the password before query to database
    //     const salt = bcrypt.genSaltSync(10);
    //     console.log('salt', salt);
    //     const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    //     // Insert new user to database
    //     const sql = 'INSERT INTO users (username, email, password, name) VALUE(?, ?, ?, ?)';

    //     const values = [
    //         req.body.username, 
    //         req.body.email,
    //         hashedPassword, 
    //         req.body.name
    //     ];

    //     // Query new user to database
    //     myDb.query(sql, values, (err, data) => {
    //         if (err) return res.status(500).json(err);

    //         return res.status(200).json('User has been created.');
    //     })

    // })
}

exports.login = (req, res) => {
    
}


exports.logout = (req, res) => {
    
}


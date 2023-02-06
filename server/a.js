// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs')

// let t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNjZjcxM2FmY2M4NWE3ODliZTNhOTZhIiwiZW1haWwiOiJrb25ncGhvcGxlb0BnbWFpbC5jb20iLCJpYXQiOjE2NzQ1NDExNjIsImV4cCI6MTY3NDU0ODM2Mn0.d7CjLREfs4GXdIk7ZIaBIkjaqFbrb906qt6SQM3RIBI"

// const token = jwt.sign(
//     { user_id: '63cf713afcc85a789be3a96a', email: 'kongphopleo@gmail.com' }, 
//     'fewoifhewf', 
//     {expiresIn: "2h"}
// );


// const decoded = jwt.verify(token, 'fewoifhewf');

// bcrypt.hash("12345678", 10).then(console.log);

// // password

// bcrypt.compare('12345678', "$2a$10$jG3shT55mUFx8qbkaB9ideLMY4irfPrMmaDgnKlxJtbIMe2RdfsKm").then(console.log);


// // console.log(token);
// // console.log();
// console.log(decoded);
// console.log(new Date(decoded.iat).getDate());

// // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// // console.log(token);

// // var decoded = jwt.verify(token, 'shhhhh');
// // console.log(decoded.foo) // bar

const a = new Date(new Date().getTime() + (3600 * 1000));


console.log(new Date().getTime());
console.log(new Date());
console.log(Date.now());
console.log(a.toISOString());
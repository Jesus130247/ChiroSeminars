require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('./index.js');

const email = 'leo@leo';
const username = 'leo';
const plainTextPassword = 'leo';
const saltRounds = 10;
const seminarId = [];

const sql = `INSERT INTO
 users 
 (username, email, password_digest, seminar_id) 
 VALUES  
 ($1, $2, $3, $4)
 RETURNING
 *;`;

bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
        console.error('Error generating salt:', err);
        return;
    }

    bcrypt.hash(plainTextPassword, salt, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }

        db.query(sql, [email, username, hash, seminarId], (err, result) => {
            if (err) {
                console.error('Error inserting user into the database:', err);
                return;
            }

            console.log('New user added:', result.rows[0]);
        });
    });
});

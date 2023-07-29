const bcrypt = require('bcrypt');
const HASH_SALT = 10;

const password = "d0h!";
const confirmPassword = "d0h!";

const generatedSalt = bcrypt.genSaltSync(HASH_SALT);

const hashedPassword = bcrypt.hashSync(password, generatedSalt);

console.log("Generated Salt:", generatedSalt);
console.log("Plain password:", password);
console.log("Hashed password:", hashedPassword);

const isMatch = bcrypt.compareSync(confirmPassword, hashedPassword);
console.log(`Passwords match? ${hashedPassword} - ${confirmPassword}`, isMatch);

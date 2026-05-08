const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = '123456';
    const saltRounds = 10;

    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Hash gerado:', hash);

    const isValid = await bcrypt.compare(password, hash);
    console.log('Hash é válido:', isValid);
}

generateHash();
const bcrypt = require('bcryptjs');
const db = require('./db');
const Role = require('./role');

module.exports = createTestUser;

async function createTestUser() {
    // create test user if the db is empty : with different role
    if ((await db.User.countDocuments({})) === 0) {
        const user = new db.User({
            firstName: 'Test',
            lastName: 'User',
            username: 'test',
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.Admin
        });
        await user.save();

        const user2 = new db.User({
            firstName: 'Test2',
            lastName: 'User2',
            username: 'test2',
            passwordHash: bcrypt.hashSync('test2', 10),
            role: Role.User
        });
        await user2.save();
    }
}
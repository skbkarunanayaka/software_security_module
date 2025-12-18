// Mock User Model
// In a real application, this would interact with a database (e.g., MongoDB, PostgreSQL)

const users = []; // In-memory storage

class User {
    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.email = userData.email;
        this.password = userData.password;
    }

    static async findOne(query) {
        // Simulate database delay
        // await new Promise(resolve => setTimeout(resolve, 10));

        if (query.email) {
            return users.find(user => user.email === query.email);
        }
        return null;
    }

    static async create(userData) {
        // Simulate database delay
        // await new Promise(resolve => setTimeout(resolve, 10));

        const newUser = new User(userData);
        users.push(newUser);
        return newUser;
    }
}

module.exports = User;

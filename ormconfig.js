
module.exports = {
    "database": process.env.DATABASE,
    "type": "postgres",
    "host": process.env.HOST,
    "port": 5432,
    "username": process.env.USERNAME_BD,
    "password": process.env.PASSWORD,
    // "logging": false,
    "synchronize": true,
    ssl: {
        rejectUnauthorized: false
    },

    "migrations": [
        `${process.env.DIRECTORY}/database/migration/*.${process.env.TYPE_FILE}`,

    ],
    "entities": [
        `${process.env.DIRECTORY}/entity/*.${process.env.TYPE_FILE}`,

    ],

    "cli": {
        "entitiesDir": `${process.env.DIRECTORY}/entity`,
        "migrationsDir": `${process.env.DIRECTORY}/database/migration`,

    }
}
console.log(process.env.TYPE_FILE);

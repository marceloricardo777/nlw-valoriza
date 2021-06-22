
module.exports = {
    "type": "sqlite",
    "database": process.env.DATABASE,
    // "logging": false,
    // "synchronize": true,
    // ssl: {
    //     rejectUnauthorized: false
    // },

    "migrations": [
        `${process.env.DIRECTORY}/database/migration/*.${process.env.TYPE_FILE}`,

    ],

    "cli": {
        "entitiesDir": `${process.env.DIRECTORY}/entity`,
        "migrationsDir": `${process.env.DIRECTORY}/database/migration`,

    }
}
console.log(process.env.TYPE_FILE);

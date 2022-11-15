module.exports = {
    HOST: "db4free.net",
    USER: "bunescu",
    PASSWORD: "secretpassword",
    DB: "table_languages",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
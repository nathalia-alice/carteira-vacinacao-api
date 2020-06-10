// Update with your config settings.

module.exports = {

  development: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host : process.env.KNEX_DEV_HOST,
      database: process.env.KNEX_DEV_DATABASE,
      user:     process.env.KNEX_DEV_USER,
      password: process.env.KNEX_DEV_PASSWORD
    }
  },

  production: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host : process.env.KNEX_PRD_HOST,
      database: process.env.KNEX_PRD_DATABASE,
      user:     process.env.KNEX_PRD_USER,
      password: process.env.KNEX_PRD_PASSWORD
    }
  }

};

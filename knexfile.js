// Update with your config settings.

module.exports = {

  development: {
    client: process.env.KNEX_CLIENT,
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'carteira-vacinacao-online'
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

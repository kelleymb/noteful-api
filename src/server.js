const app = require('./app')
// const { PORT, DATABASE_URL } = require('./config')
const { PORT, DB_URL } = require('./config')
const knex = require('knex')

//deploy prep
const db = knex({
  client: 'pg',
  connection: DB_URL
});

app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
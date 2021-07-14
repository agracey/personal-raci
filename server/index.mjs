
// import { readFileSync } from 'fs'

// const postgresql_uri = readFileSync('/services/mypsql/uri', 'utf8')

import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './schema'
import root from './resolvers'


const app = express()

app.use(express.static('public'))

app.use('/graphql', expressGraphQL({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8080, () => {
  console.log(`personal-raci  listening`)
})





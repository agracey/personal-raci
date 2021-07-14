import {
  buildSchema 
} from 'graphql'



export default buildSchema(`


type Project {
  name: String!
  description: String!
}

type Task {
  name: String!
  description: String!
}


type Query {
  getTasks: [Task]
  getProjects: [Project]
}


type Mutation {
  addTask(name: String!, description: String): String
  editTask(id: ID!, name: String, description: String): String
  editProject: String

}
`)
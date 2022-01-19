import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"
import dbConnect from "../../../utils/dbConnect";
import { MongoClient } from "mongodb"
const bcrypt = require("bcryptjs")

dbConnect()
export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "johndoe@test.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const client = await MongoClient.connect("mongodb://localhost:27017/myexhibit", {
          useNewUrlParser: true, useUnifiedTopology: true
        })

        const users = await client.db().collection('users')
        const result = await users.findOne({email: credentials.username})
        console.log(result)
        const checkPassword = await bcrypt.compare(credentials.password, result.password)

        //  database look up
        if (credentials.username === result.email && checkPassword) {
          return {
            id: result._id,
            email: result.email,
            name: result.role
          }
        }

        // login failed
        return null;
      }
    })
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      // first time jwt callback is run,  user object is available
      if (user) {
        token.id = user.id
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id
      }

      return session;
    }
  },

  secret: "test",
  jwt: {
    secret: "test",
    encryption: true
  }
})
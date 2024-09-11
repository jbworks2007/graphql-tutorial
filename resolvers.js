import mongoose from "mongoose";
import sha256 from "sha256";
import "./models/user.js";

const User = mongoose.model("User");

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    users: () => User,
    finduser: (_, { email }) => users.find((user) => user.email === email),
  },
  Mutation: {
    register: async (_, { newuser }) => {
      let userone = await User.findOne({ email: newuser.email });
      if (userone) {
        throw new Error("User already exits");
      }
      userone = new User({
        ...newuser,
        email: newuser.email.trim().toLowerCase(),
        pass: sha256(newuser.pass),
      });
      return await userone.save();
    },
  },
};

export default resolvers;

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

function getUser() {
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "The name field cannot be left blank"]
    },
    email: {
      required: [true, "You must provide an email to continue"],
      unique: [true, "This email already exists"],
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"]
    },
    photo: {
      type: String,
      default: 'default.jpg'
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    password: {
      required: [true, "Sorry, the password field cannot be blank"],
      type: String,
      minlength: [8, "Your password be more than seven characters"],
      select: false
    }
  }, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

  userSchema.pre('save', async function (next) {
    // Run this func if password was modified
    if (!this.isModified('password')) return next();

    // Hash the Password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    next();
  });

  if (mongoose.models && mongoose.models.User) {
    return mongoose.models.User
  } else {
    return mongoose.model("User", userSchema)
  }
}

export const User = getUser()


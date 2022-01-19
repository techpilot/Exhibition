const mongoose = require('mongoose');
const slugify = require('slugify')

function getArt() {
  const artSchema = new mongoose.Schema({
    name: {
      unique: [true, "This name already exists in the database"],
      type: String,
      required: [true, "An art should have a name"],
      trim: true
    },

    artist: String,
    image: String,
    category: {
      type: String,
      default: "exhibition"
    },
    startDate: {
      type: Date,
      default: Date.now()
    },
    endDate: Date,
    location: String,
    private: {
      type: Boolean,
      default: false
    },
    slug: String,
    summary: {
      type: String,
      trim: true,
      required: [true, "Provide a summary for this art work"]
    },

    description: {
      type: String,
      trim: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

  artSchema.pre("save", (function (next) {
    this.slug = slugify(this.name, {lower: true});
    next();
  }))

  artSchema.virtual('reviews', {
    ref: "Review",
    foreignField: "art",
    localField: "_id"
  })

  if (mongoose.models && mongoose.models.Art) {
    return mongoose.models.Art
  } else {
    return mongoose.model("Art", artSchema)
  }
}

export const Doc = getArt()

// module.exports = getArt()
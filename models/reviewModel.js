const mongoose = require('mongoose')

function getReview  () {
  const reviewSchema = new mongoose.Schema({
    review: {
      type: String,
      trim: true,
      required: [true, "Sorry, this field is required"]
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    // Parent Referencing
    art: {
      type: mongoose.Schema.ObjectId,
      ref: 'Art',
      required: [true, "Fill up the field"]
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, "Fill up the field"]
    }
  }, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

  reviewSchema.index({ art: 1, user: 1 }, { unique: true });

  // Populating our art and user documents
  reviewSchema.pre(/^find/, function (next) {
    this.populate({
      path: 'art',
      select: 'name image'
    }).populate({
      path: 'user',
      select: 'name photo'
    })
    next();
  })

  if (mongoose.models && mongoose.models.Review) {
    return mongoose.models.Review
  } else {
    return mongoose.model("Review", reviewSchema)
  }
}

export const Review = getReview()
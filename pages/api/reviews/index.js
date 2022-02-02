import { Review } from "../../../models/reviewModel";
import dbConnect from "../../../utils/dbConnect";
import {User} from "../../../models/userModel";

dbConnect()
export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const reviews = await Review.find({});

        res.status(200).json({
          status: "success",
          users: reviews.length,
          data: reviews
        })
      } catch (error) {
        res.status(400).json({
          status: "failed",
          message: error
        })
      }
      break;

    case 'POST':
      try {
        const review = await Review.create(req.body);

        res.status(201).json({
          status: "success",
          data: review
        })
      } catch (error) {
        res.status(400).json({
          status: "failed",
          errors: error,
          message: "Cannot post review"
        })
      }
      break;

    default:
      res.status(400).json({status: "failed"})
      break;
  }
}
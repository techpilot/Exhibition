import { Review } from "../../../models/reviewModel"
import dbConnect from "../../../utils/dbConnect";

dbConnect()
export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const review = await Review.findById(id);

        if (!review) return res.status(400).json({ status: "failed", message: "review not found" })

        res.status(200).json({ status: "success", data: review });
      } catch (error) {
        res.status(400).json({ status: "failed", errors: error, message: "Cannot get review" })
      }
      break;

    case 'PUT':
      try {
        const review = await Review.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!review) return res.status(400).json({ status: "failed", message: "review not found" })

        res.status(200).json({ status: "success", data: review })
      } catch (error) {
        res.status(400).json({ status: "failed", message: error })
      }
      break;

    case 'DELETE':
      try {
        const deleteReview = await Review.findByIdAndDelete(id);

        if (!deleteReview) return res.status(400).json({ status: "failed", message: "review not found" });

        res.status(200).json({ status: "success" })
      } catch (error) {
        res.status(400).json({ status: "failed", message: error })
      }
      break;

    default:
      res.status(400).json({ status: "failed" })
      break;
  }
}
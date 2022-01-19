import { User } from "../../../models/userModel"
import dbConnect from "../../../utils/dbConnect";

dbConnect()
export default async(req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id);

        if (!user) return res.status(400).json({ status: "failed", message: "user not found" })

        res.status(200).json({ status: "success", data: user });
      } catch (error) {
        res.status(400).json({ status: "failed", message: "Cannot get user", errors: error });
      }
      break;

    case 'DELETE':
      try {
        const deleteUser = await User.findByIdAndDelete(id);

        if (!deleteUser) return res.status(400).json({ status: "failed", message: "user not found" })
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
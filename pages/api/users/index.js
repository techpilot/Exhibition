import { User } from "../../../models/userModel"
import dbConnect from "../../../utils/dbConnect";

dbConnect()
export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});

        res.status(200).json({
          status: "success",
          users: users.length,
          data: users
        })
      } catch (error) {
        res.status(400).json({
          status: "failed",
          message: "cannot get users"
        })
      }
      break;

    case 'POST':
      try {
        const user = await User.create(req.body);

        res.status(201).json({
          status: "success",
          data: user
        })
      } catch (error) {
        res.status(400).json({
          status: "failed",
          message: "cannot create users"
        })
      }
      break;

    default:
      res.status(400).json({ success: false })
      break;
  }
}
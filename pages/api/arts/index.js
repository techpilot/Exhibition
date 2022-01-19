import { Doc } from "../../../models/artModel"
import dbConnect from "../../../utils/dbConnect";

dbConnect()
export default async  (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const arts = await Doc.find({});

        res.status(200).json({
          status: "success",
          docs: arts.length,
          data: arts
        })
      } catch (error) {
        res.status(400).json({
          status: "failed",
          message: "there is an error to get"
        })
      }
      break;
    case 'POST':
      try {
        const art = await Doc.create(req.body)

        res.status(201).json({
          success: true,
          data: art
        })
      } catch (error) {
        res.status(400).json({
          status: "failed",
          message: error.message
        })
      }
      break;
    default:
      res.status(400).json({ success: false })
      break;
  }
}


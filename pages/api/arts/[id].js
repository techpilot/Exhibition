import { Doc } from "../../../models/artModel"
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
        const art = await Doc.findById(id)

        if (!art) {
          return res.status(400).json({ status: "failed", message: "document not found" })
        }

        res.status(200).json({ status: "success", data: art })
      } catch (error) {
        res.status(400).json({ status: "failed", message: error })
      }
      break

    case 'PUT':
      try {
        const art = await Doc.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        })

        if (!art) {
          return res.status(400).json({ status: "failed", message: "document not found" })
        }

        res.status(200).json({ status: "success", data: art })
      } catch (error) {
        res.status(400).json({ status: "failed", message: error })
      }
      break

    case 'DELETE':
      try {
        const deleteArt = await Doc.findByIdAndDelete(id);

        if (!deleteArt) {
          return res.status(400).json({ status: "failed", message: "document not found" })
        }

        res.status(200).json({ status: "success" })
      } catch (error) {
        res.status(400).json({ status: "failed", message: error })
      }
      break

    default:
      res.status(400).json({ status: "failed" })
      break
  }
}
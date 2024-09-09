import { comments } from "@component/data/comments";
import { v4 as uuid } from "uuid";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: uuid(),
      text: comment,
    };
    comments.push(newComment);
    res.status(200).json(newComment);
  }
}

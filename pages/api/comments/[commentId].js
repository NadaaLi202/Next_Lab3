import { comments } from "@component/data/comments";
export default function handler(req, res) {
  const { commentId } = req.query;
  const deletedComment = comments.find(
    (comment) => commentId === comment.id.toString()
  );
  //    console.log(x)
  const deletedIndex = comments.findIndex(
    (comment) => commentId === comment.id.toString()
  );
  comments.splice(deletedIndex, 1);
  res.status(200).json(deletedComment);
}

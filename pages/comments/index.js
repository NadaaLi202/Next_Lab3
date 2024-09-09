import React, { useState } from "react";

const Index = () => {
  const [comment, setCom] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const postComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCom("");
    fetchComments();
  };

  const handleDelete = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });

    const data = res.json();
    fetchComments();
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={fetchComments}>
        Get All Comments
      </button>

      {comments.map((c) => (
        <div key={c.id} className="mt-3">
          <span>
            {c.id}: {c.text}
          </span>
          <button
            className="btn btn-danger ms-2"
            onClick={() => handleDelete(c.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <hr className="my-4" />

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={comment}
          onChange={(e) => setCom(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={postComment}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Index;

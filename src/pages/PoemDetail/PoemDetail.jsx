import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PoemDetail = () => {
  const { title } = useParams();
  const location = useLocation();
  const poem = location.state?.poem;

  // Manage likes
  const [likes, setLikes] = useState(0);

  // Manage comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!poem) {
    return <p>Poem not found!</p>;
  }

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input
    }
  };

  return (
    <section style={{ backgroundColor: "#fefefe" }}>
      <Header />
      <div
        className="py-16 px-6 max-w-4xl mx-auto my-6"
        style={{ backgroundColor: "#fefefe" }}
      >
        {/* Use the title from useParams as a fallback */}
        <h1 className="text-5xl font-bold mb-6">{title || poem.title}</h1>
        <p className="italic mb-6 text-gray-600">by {poem.author}</p>

        {/* Render the single image associated with the poem */}
        {poem.image && (
          <div className="mb-6">
            <img
              src={poem.image}
              alt={`Illustration for ${poem.title}`}
              className="w-full h-[700px] mb-4 rounded"
            />
          </div>
        )}

        <pre className="whitespace-pre-wrap mb-6">{poem.fullText}</pre>

        {/* Like button */}
        <div className="mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLike}
          >
            👍 Like {likes > 0 && `(${likes})`}
          </button>
        </div>

        {/* Comments section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Comments</h4>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add your comment..."
              className="w-full border rounded p-2 mb-2"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit Comment
            </button>
          </form>
          {comments.length > 0 && (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="border p-3 rounded bg-gray-100">
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PoemDetail;

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { useState } from "react";

function Posts() {
  const [showComment, setShowComment] = useState(false);
  const [showReply, setShowReply] = useState(false);

  return (
    <>
      <Header />
      <div className="container">
        <div className="navigate">
          <span><a href="">MyForum - Forums</a> &gt;&gt; <a href="">random subforum</a> &gt;&gt; <a href="">random topic</a></span>
        </div>

        <div className="topic-container">
          <div className="head">
            <div className="authors">Author</div>
            <div className="content">Topic: random topic (Read 1325 Times)</div>
          </div>

          <div className="body">
            <div className="authors">
              <div className="username"><a href="">Username</a></div>
              <div>Role</div>
              <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
              <div>Posts: <u>45</u></div>
              <div>Points: <u>4586</u></div>
            </div>
            <div className="content">
              Just a random content of a random topic.
              <br />To see how it looks like.
              <br /><br />
              Nothing more and nothing less.
              <br />
              <hr />
              Regards username
              <br />
              <div className="comment">
                <button onClick={() => setShowComment(true)}>Comment</button>
              </div>
            </div>
          </div>
        </div>

        {showComment && (
          <div className="comment-area">
            <textarea placeholder="comment here ..."></textarea>
            <input type="submit" value="submit" />
          </div>
        )}

        {/* Comments Section */}
        <div className="comments-container">
          <div className="body">
            <div className="authors">
              <div className="username"><a href="">AnotherUser</a></div>
              <div>Role</div>
              <img src="https://cdn.pixabay.com/photo/2015/11/06/13/27/ninja-1027877_960_720.jpg" alt="" />
              <div>Posts: <u>455</u></div>
              <div>Points: <u>4586</u></div>
            </div>
            <div className="content">
              Just a comment of the above random topic.
              <br />To see how it looks like.
              <br /><br />
              Nothing more and nothing less.
              <br /><br />
              <div className="comment">
                <button onClick={() => setShowReply(true)}>Reply</button>
              </div>
            </div>
          </div>
        </div>

        {showReply && (
          <div className="comment-area">
            <textarea placeholder="reply here ..."></textarea>
            <input type="submit" value="submit" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Posts;

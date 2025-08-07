import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { useState } from "react";

function Forum() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="navigate">
          <span><a href="">MyForum - Forums</a> &gt;&gt; <a href="">random subforum</a></span>
        </div>

        <div className="posts-table">
          <div className="table-head">
            <div className="status">Status</div>
            <div className="subjects">Subjects</div>
            <div className="replies">Replies/Views</div>
            <div className="last-reply">Last Reply</div>
          </div>

          {[...Array(9)].map((_, index) => (
            <div className="table-row" key={index}>
              <div className="status">
                <i className={index % 5 === 0 ? "fa fa-fire" : index % 5 === 1 ? "fa fa-book" : index % 5 === 2 ? "fa fa-rocket" : index % 5 === 3 ? "fa fa-frown-o" : "fa fa-lock"}></i>
              </div>
              <div className="subjects">
                <a href="">Is learning Python on 2021 worth it?</a>
                <br />
                <span>Started by <b><a href="">User</a></b>.</span>
              </div>
              <div className="replies">
                2 replies <br /> 125 views
              </div>
              <div className="last-reply">
                Oct 12 2021
                <br />By <b><a href="">User</a></b>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          pages: <a href="">1</a><a href="">2</a><a href="">3</a>
        </div>

        <div className="note">
          <span><i className="fa fa-frown-o"></i>&nbsp; 0 Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i className="fa fa-share-square"></i></a><br />
          <span><i className="fa fa-book"></i>&nbsp; Low Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i className="fa fa-share-square"></i></a><br />
          <span><i className="fa fa-fire"></i>&nbsp; Popular Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i className="fa fa-share-square"></i></a><br />
          <span><i className="fa fa-rocket"></i>&nbsp; High Engagement Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i className="fa fa-share-square"></i></a><br />
          <span><i className="fa fa-lock"></i>&nbsp; Closed Topic</span>&nbsp;&nbsp;&nbsp;<a href=""><i className="fa fa-share-square"></i></a><br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Forum;

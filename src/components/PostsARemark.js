import React, { useState } from "react";
import axios from "axios";

const PostsARemark = (props) => {
  const { remarks, idPosts } = props;
  const [remark, setRemark] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `http://localhost:3000/api/users/1/posts/${idPosts}/remarks`,
      withCredentials: true,
      data: {
        remark: remark,
      },
    })
      .then((res) => {
        if (res.data.error) {
          console.log("errors");
        } else {
          window.location = "/homeposts";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={handleLogin} id="posts-form">
      <div className="box-posts box-posts-commentaire">
        <label className="color-purple" htmlFor="Commentaire">
          Commentaire
        </label>
        <br />
        <textarea
          type="text"
          name="commentaire"
          id="commentaire"
          onChange={(e) => setRemark(e.target.value)}
          value={remark}
        />
      </div>
      <br />
      <div className="box-posts box-remark-btn">
        <input className="btn-remark" type="submit" value="Publier" />
      </div>
    </form>
  );
};

export default PostsARemark;

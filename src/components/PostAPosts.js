import React, { useState } from "react";
import axios from "axios";

const PostAPosts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const postAPost = (e) => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/users/1/posts",
      withCredentials: true,
      data: {
        title: title,
        description: description,
        img: img,
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
    <form action="" onSubmit={postAPost} id="posts-form">
      <div className="box-posts box-posts-title">
        <label htmlFor="title">Titre</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <br />
      <div className="box-posts box-posts-description">
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <br />
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        onChange={(e) => setImg(e.target.value)}
      ></input>
      <div className="box-posts box-posts-btn">
        <input className="btn-posts" type="submit" value="Publier" />
      </div>
    </form>
  );
};

export default PostAPosts;

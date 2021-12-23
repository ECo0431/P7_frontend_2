import React, { useState } from "react";
import axios from "axios";
import Posts from "./Posts";

const EditPosts = (props) => {
  const { remarks, idPosts } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const putPost = (e) => {
    // e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:3000/api/users/1/posts/${idPosts}`,
      withCredentials: true,
      data: {
        title: title,
        description: description,
      },
    });
  };
  return (
    <div className="posts-form-edit none">
      <form action="" onSubmit={putPost}>
        <div className="box-posts box-posts-title">
          <label className="color-purple" htmlFor="title">
            Titre
          </label>
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
          <label className="color-purple" htmlFor="description">
            Description
          </label>
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
        <div className="box-posts box-posts-btn">
          <input className="btn-posts" type="submit" value="Modifier" />
        </div>
      </form>
    </div>
  );
};

export default EditPosts;

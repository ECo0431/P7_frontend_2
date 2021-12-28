import React, { useState } from "react";
import axios from "axios";

const EditPosts = (props) => {
  const { descriptionPosts, descPosts } = props;
  const { idP, idPosts } = props;
  const { idU, idUsers } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let idUserLocalS = [];
  idUserLocalS = JSON.parse(localStorage.getItem("id_users"));

  const putPost = (e) => {
    axios({
      method: "put",
      url: `http://localhost:3000/api/users/${idUserLocalS}/posts/${idPosts}`,
      withCredentials: true,
      data: {
        title: title,
        description: description,
      },
    });
  };

  return (
    <div>
      <div className="posts-form-edit">
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
    </div>
  );
};

export default EditPosts;

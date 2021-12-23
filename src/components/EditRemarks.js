import React, { useState } from "react";
import axios from "axios";

const EditRemarks = () => {
  axios({
    method: "put",
    url: `http://localhost:3000/api/users/1/posts/${idPosts}`,
    withCredentials: true,
    data: {
      remark: remark,
    },
  });
  return <div></div>;
};

export default EditRemarks;

import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePosts from "./HomePosts";
import DeleteRemarks from "../components/DeleteRemarks";

const Remarks = (props) => {
  const { remarks, idPosts } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${idPosts}/remarks`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      {data.map((remarks, index) => (
        <div className="remarks-box" key={`${remarks.id_remarks}-${index}`}>
          <div className="box-icon-remarks">
            <svg
              className="icon-remarks edit"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <g>
                    <path d="M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z" />
                  </g>
                  <g>
                    <path d="M18.37,3.29c-0.39-0.39-1.02-0.39-1.41,0l-1.83,1.83l3.75,3.75l1.83-1.83c0.39-0.39,0.39-1.02,0-1.41L18.37,3.29z" />
                  </g>
                </g>
              </g>
            </svg>
            <DeleteRemarks idPosts={idPosts} idRemarks={remarks.id_remarks} />
          </div>
          <p>{remarks.remark}</p>
        </div>
      ))}
    </div>
  );
};

export default Remarks;

import React from "react";
import { Avatar, Image } from "antd";

const CustomHeader = () => {
  return (
    <div className="custom-header">
      {/* <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 100 }}
          />
        }
      /> */}
      <h1>Aqilah Fatin</h1>
      <p className="fw-light">Frontend Developer Assessment</p>
    </div>
  );
};

export default CustomHeader;

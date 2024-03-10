import React from "react";
import { Button } from "antd";
function SkyBlueBtn({ postIcon, text, className, onClick, loading }) {
  return (
    <div className="">
      <Button
        loading={loading}
        className={`${className} primary-btn`}
        onClick={onClick}
      >
        {text}
        {postIcon}
      </Button>
    </div>
  );
}

export default SkyBlueBtn;

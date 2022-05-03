import React, { useEffect, useState } from "react";
import { color } from "@assets/colors/colors";

function ImageExpand({ url }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        style={{
          width: "200px",
          border: `1px ${color.teal} solid`,
        }}
        src={url}
        onClick={handleShowDialog}
        alt="no image"
      />
      {isOpen && (
        <dialog
          className="dialog"
          style={{
            position: "fixed",
            boxShadow: "0 8px 6px -6px black",
            left: "20%",
            top: "10%",
          }}
          open
          onClick={handleShowDialog}
        >
          <img
            style={{ width: "400px", border: `1px ${color.teal} solid` }}
            src={url}
            onClick={handleShowDialog}
            alt="no image"
          />
          <p>click to close</p>
        </dialog>
      )}
    </div>
  );
}

export default ImageExpand;

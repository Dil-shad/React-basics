import React from "react";
import headerCss from "./Header.module.css";

const Header = () => {
  return (
    <div className={headerCss["div-header"]}>
      <h1 className={headerCss.header}>HEADER component</h1>
      <p className="para">this is a paragraph</p>
    </div>
  );
};

export default Header;

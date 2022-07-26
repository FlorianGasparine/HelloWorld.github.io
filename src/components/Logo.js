import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="logo">
        {/* Les images importées depuis la balise IMG sont accessibles dans public */}
        <img src="./logo192.png" alt="Logo React" />
        <h3>Hello World</h3>
      </div>
    </div>
  );
};

export default Logo;

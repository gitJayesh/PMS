import React, { useContext } from "react";
import AuthContext from "../../Context/auth/authContext";

const GreetingBanner = () => {
  const authContext = useContext(AuthContext);
  const { userInfo } = authContext;

  return (
    <>
      <div className="greeting-banner place-center">
        <h2>
          Hello{" "}
          <span style={{ color: "blue" }}>{userInfo && userInfo.name}</span>,
          Welcome To The Dashboard!
        </h2>
      </div>
    </>
  );
};

export default GreetingBanner;

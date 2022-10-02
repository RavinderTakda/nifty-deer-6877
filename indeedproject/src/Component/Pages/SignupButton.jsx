import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SignupButton = () => {
  var navigate = useNavigate();
  const hangleSignin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Button onClick={hangleSignin}>Sign In</Button>
    </div>
  );
};

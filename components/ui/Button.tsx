import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  onClick: () => void;
}

const VariantStyles = {
  primary: "",
  secondary: "",
};

const Button = () => {
  return <div>Button</div>;
};

export default Button;

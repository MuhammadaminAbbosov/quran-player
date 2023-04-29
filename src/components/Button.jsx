import { styled, Button } from "@mui/material";
import React from "react";

const PrimaryButton = styled(Button)({
  background: "linear-gradient(270deg, #00A765 0%, #0EBA5C 103.74%)",
  padding: "10px 25px",
  color: "white",
  border: "1px solid transparent",
  borderRadius: "6px",
});

const SecondaryButton = styled(Button)({
  background: "transparent",
  padding: "10px 25px",
  border: "1px solid #494A5E",
  color: "#494A5E",
  borderRadius: "6px",
});

const MyButton = ({ type = "primary", children, style, onClick }) => {
  if (type === "primary")
    return (
      <PrimaryButton
        sx={{
          ...style,
          padding: { xs: "8px 15px", md: "10px 25px" },
          fontSize: { xs: "12px", md: "16px" },
        }}
        onClick={onClick}
      >
        {children}
      </PrimaryButton>
    );
  if (type === "secondary")
    return (
      <SecondaryButton
        sx={{
          ...style,
          padding: { xs: "8px 15px", md: "10px 25px" },
          fontSize: { xs: "12px", md: "16px" },
        }}
        onClick={onClick}
      >
        {children}
      </SecondaryButton>
    );
};

export default MyButton;

import { Link, ListItem, styled, Typography } from "@mui/material";
import React from "react";

const ItemList = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0
});

const CardImage = styled("img")({
  width: "350px",
  height: "250px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "15px"
});

const CardTitle = styled(Typography)({
  fontWeight: "600",
  color: "#1D1D37",
  fontSize: "20px",
});

const CardDesc = styled(Typography)({
  fontWeight: "400",
  color: "#A1A2A6",
  fontSize: "16px",
  margin:"15px 0"
});

const CardLink = styled(Link)({
  fontWeight: "600",
  color: "#1D1D37",
  fontSize: "16px",
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": {
    color: "#00A961",
    textDecoration: "underline"
  }
});

const BlogCard = ({ data }) => {
  return (
    <ItemList sx={{alignItems: {xs: "center", md: "flex-start"}}}>
      <CardImage sx={{width: {xs: "100%", md: "350px"}}} src={data.image} alt="" />
      <CardTitle>{data.title}</CardTitle>
      <CardDesc sx={{textAlign: {xs: "center", md: "left"}}}>{data.desc}</CardDesc>
      <CardLink>Read Blogs</CardLink>
    </ItemList>
  );
};

export default BlogCard;

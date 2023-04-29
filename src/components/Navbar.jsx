import React from "react";
import { AppBar, Box, Button, Link, Stack, styled } from "@mui/material";
import { Search, AccountCircleOutlined } from "@mui/icons-material";
import { ReactComponent as LogoIcon } from "../assets/icons/LogoBlack.svg";

const StyledToobar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  padding: "30px 60px"
});
const Links = styled("nav")({
  display: "flex",
  alignItems: "center",
  gap: 30,
});

const NavLink = styled(Link)({
    color: "#262439",
    textDecoration:"none",
    fontSize: 14
})

const WhiteBtn = styled(Button)({
    backgroundColor: "white",
    color: "#1E1E33",
    padding:0,
    borderRadius: 0,
    fontSize: 14
})

const Navbar = () => {
  return (
    <AppBar position="relative" sx={{boxShadow: "none"}}>
      <StyledToobar>
        <LogoIcon />
        <Links sx={{display: {xs: "none", md: "flex"}}}>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Values</NavLink>
          <NavLink href="#">Tafsir</NavLink>
          <NavLink href="#">Translation</NavLink>
          <NavLink href="#">Donate</NavLink>
        </Links>
        <Stack flexDirection="row">
            <WhiteBtn endIcon={<Search />} sx={{borderRight: "2px solid #C5C4C9",paddingRight: 2}}>Search</WhiteBtn>
            <WhiteBtn endIcon={<AccountCircleOutlined />} sx={{paddingLeft: 2}}>My Account</WhiteBtn>
        </Stack>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;

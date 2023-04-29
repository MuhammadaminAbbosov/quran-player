import React from "react";
import { Box, Link, styled, Typography } from "@mui/material";

// Images and Icons
import { ReactComponent as LogoIcon } from "../assets/icons/LogoWhite.svg";

const FooterBox = styled("footer")({
  display: "flex",
  justifyContent: "space-between",
  padding: "80px",
  backgroundColor: "#132544",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "25px",
});

const Icon = styled(Link)({
  width: "30px",
  height: "30px",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
  border: "1px solid #FFFFFE",
  color: "#FFFFFE",
  textDecoration: "none",
  cursor: "pointer",
});

const SocialLinksBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  width: "300px",
});

const LinksBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
});

const LinkHead = styled(Typography)({
  fontWeight: "600",
  color: "#FDFCFF",
  fontSize: "14px",
});

const LinkFooter = styled(Link)({
  textDecoration: "none",
  fontsize: "12px",
  color: "#929BAB",
});

const Footer = () => {
  return (
    <FooterBox sx={{ padding: { xs: "30px", md: "80px" } }}>
      <SocialLinksBox sx={{ gap: { xs: 2, md: 5 }, width: {xs: "150px", md: '300px'} }}>
        <LogoIcon />
        <Typography sx={{ color: "#929BAB", fontSize: { xs: 10, md: 18 } }}>
          The Quran is the central religious text of Islam.
        </Typography>
        <Icons sx={{ gap: { xs: "10px", md: "25px" } }}>
          <Icon
            sx={{
              fontSize: { xs: 10, md: "auto" },
              width: { xs: "20px", md: "30px" },
              height: { xs: "20px", md: "30px" },
            }}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Icon>
          <Icon
            sx={{
              backgroundColor: "#FFFFFE",
              color: "#132544",
              fontSize: { xs: 10, md: "auto" },
              width: { xs: "20px", md: "30px" },
              height: { xs: "20px", md: "30px" },
            }}
          >
            <i className="fa-brands fa-twitter"></i>
          </Icon>
          <Icon sx={{
            fontSize: { xs: 10, md: "auto" },
            width: { xs: "20px", md: "30px" },
            height: { xs: "20px", md: "30px" },
          }}>
            <i className="fa-brands fa-youtube"></i>
          </Icon>
        </Icons>
      </SocialLinksBox>
      <LinksBox sx={{ gap: { xs: "10px", md: "25px" } }}>
        <LinkHead sx={{ fontSize: { xs: 10, md: 14 } }}>About Quran</LinkHead>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>
          Our Members
        </LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>FAQ</LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>Blogs</LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>
          Privacy Policy
        </LinkFooter>
      </LinksBox>
      <LinksBox sx={{ gap: { xs: "10px", md: "25px" } }}>
        <LinkHead sx={{ fontSize: { xs: 10, md: 14 } }}>
          Important Links
        </LinkHead>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>Sunnah</LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>Salah</LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>
          Quran Reflect
        </LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>Home</LinkFooter>
      </LinksBox>
      <LinksBox sx={{ gap: { xs: "10px", md: "25px" } }}>
        <LinkHead sx={{ fontSize: { xs: 10, md: 14 } }}>Other Links</LinkHead>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>Sitemap</LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>
          Surah Yaseen
        </LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>
          Ayat Al-Kursi
        </LinkFooter>
        <LinkFooter sx={{ fontSize: { xs: 8, md: 12 } }}>
          Surah Al-Kahf
        </LinkFooter>
      </LinksBox>
    </FooterBox>
  );
};

export default Footer;

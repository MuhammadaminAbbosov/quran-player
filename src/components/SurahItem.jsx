import { Box, ListItem, styled, Typography } from "@mui/material";
import React from "react";

const SurahBox = styled(ListItem)({
  padding: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "20px",
  width: "100%",
  borderRadius: "6px",
  cursor: "pointer",
  background: "#2B3A56",
  position: "relative",
});

const SurahName = styled(Typography)({
  fontWeight: "600",
  fontSize: 16,
  color: "#fff",
});

const SurahTitle = styled(Typography)({
  fontSize: "12px",
  color: "#A6A7AB",
});

const NumberBox = styled(Box)({
  width: "35px",
  height: "35px",
  background: "#354460",
  display: "grid",
  placeItems: "center",
  borderRadius: "8px",
});

const NumberText = styled(Box)({
  fontWeight: "600",
  color: "#fff",
  fontSize: 12,
});

const Audio = styled("audio")({
  display: "none",
});

const SurahItem = ({ data, type = null, onClick }) => {
  if (type === "active") {
    return (
      <SurahBox
        sx={{
          background: "linear-gradient(270deg, #00A765 0%, #0EBA5C 103.74%)",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "8px", md: "15px" },
        }}
        onClick={onClick}
      >
        <NumberBox
          sx={{
            background: "#1ABC6D",
            width: { xs: "20px", md: "35px" },
            height: { xs: "20px", md: "35px" },
          }}
        >
          <NumberText sx={{ fontSize: { xs: 8, md: 12 } }}>
            {data.number}
          </NumberText>
        </NumberBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            color: "white",
          }}
        >
          <SurahName sx={{ color: "white", fontSize: { xs: 10, md: 16 } }}>
            {data.englishName}
          </SurahName>
          <SurahTitle sx={{ color: "white", fontSize: { xs: 8, md: 12 } }}>
            {data.englishNameTranslation}
          </SurahTitle>
          <Audio
            src={`https://server8.mp3quran.net/afs/${("00" + data.number).slice(
              -3
            )}.mp3`}
            id={"surah-" + ("00" + data.number).slice(-3)}
          />
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            cursor: "pointer",
            color: "white",
            position: { xs: "absolute", md: "relative" },
            right: "10px",
            top: "10px",
          }}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </Box>
      </SurahBox>
    );
  }
  return (
    <SurahBox
      onClick={onClick}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "8px", md: "15px" },
      }}
    >
      <NumberBox
        sx={{
          width: { xs: "20px", md: "35px" },
          height: { xs: "20px", md: "35px" },
        }}
      >
        <NumberText sx={{ fontSize: { xs: 8, md: 12 } }}>
          {data.number}
        </NumberText>
      </NumberBox>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <SurahName sx={{ fontSize: { xs: 10, md: 16 } }}>
          {data.englishName}
        </SurahName>
        <SurahTitle sx={{ fontSize: { xs: 8, md: 12 } }}>
          {data.englishNameTranslation}
        </SurahTitle>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          cursor: "pointer",
          color: "white",
          position: { xs: "absolute", md: "relative" },
          right: "10px",
          top: "10px",
        }}
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </Box>
    </SurahBox>
  );
};

export default SurahItem;

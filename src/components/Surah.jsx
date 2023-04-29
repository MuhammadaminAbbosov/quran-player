import { Box, ListItem, styled, Typography } from "@mui/material";
import React from "react";

const SurahBox = styled(ListItem)({
  padding: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "20px",
  width: "280px",
  borderRadius: "6px",
  border: "1px solid #494A5E",
  cursor: "pointer",
});

const SurahName = styled(Typography)({
  fontWeight: "600",
  fontSize: "20px",
  color: "#302E47",
});

const SurahTitle = styled(Typography)({
  fontSize: "14px",
  color: "#A6A7AB",
});

const Surah = ({ data, type = null, onClick }) => {
  if (type === "active") {
    return (
      <SurahBox
        sx={{
          background: "linear-gradient(270deg, #00A765 0%, #0EBA5C 103.74%)",
          borderColor: "#00A368",
          width: { xs: "100%", md: "280px" },
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
            background: "#1ABC6D",
            display: "grid",
            placeItems: "center",
            borderRadius: "8px",
          }}
        >
          <Typography sx={{ fontWeight: "600", color: "white" }}>
            {data.number}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            color: "white",
          }}
        >
          <SurahName sx={{ color: "white" }}>{data.englishName}</SurahName>
          <SurahTitle sx={{ color: "white" }}>
            {data.englishNameTranslation}
          </SurahTitle>
          <SurahTitle sx={{ color: "white" }}>
            Verse {data.numberOfAyahs}
          </SurahTitle>
        </Box>
        <Box sx={{ marginLeft: "auto", cursor: "pointer", color: "white" }}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </Box>
      </SurahBox>
    );
  }
  return (
    <SurahBox onClick={onClick} sx={{ width: { xs: "100%", md: "280px" } }}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          background: "#E8E7ED",
          display: "grid",
          placeItems: "center",
          borderRadius: "8px",
        }}
      >
        <Typography sx={{ fontWeight: "600", color: "#302E47" }}>
          {data.number}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <SurahName>{data.englishName}</SurahName>
        <SurahTitle>{data.englishNameTranslation}</SurahTitle>
        <SurahTitle>Verse {data.numberOfAyahs}</SurahTitle>
      </Box>
      <Box sx={{ marginLeft: "auto", cursor: "pointer" }}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </Box>
    </SurahBox>
  );
};

export default Surah;

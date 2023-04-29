import React, { useEffect, useState } from "react";
import {
  Box,
  InputBase,
  List,
  Slider,
  styled,
  Typography,
} from "@mui/material";

// images and icons
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import QuranPhoto from "../assets/images/Quran.png";
import PhonesImg from "../assets/images/Phones.jpeg";
import MyButton from "./Button";
import axios from "axios";
import Surah from "./Surah";
import SurahItem from "./SurahItem";
import BlogCard from "./BlogCard";

const FirstSection = styled("section")({
  padding: "50px 100px",
  backgroundColor: "#F4F9FC",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "100px",
  position: "relative",
});

const SectionBackImg = styled("img")({
  position: "absolute",
  right: 0,
  bottom: 0,
  height: "100%",
  zIndex: 0,
});

const SectionImg = styled("img")({
  width: 400,
  objectFit: "contain",
  position: "relative",
  zIndex: 3,
});

const BoxFlex = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  width: "50%",
  position: "relative",
  zIndex: 3,
});

const SecondSection = styled("section")({
  padding: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const SectionTitle = styled(Typography)({
  fontWeight: "600",
  fontSize: "36px",
});

const SectionDescription = styled(Typography)({
  color: "#8C9099",
  fontSize: 20,
});

const SurahSection = styled("section")({
  padding: "0 60px 120px",
});
const SurahTopBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Checkbox = styled(Box)({
  padding: "5px",
  borderRadius: "3px",
  border: "1px solid #494A5E",
  display: "inline-block",
});

const MyInput = styled(Box)({
  padding: "5px",
  borderRadius: "3px",
  border: "1px solid #494A5E",
});

const SurahList = styled(List)({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "65px",
  justifyContent: "flex-start",
  padding: "50px 0",
});

const ListenSection = styled("section")({
  padding: "80px 60px",
  background: "#132544",
});

const PlayerBox = styled(Box)({
  display: "flex",
  gap: "30px",
  height: "500px",
  margin: "40px 0",
});

const AyahBox = styled(Box)({
  flex: 5,
  background: "#1E314D",
  borderRadius: "10px",
  padding: "15px",
  position: "relative",
});

const SurahBox = styled(List)({
  flex: 2,
  background: "#1E314D",
  overflowY: "scroll",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  borderRadius: "10px",
  scrollMarginRight: "20px",

  "&::-webkit-scrollbar": {
    width: "5px",
    background: "#374A65",
    margim: "0 10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#98AFBE",
    borderRadius: "5px",
    height: "100px",
  },
});

const AyahList = styled(List)({
  height: "calc(100% - 90px)",
  overflowY: "scroll",
  paddingRight: "20px",
  "&::-webkit-scrollbar": {
    width: "5px",
    background: "#374A65",
    margim: "0 10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#98AFBE",
    borderRadius: "5px",
    height: "100px",
  },
});

const SettingsBox = styled(Box)({
  width: "calc(100%  - 70px)",
  position: "absolute",
  background: "#192B48",
  borderRadius: "10px",
  bottom: 15,
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "10px",
});

const PlayIcons = styled(Box)({
  color: "white",
  cursor: "pointer",
  display: "inline",
  "&:hover": {
    opacity: 0.8,
  },
});

const IconBtn = styled(Box)({
  display: "inline-block",
  background: "#243752",
  borderRadius: "5px",
  padding: "5px 15px",
});

const MobileAppSection = styled("section")({
  padding: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const MobileAppImg = styled("img")({
  width: "600px",
});

const BlogsSection = styled("section")({
  padding: "60px",
});

const MainBox = () => {
  const [type, setType] = useState("surah");
  const [surah, setSurah] = useState([]);
  const [selected, setSelected] = useState(1);
  const [surahSelected, setSurahSelected] = useState(1);
  const [all, setAll] = useState(false);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedAyah, setSelectedAyah] = useState(1);

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(100);
  const blogs = [
    {
      id: 1,
      title: "Learn Arabic Capitals",
      desc: "The Quran is the central religious text of Islam. Muslims believe the Qur'an is the book if divine guidance and direction for mankind.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdoJHIWcTgkURFBu9SY8S0nY9BwtXi7okiFA&usqp=CAU",
    },
    {
      id: 2,
      title: "Recitation Quran",
      desc: "The Quran is the central religious text of Islam. Muslims believe the Qur'an is the book if divine guidance and direction for mankind.",
      image:
        "https://www.learnreligions.com/thmb/tMlhlBPZcqpU8V1zN6s79JVFE78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Muslim-prayer-56a000bb3df78cafda9f8e0f.jpg",
    },
    {
      id: 3,
      desc: "The Quran is the central religious text of Islam. Muslims believe the Qur'an is the book if divine guidance and direction for mankind.",
      title: "How To Train Your Child for Pray",
      image: "https://thumbs.dreamstime.com/b/reading-quran-28562842.jpg",
    },
  ];
  useEffect(() => {
    axios
      .get("http://api.alquran.cloud/v1/surah")
      .then((res) => setSurah(res.data.data))
      .catch((err) => {
        console.log(console.error(err));
      })
      .finally(() => {});
  }, []);

  const fakeArray = (n) => {
    let fakeData = [];
    for (let i = 0; i < n; i++) {
      fakeData.push(i);
    }
    return fakeData;
  };

  const togglePlay = () => {
    const audioPlayBtn = document.getElementById(
      "surah-" + ("00" + surahSelected).slice(-3)
    );
    if (isPlaying) {
      audioPlayBtn.pause();
    } else {
      audioPlayBtn.play();
    }
    setIsPlaying(!isPlaying);
  };

  function downloadAudio(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status === 200) {
        const audioBlob = new Blob([this.response], { type: "audio/mpeg" });
        const downloadLink = URL.createObjectURL(audioBlob);
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = surah[surahSelected-1].englishName + ".mp3";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadLink);
      }
    };
    xhr.send();
  }

  const changeVloume = () => {
    const audioPlayBtn = document.getElementById(
      "surah-" + ("00" + surahSelected).slice(-3)
    );
    audioPlayBtn.volume = sound / 100;
  }

  return (
    <Box>
      <FirstSection sx={{ padding: { xs: "40px", md: "50px 100px" } }}>
        <BoxFlex sx={{ width: { xs: "100%", md: "50%" } }}>
          <SectionTitle
            sx={{
              fontSize: { xs: "24px", sm: "36px", md: "64px" },
              textAlign: { xs: "center", md: "left" },
            }}
            variant="h1"
          >
            Read Quran Everyday. Add On Your Daily Rountine.
          </SectionTitle>
          <SectionDescription
            sx={{
              width: { xs: "100%", md: "80%" },
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: 12, sm: 16, md: 20 },
            }}
            variant="p"
          >
            The Quran is the central religious text of Islam. Muslims believe
            the Qur'an is the book if divine guidance and direction for mankind.{" "}
          </SectionDescription>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "25px",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <MyButton>Read Quran</MyButton>
            <MyButton type="secondary">Quran Audio</MyButton>
          </Box>
        </BoxFlex>
        <SectionImg
          sx={{
            display: { xs: "none", md: "inline" },
          }}
          src={QuranPhoto}
          alt=""
        />
        <SectionBackImg
          sx={{
            display: { xs: "none", md: "inline" },
          }}
          src="https://toppng.com/uploads/thumbnail/vector-white-islamic-mosque-masjid-shape-shadow-11642665601olvckbapne.png"
          alt=""
        />
      </FirstSection>
      <SecondSection
        sx={{
          padding: { xs: "40px", md: "100px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "250px", md: "400px" },
            height: { xs: "250px", md: "400px" },
            borderRadius: "50%",
            background: "linear-gradient(270deg, #00A765 0%, #0EBA5C 103.74%)",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/950/257/original/person-holding-a-holy-quran-png.png"
            alt="Quran"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </Box>
        <BoxFlex sx={{ width: { xs: "100%", md: "50%" } }}>
          <SectionTitle
            sx={{
              fontSize: { xs: "24px", md: "36px" },
              margin: { xs: "auto", md: "0" },
            }}
          >
            About Quran.co
          </SectionTitle>
          <SectionDescription
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: 12, sm: 16, md: 20 },
              width: "100%",
            }}
          >
            The Noble Quran is the central religious text of Islam. Muslims
            believe the Qur'an is the book of Divine guidance and direction for
            mankind, and consider the original Arabic text the final revelation
            of Allah.
            <br />
            <br />
            All translations of the original Arabic text are thus interpretat
            ions of the original meanings and should be embraced as such.
          </SectionDescription>
          <MyButton
            style={{ margin: { xs: "auto", md: "0" } }}
            type="secondary"
          >
            Read Our Story
          </MyButton>
        </BoxFlex>
      </SecondSection>
      <SurahSection sx={{ padding: { xs: "0 40px 60px", md: "0 60px 120px" } }}>
        <SectionTitle
          sx={{
            textAlign: "center",
            width: { xs: "100%", md: "40%" },
            m: { xs: "0 auto 30px", md: "0 auto 50px" },
            fontSize: { xs: "24px", md: "36px" },
          }}
        >
          Read Holy Quran With Translation & Tafsir of Every Ayat
        </SectionTitle>
        <SurahTopBox
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: 0 },
          }}
        >
          <Checkbox sx={{ width: { xs: "calc(100% - 10px)", md: "auto" } }}>
            <MyButton
              type={type === "surah" ? "primary" : "secondary"}
              style={{ border: "none", width: { xs: "50%", md: "auto" } }}
              onClick={() => {
                setType("surah");
              }}
            >
              Show Surah
            </MyButton>
            <MyButton
              type={type === "juz" ? "primary" : "secondary"}
              style={{ border: "none", width: { xs: "50%", md: "auto" } }}
              onClick={() => {
                setType("juz");
              }}
            >
              Show Juz
            </MyButton>
          </Checkbox>
          <MyInput
            sx={{
              display: { xs: "flex" },
              width: { xs: "calc(100% - 10px)", md: "auto" },
            }}
          >
            <InputBase
              sx={{
                width: { xs: "100%", md: "300px" },
                paddingLeft: "10px",
                color: "#1D1E35",
              }}
              placeholder='Serach "Al-fatihah"'
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Box
              sx={{
                background: "#1D1E35",
                color: "white",
                p: "10px",
                borderRadius: "3px",
                display: "inline-block",
              }}
              onClick={() => setSearch(inputValue)}
            >
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </Box>
          </MyInput>
        </SurahTopBox>
        <SurahList
          sx={{
            padding: { xs: "30px 0", md: "50px 0" },
            gap: { xs: "20px", md: "65px" },
          }}
        >
          {surah
            .filter((item) => {
              if (search) {
                return search.toLowerCase() === ""
                  ? item
                  : item.englishName
                      .toLowerCase()
                      .includes(search.toLowerCase());
              }
              if (all) {
                return item;
              } else {
                return item.number < 17;
              }
            })
            .map((item) => (
              <Surah
                type={item.number === selected ? "active" : "null"}
                key={item.englishName}
                data={item}
                onClick={() => setSelected(item.number)}
              />
            ))}
        </SurahList>
        <MyButton
          style={{ margin: "auto", display: "block" }}
          onClick={() => setAll(!all)}
          type="secondary"
        >
          {all && "Show Less Surah"}
          {!all && "Show All Surah"}
        </MyButton>
      </SurahSection>
      <ListenSection sx={{ padding: { xs: "30px", md: "80px 60px" } }}>
        <SectionTitle
          sx={{
            color: "white",
            width: { xs: "100%", md: "40%" },
            textAlign: "center",
            m: "auto",
            fontSize: { xs: "24px", md: "36px" },
          }}
        >
          Listen Holy Quran by Your Favourite Reciters
        </SectionTitle>
        <PlayerBox
          sx={{
            gap: { xs: 0, md: "30px" },
            background: "#1E314D",
          }}
        >
          <AyahBox sx={{ borderRadius: { xs: "10px 0 0 10px", md: "10px" } }}>
            <AyahList
              sx={{
                paddingRight: { xs: 0, md: "20px" },
                height: { xs: "calc(100% - 130px)", md: "calc(100% - 90px)" },
                "&::-webkit-scrollbar": {
                  display: { xs: "none", md: "block" },
                },
              }}
            >
              {fakeArray(surah[surahSelected - 1]?.numberOfAyahs).map(
                (_, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "2px solid #798DA2",
                        padding: { xs: "10px 0", md: "15px 10px" },
                      }}
                      onClick={() => setSelectedAyah(index+1)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              selectedAyah === index + 1 ? "#00A961" : "white",
                            fontWeight: "500",
                            fontSize: { xs: 12, md: 16 },
                          }}
                        >
                          {surahSelected}:{index + 1}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#B6BEC7",
                            fontSize: { xs: 8, md: 12 },
                          }}
                        >
                          In the Name off Allah - the Most Compassionate, Most
                          Merciful.
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color:
                            selectedAyah === index + 1 ? "#00A961" : "white",
                          fontSize: { xs: 12, md: 16 },
                        }}
                      >
                        بِسْـــــــــــــمِ اللهِ الرَّحْمَنِ
                        الرَّحِـــــــــــــيم
                      </Typography>
                    </Box>
                  );
                }
              )}
            </AyahList>
            <SettingsBox
              sx={{
                padding: { xs: "8px", md: "10px 20px" },
                width: { xs: "120%", md: "calc(100%  - 70px)" },
                zIndex: 33,
              }}
            >
              <IconBtn
                sx={{
                  padding: { xs: "5px", md: "5px 15px" },
                  display: "flex",
                  margin: { xs: "auto", md: 0 },
                  width: { xs: "200px", md: "auto" },
                  justifyContent: "space-evenly",
                }}
              >
                <PlayIcons>
                  <SkipPreviousOutlinedIcon />
                </PlayIcons>
                <PlayIcons onClick={togglePlay}>
                  {isPlaying ? (
                    <PauseOutlinedIcon />
                  ) : (
                    <PlayArrowOutlinedIcon />
                  )}
                </PlayIcons>
                <PlayIcons>
                  <SkipNextOutlinedIcon />
                </PlayIcons>
              </IconBtn>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  margin: { xs: "auto", md: "0" },
                }}
              >
                <IconBtn sx={{ padding: { xs: "5px", md: "5px 15px" } }}>
                  <PlayIcons
                    onClick={() =>
                      downloadAudio(
                        `https://server8.mp3quran.net/afs/${(
                          "00" + surahSelected
                        ).slice(-3)}.mp3`
                      )
                    }
                  >
                    <FileDownloadOutlinedIcon />
                  </PlayIcons>
                </IconBtn>
                <IconBtn
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "70px",
                    gap: "5px",
                    padding: { xs: "5px", md: "5px 15px" },
                  }}
                >
                  <PlayIcons>
                    <VolumeUpOutlinedIcon />
                  </PlayIcons>
                  <Slider
                    size="small"
                    value={sound}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{
                      color: "white",
                    }}
                    onChange={(e) => {
                      setSound(e.target.value)
                      changeVloume(sound)
                    }}
                  />
                </IconBtn>
                <IconBtn
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: { xs: "5px", md: "5px 15px" },
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  <PlayIcons>
                    <SettingsOutlinedIcon />
                  </PlayIcons>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    Settings
                  </Typography>
                </IconBtn>
              </Box>
            </SettingsBox>
          </AyahBox>
          <SurahBox
            sx={{
              borderRadius: { xs: "0 10px 10px 0", md: "10px" },
              padding: { xs: "10px 10px 10px 0", md: "15px" },
              height: "calc(100% - 145px)",
              "&::-webkit-scrollbar": {
                display: { xs: "none", md: "block" },
              },
            }}
          >
            {surah?.map((item) => {
              return (
                <SurahItem
                  data={item}
                  key={item.englishName}
                  type={item.number === surahSelected ? "active" : "null"}
                  onClick={() => {setSurahSelected(item.number); setIsPlaying(false)}}
                />
              );
            })}
          </SurahBox>
        </PlayerBox>
        <MyButton style={{ display: "block", margin: "auto" }}>
          Open Quran Player
        </MyButton>
      </ListenSection>
      <MobileAppSection sx={{ padding: { xs: "40px", md: "80px" } }}>
        <BoxFlex sx={{ width: { xs: "100%", md: "50%" } }}>
          <SectionTitle
            sx={{
              fontSize: { xs: "24px", md: "36px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Recitering & Listening Quran is More Easy Now On Our Mobile App
          </SectionTitle>
          <SectionDescription
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: 12, sm: 16, md: 20 },
            }}
          >
            The Quran is the central religious text of Islam. Muslims believe
            the Qur'an is the book if divine guidance and direction for mankind.{" "}
          </SectionDescription>
          <Box display="flex" gap={5} margin={{ xs: "auto", md: 0 }}>
            <Box
              display="flex"
              sx={{
                background:
                  "linear-gradient(270deg, #00A765 0%, #0EBA5C 103.74%)",
                borderRadius: "10px",
                padding: { xs: "10px", md: "15px 30px" },
                cursor: "pointer",
                gap: { xs: 0, md: "20px" },
                alignItems: "center",
                minWidth: { xs: "auto", md: "154px" },
              }}
            >
              <img
                style={{ width: "40px" }}
                src="https://cdn0.iconfinder.com/data/icons/mii-ui-vol-3/133/playstore-512.png"
                alt=""
              />
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "300",
                    fontSize: { xs: 8, md: 12 },
                  }}
                >
                  Get it from
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: { xs: 10, md: 14 },
                  }}
                >
                  Google Play
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              sx={{
                background: "#F5F5F5",
                padding: { xs: "10px", md: "15px 30px" },
                borderRadius: "10px",
                cursor: "pointer",
                alignItems: "center",
                gap: { xs: 0, md: "20px" },
              }}
            >
              <img
                style={{ width: "50px" }}
                src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/logo-apple.png"
                alt=""
              />
              <Box>
                <Typography
                  sx={{
                    color: "#1D1D37",
                    fontWeight: "300",
                    fontSize: { xs: 8, md: 12 },
                  }}
                >
                  Download on th
                </Typography>
                <Typography
                  sx={{
                    color: "#1D1D37",
                    fontWeight: "500",
                    fontSize: { xs: 10, md: 14 },
                  }}
                >
                  Apple Store
                </Typography>
              </Box>
            </Box>
          </Box>
        </BoxFlex>
        <MobileAppImg
          sx={{ display: { xs: "none", md: "inline" } }}
          src={PhonesImg}
          alt="Phones"
        />
      </MobileAppSection>
      <BlogsSection sx={{ padding: { xs: "30px", md: "60px" } }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={{ xs: 2, md: 5 }}
        >
          <SectionTitle
            sx={{
              width: { xs: "70%", md: "40%" },
              fontSize: { xs: "20px", md: "36px" },
            }}
          >
            Don't Know How to Recitation? Learn Free From Our Blogs
          </SectionTitle>
          <MyButton type="secondary" style={{ fontSize: { xs: 10, md: 16 } }}>
            Read All Blogs
          </MyButton>
        </Box>
        <List
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: { xs: "wrap", md: "nowrap" },
            width: { xs: "100%", md: "auto" },
          }}
        >
          {blogs.map((item) => {
            return <BlogCard data={item} key={item.id} />;
          })}
        </List>
      </BlogsSection>
    </Box>
  );
};

export default MainBox;

import React from "react";
import { Grid, Typography } from "@mui/material";
import { Header } from "@/app/components/Header";
import CostalImg from "../../assets/costalImg.jpg";
import Image from "next/image";

const MainPage = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        bgcolor: "#ffffff",
        backgroundSize: "cover",
      }}
    >
      <Header>Wedding Template</Header>

      <Grid container>
        <Grid item md={12} sx={{ bgcolor: "red" }}>
          <Image alt="" src={CostalImg} style={{ width: "100%" }} />
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "25px" }}>
        <Typography sx={{ color: "black" }}>Our Journey</Typography>
      </Grid>
      <Grid container sx={{ padding: "30px" }}>
        <Grid item>
          <Typography sx={{ color: "black" }}>Photo Gallery</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "100px", backgroundColor: "red" }}>
        <Grid item md={6} sx={{ bgcolor: "green" }}>
          text
        </Grid>
        <Grid item md={6} sx={{ bgcolor: "yellow" }}>
          image
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;

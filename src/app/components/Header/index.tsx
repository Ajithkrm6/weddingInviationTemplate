import React, { ReactNode } from "react";
import { Grid, Typography } from "@mui/material";

export interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        position: "fixed",
        zIndex: "9999",
        backgroundColor: "#ffffff",
        // boxShadow:''
      }}
    >
      <Grid item>
        <Typography sx={{ color: "black" }}>{children}</Typography>
      </Grid>
    </Grid>
  );
};

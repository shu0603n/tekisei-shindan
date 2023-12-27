"use client";

import Image from "next/image";
import {
  Button,
  Grid,
  InputLabel,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { ReactNode, useState } from "react";
import AnswerSelect from "./components/AnswerSelect";
import AnswerBox from "./components/AnswerBox";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            エンジニア適正診断
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <Link
              href={{ pathname: "test"}}
              as="test"
            >
              <Button
                variant="outlined"
                sx={{ height: 55}}
                fullWidth 
              >
                診断する
              </Button>
            </Link>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

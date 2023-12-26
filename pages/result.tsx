"use client";


import {
  Grid,
  InputLabel,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  console.log(router)
  return (
    <>
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            エンジニア適正テスト
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel>テスト結果を送信しました。</InputLabel>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

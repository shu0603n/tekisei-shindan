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
import '../app/globals.css'

export default function Result() {
  const router = useRouter();
  console.log(router.query)
  const answers = router.query.answers as string[];
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            エンジニア適正テスト
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel>テスト結果を送信しました。</InputLabel>
            <InputLabel>{router.query.name}</InputLabel>
            <InputLabel>{router.query.answers}</InputLabel>
            <InputLabel>{answers}</InputLabel>
            {/* {answers.map((item,idx)=>{
              return (<InputLabel key={idx}>{idx+1} : {item}</InputLabel>)
            })} */}
            
          </Grid>
        </Grid>
      </main>
    </>
  );
}

"use client";

import { Button, Grid } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.css";
import MenuBar from "@/components/MenuBar";

export default function Home() {
  return (
    <>
      <MenuBar />
      <main className={styles.main}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <Link href={{ pathname: "test" }} as="test">
              <Button variant="outlined" sx={{ height: 55 }} fullWidth>
                診断する
              </Button>
            </Link>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

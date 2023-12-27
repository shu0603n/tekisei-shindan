"use client";

import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import "../app/globals.css";
import PersistentDrawerLeft from "@/components/PersistentDrawerLeft";

export default function Result() {
  const router = useRouter();

  function createData(title: string, result: string) {
    return { title, result };
  }
  const rows = [
    createData("問題1", router.query.answer1 as string),
    createData("問題2", router.query.answer2 as string),
    createData("問題3", router.query.answer3 as string),
    createData("問題4", router.query.answer4 as string),
    createData("問題5", router.query.answer5 as string),
    createData("問題6", router.query.answer6 as string),
    createData("問題7", router.query.answer7 as string),
    createData("問題8", router.query.answer8 as string),
    createData("問題9", router.query.answer9 as string),
    createData("問題10", router.query.answer10 as string),
  ];
  const point = rows.filter((item) => item.result === "〇").length * 10;
  const rank =
    point === 100 ? "S" : point >= 80 ? "A" : point >= 60 ? "B" : "C";

  return (
    <PersistentDrawerLeft>
      <main className={styles.main}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={10}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" color="inherit" component="div">
                  {router.query.name}様のテスト結果は{rank}ランクです
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ maxWidth: 600, margin: "auto" }}
                    stickyHeader
                    aria-label="sticky table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell key="title" align="left"></TableCell>
                        <TableCell key="result" align="center">
                          結果
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.title}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{row.title}</TableCell>
                          <TableCell align="center">{row.result}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={12}>
                <Link href="test">
                  <Button variant="outlined" sx={{ height: 55 }} fullWidth>
                    戻る
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </PersistentDrawerLeft>
  );
}

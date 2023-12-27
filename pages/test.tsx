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
import AnswerSelect from "../components/AnswerSelect";
import AnswerBox from "../components/AnswerBox";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "./style.module.css";
import '../app/globals.css'

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [answer1, setAnswer1] = useState<string>();
  const [answer2, setAnswer2] = useState<string>();
  const [answer3, setAnswer3] = useState<string>();
  const [answer4, setAnswer4] = useState<string>();
  const [answer5, setAnswer5] = useState<string>();
  const [answer6, setAnswer6] = useState<string>();
  const [answer7, setAnswer7] = useState<string>();
  const [answer8, setAnswer8] = useState<string>();
  const [answer9, setAnswer9] = useState<string>();
  const [answer10, setAnswer10] = useState<string>();

  const handleChangeAnswer1 = (item: string) => {
    setAnswer1(item);
  };
  const handleChangeAnswer2 = (item: string) => {
    setAnswer2(item);
  };
  const handleChangeAnswer3 = (item: string) => {
    setAnswer3(item);
  };
  const handleChangeAnswer4 = (item: string) => {
    setAnswer4(item);
  };
  const handleChangeAnswer5 = (item: string) => {
    setAnswer5(item);
  };
  const handleChangeAnswer6 = (item: string) => {
    setAnswer6(item);
  };
  const handleChangeAnswer7 = (item: string) => {
    setAnswer7(item);
  };
  const handleChangeAnswer8 = (item: string) => {
    setAnswer8(item);
  };
  const handleChangeAnswer9 = (item: string) => {
    setAnswer9(item);
  };
  const handleChangeAnswer10 = (item: string) => {
    setAnswer10(item);
  };

  const handleClick = () => {
    const requestData = {
      // ここにPOSTで送りたいデータを追加
      name: name,
      answers: [
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7,
        answer8,
        answer9,
        answer10,
      ],
      // 他のデータも必要に応じて追加
    };

    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  type AnswerType = {
    number: number;
    values: string[];
    onChange: (item: string) => void;
    answer: string;
    question?: string;
    html?: ReactNode;
  };

  const VALUES = ["A", "B", "C", "D"];
  const data: Array<AnswerType> = [
    {
      number: 1,
      values: VALUES,
      onChange: handleChangeAnswer1,
      answer: "C",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d1.png"
                alt="your_image_alt"
                width={600}
                height={600}
                layout="fixed"
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <Image
                src="/images/d11.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <Image
                src="/images/d12.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <Image
                src="/images/d13.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <Image
                src="/images/d14.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 2,
      values: VALUES,
      onChange: handleChangeAnswer2,
      answer: "B",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto', padding: 'auto'}}>
              <Image
                src="/images/d2.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <Image
                src="/images/d21.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <Image
                src="/images/d22.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <Image
                src="/images/d23.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <Image
                src="/images/d24.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 3,
      values: VALUES,
      onChange: handleChangeAnswer3,
      answer: "B",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d3.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <AnswerBox answer="線の交差が1つずつ増えている" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <AnswerBox answer="線が1つずつ増えている" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <AnswerBox answer="交点があるとき、黒丸が移動している" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <AnswerBox answer="法則性はない" />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 4,
      values: VALUES,
      onChange: handleChangeAnswer4,
      answer: "A",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d4.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <AnswerBox answer="左から順に丸が時計回りに移動している" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <AnswerBox answer="ひし形がランダムに移動している" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <AnswerBox answer="左から順にひし形が時計回りに移動している" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <AnswerBox answer="法則性はない" />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 5,
      values: VALUES,
      onChange: handleChangeAnswer5,
      answer: "D",
      question:
        "以下の図を見て、正しい選択肢を選びなさい。 問と記述されている図形に対して、丸記号の命令処理がなされます。 命令を上から順に実行したとき、正しい図形の順をA~Dの中から選択してください。",
      html: (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d5.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <AnswerBox answer="A" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <AnswerBox answer="B" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <AnswerBox answer="C" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <AnswerBox answer="D" />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 6,
      values: VALUES,
      onChange: handleChangeAnswer6,
      answer: "D",
      question:
        "以下の図を見て、正しい選択肢を選びなさい。 問と記述されている図形に対して、丸記号の命令処理がなされます。 命令を上から順に実行したとき、正しい図形の順をA~Dの中から選択してください。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d6.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <AnswerBox answer="A" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <AnswerBox answer="B" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <AnswerBox answer="C" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <AnswerBox answer="D" />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 7,
      values: VALUES,
      onChange: handleChangeAnswer7,
      answer: "A",
      question:
        "以下の図を見て、?に入る選択肢を選びなさい。 図形は、矢印の先の命令に沿って内容が変換されます。 命令は、変換結果をもとに推測してください。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d7.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <Image
                src="/images/d71.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <Image
                src="/images/d72.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <Image
                src="/images/d73.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <Image
                src="/images/d74.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 8,
      values: VALUES,
      onChange: handleChangeAnswer8,
      answer: "D",
      question:
        "以下の図を見て、?に入る選択肢を選びなさい。 図形は、矢印の先の命令に沿って内容が変換されます。 命令は、変換結果をもとに推測してください。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <Image
                src="/images/d8.png"
                alt="your_image_alt"
                width={600}
                height={600}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <Image
                src="/images/d81.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <Image
                src="/images/d82.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <Image
                src="/images/d83.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <Image
                src="/images/d84.png"
                alt="your_image_alt"
                width={100}
                height={100}
              />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 9,
      values: VALUES,
      onChange: handleChangeAnswer9,
      answer: "A",
      question:
        "以下の文章を読んでください。 プログラミング言語にて、Rubyは動的言語の一種で、Javaは静的言語の一種だ。後者には実行時に事前にコンパイルが必要だが前者は違う。コンパイルは実行時に必要はないのだ。 この文脈において、以下の文中の空欄にあてはまる最も適切なものを1つ選びなさい。 コンパイルが必要とされていないものは（　　　）である。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <AnswerBox answer="Ruby" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <AnswerBox answer="プログラミング言語" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <AnswerBox answer="実行" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <AnswerBox answer="Java" />
            </Box>
          </Grid>
        </Grid>
      ),
    },
    {
      number: 10,
      values: VALUES,
      onChange: handleChangeAnswer10,
      answer: "B",
      question:
        "以下の文章を読んでください。 AIの原理上の制約は、データから学習することです。それ以外に知識を取り入れる方法はありません。したがって、データに潜むあらゆる不正確性がそのまま結果に反映されます。 この文脈において、以下の文中の空欄にあてはまる最も適切なものを1つ選びなさい。 AIが知識を得るには（　　　）が必要だ。",
      html: (
        <Grid container spacing={3}>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>A</InputLabel>
              <AnswerBox answer="不確実性" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>B</InputLabel>
              <AnswerBox answer="データ" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>C</InputLabel>
              <AnswerBox answer="制約" />
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <InputLabel>D</InputLabel>
              <AnswerBox answer="結果" />
            </Box>
          </Grid>
        </Grid>
      ),
    },
  ];

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
          <Grid item xs={10}>
            <Grid container spacing={3}>
              {!start && (
                <>
                  <Grid item xs={12}>
                    <InputLabel
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      本サイトは約5分~10分の簡単な診断です。
                      <br />
                      適性診断の結果は、採用の基準とは関係ありませんのでご安心ください。
                    </InputLabel>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      id="name"
                      label="氏名"
                      variant="outlined"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      error={inputError}
                      helperText={inputError && '入力必須です'}
                      fullWidth 
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        const flg: boolean = name ? true : false;
                        if(!flg){
                          setInputError(true);
                        }
                        setStart(flg);
                      }}
                      sx={{ height: 55}}
                      fullWidth 
                    >
                      開始
                    </Button>
                  </Grid>
                </>
              )}

              {start && (
                <>
                  <Grid item xs={12}>
                    <Grid container spacing={6}>
                      {data.map((item, idx) => (
                        <AnswerSelect
                          key={idx + 1}
                          number={idx + 1}
                          values={item.values}
                          onChange={item.onChange}
                          answer={item.answer}
                          question={item.question}
                          html={item.html}
                        />
                      ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                  <Link
                      href={{ pathname: "result", query: {
                        // ここにPOSTで送りたいデータを追加
                        name: name,
                        answer1: answer1 ?? '-' ,
                        answer2: answer2 ?? '-' ,
                        answer3: answer3 ?? '-' ,
                        answer4: answer4 ?? '-' ,
                        answer5: answer5 ?? '-' ,
                        answer6: answer6 ?? '-' ,
                        answer7: answer7 ?? '-' ,
                        answer8: answer8 ?? '-' ,
                        answer9: answer9 ?? '-' ,
                        answer10: answer10 ?? '-' ,
                        // 他のデータも必要に応じて追加
                      }}}
                      as="result"
                    >
                      <Button
                        variant="outlined"
                        onClick={() => {handleClick}}
                        sx={{ height: 55}}
                        fullWidth 
                      >
                        回答する
                      </Button>
                    </Link>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

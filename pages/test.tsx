"use client";

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
import { useState } from "react";
import AnswerSelect, { AnswerSelectProps } from "../components/AnswerSelect";
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

  const data: Array<AnswerSelectProps> = [
    {
      number: 1,
      onChange: handleChangeAnswer1,
      answer: "C",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      mainImage:'/images/d1.png',
      child:[
        {id:'A',type:'image',choice:'/images/d11.png'},
        {id:'B',type:'image',choice:'/images/d12.png'},
        {id:'C',type:'image',choice:'/images/d13.png'},
        {id:'D',type:'image',choice:'/images/d14.png'},
      ]
    },
    {
      number: 2,
      onChange: handleChangeAnswer2,
      answer: "B",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      mainImage:'/images/d2.png',
      child:[
        {id:'A',type:'image',choice:'/images/d21.png'},
        {id:'B',type:'image',choice:'/images/d22.png'},
        {id:'C',type:'image',choice:'/images/d23.png'},
        {id:'D',type:'image',choice:'/images/d24.png'},
      ]
    },
    {
      number: 3,
      onChange: handleChangeAnswer3,
      answer: "B",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      mainImage:'/images/d3.png',
      child:[
        {id:'A',type:'string',choice:'線の交差が1つずつ増えている'},
        {id:'B',type:'string',choice:'線が1つずつ増えている'},
        {id:'C',type:'string',choice:'交点があるとき、黒丸が移動している'},
        {id:'D',type:'string',choice:'法則性はない'},
      ]
    },
    {
      number: 4,
      onChange: handleChangeAnswer4,
      answer: "A",
      question: "以下の図を見て、正しい選択肢を選びなさい。",
      mainImage:'/images/d4.png',
      child:[
        {id:'A',type:'string',choice:'左から順に丸が時計回りに移動している'},
        {id:'B',type:'string',choice:'ひし形がランダムに移動している'},
        {id:'C',type:'string',choice:'左から順にひし形が時計回りに移動している'},
        {id:'D',type:'string',choice:'法則性はない'},
      ]
    },
    {
      number: 5,
      onChange: handleChangeAnswer5,
      answer: "D",
      question:
        "以下の図を見て、正しい選択肢を選びなさい。 問と記述されている図形に対して、丸記号の命令処理がなされます。 命令を上から順に実行したとき、正しい図形の順をA~Dの中から選択してください。",
      mainImage:'/images/d5.png',
      child:[
        {id:'A',type:'string',choice:'A'},
        {id:'B',type:'string',choice:'B'},
        {id:'C',type:'string',choice:'C'},
        {id:'D',type:'string',choice:'D'},
      ]
    },
    {
      number: 6,
      onChange: handleChangeAnswer6,
      answer: "D",
      question:
        "以下の図を見て、正しい選択肢を選びなさい。 問と記述されている図形に対して、丸記号の命令処理がなされます。 命令を上から順に実行したとき、正しい図形の順をA~Dの中から選択してください。",
      mainImage:'/images/d6.png',
      child:[
        {id:'A',type:'string',choice:'A'},
        {id:'B',type:'string',choice:'B'},
        {id:'C',type:'string',choice:'C'},
        {id:'D',type:'string',choice:'D'},
      ]
    },
    {
      number: 7,
      onChange: handleChangeAnswer7,
      answer: "A",
      question:
        "以下の図を見て、?に入る選択肢を選びなさい。 図形は、矢印の先の命令に沿って内容が変換されます。 命令は、変換結果をもとに推測してください。",
      mainImage:'/images/d7.png',
      child:[
        {id:'A',type:'image',choice:'/images/d71.png'},
        {id:'B',type:'image',choice:'/images/d72.png'},
        {id:'C',type:'image',choice:'/images/d73.png'},
        {id:'D',type:'image',choice:'/images/d74.png'},
      ]
    },
    {
      number: 8,
      onChange: handleChangeAnswer8,
      answer: "D",
      question:
        "以下の図を見て、?に入る選択肢を選びなさい。 図形は、矢印の先の命令に沿って内容が変換されます。 命令は、変換結果をもとに推測してください。",
      mainImage:'/images/d8.png',
      child:[
        {id:'A',type:'image',choice:'/images/d81.png'},
        {id:'B',type:'image',choice:'/images/d82.png'},
        {id:'C',type:'image',choice:'/images/d83.png'},
        {id:'D',type:'image',choice:'/images/d84.png'},
      ]
    },
    {
      number: 9,
      onChange: handleChangeAnswer9,
      answer: "A",
      question:
        "以下の文章を読んでください。 プログラミング言語にて、Rubyは動的言語の一種で、Javaは静的言語の一種だ。後者には実行時に事前にコンパイルが必要だが前者は違う。コンパイルは実行時に必要はないのだ。 この文脈において、以下の文中の空欄にあてはまる最も適切なものを1つ選びなさい。 コンパイルが必要とされていないものは（　　　）である。",
      child:[
        {id:'A',type:'string',choice:'Ruby'},
        {id:'B',type:'string',choice:'プログラミング言語'},
        {id:'C',type:'string',choice:'実行'},
        {id:'D',type:'string',choice:'Java'},
      ]
    },
    {
      number: 10,
      onChange: handleChangeAnswer10,
      answer: "B",
      question:
        "以下の文章を読んでください。 AIの原理上の制約は、データから学習することです。それ以外に知識を取り入れる方法はありません。したがって、データに潜むあらゆる不正確性がそのまま結果に反映されます。 この文脈において、以下の文中の空欄にあてはまる最も適切なものを1つ選びなさい。 AIが知識を得るには（　　　）が必要だ。",
      child:[
        {id:'A',type:'string',choice:'不確実性'},
        {id:'B',type:'string',choice:'データ'},
        {id:'C',type:'string',choice:'制約'},
        {id:'D',type:'string',choice:'結果'},
      ]
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
                          onChange={item.onChange}
                          answer={item.answer}
                          question={item.question}
                          mainImage={item.mainImage}
                          child={item.child}
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

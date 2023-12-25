"use client";

import Image from "next/image";
import AnswerSelectProps from "./components/AnswerSelect";
import styles from "./style.module.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import AnswerSelect from "./components/AnswerSelect";
import AnswerBox from "./components/AnswerBox";

export default function Home() {
  const [answer, setAnswer] = useState<string>();

  const handleChangeAnswer = (event: SelectChangeEvent) => {
    setAnswer(event.target.value);
  };

  type AnswerType = {
    number: number;
    values: string[];
    answer: string;
    question?: string;
    html?: ReactNode;
  };

  const VALUES = ["A", "B", "C", "D"];
  const data: Array<AnswerType> = [
    {
      number: 1,
      values: VALUES,
      answer: "A",
      question: "この問題を解きなさい",
      html: (
        <>
          <Image
            src="/images/d1.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <Image
              src="/images/d11.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>B</InputLabel>
            <Image
              src="/images/d12.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <Image
              src="/images/d13.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>D</InputLabel>
            <Image
              src="/images/d14.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
        </>
      ),
    },
    {
      number: 2,
      values: VALUES,
      answer: "A",
      question: "この問題を解きなさい",
      html: (
        <>
          <Image
            src="/images/d2.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <Image
              src="/images/d21.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>B</InputLabel>
            <Image
              src="/images/d22.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <Image
              src="/images/d23.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>D</InputLabel>
            <Image
              src="/images/d24.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
        </>
      ),
    },
    {
      number: 3,
      values: VALUES,
      answer: "A",
      question: "この問題を解きなさい",
      html: (
        <>
          <Image
            src="/images/d3.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <AnswerBox answer="線の交差が1つずつ増えている" />

            <InputLabel>B</InputLabel>
            <AnswerBox answer="線が1つずつ増えている" />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <AnswerBox answer="法則性はない" />

            <InputLabel>D</InputLabel>
            <AnswerBox answer="線が1つずつ増えている" />
          </div>
        </>
      ),
    },
    {
      number: 4,
      values: VALUES,
      answer: "A",
      question: "この問題を解きなさい",
      html: (
        <>
          <Image
            src="/images/d4.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <AnswerBox answer="左から順に丸が時計回りに移動している" />

            <InputLabel>B</InputLabel>
            <AnswerBox answer="ひし形がランダムに移動している" />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <AnswerBox answer="ひし形がランダムに移動している" />

            <InputLabel>D</InputLabel>
            <AnswerBox answer="法則性はない" />
          </div>
        </>
      ),
    },
    {
      number: 5,
      values: VALUES,
      answer: "A",
      question:
        "以下の図を見て、正しい選択肢を選びなさい。 問と記述されている図形に対して、丸記号の命令処理がなされます。 命令を上から順に実行したとき、正しい図形の順をA~Dの中から選択してください。",
      html: (
        <>
          <Image
            src="/images/d5.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <AnswerBox answer="A" />

            <InputLabel>B</InputLabel>
            <AnswerBox answer="B" />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <AnswerBox answer="C" />

            <InputLabel>D</InputLabel>
            <AnswerBox answer="D" />
          </div>
        </>
      ),
    },
    {
      number: 6,
      values: VALUES,
      answer: "A",
      question:
        "以下の図を見て、正しい選択肢を選びなさい。 問と記述されている図形に対して、丸記号の命令処理がなされます。 命令を上から順に実行したとき、正しい図形の順をA~Dの中から選択してください。",
      html: (
        <>
          <Image
            src="/images/d6.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <AnswerBox answer="A" />

            <InputLabel>B</InputLabel>
            <AnswerBox answer="B" />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <AnswerBox answer="C" />

            <InputLabel>D</InputLabel>
            <AnswerBox answer="D" />
          </div>
        </>
      ),
    },
    {
      number: 7,
      values: VALUES,
      answer: "A",
      question:
        "以下の図を見て、?に入る選択肢を選びなさい。 図形は、矢印の先の命令に沿って内容が変換されます。 命令は、変換結果をもとに推測してください。",
      html: (
        <>
          <Image
            src="/images/d7.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <Image
              src="/images/d71.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>B</InputLabel>
            <Image
              src="/images/d72.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <Image
              src="/images/d73.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>D</InputLabel>
            <Image
              src="/images/d74.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
        </>
      ),
    },
    {
      number: 8,
      values: VALUES,
      answer: "A",
      question:
        "以下の図を見て、?に入る選択肢を選びなさい。 図形は、矢印の先の命令に沿って内容が変換されます。 命令は、変換結果をもとに推測してください。",
      html: (
        <>
          <Image
            src="/images/d8.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <Image
              src="/images/d81.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>B</InputLabel>
            <Image
              src="/images/d82.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <Image
              src="/images/d83.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>D</InputLabel>
            <Image
              src="/images/d84.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
        </>
      ),
    },
    {
      number: 9,
      values: VALUES,
      answer: "A",
      question:
        "以下の文章を読んでください。 プログラミング言語にて、Rubyは動的言語の一種で、Javaは静的言語の一種だ。後者には実行時に事前にコンパイルが必要だが前者は違う。コンパイルは実行時に必要はないのだ。 この文脈において、以下の文中の空欄にあてはまる最も適切なものを1つ選びなさい。 コンパイルが必要とされていないものは（　　　）である。",
      html: (
        <>
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <AnswerBox answer="Ruby" />

            <InputLabel>B</InputLabel>
            <AnswerBox answer="プログラミング言語" />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <AnswerBox answer="実行" />

            <InputLabel>D</InputLabel>
            <AnswerBox answer="Java" />
          </div>
        </>
      ),
    },
    {
      number: 10,
      values: VALUES,
      answer: "A",
      question:
        "以下の文章を読んでください。 AIの原理上の制約は、データから学習することです。それ以外に知識を取り入れる方法はありません。したがって、データに潜むあらゆる不正確性がそのまま結果に反映されます。 この文脈において、以下の文中の空欄にあてはまる最も適切なものを1つ選びなさい。 AIが知識を得るには（　　　）が必要だ。",
      html: (
        <>
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <AnswerBox answer="不確実性" />

            <InputLabel>B</InputLabel>
            <AnswerBox answer="データ" />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <AnswerBox answer="制約" />

            <InputLabel>D</InputLabel>
            <AnswerBox answer="結果" />
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.home}>
        {data.map((item, idx) => (
          <AnswerSelect
            key={idx + 1}
            number={idx + 1}
            values={item.values}
            answer={item.answer}
            question={item.question}
            html={item.html}
          />
        ))}

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Button
            onClick={() => {
              const requestData = {
                // ここにPOSTで送りたいデータを追加
                name: "test",
                answer: answer,
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
              alert({
                "1": answer === "C",
                // '2':answer2 === 'B' ,
                // '3':answer3 === 'B' ,
                // '4':answer4 === 'A' ,
                // '5':answer5 === 'D' ,
                // '6':answer6 === 'D' ,
                // '7':answer7 === 'A' ,
                // '8':answer8 === 'C' ,
                // '9':answer9 === 'A' ,
                // '10':answer10 === 'B'
              });
            }}
          >
            回答する
          </Button>
        </FormControl>
      </div>
    </main>
  );
}

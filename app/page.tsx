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
            src="/images/q1.png"
            alt="your_image_alt"
            width={500}
            height={500}
          />
          <div className={styles.child}>
            <InputLabel>A</InputLabel>
            <Image
              src="/images/q1-a.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>B</InputLabel>
            <Image
              src="/images/q1-b.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.child}>
            <InputLabel>C</InputLabel>
            <Image
              src="/images/q1-c.png"
              alt="your_image_alt"
              width={100}
              height={100}
            />
            <InputLabel>C</InputLabel>
            <Image
              src="/images/q1-d.png"
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
      html: <div>test2</div>,
    },
    {
      number: 3,
      values: VALUES,
      answer: "A",
      question: "この問題を解きなさい",
      html: <>aaaaa</>,
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

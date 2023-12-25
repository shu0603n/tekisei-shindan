'use client'

import Image from 'next/image'
import styles from './style.module.css'
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react';

export default function Home() {
  const [answer1,setAnswer1] = useState<string>();
  const [answer2,setAnswer2] = useState<string>();
  const [answer3,setAnswer3] = useState<string>();
  const [answer4,setAnswer4] = useState<string>();
  const [answer5,setAnswer5] = useState<string>();
  const [answer6,setAnswer6] = useState<string>();
  const [answer7,setAnswer7] = useState<string>();
  const [answer8,setAnswer8] = useState<string>();
  const [answer9,setAnswer9] = useState<string>();
  const [answer10,setAnswer10] = useState<string>();

  const handleChangeAnswer1 = (event: SelectChangeEvent) => {
    setAnswer1(event.target.value);
  };
  const handleChangeAnswer2 = (event: SelectChangeEvent) => {
    setAnswer2(event.target.value);
  };
  const handleChangeAnswer3 = (event: SelectChangeEvent) => {
    setAnswer3(event.target.value);
  };
  const handleChangeAnswer4 = (event: SelectChangeEvent) => {
    setAnswer4(event.target.value);
  };
  const handleChangeAnswer5 = (event: SelectChangeEvent) => {
    setAnswer5(event.target.value);
  };
  const handleChangeAnswer6 = (event: SelectChangeEvent) => {
    setAnswer6(event.target.value);
  };
  const handleChangeAnswer7 = (event: SelectChangeEvent) => {
    setAnswer7(event.target.value);
  };
  const handleChangeAnswer8 = (event: SelectChangeEvent) => {
    setAnswer8(event.target.value);
  };
  const handleChangeAnswer9 = (event: SelectChangeEvent) => {
    setAnswer9(event.target.value);
  };
  const handleChangeAnswer10 = (event: SelectChangeEvent) => {
    setAnswer10(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.page}>
        <div className={styles.page}>
          <InputLabel>ああああああああああああああああああああああああああああああああああ</InputLabel>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>問題①</InputLabel>
            <Select
              value={answer1}
              onChange={handleChangeAnswer1}
              label="question1"
            >
              <MenuItem value="">
                <em>未選択</em>
              </MenuItem>
              <MenuItem value={'A'}>A</MenuItem>
              <MenuItem value={'B'}>B</MenuItem>
              <MenuItem value={'C'}>C</MenuItem>
              <MenuItem value={'D'}>D</MenuItem>
            </Select>
          </FormControl>
        </div>


            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Button
                onClick={() => {
                  alert(answer1);
                }}
              >
                回答する
              </Button>
            </FormControl>
      </div>
    </main>
  )
}

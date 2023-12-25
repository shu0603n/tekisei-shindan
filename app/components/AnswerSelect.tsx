// AnswerSelect.tsx

import React, { ReactNode } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./style.module.css";

interface AnswerSelectProps {
  number: number;
  values: string[];
  answer: string;
  question?: string;
  html?: ReactNode;
}

const AnswerSelect: React.FC<AnswerSelectProps> = ({
  number,
  values,
  answer,
  question,
  html,
}) => {
  return (
    <div className={styles.page}>
      <InputLabel>問題{number}</InputLabel>
      {question && <InputLabel>{question}</InputLabel>}
      {html && <div>{html}</div>}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>回答</InputLabel>
        <Select value={answer} label="answer">
          <MenuItem value="">
            <em>未選択</em>
          </MenuItem>
          {values?.map((item, key) => (
            <MenuItem key={key} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default AnswerSelect;

// AnswerSelect.tsx

import React, { ReactNode, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./style.module.css";
import { renderToStaticMarkup } from "react-dom/server";

interface AnswerSelectProps {
  number: number;
  values: string[];
  onChange: (item: string) => void;
  answer: string;
  question?: ReactNode;
  html?: ReactNode;
}

const AnswerSelect: React.FC<AnswerSelectProps> = ({
  number,
  values,
  onChange,
  answer,
  question,
  html,
}) => {
  const [value, setValue] = useState<string>();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    alert(event.target.value === answer ? "〇" : "×");
    onChange(event.target.value === answer ? "〇" : "×");
  };
  return (
    <div className={styles.page}>
      <InputLabel>問題{number}</InputLabel>
      {question && (
        <div className={styles.question}>
          <InputLabel>{question}</InputLabel>
        </div>
      )}
      {html && <div className={styles.node}>{html}</div>}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>回答{number}</InputLabel>
        <Select
          value={value}
          onChange={(event) => handleChange(event)}
          label="answer"
        >
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

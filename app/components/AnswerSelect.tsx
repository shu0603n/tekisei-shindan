// AnswerSelect.tsx

import React, { ReactNode, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import styles from "./style.module.css";

interface AnswerSelectProps {
  number: number;
  values: string[];
  onChange: (item: string) => void;
  answer: string;
  question?: string;
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
    onChange(event.target.value === answer ? "〇" : "×");
  };
  return (
    <Grid item xs={12}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <InputLabel>問題{number}</InputLabel>
        </Grid>

        <Grid item xs={12}>
          {question && (
              <InputLabel
              style={{
                paddingLeft: 5,
                paddingRight: 5,
                whiteSpace: 'normal',
                wordWrap: 'break-word'
              }}
            >{question}</InputLabel>
          )}
        </Grid>
        <Grid item xs={12}>
          {html && <div className={styles.node}>{html}</div>}
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AnswerSelect;

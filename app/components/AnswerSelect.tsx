// AnswerSelect.tsx

import React, { ReactNode, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
  Card,
  Typography,
} from "@mui/material";

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
      <Card color="primary">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={11}>
            <Typography variant="h3" component="h2">
              問題{number}
            </Typography>
          </Grid>

          <Grid item xs={11}>
            {question && (
              <InputLabel
                style={{
                  whiteSpace: "normal",
                }}
              >
                {question}
              </InputLabel>
            )}
          </Grid>
          <Grid item xs={11}>
            {html && html}
          </Grid>
          <Grid item xs={11}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel>回答{number}</InputLabel>
              <Select
                value={value}
                onChange={(event) => handleChange(event)}
                label="answer"
                variant="filled"
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
      </Card>
    </Grid>
  );
};

export default AnswerSelect;

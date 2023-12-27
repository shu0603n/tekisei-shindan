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
  Box,
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
      <Card color="primary" sx={{ padding: 5}}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={11}>
            <Typography variant="h5" component="h2">
              問題{number}
            </Typography>
          </Grid>

          <Grid item xs={11}>
            {question && (
              <Box component="section" sx={{ p: 2, border: '1px dashed grey' , maxWidth: 600, margin: 'auto'}}>
                <InputLabel
                  style={{
                    whiteSpace: "normal",
                  }}
                >
                  {question}
                </InputLabel>
              </Box>
            )}
          </Grid>
          <Grid item xs={11}>
            {html && html}
          </Grid>
          <Grid item xs={11}>
            <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
              <FormControl variant="standard" fullWidth>
                <InputLabel >回答{number}</InputLabel>
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
                    <MenuItem key={`item-${key}`} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default AnswerSelect;

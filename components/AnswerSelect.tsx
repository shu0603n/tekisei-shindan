// AnswerSelect.tsx

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import QuestionBox, { childType } from "./QuestionBox";

export type AnswerSelectProps = {
  number: number;
  onChange: (item: string) => void;
  answer: string;
  question?: string;
  mainImage?: string;
  child: Array<childType>;
};

type Props = AnswerSelectProps & {
  inputError: boolean;
};

const AnswerSelect: React.FC<Props> = ({
  number,
  onChange,
  answer,
  question,
  mainImage,
  child,
  inputError,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange2 = (item: string) => {
    setValue(item);
    onChange(item === answer ? "〇" : "×");
  };
  return (
    <Grid item xs={12}>
      <Card color="primary" sx={{ padding: 5 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={11}>
            <Typography variant="h5" component="h2">
              問題{number}
            </Typography>
          </Grid>
          <Grid item xs={11}>
            {question && (
              <Box
                component="section"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  maxWidth: 600,
                  margin: "auto",
                }}
              >
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
          {child?.length !== 0 && (
            <Grid item xs={11}>
              <QuestionBox
                mainImage={mainImage}
                child={child}
                onClick={handleChange2}
              />
            </Grid>
          )}
          <Grid item xs={11}>
            <Box component="section" sx={{ maxWidth: 600, margin: "auto" }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel>回答{number}</InputLabel>
                <Select
                  value={value}
                  onChange={(event) => handleChange2(event.target.value)}
                  label="answer"
                  variant="filled"
                  error={inputError && value?.length === 0}
                >
                  {child?.map((item, key) => (
                    <MenuItem key={`item-${key}`} value={item.id}>
                      {item.id}
                    </MenuItem>
                  ))}
                </Select>
                {inputError && value?.length === 0 && (
                  <FormHelperText error>未選択です</FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default AnswerSelect;

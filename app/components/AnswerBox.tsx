// AnswerSelect.tsx

import React, { ReactNode, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styles from "./style.module.css";
import { renderToStaticMarkup } from "react-dom/server";

interface AnswerBoxProps {
  answer: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ answer }) => {
  return <div className={styles.answerBox}>{answer}</div>;
};

export default AnswerBox;

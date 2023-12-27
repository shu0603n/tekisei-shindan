// AnswerSelect.tsx

import React from "react";
import styles from "./style.module.css";

interface AnswerBoxProps {
  answer: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ answer }) => {
  return <div className={styles.answerBox}>{answer}</div>;
};

export default AnswerBox;

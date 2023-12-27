// QuestionBox.tsx

import Image from "next/image";
import {
  Grid,
  InputLabel,
  Box,
  Button
} from "@mui/material";
import AnswerBox from "../components/AnswerBox";
import styles from "./style.module.css";
import '../app/globals.css'

type childType = {
  id: string;
  type: 'image' | 'string';
  choice: string;
}

interface QuestionBoxProps {
  mainImage?: string;
  child:Array<childType>
  onClick: (item: string) => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  mainImage,
  child,
  onClick
}) => {
  const handleClick = (item: string) => {
    onClick(item);
  };
  return (
    <Grid container spacing={3}>
      {mainImage && 
        <Grid item xs={12}>
          <Box component="section" sx={{ maxWidth: 600, margin: 'auto'}}>
            <Image
              src={mainImage}
              alt="your_image_alt"
              width={600}
              height={600}
              layout="fixed"
            />
          </Box>
        </Grid>
      }
      
      {child?.map((item)=>{
        if(item.type === 'image'){
          return (
            <Grid item xs={6} lg={3} key={item.id}>
              <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <InputLabel>{item.id}</InputLabel>
                <Button variant="contained" onClick={()=>{handleClick(item.id)}}>
                  <Image
                    src={item.choice}
                    alt={item.id}
                    width={100}
                    height={100}
                  />
                </Button>
              </Box>
            </Grid>
            )
        } else {
          return (
            <Grid item xs={6} lg={3} key={item.id}>
              <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <InputLabel>{item.id}</InputLabel>
                <Button variant="outlined" sx={{fontWeight:700, width:'100%', height :100, display: 'flex',flexDirection: 'column',alignItems: 'center'}} onClick={()=>{handleClick(item.id)}}>
                  {item.choice}
                </Button>
              </Box>
            </Grid>
            )
        }
      })}
    </Grid>
);
};

export default QuestionBox;

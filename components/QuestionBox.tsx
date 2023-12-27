// QuestionBox.tsx

import Image from "next/image";
import {
  Grid,
  InputLabel,
  Box,
} from "@mui/material";
import AnswerBox from "../components/AnswerBox";
import '../app/globals.css'

type childType = {
  id: string;
  type: 'image' | 'string';
  choice: string;
}

interface QuestionBoxProps {
  mainImage?: string;
  child:Array<childType>
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  mainImage,
  child,
}) => {
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
      
      {child.map((item)=>{
        if(item.type === 'image'){
          return (
            <Grid item xs={6} lg={3} key={item.id}>
              <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <InputLabel>{item.id}</InputLabel>
                <Image
                  src={item.choice}
                  alt={item.id}
                  width={100}
                  height={100}
                />
              </Box>
            </Grid>
            )
        } else {
          return (
            <Grid item xs={6} lg={3} key={item.id}>
              <Box component="section" sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <InputLabel>{item.id}</InputLabel>
                <AnswerBox answer={item.choice} />
              </Box>
            </Grid>
            )
        }
      })}
    </Grid>
);
};

export default QuestionBox;

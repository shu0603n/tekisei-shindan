import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  open: boolean;
  setOpen: (flg: boolean) => void;
  handleClick: () => void;
};
const AlertDialog: React.FC<Props> = ({ open, setOpen, handleClick }) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"未回答の問題があります。"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          未回答の状態で採点へ進みますか？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          戻る
        </Button>
        <Button
          onClick={() => {
            handleClick();
            setOpen(false);
          }}
          autoFocus
        >
          採点に進む
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;

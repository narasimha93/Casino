import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    marginTop: "1em",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [slotValue, setSlotValue] = React.useState("000");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const generateNumber = () => {
    let numb = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    setSlotValue(numb);
    let remainingAmount = props.balance - 1;
    let balance = handleBalanceUpdate(numb, remainingAmount);
    debugger;
    props.updateSlotInTable(numb, balance, new Date());
  };

  const handleBalanceUpdate = (slotNumber, balance) => {
    let slot = slotNumber.toString();
    if (slot[0] === slot[1] && slot[1] === slot[2]) balance = balance + 5;
    else if (slot[0] === slot[1] || slot[1] === slot[2])
      balance = balance + 0.5;

    return balance;
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Game of Luck!!</h2>
      <TextField
        id="slot"
        label="Outlined"
        variant="outlined"
        value={slotValue}
      />
      <br />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={generateNumber}>
        Hit It
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="contained" color="secondary" onClick={handleClose}>
        Exit
      </Button>
      <SimpleModal />
    </div>
  );

  return (
    <div className={classes.modal}>
      <Button
        variant="contained"
        id="main"
        color="secondary"
        onClick={handleOpen}
      >
        Play
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

import Tables from "./Table/Tables";
import { makeStyles } from "@material-ui/core/styles";
import SimpleModal from "./Modal/SimpleModal";

const useStyles = makeStyles({
  table: {
    width: "70%",
    display: "inline-flex",
    marginTop: "5em",
    boxShadow: "9px 8px 5px 2px #e8e4e4a3",
  },
});
const Content = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.table}>
        <Tables rows={props.rows} />
      </div>
      <center>
        <SimpleModal
          balance={props.balance}
          updateSlotInTable={props.updateSlotInTable}
        />
      </center>
    </>
  );
};

export default Content;

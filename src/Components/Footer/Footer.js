import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    background: "silver",
    height: "42px",
    position: "fixed",
    width: "100%",
    marginTop: "6%",
    color: "white",
  },
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <span>&#169;</span> Paradise Casino
    </div>
  );
};

export default Footer;

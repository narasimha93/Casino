import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Avatars from "./Avatars";

const useStyles = makeStyles({
  root: {
    float: "right",
  },
  title: {
    color: "red",
    fontSize: "3em",
    fontFamily: "Cormorant Unicase, serif",
    textShadow: "1px 4px 4px #aa923b",
  },
  row: {
    width: "100%",
    display: "inline-flex",
  },
  col4: {
    width: "30%",
  },
  col8: {
    width: "70%",
  },
});

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.row}>
      <div className={classes.col4}>
        <span className={classes.title}>Paradise Casino</span>
      </div>
      <div className={classes.col8}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          {props.isUserLoggedIn ? (
            <>
              <Avatars />
              <BottomNavigationAction
                label="Logout"
                icon={<ExitToAppIcon />}
                onClick={props.handleLogout}
              />
            </>
          ) : (
            <>
              <BottomNavigationAction
                label="Guest"
                icon={<SupervisorAccountIcon />}
              />
              <BottomNavigationAction
                label="Login"
                icon={<PersonIcon />}
                onClick={props.handleLogIn}
              />
            </>
          )}
          <BottomNavigationAction
            label={`${props.balance}`}
            icon={<AttachMoneyIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}

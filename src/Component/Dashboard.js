import React, { useState, useEffect } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const history = useHistory();
  const classes = useStyles();
  const [username, SetUserName] = useState(localStorage.getItem("user"));
  const [firstScreen, setFirstScreen] = useState("");
  const [secondScreen, setSecondScreen] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    console.log(loggedInUser);
    if(loggedInUser){
        history.push('/dashboard')
    }
    else{
        history.push('/')
    }
  }, []);

  const logoutButton = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {username}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setFirstScreen(event.target.value)}
            />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => setSecondScreen(event.target.value)}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button color="inherit" onClick={logoutButton}>
              Logout
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <Button color="inherit" onClick={logoutButton}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <iframe
            width="100%"
            height="100%"
            src={firstScreen}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen="false"
            className="video__iframe"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <iframe
            width="100%"
            height="100%"
            src={secondScreen}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen="false"
            className="video__iframe"
          />
        </Grid>
      </Grid>
    </div>
  );
}

const Loader = () => {
  return (
    <div className="loader">
      <h2>Loading video...</h2>
    </div>
  );
};

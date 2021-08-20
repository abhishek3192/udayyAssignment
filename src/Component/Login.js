import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import kid from "../Assests/image.jpg";
import Logo from "../Assests/Logo.png";
import "../Style/style.css";
import { useHistory } from "react-router-dom";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    minWidth: 300,
  },
}));

function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, []);

  const handleSubmit = () => {
    if ((userName && password) === "") {
      setErrorText("This field is required");
    } else {
      localStorage.setItem("user", userName);
      history.push("/dashboard");
    }
  };

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img className={classes.bannerImage} src={kid} alt="banner" />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div className={classes.mainDiv}>
            <Grid container justifyContent="center">
              <img src={Logo} width={150} height={150} alt="logo" />
            </Grid>
            <TextField
              required
              type="text"
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => setUsername(event.target.value)}
              helperText={errorText}
            />
            <TextField
              required
              type="password"
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => setPassword(event.target.value)}
              helperText={errorText}
            />
            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Log In
            </Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;

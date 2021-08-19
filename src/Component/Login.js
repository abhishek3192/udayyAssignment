import React, { useState, useEffect } from "react";
import kid from "../Assests/image.jpg";
import Logo from "../Assests/Logo.png";
import "../Style/style.css";
import { useHistory } from "react-router-dom";
import {AccountCircle, LockRounded} from '@material-ui/icons'

import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";

function Login() {
    let history = useHistory()
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = () => {
    localStorage.setItem("user", userName);
    history.push('/dashboard')
  };

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={kid}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="banner"
          />
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justifyContent="center">
              <img src={Logo} width={150} height={150} alt="logo" />
            </Grid>
            <TextField
              type="text"
              label="Username"
              margin="normal"
              InputProps={{ startAdornment: <InputAdornment><AccountCircle /></InputAdornment>}}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              margin="normal"
              InputProps={{ startAdornment: <InputAdornment><LockRounded /></InputAdornment>}}
              onChange={(event) => setPassword(event.target.value)}
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
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const Login = () => {
  const { isAuth, token, handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dat = {
      username: data.get("email"),
      password: data.get("password"),
    };
    handleAuth(dat.username, dat.password);
  };
  console.log(isAuth, "isAuth");

  const handleNavigate = (location) => {
    navigate(location);
  };
  return (
    <>
      {!token ? (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="forgetPassword" variant="body2">
                    Forgot password?
                  </Link> */}
                    <button
                      onClick={() => handleNavigate("/forgetPassword")}
                      style={{
                        textDecoration: "none",
                        background: "transparent",
                        border: "transparent",
                        color: "blue",
                      }}
                    >
                      Forgot password
                    </button>
                  </Grid>
                  <Grid item>
                    {/* <Link href="signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}
                    <button
                      onClick={() => handleNavigate("/signup")}
                      style={{
                        textDecoration: "none",
                        background: "transparent",
                        border: "transparent",
                        color: "blue",
                      }}
                    >
                      Don't have an account? Sign Up
                    </button>
                  </Grid>
                </Grid>
              </Box> 
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      ) : (
        <Navigate to={"/products"} />
      )}
    </>
  );
};
// export { Login };
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://anurag-singh-portfolio.netlify.app/">
        Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

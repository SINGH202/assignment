import axios from "axios";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


import "./signup.css"

const init = {
  username: "",
  email: "",
  password: "",
};
export const SignUp = () => {
  const [state, setState] = useState(init);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username == "" || state.email == "" || state.password == "") {
      alert("Please provide all details");
    } else {
      registerUser(state);
    }
  };

  const registerUser = ({ username, email, password }) => {
    console.log(username, email, password);
    axios({
      method: "post",
      url: "https://ecommerce-backend-singh202.herokuapp.com/api/auth/register",
      data: {
        username,
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data);
        navigate("/login")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signUpDiv">
      
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
      <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
      <form onSubmit={handleSubmit}>
      <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              
              autoFocus
              onChange={(e) => {
                setState({ ...state, username: e.target.value });
              }}
            />
        
        <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
        
        <br/>
        <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Passowrd"
              name="password"
              autoComplete="password"
              autoFocus
              onChange={(e) => {
                setState({ ...state, password: e.target.value });
              }}
            />
        
        <br/>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>      </form>
      
    </div>
  );
};

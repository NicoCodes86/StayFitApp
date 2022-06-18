import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import stayFitDataService from "../services/stayFitDataService";
import ResponsiveAppBar from './Navbar'

const Login = () => { 
  const initialLoginState = {
    userName: "",
    password: "",
    isLoading: false,
    success: false
  };

  const [loginInfo, setLoginInfo] = useState([initialLoginState]);
  // const [show, setShow] = useState(false);
  // const [userName, SetUserName] = useState();
  // const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  // const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();
  
  const handleInputChange = event => {
      event.preventDefault();
      const {name, value} = event.target;
      setLoginInfo({...loginInfo, [name]: value})
  }

        const submitHandler = async () => {
          setLoading(true);
          if(!loginInfo.userName || !loginInfo.password){
            console.log('Enter both username and password')
            toast({
              title: "Please fill out all the fields",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            setLoading(false);
            return;
          }
          try {
            var data = {
              userName: loginInfo.userName,
              password: loginInfo.password
            }

            stayFitDataService.loginUser(data)
            .then(response => {
              toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false);
              // navigate.push("/"); // redirect to UserDashboard
              setLoginInfo(initialLoginState);
          })
          } catch (error) {
            console.log('error is' + error);
            toast({
              title: "Error Occurred!",
              description: error.response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            setLoading(false);
          }
        }
  
        return (
          <>
          <ResponsiveAppBar/>
            <VStack spacing="10px">
              <FormControl id="userName" isRequired sx={{mt: "30px"}}>
                <FormLabel>Username</FormLabel>
                <input
                  type="text"
                  id="userName"
                  required
                  value={loginInfo.userName}
                  onChange={handleInputChange}
                  name="userName"
                  placeholder="Enter Username"
                  // onChange={(e) => SetUserName(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <input
                    type="text"
                    id="password"
                    required
                    value={loginInfo.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Enter Password"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <button onClick={submitHandler} className="btn btn-success">Submit</button>

              <br></br>
              <h1>New user? Register</h1>
              <Link to="/registerUser" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Register user!</Button>
              </Link>
              <Link to="/trainerlogin" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Trainer Login</Button>
              </Link>
            </VStack>
          </>                   
        );
      }

export default Login;





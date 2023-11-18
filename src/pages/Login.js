import React, { useContext, useState , useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import axios from 'axios';
import authContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const authCtx = useContext(authContext);
  const navigate = useNavigate();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate('/');
    }
  }, [authCtx.isLoggedIn, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    axios.post('http://localhost:3000/login',{
      
        email: email,
        password: password
      
    })
    .then(response=>{
      alert(response.data.message);
      authCtx.login(response.data.token);
      navigate('/');
    })
    .catch(err=>{
      console.log(err);
    })
   
  };

  return (
    <Container className='login-container'>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="login-form">
            <h2>Login please</h2>
            <Form onSubmit={handleSubmit} >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className='butt'>
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

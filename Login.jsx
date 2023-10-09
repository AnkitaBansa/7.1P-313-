import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import TopMenu from './TopMenu';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication functions
import Toast from './Toast';
import WelcomePage from './WelcomePage'; // Import the WelcomePage component

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      authenticated: false,
      failed: false,
    };
  }

  loginUser = async () => {
    try {
      const auth = getAuth(); // Initialize Firebase Authentication

      // Sign in with email and password
      await signInWithEmailAndPassword(auth, this.state.email, this.state.password);

      // Authentication successful
      this.setState({
        authenticated: true,
        failed: false,
      });
    } catch (error) {
      console.error('Error during login:', error);

      // If authentication failed, update the state
      this.setState({
        password: '',
        failed: true,
      });
    }
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // Check if the user is authenticated, and render the WelcomePage if authenticated
    if (this.state.authenticated) {
      return <WelcomePage email={this.state.email} />;
    }

    return (
      <div>
        <TopMenu />
        <Grid textAlign="center" style={{ height: '800px' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large">
              <Segment textAlign="left">
                <a style={{ textAlign: 'right' }} href="/signup">
                  Sign Up
                </a>
                <br />
                Your email
                <Form.Input fluid onChange={this.updateInput} value={this.state.email} name="email" />
                Your password
                <Form.Input fluid type="password" onChange={this.updateInput} value={this.state.password} name="password" />
                <Button primary fluid onClick={this.loginUser}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
        {this.state.failed && <Toast />}
      </div>
    );
  }
}

export default Login;

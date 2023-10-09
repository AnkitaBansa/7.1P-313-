import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class Toast extends Component {
  state = { visible: true };

  hideMessage = () => {
    this.setState({ visible: false });
  };

  render() {
    // Show the message only if the 'visible' state is true
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.hideMessage} // Allow the user to dismiss the message
          header='Login Failed'
          content='No Credentials Found, Please Try Again'
        />
      );
    } else {
      return null; // Render nothing when not visible
    }
  }
}

export default Toast;

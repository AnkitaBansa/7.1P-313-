import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react'; // Import Button from Semantic UI React

function TopMenu() {
  return (
    <Menu secondary>
      <Menu.Item>Dev @ Deakin</Menu.Item>
      <Input style={{ width: '60%', margin: "auto" }} iconPosition='left' icon='search' placeholder='Search...' />
      <Menu.Menu position="right">
        {/* Use a Button for the "Post" action */}
        <Button primary>
          Post
        </Button>
        <Menu.Item name='login'>
          <a href='/login'>Login</a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default TopMenu;

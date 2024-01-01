import { AppBar, Box, Toolbar, styled } from "@mui/material";

// Component
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
height: 100vh;
background: #DCDCDC;
`

const Header =styled(AppBar)`
height: 220px;
background: #00bfa5;
box-shadow: none;
`

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;

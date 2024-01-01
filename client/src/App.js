import { GoogleOAuthProvider } from "@react-oauth/google";

// component
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "827740500937-p4pgmfrbgs4le2e5vru8kfl5pbjpibmr.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

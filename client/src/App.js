import { GoogleOAuthProvider } from '@react-oauth/google';

// component
import Messenger from "./components/Messenger";

function App() {
  const clientId = process.env.Client_ID
  return (
    <GoogleOAuthProvider clientId={clientId}>
   <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;

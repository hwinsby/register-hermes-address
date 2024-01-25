import { RegisterHermesAddress } from "./Components/RegisterHermesAddress";
import { WebLNProvider } from "./utils/webLn";
import { NostrProvider } from "./utils/nostr";

import "./App.css";

function App() {
  return (
    <>
      <NostrProvider>
        <WebLNProvider>
          <RegisterHermesAddress />
        </WebLNProvider>
      </NostrProvider>
    </>
  );
}

export default App;

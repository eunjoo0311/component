import "normalize.css";
import ChatNavigation from "./components/Nav/ChatNavigation";
import Navigation from "./components/Nav/Navigation";
import SendMessage from "./components/Chat/SendMessage";
import ReceiveMessage from "./components/Chat/ReceiveMessage";
// import SearchList from "./components/SearchList";
// import Error from "./components/Error";

export default function App() {
  return (
    <>
      <ReceiveMessage />
      <SendMessage />

      <Navigation />
    </>
  );
}

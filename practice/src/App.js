import "normalize.css";
import ChatNavigation from "./components/Nav/ChatNavigation";
import ChatRoom from "./components/Chat/ChatRoom";
// import Error from "./components/Error";

export default function App() {
  return (
    <>
      <ChatRoom />
      <ChatNavigation />
    </>
  );
}

import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ConversationRedux from "redux/conversation.redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ConversationRedux.testApi());
  }, []);

  return (
    <div className="App">
      <Button>fsdfsd</Button>
    </div>
  );
}

export default App;

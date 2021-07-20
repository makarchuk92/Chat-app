import './App.css';
import {ChatEngine} from  'react-chat-engine'

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='ba27125f-1056-440d-92d6-8b9b72a30681'
      userName='masteryUser'
      userSecret='328456'
    />
  );
}

export default App;

import './App.css';
import {ChatEngine} from  'react-chat-engine'
import ChatFeed  from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height = '100vh'
      projectID = 'ba27125f-1056-440d-92d6-8b9b72a30681'
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    />
  );
}

export default App;

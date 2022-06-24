import './App.css';
import LoadBackground from './Components/FetchApi';
import './Components/Post.js';
import PostList from './Components/PostList';

function App() {
  return (
    <div className="App">
      <LoadBackground/>
      <PostList/>
    </div>
  );
}




export default App;

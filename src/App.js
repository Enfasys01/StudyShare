import './App.css';
import './Components/Post.js';
import PostList from './Components/PostList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PostList/>
    </div>
  );
}




export default App;

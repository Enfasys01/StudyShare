import './App.css';
import CrearPostBtn from './Components/CrearPostBtn';
import './Components/Post.js';
import PostList from './Components/PostList';

function App() {
  return (
    <div className="App">
      <PostList/>
      <CrearPostBtn/>
    </div>
  );
}




export default App;

import logo from './logo.svg';
import './App.css';
import './Components/Post.js';
import PostList from './Components/PostList';
let datos = ['1','2'];

function App() {
  return (
    <div className="App">
      <PostList data={datos}/>
    </div>
  );
}


export default App;

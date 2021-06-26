import TopBar  from './components/topbar/TopBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllPosts from './pages/posts/AllPosts';
import Home from './pages/home/Home';
import Write from './pages/write/Write';

function App() {
  return (
<Router>
  <TopBar />
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blogs">
          <AllPosts />
        </Route>
        <Route exact path="/blog/new">
          <Write />
        </Route>
    </Switch>
</Router>
  );
}

export default App;

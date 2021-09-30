import { Switch, Route } from "react-router-dom";
import BookList from "./components/BookLists";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import { NavBar } from "./shared/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/update-book/:id" component={UpdateBook} />
        <Route path="/create-book" component={CreateBook} />
        <Route path="/" component={BookList} />
      </Switch>
    </>
  );
}

export default App;

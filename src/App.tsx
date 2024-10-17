import { FC } from "react";
import AddTodoItem from "./containers/AddTodoItem.js";
import VisibleTodoList from "./containers/VisibleTodoList.js";

const App: FC = () => {
  return(
    <main>
      <VisibleTodoList />
      <AddTodoItem />
    </main>
  );
}

export default App;

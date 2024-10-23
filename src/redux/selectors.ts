import { createSelector } from "reselect";
import { IState } from "./reducer";

const getAllTodoIdList = (state: IState) => {
  console.log("getAllTodoList");
  return state.todos.allTodoIds;
};

const getAllTodoGroupedById = (state: IState) => {
  console.log("getAllTodoGroupedById");
  return state.todos.todoById;
};

const getAllTodos = createSelector(
  [getAllTodoIdList, getAllTodoGroupedById],
  (todoIdList, todoById) => {
    console.log("getAllTodos selector function");

    return todoIdList.map((eachTodoId) => todoById[eachTodoId]);
  }
);

export { getAllTodos };

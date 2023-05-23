import { useSelector, useDispatch } from "react-redux";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoContainer() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const completeTodo = (id) => {
    dispatch({ type: "COMPLETE_TODO", id });
  };
  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };
  return (
    <div className="ToDoContainer">
      <ToDoForm />
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          id={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default ToDoContainer;

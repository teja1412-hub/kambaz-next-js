import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
}
export default function ArrayStateVariable() {
  const { todos } = useSelector((state: { todosReducer: TodosState }) => state.todosReducer);
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <ListGroup>
        {todos.map((todo: Todo) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
</div>);}
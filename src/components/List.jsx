import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleStatus = (id) => {
    dispatch(setStatusTodo(id));
  };

  return (
    <ListContainer>
      <h2>Working.. 🔥</h2>
      <ListItems>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <ListItemContainer key={todo.id}>
                <ListItemLink to={`/detail/${todo.id}`}>Detail</ListItemLink>
                <h2>{todo.title}</h2>
                {todo.body}
                <ListItemFooter>
                  <ListButton
                    borderColor={"red"}
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </ListButton>
                  <ListButton
                    borderColor={"green"}
                    onClick={() => handleStatus(todo.id)}
                  >
                    Done
                  </ListButton>
                </ListItemFooter>
              </ListItemContainer>
            );
          } else {
            return null;
          }
        })}
      </ListItems>
      <h2>Done..! 🎉</h2>
      <ListItems>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <ListItemContainer key={todo.id}>
                <ListItemLink to={`/detail/${todo.id}`}>Detail</ListItemLink>
                <h2>{todo.title}</h2>
                {todo.body}
                <ListItemFooter>
                  <ListButton
                    borderColor={"red"}
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </ListButton>
                  <ListButton
                    borderColor={"orange"}
                    onClick={() => handleStatus(todo.id)}
                  >
                    Cancel
                  </ListButton>
                </ListItemFooter>
              </ListItemContainer>
            );
          } else {
            return null;
          }
        })}
      </ListItems>
    </ListContainer>
  );
};


const ListContainer = styled.div`
  padding: 0 20px;
`;

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
`;

const ListItemContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const ListItemLink = styled(Link)`
  text-decoration: none;
  font-weight:bold;
  background: teal;
  color:white;
  padding:.3em 1em;
  border-radius:.3em;
`;

const ListItemFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 12px;
  gap: 12px;
`;

const ListButton = styled.button`
  border: 3px solid ${({ borderColor }) => borderColor};
  height: 40px;
  font-weight:700;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

export default List;

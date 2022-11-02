import { useState } from "react";
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const Form = () => {
  const dispatch = useDispatch() 
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const handleChange = ({ target: { name, value } }) => {
    return setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(todo.title.length)
    if(todo.title.length <= 0 || todo.body.length <=0 ) return
    const id = String(Date.now())
    // console.log(id)
    dispatch(addTodo({...todo,id}))
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete={false}>
      <FormInputGroup>
        <FormLabel>Title</FormLabel>
        <FormInput
          type={"text"}
          name={"title"}
          value={todo.title}
          onChange={handleChange}
          required
        />
        <FormLabel>Body</FormLabel>
        <FormInput
          type={"text"}
          name={"body"}
          value={todo.body}
          onChange={handleChange}
          required
        />
      </FormInputGroup>
      <FormAddButton>Add To Do</FormAddButton>
    </FormContainer>
  );
};

// styled-component
const FormContainer = styled.form`
background-color: #eee;
border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const FormInputGroup = styled.div`
display: flex;
align-items: center;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  `;

  const FormInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
  `;

const FormAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #4999ff;
  width: 140px;
  color: #fff;
  font-weight: 700;
  `;

  export default Form;
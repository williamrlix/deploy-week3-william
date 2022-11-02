import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { getTodoById } from "../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoById(id));
  });

  return (
    <Layout>
      <Header />
      <Container>
        <DetailContainer borderColor={todo.isDone?'green':'orange'}>
          <DetailHeader>
            <h3>ID : {todo.id}</h3>
            <DetailButton
              borderColor="#ddd"
              onClick={() => {
                  navigate("/");
              }}
            >
              Back
            </DetailButton>
          </DetailHeader>
          <DetailTitle>{todo.title}</DetailTitle>
          <DetailBody>{todo.body}</DetailBody>
        </DetailContainer>
      </Container>
    </Layout>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const DetailContainer = styled.div`
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 12px;
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const DetailHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const DetailButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const DetailTitle = styled.h1`
  padding: 0 24px;
`;

const DetailBody = styled.p`
  padding: 0 24px;
`;

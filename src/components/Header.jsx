import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div>My Todo List</div>
      <div>React</div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 5px;
`;

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Search>
          <Input placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>

        <StyledLink to="/signin">
          <LoginButton>
            <AccountCircleOutlinedIcon />SIGN IN
          </LoginButton>
        </StyledLink>

      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  width: 100%;
`;



const LoginButton = styled.button`
  padding: 5px 8px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
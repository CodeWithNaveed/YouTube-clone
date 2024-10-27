import React from 'react';
import styled from 'styled-components';

const Comment = () => {
    return (
        <Container>
            <Avatar src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="avatar" />
            <Details>
                <Name>Ali khan</Name>
                <Date>2 days ago</Date>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita sequi ducimus adipisci voluptatem unde aut assumenda, dolor facere blanditiis provident. Ipsum delectus odit tempora enim nulla, temporibus vero eaque porro.
                    
                </Text>
            </Details>
        </Container>
    );
};

export default Comment;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.span`
  font-size: 14px;
`;

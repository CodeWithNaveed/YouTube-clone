import React from 'react';
import channelImage from '../../public/images/channel-image.png';
import styled from 'styled-components';
import Comment from './Comment';

const Comments = () => {

    return (
        <Container>
            <NewComment>
                <Avatar src={channelImage} alt="Channel Avatar" />
                <Input placeholder="Add a comment..." />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    );
};

export default Comments;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding: 5px;
  width: 100%;
  font-size: 14px;
`;


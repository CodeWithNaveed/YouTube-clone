import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Card = ({ type }) => {
    return (
        <StyledLink to="/video/test">
            <Container type={type}>
                <Image src="../../public/images/thumbnail-image.png" alt="thumbnail" type={type} />
                <Details type={type}>
                    <ChannelImage src="../../public/images/channel-image.png" alt="channel" type={type} />
                    <Texts>
                        <Title>Test video</Title>
                        <ChannelName>youtube-clone</ChannelName>
                        <Info>660,908 views • 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </StyledLink>
    );
};

export default Card;

const Container = styled.div`
    width: ${(props)=> (props.type === "sm" ? "370px" : "360px")};
    margin-bottom: ${(props)=> props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: flex;
    flex-direction: ${(props)=> props.type === "sm" ? "row" : "column"};
    gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: ${(props)=> props.type === "sm" ? "120px" : "202px"};
    background-color: #999;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${props=> props.type !== "sm"  && "16px"};
    gap: 12px;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props)=> props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h6`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    margin: 9px 0;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

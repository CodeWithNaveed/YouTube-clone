import React from 'react';
import Comments from '../components/Comments';
import styled from 'styled-components';
import {
  ThumbUpOutlined as LikeIcon,
  ThumbDownOffAltOutlined as DislikeIcon,
  AddTaskOutlined as SaveIcon,
  ReplyOutlined as ShareIcon,
} from '@mui/icons-material';
import channelImage from '../../public/images/channel-image.png';
import Card from '../components/Card';

function Video({ videoData }) {
  const {
    videoUrl,
    title,
    views,
    date,
    likes,
    channelName,
    subscribers,
    description,
  } = videoData;

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="460"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>{title}</Title>
        <Details>
          <Info>{views} views • {date}</Info>
          <Buttons>
            <Button>
              <LikeIcon aria-label="Like" /> {likes}
            </Button>
            <Button>
              <DislikeIcon aria-label="Dislike" /> Dislike
            </Button>
            <Button>
              <ShareIcon aria-label="Share" /> Share
            </Button>
            <Button>
              <SaveIcon aria-label="Save" /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channelImage} alt="Channel logo" />
            <ChannelDetails>
              <ChannelName>{channelName}</ChannelName>
              <ChannelCounter>{subscribers} subscribers</ChannelCounter>
              <Description>{description}</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        {Array.from({ length: 20 }, (_, i) => (
          <Card key={i} type="sm" />
        ))}
      </Recommendation>
    </Container>
  );
}

export default Video;

// Styled Components
const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background: none;
  border: none;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
  opacity: 0.7;
`;

const Recommendation = styled.div`
  flex: 2;
  padding-left: 16px;
  border-left: 1px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

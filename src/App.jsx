import './App.css';
import { useState } from 'react';
import '@fontsource/roboto';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const videoData = {
    title: "Test video",
    views: "660,908",
    date: "1 day ago",
    videoUrl: "https://www.youtube.com/embed/7GrEo1Jl3gg?si=Z2mzVN4LGTFsZ1oO",
    likes: 123,
    channelName: "youtube-clone",
    subscribers: "200k",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/video/:id" element={<Video videoData={videoData} />} />
                <Route path="*" element={<Home darkMode={darkMode} />} />
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 96px;
  color: ${({ theme }) => theme.text};
`;

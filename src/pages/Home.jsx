import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

function Home({darkMode}) {
  return (
    <Container darkMode={darkMode}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

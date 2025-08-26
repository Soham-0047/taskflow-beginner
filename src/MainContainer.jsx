import React from 'react'
import styled from 'styled-components';
import TaskForm from './TaskForm';
import RandomQut from './RandomQut';

const MainContainer = () => {
  return (
    <Container>
      <RandomQut/>
      <TaskForm/>
    </Container>
  )
}

export default MainContainer;

const Container = styled.div`
height:57vh;
max-height: auto;
`
import styled from 'styled-components'
import './App.css'
import FooterComp from './Classbased'
import Functional from './Functional'
import MainContainer from './MainContainer'

function App() {

  return (
    <>
      {/* Functional Component */}
      <Container>
       <Functional/>
       <MainContainer/>
       <FooterComp/>
      </Container>
      
    </>
  )
}

export default App

const Container =  styled.div`
  position: relative;
  width:100%;
  height: 100%;
`
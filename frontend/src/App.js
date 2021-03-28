import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

/*You can have only one element inside a function, here its a header*/
const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
      <HomeScreen />
      </Container>
      
    </main>
    <Footer />
      
    </>
  );
}

export default App;

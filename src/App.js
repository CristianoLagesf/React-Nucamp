import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NuCampLogo from './app/assets/logo.png'
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NuCampLogo} alt="logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm ready for workshop
    </div>
  );
}


export default App;

import './App.css';
import { Header, Intro, About, Projects, Skills, Contact, Footer } from './components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Intro/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </Container>
      
      <Footer/>
    </div>
  );
}

export default App;

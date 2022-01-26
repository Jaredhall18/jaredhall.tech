import './App.css';
import { Header, Intro, About, Projects, Skills, Contact, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

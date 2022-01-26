import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      {/* <section className="Intro">
        <h1>Jared Hall</h1>
        <h3>Full Stack Engineer</h3>
        <button>Contact Me</button>
      </section> */}
      <section className="About">
       <div className='Image-container'>
         <p> IMAGE CONTAINER</p>
        <div className='About-text'>
           <h2>About Me</h2>
        <h3>Lots of text about how I am a passionate individual 
          who enjoys coding and ca make them lots of money.</h3>
        </div>
       </div>
      </section>
      <section className='Projects'>
        <div className='Project-1'>
          <div className='P-1-container'>
            <p>Image or Gif showcasing project</p>
          </div>
          <div className='Project-text'>
            <h2>Project Name</h2>
            <h3> Tech Stack</h3>
            <li>
              Key contributions
            </li>
            <li>
              Key contributions
            </li>
          </div>
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <p>List Skills here</p>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>email</p>
      </section>
      <footer>
        <p>Icons for github email and linkedIn</p>
        <p> Copyright </p>
      </footer>
    </div>
  );
}

export default App;

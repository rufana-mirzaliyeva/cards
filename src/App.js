import 'bulma/css/bulma.css'
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import CSharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (

    <div className="App">

      <section className = "hero is-link">
        <div className = "hero-body">
          <p className = "title">
            My Course
          </p>
        </div>
      </section>

      <div className='container '>

        <section className="section">
          <div className='columns'>
            <div className='column'>
              <Course
                image={Angular}
                title='Angular'
                description='Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Eum, tempora. Lorem ipsum dolor sit am
      consectetur adipisicing elit. Eum, tempora.'
              />
            </div>
            <div className='column'>
              <Course
                image={Bootstrap}
                title='Bootstarp 5'
                description='Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Eum, tempora. Lorem ipsum dolor sit am
      consectetur adipisicing elit. Eum, tempora.'
              />
            </div>
            <div className='column'><Course
              image={KompleWeb}
              title='Komple Web'
              description='Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Eum, tempora. Lorem ipsum dolor sit am
      consectetur adipisicing elit. Eum, tempora.'
            />
            </div>
            <div className='column'>
              <Course
                image={CSharp}
                title='C Sharp'
                description='Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Eum, tempora. Lorem ipsum dolor sit am
      consectetur adipisicing elit. Eum, tempora.'
              />
            </div>
          </div>

        </section>
      </div>
    </div>

  );
}

export default App;

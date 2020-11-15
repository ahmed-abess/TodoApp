import logo from './logo.svg';
import './App.css';


function App() {
    let videoSource ='https://www.youtube.com/watch?v=GFkorypkXsQ'
  return (
    <div className="App">
      <div className="container">
        <h1 className="title red">Your name here</h1>

          <br/> >

              <img src="/img1.jpg" /> >

                  <br />
          <img src="/img2.jpg" />
          <br/>



        <video width="320" height="240" controls>

            <source src="/video1.mp4" type="video/mp4" />

        </video>
      </div>
    </div>
  );
}

export default App;

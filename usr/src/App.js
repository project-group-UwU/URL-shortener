
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);


function App() {
  return (
    
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p style={{ fontSize: '40px', marginLeft: '40px', marginBottom: '0', fontStyle: 'oblique' }}>URL</p>
        <p style={{ fontSize: '40px', fontStyle: 'oblique' }}>Shortner</p>
        

        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>

        <div className="text-right"> {/* Right-align the button */}
                  <button className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6 c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25,C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                    </svg>
                  </button>
                </div>
        
      </nav>
      


      




      <div className="container center">
        <div className="row center">
          <div className="col">
            <h3 className="text-left form-group d-flex justify-content-left">Make your URL Simple!</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <form action="shorten.php" method="post">
              <div className="form-group d-flex justify-content-around">
                <input className="form-control border border-primary rounded-pill border-5" type="url" name="url" id="url" placeholder="Optional Prefix" />
              </div>
            </form>
          </div>

          <div className="col-7">
            <form action="shorten.php" method="post">
              <div className="form-group d-flex justify-content-start">
                <input type="url" className="form-control border border-primary rounded-pill border-5" name="url" id="url" placeholder="Paste URL: www.mywebsite.com/" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-4">
          <div className="divider"></div>
        </div>

        <div className="row mt-4">
          <div className="divider1"></div>
        </div>

        <div className="row mt-4">
          <div className="divider2"></div>
        </div>

        <div className="row mt-4">
          <div className="divider3"></div>
        </div>

        <div className="row mt-4">
          <div className="divider4"></div>
        </div>

        

        <div className="row">
          <div className="col">
            <h3 className="text-left">New URL is:</h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <form action="shorten.php" method="post">
              <div className="form-group d-flex justify-content-center">
                <input type="url" className="btn btn-outline-warning form-control rounded-pill border-5" name="url" id="url" placeholder="yesyeil.ca/XYz" style={{ backgroundColor: 'white', color: 'orange' }} />
                <button type="submit" className="btn btn-outline-warning text-white" style={{ backgroundColor: 'rgb(231, 149, 27)' }}>Copy</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row d-flex align-items-center">
          <div className="col-5" style={{ marginTop: '40px' }}>
            <h3 className="text-center">Get your QR code</h3>
            <h3 className="text-center"> for the website:</h3>
            
            {/* Additional button styles can be applied with CSS */}
            <button className="btn btn-primary btn-outline-warning btn-block text-white rounded-pill" style={{ backgroundColor: 'rgb(231, 149, 27)' }}>
              Get QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
